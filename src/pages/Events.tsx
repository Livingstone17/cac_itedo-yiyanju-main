import { useEffect, useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Calendar, MapPin, Link as LinkIcon, Clock, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Footer from '@/components/Footer';
import { addSchemaToHead } from '@/lib/schema';
import { eventsQueryOptions, type ChurchEventRaw } from '@/queries/homeContent';

interface ParsedEvent extends ChurchEventRaw {
    parsedDate: Date;
    parsedEndDate: Date;
    isRecurring: boolean;
    recurrenceInfo?: string;
}

interface GroupedEvents {
    [month: string]: ParsedEvent[];
}

interface ParsedDateResult {
    isRecurring: boolean;
    startDate?: Date;
    endDate?: Date;
    occurrences?: Array<[Date, Date]>;
    recurrenceInfo?: string;
}

export default function EventsPage() {
    const { data, isPending: loading, isError } = useQuery(eventsQueryOptions);

    const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const processEvents = (eventsList: ChurchEventRaw[]): ParsedEvent[] => {
        const processed: ParsedEvent[] = [];
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Reset to start of today

        const next13Months = new Date(today);
        next13Months.setMonth(next13Months.getMonth() + 13);
        next13Months.setHours(23, 59, 59, 999); // End of day 13 months from now

        eventsList.forEach(event => {
            const parsed = parseEventDate(event.date, event.endDate);

            if (parsed.isRecurring && parsed.occurrences && parsed.occurrences.length > 0) {
                // Generate occurrences for the next 12+ months
                parsed.occurrences.forEach(([startDate, endDate]) => {
                    const startTime = new Date(startDate).getTime();
                    const todayTime = today.getTime();
                    const nextTime = next13Months.getTime();

                    if (startTime >= todayTime && startTime <= nextTime) {
                        processed.push({
                            ...event,
                            parsedDate: startDate,
                            parsedEndDate: endDate,
                            isRecurring: true,
                            recurrenceInfo: parsed.recurrenceInfo,
                        });
                    }
                });
            } else if (!parsed.isRecurring && parsed.startDate && parsed.endDate) {
                // Single date event
                const startTime = parsed.startDate.getTime();
                const todayTime = today.getTime();
                const nextTime = next13Months.getTime();

                if (startTime >= todayTime && startTime <= nextTime) {
                    processed.push({
                        ...event,
                        parsedDate: parsed.startDate,
                        parsedEndDate: parsed.endDate,
                        isRecurring: false,
                    });
                }
            }
        });

        return processed.sort((a, b) => a.parsedDate.getTime() - b.parsedDate.getTime());
    };

    const parseEventDate = (dateStr: string, endDateStr: string): ParsedDateResult => {
        // Check if it's a recurring pattern
        if (dateStr.toLowerCase().includes('every')) {
            return parseRecurringPattern(dateStr, endDateStr);
        }

        // Otherwise, it's an ISO date
        try {
            const startDate = new Date(dateStr);
            const endDate = new Date(endDateStr);
            if (!isNaN(startDate.getTime()) && !isNaN(endDate.getTime())) {
                return { startDate, endDate, isRecurring: false };
            }
        } catch {
            // Fall through to return error result
        }

        return { isRecurring: false };
    };

    const parseRecurringPattern = (dateStr: string, endDateStr: string): ParsedDateResult => {
        const occurrences: Array<[Date, Date]> = [];
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const next12Months = new Date(today);
        next12Months.setMonth(next12Months.getMonth() + 13);

        const recurrenceInfo = dateStr;
        let month = today.getMonth();
        let year = today.getFullYear();

        // Check if endDate is also a recurring pattern or a fixed date relative to startDate
        const isEndDateRecurring = endDateStr.toLowerCase().includes('every');

        // Generate occurrences for the next 13 months
        for (let i = 0; i < 13; i++) {
            const startDate = calculateOccurrenceDate(dateStr, year, month);

            if (startDate) {
                let endDate: Date | null = null;

                if (isEndDateRecurring) {
                    // End date is also a recurring pattern
                    endDate = calculateOccurrenceDate(endDateStr, year, month);
                    // If end date is before start date (e.g., last wednesday to last friday),
                    // move it to next month if needed
                    if (endDate && endDate < startDate) {
                        const nextMonth = month + 1 > 11 ? 0 : month + 1;
                        const nextYear = month + 1 > 11 ? year + 1 : year;
                        endDate = calculateOccurrenceDate(endDateStr, nextYear, nextMonth);
                    }
                } else {
                    // End date is a fixed ISO date
                    try {
                        endDate = new Date(endDateStr);
                        if (isNaN(endDate.getTime())) {
                            endDate = null;
                        }
                    } catch {
                        endDate = null;
                    }
                }

                // Use start date as end date if we couldn't parse end date
                if (!endDate) {
                    endDate = new Date(startDate);
                }

                if (startDate >= today && startDate <= next12Months) {
                    occurrences.push([startDate, endDate]);
                }
            }

            month++;
            if (month > 11) {
                month = 0;
                year++;
            }
        }

        return { isRecurring: true, occurrences: occurrences.length > 0 ? occurrences : [], recurrenceInfo };
    };

    const calculateOccurrenceDate = (pattern: string, year: number, month: number): Date | null => {
        const pattern_lower = pattern.toLowerCase();

        // Parse time from pattern
        const timeMatch = pattern.match(/(\d{1,2}):(\d{2})\s*(am|pm)?/i);
        let hours = 9, minutes = 0;
        if (timeMatch) {
            hours = parseInt(timeMatch[1]);
            minutes = parseInt(timeMatch[2]);
            const period = timeMatch[3]?.toUpperCase();
            if (period === 'PM' && hours < 12) {
                hours += 12;
            } else if (period === 'AM' && hours === 12) {
                hours = 0; // 12 AM is midnight (00:00)
            }
        }

        let resultDate: Date | null = null;

        // Parse ordinal + day patterns (1st Monday, 2nd Saturday, 3rd Monday, etc.)
        const ordinalDayMatch = pattern_lower.match(/(\d+)(?:st|nd|rd|th)\s+(monday|tuesday|wednesday|thursday|friday|saturday|sunday)/i);
        if (ordinalDayMatch) {
            const ordinal = parseInt(ordinalDayMatch[1]);
            const dayName = ordinalDayMatch[2].toLowerCase();
            const dayOfWeek = getDayOfWeek(dayName);
            if (dayOfWeek >= 0 && ordinal > 0 && ordinal <= 5) {
                resultDate = getNthDayOfMonth(year, month, dayOfWeek, ordinal);
            }
        } else if (pattern_lower.includes('last monday')) {
            resultDate = getLastDayOfWeekInMonth(year, month, 1); // Monday is 1
        } else if (pattern_lower.includes('last tuesday')) {
            resultDate = getLastDayOfWeekInMonth(year, month, 2); // Tuesday is 2
        } else if (pattern_lower.includes('last wednesday')) {
            resultDate = getLastDayOfWeekInMonth(year, month, 3); // Wednesday is 3
        } else if (pattern_lower.includes('last thursday')) {
            resultDate = getLastDayOfWeekInMonth(year, month, 4); // Thursday is 4
        } else if (pattern_lower.includes('last friday')) {
            resultDate = getLastDayOfWeekInMonth(year, month, 5); // Friday is 5
        } else if (pattern_lower.includes('last saturday')) {
            resultDate = getLastDayOfWeekInMonth(year, month, 6); // Saturday is 6
        } else if (pattern_lower.includes('last sunday')) {
            resultDate = getLastDayOfWeekInMonth(year, month, 0); // Sunday is 0
        } else {
            // Parse specific dates like "15th of the month"
            const dateMatch = pattern.match(/(\d{1,2})(?:st|nd|rd|th)?(?:\s+of\s+the\s+month)?/);
            if (dateMatch) {
                const day = parseInt(dateMatch[1]);
                const lastDay = new Date(year, month + 1, 0).getDate();
                if (day > 0 && day <= lastDay) {
                    resultDate = new Date(year, month, day);
                }
            }
        }

        // Set the time on the result date
        if (resultDate) {
            resultDate.setHours(hours, minutes, 0, 0);
            return resultDate;
        }

        return null;
    };

    const getDayOfWeek = (dayName: string): number => {
        const days: Record<string, number> = {
            'sunday': 0,
            'monday': 1,
            'tuesday': 2,
            'wednesday': 3,
            'thursday': 4,
            'friday': 5,
            'saturday': 6,
        };
        return days[dayName.toLowerCase()] ?? -1;
    };

    const getNthDayOfMonth = (year: number, month: number, dayOfWeek: number, n: number): Date | null => {
        let count = 0;
        const date = new Date(year, month, 1, 12, 0, 0, 0);

        while (date.getMonth() === month) {
            if (date.getDay() === dayOfWeek) {
                count++;
                if (count === n) {
                    return new Date(date); // Return a copy
                }
            }
            date.setDate(date.getDate() + 1);
        }

        return null;
    };

    const getLastDayOfWeekInMonth = (year: number, month: number, dayOfWeek: number): Date | null => {
        // Start from the last day of the month
        const lastDate = new Date(year, month + 1, 0, 12, 0, 0, 0);
        const date = new Date(lastDate);

        // Go backwards through the month to find the last occurrence of the weekday
        while (date.getMonth() === month) {
            if (date.getDay() === dayOfWeek) {
                return new Date(date); // Return a copy
            }
            date.setDate(date.getDate() - 1);
        }

        return null;
    };

    const events = useMemo(() => {
        const raw = data?.events ?? [];
        return processEvents(raw);
    }, [data]); // eslint-disable-line react-hooks/exhaustive-deps -- processEvents is pure; only `data` should trigger recompute

    const availableMonths = useMemo(
        () =>
            Array.from(
                new Set(events.map((e) => e.parsedDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long' }))),
            ).sort(),
        [events],
    );

    const availableCategories = useMemo(
        () =>
            Array.from(new Set(events.filter((e) => e.category).map((e) => e.category!))).sort(),
        [events],
    );

    useEffect(() => {
        if (events.length === 0) return;
        const eventsSchema = {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "CAC Itedo Yiyanju Events",
            "url": "https://cacitedoyiyanju.org/events",
            "description": "Upcoming events and activities at CAC Itedo Yiyanju",
            "event": events.slice(0, 10).map((event) => ({
                "@type": "Event",
                "name": event.title,
                "description": event.description,
                "startDate": event.parsedDate.toISOString(),
                "endDate": event.parsedEndDate.toISOString(),
                "eventStatus": "https://schema.org/EventScheduled",
                "eventAttendanceMode": event.isOnline
                    ? "https://schema.org/OnlineEventAttendanceMode"
                    : "https://schema.org/OfflineEventAttendanceMode",
                "location": event.isOnline
                    ? {
                        "@type": "VirtualLocation",
                        "url": "https://cacitedoyiyanju.org/listen/video",
                    }
                    : {
                        "@type": "Place",
                        "name": event.location,
                    },
                "organizer": {
                    "@type": "Organization",
                    "name": "CAC Itedo Yiyanju",
                },
            })),
        };
        addSchemaToHead(eventsSchema);
    }, [events]);

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        });
    };

    const getFilteredAndGroupedEvents = () => {
        let filtered = events;

        // Filter by selected month
        if (selectedMonth) {
            filtered = filtered.filter(event => {
                const eventMonth = event.parsedDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
                return eventMonth === selectedMonth;
            });
        }

        // Filter by selected category
        if (selectedCategory) {
            filtered = filtered.filter(event => event.category?.toLowerCase() === selectedCategory.toLowerCase());
        }

        // Group by month
        const grouped: GroupedEvents = {};
        filtered.forEach(event => {
            const monthKey = event.parsedDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
            });
            if (!grouped[monthKey]) {
                grouped[monthKey] = [];
            }
            grouped[monthKey].push(event);
        });

        return grouped;
    };

    const getCategoryColor = (category?: string) => {
        const colors: Record<string, string> = {
            worship: 'bg-blue-100 text-blue-800',
            prayer: 'bg-purple-100 text-purple-800',
            conference: 'bg-green-100 text-green-800',
            celebration: 'bg-yellow-100 text-yellow-800',
            concert: 'bg-pink-100 text-pink-800',
        };
        return colors[category?.toLowerCase() || ''] || 'bg-gray-100 text-gray-800';
    };

    if (loading) {
        return (
            <div className="min-h-screen pt-16 flex items-center justify-center">
                <div className="text-center">
                    <p className="text-lg text-church-text-light">Loading upcoming events...</p>
                </div>
            </div>
        );
    }

    if (isError) {
        return (
            <>
                <section className="py-20 pt-32">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-church-text mb-4">Upcoming <span className="text-church-gold">Events</span></h2>
                        <p className="text-church-text-light">We couldn&apos;t load events right now. Please try again shortly.</p>
                    </div>
                </section>
                <Footer />
            </>
        );
    }

    if (events.length === 0) {
        return (
            <>
                <section className="py-20 pt-32">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-church-text mb-4">Upcoming <span className="text-church-gold">Events</span></h2>
                        <p className="text-church-text-light">No upcoming events scheduled at this time.</p>
                    </div>
                </section>
                <Footer />
            </>
        );
    }

    return (
        <>
            <section className="py-20 pt-32 bg-background" id="events">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-church-text mb-4">
                            Upcoming <span className="text-church-gold">Events</span>
                        </h1>
                        <p className="text-lg text-church-text-light">
                            Join us for these special services and events. We look forward to seeing you!
                        </p>
                    </div>

                    {/* Filters Section */}
                    <div className="mb-12 p-6 bg-card rounded-lg border border-border">
                        <h3 className="text-lg font-semibold text-church-text mb-6">Filter Events</h3>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Month Filter */}
                            <div>
                                <label htmlFor="month-filter" className="text-sm font-medium text-church-text mb-3 block">
                                    By Month
                                </label>
                                <select
                                    id="month-filter"
                                    value={selectedMonth || ''}
                                    onChange={(e) => setSelectedMonth(e.target.value || null)}
                                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-church-text focus:outline-none focus:ring-2 focus:ring-church-gold transition-all"
                                >
                                    <option value="">All Months</option>
                                    {availableMonths.map(month => (
                                        <option key={month} value={month}>
                                            {month}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Category Filter */}
                            <div>
                                <label htmlFor="category-filter" className="text-sm font-medium text-church-text mb-3 block">
                                    By Category
                                </label>
                                <select
                                    id="category-filter"
                                    value={selectedCategory || ''}
                                    onChange={(e) => setSelectedCategory(e.target.value || null)}
                                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-church-text focus:outline-none focus:ring-2 focus:ring-church-gold transition-all capitalize"
                                >
                                    <option value="">All Categories</option>
                                    {availableCategories.map(category => (
                                        <option key={category} value={category}>
                                            {category.charAt(0).toUpperCase() + category.slice(1)}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Events grouped by month */}
                    {(() => {
                        const filteredAndGrouped = getFilteredAndGroupedEvents();
                        const hasEvents = Object.keys(filteredAndGrouped).length > 0;

                        if (!hasEvents) {
                            return (
                                <div className="text-center py-12">
                                    <p className="text-lg text-church-text-light">No events match your filters.</p>
                                </div>
                            );
                        }

                        return (
                            <div className="space-y-12">
                                {Object.entries(filteredAndGrouped).map(([monthKey, monthEvents]) => (
                                    <div key={monthKey} className="mb-12">
                                        <h2 className="text-2xl font-bold text-church-text mb-8 pb-4 border-b-2 border-church-gold/30">
                                            {monthKey}
                                        </h2>

                                        <div className="space-y-6">
                                            {monthEvents.map((event) => (
                                                <div key={event.id} className="group border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 bg-card">
                                                    <div className="grid md:grid-cols-3 gap-6 p-6">
                                                        {/* Event Image */}
                                                        {event.banner && (
                                                            <div className="md:col-span-1">
                                                                <div className="relative w-full h-48 md:h-full rounded-lg overflow-hidden bg-gradient-to-br from-church-blue to-church-blue/80">
                                                                    <img
                                                                        src={event.banner}
                                                                        alt={event.title}
                                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                                    />
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* Event Details */}
                                                        <div className={event.banner ? "md:col-span-2" : "md:col-span-3"}>
                                                            <div className="flex items-start justify-between mb-3">
                                                                <h3 className="text-2xl font-bold text-church-text hover:text-church-gold transition-colors flex-1">
                                                                    {event.title}
                                                                </h3>
                                                                {event.category && (
                                                                    <Badge className={`ml-2 flex-shrink-0 ${getCategoryColor(event.category)}`}>
                                                                        {event.category}
                                                                    </Badge>
                                                                )}
                                                            </div>

                                                            <p className="text-church-text-light mb-6 leading-relaxed">
                                                                {event.description}
                                                            </p>

                                                            <div className="space-y-3">
                                                                {/* Date and Time */}
                                                                <div className="flex items-center gap-3">
                                                                    <Calendar className="w-5 h-5 text-church-gold flex-shrink-0" />
                                                                    <span className="text-church-text font-medium">
                                                                        {formatDate(event.parsedDate)}
                                                                    </span>
                                                                    {event.isRecurring && (
                                                                        <span className="text-xs text-church-text-light italic ml-2">
                                                                            ({event.recurrenceInfo})
                                                                        </span>
                                                                    )}
                                                                </div>

                                                                {/* Time */}
                                                                <div className="flex items-center gap-3">
                                                                    <Clock className="w-5 h-5 text-church-gold flex-shrink-0" />
                                                                    <span className="text-church-text">
                                                                        {formatTime(event.parsedDate)} – {formatTime(event.parsedEndDate)}
                                                                    </span>
                                                                </div>

                                                                {/* Location */}
                                                                <div className="flex items-start gap-3">
                                                                    <MapPin className="w-5 h-5 text-church-gold flex-shrink-0 mt-0.5" />
                                                                    <span className="text-church-text">
                                                                        {event.location}
                                                                    </span>
                                                                </div>

                                                                {/* Online indicator and link */}
                                                                {event.isOnline && (
                                                                    <div className="flex items-center gap-3 pt-1">
                                                                        <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                                                                            Online Event
                                                                        </span>
                                                                    </div>
                                                                )}

                                                                {event.isOnline && event.youtubeLiveUrl && (
                                                                    <div className="flex items-center gap-3 pt-2">
                                                                        <LinkIcon className="w-5 h-5 text-church-gold flex-shrink-0" />
                                                                        <a
                                                                            href={event.youtubeLiveUrl}
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                            className="text-church-gold font-semibold hover:text-church-gold/80 transition-colors"
                                                                        >
                                                                            Watch Live on YouTube →
                                                                        </a>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        );
                    })()}
                </div>
            </section>
            <Footer />
        </>
    );
}