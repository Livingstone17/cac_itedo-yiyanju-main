// components/Events.tsx or pages/Events.tsx
import { useEffect, useState } from 'react';
import { Calendar, MapPin, Link as LinkIcon, Clock } from "lucide-react";
import Footer from '@/components/Footer';

interface ChurchEvent {
    id: string;
    title: string;
    description: string;
    date: string;
    endDate: string;
    location: string;
    isOnline: boolean;
    youtubeLiveUrl: string | null;
    banner?: string;
}

interface GroupedEvents {
    [month: string]: ChurchEvent[];
}

export default function EventsPage() {
    const [events, setEvents] = useState<ChurchEvent[]>([]);
    const [groupedEvents, setGroupedEvents] = useState<GroupedEvents>({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/events')
            .then(res => res.json())
            .then(data => {
                const sortedEvents = (data.events || []).sort((a: ChurchEvent, b: ChurchEvent) =>
                    new Date(a.date).getTime() - new Date(b.date).getTime()
                );
                setEvents(sortedEvents);
                groupEventsByMonth(sortedEvents);
                setLoading(false);
            })
            .catch(err => {
                console.error('Failed to load events', err);
                setLoading(false);
            });
    }, []);

    const groupEventsByMonth = (eventsList: ChurchEvent[]) => {
        const grouped: GroupedEvents = {};
        eventsList.forEach(event => {
            const monthKey = new Date(event.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
            });
            if (!grouped[monthKey]) {
                grouped[monthKey] = [];
            }
            grouped[monthKey].push(event);
        });
        setGroupedEvents(grouped);
    };

    const formatDate = (isoString: string) => {
        return new Date(isoString).toLocaleDateString('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    const formatTime = (isoString: string) => {
        return new Date(isoString).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        });
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

                    {/* Events grouped by month */}
                    <div className="space-y-12">
                        {Object.entries(groupedEvents).map(([monthKey, monthEvents]) => (
                            <div key={monthKey} className="mb-12">
                                <h2 className="text-2xl font-bold text-church-text mb-8 pb-4 border-b-2 border-church-gold/30">
                                    {monthKey}
                                </h2>

                                <div className="space-y-6">
                                    {monthEvents.map((event) => (
                                        <div key={event.id} className="group border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 bg-white">
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
                                                    <h3 className="text-2xl font-bold text-church-text mb-4 hover:text-church-gold transition-colors">
                                                        {event.title}
                                                    </h3>

                                                    <p className="text-church-text-light mb-6 leading-relaxed">
                                                        {event.description}
                                                    </p>

                                                    <div className="space-y-3">
                                                        {/* Date and Time */}
                                                        <div className="flex items-center gap-3">
                                                            <Calendar className="w-5 h-5 text-church-gold flex-shrink-0" />
                                                            <span className="text-church-text font-medium">
                                                                {formatDate(event.date)}
                                                            </span>
                                                        </div>

                                                        {/* Time */}
                                                        <div className="flex items-center gap-3">
                                                            <Clock className="w-5 h-5 text-church-gold flex-shrink-0" />
                                                            <span className="text-church-text">
                                                                {formatTime(event.date)} – {formatTime(event.endDate)}
                                                            </span>
                                                        </div>

                                                        {/* Location */}
                                                        <div className="flex items-start gap-3">
                                                            <MapPin className="w-5 h-5 text-church-gold flex-shrink-0 mt-0.5" />
                                                            <span className="text-church-text">
                                                                {event.location}
                                                            </span>
                                                        </div>

                                                        {/* Online link */}
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
                </div>
            </section>
            <Footer />
        </>
    );
}