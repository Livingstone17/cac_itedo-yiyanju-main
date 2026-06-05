// import { useEffect, useMemo, useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import { Calendar, MapPin, Link as LinkIcon, Clock, Tag } from "lucide-react";
// import { Badge } from "@/components/ui/badge";
// import Footer from "@/components/Footer";
// import { addSchemaToHead } from "@/lib/schema";
// import { eventsQueryOptions, type ChurchEventRaw } from "@/queries/homeContent";
// import { FilterSelect } from "@/components/ui/filter-select";


// interface Recurrence {
//   type: "weekly" | "monthly" | "monthly_last" | "yearly" | "none";
//   day?: string;
//   week?: number;
//   dayOfMonth?: number;
//   month?: number;
// }

// interface ChurchEventRaw {
//   id: string;
//   title: string;
//   description: string;
//   location: string;
//   category?: string;
//   banner?: string;
//   isOnline?: boolean;
//   youtubeLiveUrl?: string;

//   startTime: string;
//   endTime: string;

//   date?: string;
//   endDate?: string;

//   recurrence?: Recurrence;
// }

// interface ParsedEvent extends ChurchEventRaw {
//   parsedDate: Date;
//   parsedEndDate: Date;
//   isRecurring: boolean;
//   recurrenceInfo?: string;
// }

// export default function EventsPage() {
//   const { data, isPending: loading, isError } = useQuery(eventsQueryOptions);

//   const timezone = data?.timezone || "Africa/Lagos";

//   const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);


//   const dayMap: Record<string, number> = {
//     sunday: 0,
//     monday: 1,
//     tuesday: 2,
//     wednesday: 3,
//     thursday: 4,
//     friday: 5,
//     saturday: 6,
//   };

//   const createDateTime = (
//     date: Date,
//     time: string
//   ): Date => {
//     const [hours, minutes] = time
//       .split(":")
//       .map(Number);

//     const result = new Date(date);

//     result.setHours(hours);
//     result.setMinutes(minutes);
//     result.setSeconds(0);
//     result.setMilliseconds(0);

//     return result;
//   };

//   const getNextWeekdayOccurrences = (
//     weekday: number,
//     count: number
//   ): Date[] => {
//     const dates: Date[] = [];

//     const current = new Date();

//     current.setHours(0, 0, 0, 0);

//     while (dates.length < count) {
//       if (current.getDay() === weekday) {
//         dates.push(new Date(current));
//       }

//       current.setDate(current.getDate() + 1);
//     }

//     return dates;
//   };


//   const processEvents = (
//     eventsList: ChurchEventRaw[]
//   ): ParsedEvent[] => {
//     const processed: ParsedEvent[] = [];

//     const now = new Date();

//     eventsList.forEach((event) => {
//       if (
//         event.recurrence &&
//         event.recurrence.type !== "none"
//       ) {
//         if (
//           event.recurrence.type === "weekly" &&
//           event.recurrence.day
//         ) {
//           const weekday =
//             dayMap[event.recurrence.day.toLowerCase()];

//           const occurrences =
//             getNextWeekdayOccurrences(
//               weekday,
//               52
//             );

//           occurrences.forEach((occurrence) => {
//             processed.push({
//               ...event,
//               parsedDate: createDateTime(
//                 occurrence,
//                 event.startTime
//               ),
//               parsedEndDate: createDateTime(
//                 occurrence,
//                 event.endTime
//               ),
//               isRecurring: true,
//               recurrenceInfo: `Every ${event.recurrence?.day}`,
//             });
//           });
//         }
//       } else {
//         if (!event.date) return;

//         const eventDate = new Date(event.date);

//         if (eventDate >= now) {
//           processed.push({
//             ...event,
//             parsedDate: createDateTime(
//               eventDate,
//               event.startTime
//             ),
//             parsedEndDate: createDateTime(
//               eventDate,
//               event.endTime
//             ),
//             isRecurring: false,
//           });
//         }
//       }
//     });

//     return processed.sort(
//       (a, b) =>
//         a.parsedDate.getTime() -
//         b.parsedDate.getTime()
//     );
//   };



//   const events = useMemo(() => {
//     return processEvents(data?.events ?? []);
//   }, [data]);

//   const availableMonths = useMemo(() => {
//     const monthMap = new Map();

//     events.forEach((event) => {
//       const label =
//         new Intl.DateTimeFormat("en-US", {
//           timeZone: timezone,
//           month: "long",
//           year: "numeric",
//         }).format(event.parsedDate);

//       const key = `${event.parsedDate.getFullYear()}-${event.parsedDate.getMonth()}`;

//       if (!monthMap.has(key)) {
//         monthMap.set(key, {
//           label,
//           date: new Date(
//             event.parsedDate.getFullYear(),
//             event.parsedDate.getMonth(),
//             1
//           ),
//         });
//       }
//     });

//     return Array.from(monthMap.values())
//       .sort(
//         (a, b) =>
//           a.date.getTime() -
//           b.date.getTime()
//       )
//       .map((item) => item.label);
//   }, [events, timezone]);


//   const availableCategories = useMemo(() => Array.from(new Set(events.filter((e) => e.category).map((e) => e.category!))).sort(), [events]);

//   useEffect(() => {
//     if (events.length === 0) return;
//     const eventsSchema = {
//       "@context": "https://schema.org",
//       "@type": "CollectionPage",
//       name: "CAC Itedo Yiyanju Events",
//       url: "https://cacitedoyiyanju.org/events",
//       description: "Upcoming events and activities at CAC Itedo Yiyanju",
//       event: events.slice(0, 10).map((event) => ({
//         "@type": "Event",
//         name: event.title,
//         description: event.description,
//         startDate: event.parsedDate.toISOString(),
//         endDate: event.parsedEndDate.toISOString(),
//         eventStatus: "https://schema.org/EventScheduled",
//         eventAttendanceMode: event.isOnline ? "https://schema.org/OnlineEventAttendanceMode" : "https://schema.org/OfflineEventAttendanceMode",
//         location: event.isOnline
//           ? {
//             "@type": "VirtualLocation",
//             url: "https://cacitedoyiyanju.org/listen/video",
//           }
//           : {
//             "@type": "Place",
//             name: event.location,
//           },
//         organizer: {
//           "@type": "Organization",
//           name: "CAC Itedo Yiyanju",
//         },
//       })),
//     };
//     addSchemaToHead(eventsSchema);
//   }, [events]);

//   const formatDate = (date: Date) => {
//     return new Intl.DateTimeFormat(
//       "en-US",
//       {
//         timeZone: timezone,
//         weekday: "short",
//         year: "numeric",
//         month: "short",
//         day: "numeric",
//       }
//     ).format(date);
//   };

//   const formatTime = (date: Date) => {
//     return new Intl.DateTimeFormat(
//       "en-US",
//       {
//         timeZone: timezone,
//         hour: "2-digit",
//         minute: "2-digit",
//         hour12: true,
//       }
//     ).format(date);
//   };

//   const getFilteredAndGroupedEvents = () => {
//     let filtered = events;

//     // Filter by selected month
//     if (selectedMonth) {
//       filtered = filtered.filter((event) => {
//         // const eventMonth = event.parsedDate.toLocaleDateString("en-US", { year: "numeric", month: "long" });
//         const eventMonth =
//           new Intl.DateTimeFormat("en-US", {
//             timeZone: timezone,
//             year: "numeric",
//             month: "long",
//           }).format(event.parsedDate);
//         return eventMonth === selectedMonth;
//       });
//     }

//     // Filter by selected category
//     if (selectedCategory) {
//       filtered = filtered.filter((event) => event.category?.toLowerCase() === selectedCategory.toLowerCase());
//     }

//     // Group by month
//     const grouped: GroupedEvents = {};
//     filtered.forEach((event) => {
//       // const monthKey = event.parsedDate.toLocaleDateString("en-US", {
//       //   year: "numeric",
//       //   month: "long",
//       // });
//       const monthKey =
//         new Intl.DateTimeFormat("en-US", {
//           timeZone: timezone,
//           year: "numeric",
//           month: "long",
//         }).format(event.parsedDate);
//       if (!grouped[monthKey]) {
//         grouped[monthKey] = [];
//       }
//       grouped[monthKey].push(event);
//     });

//     return grouped;
//   };;

//   const getCategoryColor = (category?: string) => {
//     const colors: Record<string, string> = {
//       worship: "bg-blue-100 text-blue-800",
//       prayer: "bg-purple-100 text-purple-800",
//       conference: "bg-green-100 text-green-800",
//       celebration: "bg-yellow-100 text-yellow-800",
//       concert: "bg-pink-100 text-pink-800",
//     };
//     return colors[category?.toLowerCase() || ""] || "bg-gray-100 text-gray-800";
//   };

//   if (loading) {
//     return (
//       <div className="flex min-h-screen items-center justify-center pt-16">
//         <div className="text-center">
//           <p className="text-lg text-church-text-light">Loading upcoming events...</p>
//         </div>
//       </div>
//     );
//   }

//   if (isError) {
//     return (
//       <>
//         <section className="py-20 pt-32">
//           <div className="container mx-auto px-4 text-center">
//             <h2 className="mb-4 text-3xl font-bold text-church-text">
//               Upcoming <span className="text-church-gold">Events</span>
//             </h2>
//             <p className="text-church-text-light">We couldn&apos;t load events right now. Please try again shortly.</p>
//           </div>
//         </section>
//         <Footer />
//       </>
//     );
//   }

//   if (events.length === 0) {
//     return (
//       <>
//         <section className="py-20 pt-32">
//           <div className="container mx-auto px-4 text-center">
//             <h2 className="mb-4 text-3xl font-bold text-church-text">
//               Upcoming <span className="text-church-gold">Events</span>
//             </h2>
//             <p className="text-church-text-light">No upcoming events scheduled at this time.</p>
//           </div>
//         </section>
//         <Footer />
//       </>
//     );
//   }

//   return (
//     <>
//       <section className="bg-background py-20 pt-32" id="events">
//         <div className="container mx-auto max-w-4xl px-4">
//           <div className="mb-12">
//             <h1 className="mb-4 text-4xl font-bold text-church-text md:text-5xl">
//               Upcoming <span className="text-church-gold">Events</span>
//             </h1>
//             <p className="text-lg text-church-text-light">Join us for these special services and events. We look forward to seeing you!</p>
//           </div>

//           {/* Filters Section */}
//           <div className="mb-12 rounded-lg border border-border bg-card p-6">
//             <h3 className="mb-6 text-lg font-semibold text-church-text">Filter Events</h3>

//             <div className="grid gap-8 md:grid-cols-2">
//               <FilterSelect
//                 id="month-filter"
//                 label="By Month"
//                 value={selectedMonth}
//                 onChange={setSelectedMonth}
//                 allLabel="All Months"
//                 options={availableMonths.map((month) => ({
//                   label: month,
//                   value: month,
//                 }))}
//               />

//               <FilterSelect
//                 id="category-filter"
//                 label="By Category"
//                 value={selectedCategory}
//                 onChange={setSelectedCategory}
//                 allLabel="All Categories"
//                 capitalize
//                 options={availableCategories.map((category) => ({
//                   label: category.charAt(0).toUpperCase() + category.slice(1),
//                   value: category,
//                 }))}
//               />
//             </div>
//           </div>

//           {/* Events grouped by month */}
//           {(() => {
//             const filteredAndGrouped = getFilteredAndGroupedEvents();
//             const hasEvents = Object.keys(filteredAndGrouped).length > 0;

//             if (!hasEvents) {
//               return (
//                 <div className="py-12 text-center">
//                   <p className="text-lg text-church-text-light">No events match your filters.</p>
//                 </div>
//               );
//             }

//             return (
//               <div className="space-y-12">
//                 {Object.entries(filteredAndGrouped).map(([monthKey, monthEvents]) => (
//                   <div key={monthKey} className="mb-12">
//                     <h2 className="mb-8 border-b-2 border-church-gold/30 pb-4 text-2xl font-bold text-church-text">{monthKey}</h2>

//                     <div className="space-y-6">
//                       {monthEvents.map((event) => (
//                         <div key={event.id} className="group overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-lg">
//                           <div className="grid gap-6 p-6 md:grid-cols-3">
//                             {/* Event Image */}
//                             {event.banner && (
//                               <div className="md:col-span-1">
//                                 {/* <div className="relative h-48 w-full overflow-hidden rounded-lg bg-gradient-to-br from-church-blue to-church-blue/80 md:h-full"> */}
//                                 <div className="relative h-74 sm:h-74 md:h-full w-full overflow-hidden rounded-lg bg-gradient-to-br from-church-blue to-church-blue/80">
//                                   <img src={event.banner} alt={event.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
//                                 </div>
//                               </div>
//                             )}

//                             {/* Event Details */}
//                             <div className={event.banner ? "md:col-span-2" : "md:col-span-3"}>
//                               <div className="mb-3 flex items-start justify-between">
//                                 <h3 className="flex-1 text-2xl font-bold text-church-text transition-colors hover:text-church-gold">{event.title}</h3>
//                                 {event.category && <Badge className={`ml-2 flex-shrink-0 ${getCategoryColor(event.category)}`}>{event.category}</Badge>}
//                               </div>

//                               <p className="mb-6 leading-relaxed text-church-text-light">{event.description}</p>

//                               <div className="space-y-3">
//                                 {/* Date and Time */}
//                                 <div className="flex items-center gap-3">
//                                   <Calendar className="h-5 w-5 flex-shrink-0 text-church-gold" />
//                                   <span className="whitespace-nowrap font-medium text-church-text">{formatDate(event.parsedDate)}</span>
//                                   {event.isRecurring && <span className="ml-2 text-xs italic text-church-text-light">({event.recurrenceInfo})</span>}
//                                 </div>

//                                 {/* Time */}
//                                 <div className="flex items-center gap-3">
//                                   <Clock className="h-5 w-5 flex-shrink-0 text-church-gold" />
//                                   <span className="text-church-text">
//                                     {formatTime(event.parsedDate)} – {formatTime(event.parsedEndDate)}
//                                   </span>
//                                 </div>

//                                 {/* Location */}
//                                 <div className="flex items-start gap-3">
//                                   <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-church-gold" />
//                                   <span className="text-church-text">{event.location}</span>
//                                 </div>

//                                 {/* Online indicator and link */}
//                                 {event.isOnline && (
//                                   <div className="flex items-center gap-3 pt-1">
//                                     <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">Online Event</span>
//                                   </div>
//                                 )}

//                                 {event.isOnline && event.youtubeLiveUrl && (
//                                   <div className="flex items-center gap-3 pt-2">
//                                     <LinkIcon className="h-5 w-5 flex-shrink-0 text-church-gold" />
//                                     <a href={event.youtubeLiveUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-church-gold transition-colors hover:text-church-gold/80">
//                                       Watch Live on YouTube →
//                                     </a>
//                                   </div>
//                                 )}
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             );
//           })()}
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// }

import { useEffect, useMemo, useState, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { Calendar, MapPin, Link as LinkIcon, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import { addSchemaToHead } from "@/lib/schema";
import { eventsQueryOptions, type ChurchEventRaw } from "@/queries/homeContent";
import { FilterSelect } from "@/components/ui/filter-select";

// ============================================================================
// Types - Extend the imported ChurchEventRaw, don't redefine it
// ============================================================================

// Recurrence types - keep these local since they're implementation details
interface WeeklyRecurrence {
  type: "weekly";
  day: string;
}

interface MonthlyOrdinalRecurrence {
  type: "monthly";
  ordinal: number;
  day: string;
}

interface MonthlyDatesRecurrence {
  type: "monthly_dates";
  days: number[];
}

interface MonthlyLastWeekdaysRecurrence {
  type: "monthly_last_weekdays";
  days: string[];
}

type Recurrence =
  | WeeklyRecurrence
  | MonthlyOrdinalRecurrence
  | MonthlyDatesRecurrence
  | MonthlyLastWeekdaysRecurrence
  | { type: "none" }
  | undefined;

// ParsedEvent extends the IMPORTED ChurchEventRaw using Omit to avoid conflicts
interface ParsedEvent extends Omit<ChurchEventRaw, "recurrence"> {
  parsedStart: Date;
  parsedEnd: Date;
  isRecurring: boolean;
  recurrenceInfo?: string;
  originalEvent: ChurchEventRaw;
}

type GroupedEvents = Record<string, ParsedEvent[]>;

// ============================================================================
// Utility Functions (unchanged, but now accepts imported ChurchEventRaw)
// ============================================================================

const dayMap: Record<string, number> = {
  sunday: 0,
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
};

const createDateTimeInTimezone = (
  baseDate: Date,
  time: string,
  timezone: string
): Date => {
  const [hours, minutes] = time.split(":").map(Number);

  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const parts = formatter.formatToParts(baseDate);
  const partMap: Record<string, string> = {};
  parts.forEach((p) => {
    if (p.type !== "literal") partMap[p.type] = p.value;
  });

  const dateStr = `${partMap.year}-${partMap.month}-${partMap.day}`;
  const dateTimeStr = `${dateStr}T${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:00`;

  const utcDate = new Date(dateTimeStr + "Z");
  return new Date(utcDate.toLocaleString("en-US", { timeZone: timezone }));
};

const adjustEndTime = (start: Date, end: Date): Date => {
  if (end <= start) {
    const adjusted = new Date(end);
    adjusted.setDate(adjusted.getDate() + 1);
    return adjusted;
  }
  return end;
};

const getNthWeekdayOfMonth = (
  year: number,
  month: number,
  weekday: number,
  ordinal: number
): Date | null => {
  let count = 0;
  const date = new Date(year, month, 1);

  while (date.getMonth() === month) {
    if (date.getDay() === weekday) {
      count++;
      if (count === ordinal) {
        return new Date(date);
      }
    }
    date.setDate(date.getDate() + 1);
  }
  return null;
};

const getLastWeekdaysOfMonth = (
  year: number,
  month: number,
  weekdays: number[]
): Date[] => {
  const results: Date[] = [];
  const lastDay = new Date(year, month + 1, 0);
  const found = new Set<number>();

  for (let d = lastDay.getDate(); d >= 1 && found.size < weekdays.length; d--) {
    const date = new Date(year, month, d);
    const dayOfWeek = date.getDay();

    if (weekdays.includes(dayOfWeek) && !found.has(dayOfWeek)) {
      results.push(new Date(date));
      found.add(dayOfWeek);
    }
  }

  return results.sort((a, b) => a.getDate() - b.getDate());
};

// Updated to use the imported ChurchEventRaw type
const generateOccurrences = (
  event: ChurchEventRaw,
  timezone: string,
  lookaheadMonths = 12
): ParsedEvent[] => {
  const results: ParsedEvent[] = [];
  const now = new Date();
  const lookaheadEnd = new Date();
  lookaheadEnd.setMonth(lookaheadEnd.getMonth() + lookaheadMonths);

  const createParsed = (
    startDate: Date,
    endDate: Date,
    recurrenceInfo?: string
  ): ParsedEvent => ({
    ...event,
    parsedStart: startDate,
    parsedEnd: adjustEndTime(startDate, endDate),
    isRecurring: !!(event.recurrence && (event.recurrence as Recurrence)?.type !== "none"),
    recurrenceInfo,
    originalEvent: event,
  });

  // One-time events with eventDate
  if (event.eventDate) {
    const eventDate = new Date(event.eventDate + "T00:00:00");
    if (eventDate >= now) {
      const start = createDateTimeInTimezone(eventDate, event.startTime, timezone);
      const end = createDateTimeInTimezone(eventDate, event.endTime, timezone);
      results.push(createParsed(start, end));
    }
    return results;
  }

  // Multi-day events with startDate/endDate
  if (event.startDate && event.endDate) {
    const start = new Date(event.startDate + "T00:00:00");
    const end = new Date(event.endDate + "T00:00:00");

    for (
      let d = new Date(start);
      d <= end;
      d.setDate(d.getDate() + 1)
    ) {
      if (d >= now) {
        const dayStart = createDateTimeInTimezone(d, event.startTime, timezone);
        const dayEnd = createDateTimeInTimezone(d, event.endTime, timezone);
        results.push(createParsed(dayStart, dayEnd, `${event.startDate} to ${event.endDate}`));
      }
    }
    return results;
  }

  // Recurring events
  const recurrence = event.recurrence as Recurrence | undefined;

  if (!recurrence || recurrence.type === "none") {
    return results;
  }

  // Weekly recurrence
  if (recurrence.type === "weekly" && recurrence.day) {
    const weekday = dayMap[recurrence.day.toLowerCase()];
    let current = new Date(now);
    current.setHours(0, 0, 0, 0);

    while (current.getDay() !== weekday) {
      current.setDate(current.getDate() + 1);
    }

    while (current <= lookaheadEnd) {
      const start = createDateTimeInTimezone(current, event.startTime, timezone);
      const end = createDateTimeInTimezone(current, event.endTime, timezone);

      if (start >= now) {
        results.push(createParsed(start, end, `Every ${recurrence.day}`));
      }
      current.setDate(current.getDate() + 7);
    }
  }

  // Monthly ordinal recurrence
  else if (recurrence.type === "monthly" && recurrence.ordinal && recurrence.day) {
    const weekday = dayMap[recurrence.day.toLowerCase()];
    let year = now.getFullYear();
    let month = now.getMonth();

    for (let i = 0; i < lookaheadMonths; i++) {
      const occurrence = getNthWeekdayOfMonth(year, month, weekday, recurrence.ordinal);

      if (occurrence && occurrence >= now) {
        const start = createDateTimeInTimezone(occurrence, event.startTime, timezone);
        const end = createDateTimeInTimezone(occurrence, event.endTime, timezone);
        const ordinalSuffix = ["th", "st", "nd", "rd"][recurrence.ordinal % 10] || "th";
        results.push(createParsed(start, end, `${recurrence.ordinal}${ordinalSuffix} ${recurrence.day} of each month`));
      }

      month++;
      if (month > 11) {
        month = 0;
        year++;
      }
    }
  }

  // Monthly specific dates
  else if (recurrence.type === "monthly_dates" && recurrence.days) {
    let year = now.getFullYear();
    let month = now.getMonth();

    for (let i = 0; i < lookaheadMonths; i++) {
      const daysInMonth = new Date(year, month + 1, 0).getDate();

      recurrence.days.forEach((dayOfMonth) => {
        if (dayOfMonth <= daysInMonth) {
          const occurrence = new Date(year, month, dayOfMonth);

          if (occurrence >= now) {
            const start = createDateTimeInTimezone(occurrence, event.startTime, timezone);
            const end = createDateTimeInTimezone(occurrence, event.endTime, timezone);
            results.push(createParsed(start, end, `Monthly on days: ${recurrence.days?.join(", ")}`));
          }
        }
      });

      month++;
      if (month > 11) {
        month = 0;
        year++;
      }
    }
  }

  // Monthly last weekdays
  else if (recurrence.type === "monthly_last_weekdays" && recurrence.days) {
    const weekdays = recurrence.days.map((d) => dayMap[d.toLowerCase()]).filter((n): n is number => n !== undefined);
    let year = now.getFullYear();
    let month = now.getMonth();

    for (let i = 0; i < lookaheadMonths; i++) {
      const occurrences = getLastWeekdaysOfMonth(year, month, weekdays);

      occurrences.forEach((occurrence) => {
        if (occurrence >= now) {
          const start = createDateTimeInTimezone(occurrence, event.startTime, timezone);
          const end = createDateTimeInTimezone(occurrence, event.endTime, timezone);
          const dayNames = recurrence.days?.map((d) => d.charAt(0).toUpperCase() + d.slice(1)).join(", ");
          results.push(createParsed(start, end, `Last ${dayNames} of each month`));
        }
      });

      month++;
      if (month > 11) {
        month = 0;
        year++;
      }
    }
  }

  return results;
};

// ============================================================================
// Main Component
// ============================================================================

export default function EventsPage() {
  const { data, isPending: loading, isError } = useQuery(eventsQueryOptions);

  const timezone = data?.timezone || "Africa/Lagos";
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // FIXED: Now uses the imported ChurchEventRaw type correctly
  const events = useMemo(() => {
    if (!data?.events) return [];

    const allOccurrences: ParsedEvent[] = [];

    data.events.forEach((event: ChurchEventRaw) => {
      const occurrences = generateOccurrences(event, timezone);
      allOccurrences.push(...occurrences);
    });

    const unique = new Map<string, ParsedEvent>();
    allOccurrences
      .sort((a, b) => a.parsedStart.getTime() - b.parsedStart.getTime())
      .forEach((evt) => {
        const key = `${evt.id}-${evt.parsedStart.toDateString()}`;
        if (!unique.has(key)) {
          unique.set(key, evt);
        }
      });

    return Array.from(unique.values());
  }, [data, timezone]);

  const availableMonths = useMemo(() => {
    const monthMap = new Map<string, { label: string; sortKey: Date }>();

    events.forEach((event) => {
      const label = new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        month: "long",
        year: "numeric",
      }).format(event.parsedStart);

      const sortKey = new Date(
        event.parsedStart.getFullYear(),
        event.parsedStart.getMonth(),
        1
      );

      const key = `${event.parsedStart.getFullYear()}-${event.parsedStart.getMonth()}`;

      if (!monthMap.has(key)) {
        monthMap.set(key, { label, sortKey });
      }
    });

    return Array.from(monthMap.values())
      .sort((a, b) => a.sortKey.getTime() - b.sortKey.getTime())
      .map((item) => item.label);
  }, [events, timezone]);

  const availableCategories = useMemo(() => {
    return Array.from(
      new Set(events.filter((e) => e.category).map((e) => e.category!))
    ).sort();
  }, [events]);

  useEffect(() => {
    if (events.length === 0) return;

    const eventsSchema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "CAC Itedo Yiyanju Events",
      url: "https://cacitedoyiyanju.org/events",
      description: "Upcoming events and activities at CAC Itedo Yiyanju",
      event: events.slice(0, 10).map((event) => ({
        "@type": "Event",
        name: event.title,
        description: event.description,
        startDate: event.parsedStart.toISOString(),
        endDate: event.parsedEnd.toISOString(),
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: event.isOnline
          ? "https://schema.org/OnlineEventAttendanceMode"
          : "https://schema.org/OfflineEventAttendanceMode",
        location: event.isOnline
          ? {
            "@type": "VirtualLocation",
            url: event.youtubeLiveUrl || "https://cacitedoyiyanju.org/listen/video",
          }
          : {
            "@type": "Place",
            name: event.location,
            address: event.location,
          },
        organizer: {
          "@type": "Organization",
          name: "CAC Itedo Yiyanju",
        },
      })),
    };
    addSchemaToHead(eventsSchema);
  }, [events]);

  const formatDate = useCallback(
    (date: Date) => {
      return new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
      }).format(date);
    },
    [timezone]
  );

  const formatTime = useCallback(
    (date: Date) => {
      return new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).format(date);
    },
    [timezone]
  );

  const getFilteredAndGroupedEvents = useCallback(() => {
    let filtered = events;

    if (selectedMonth) {
      filtered = filtered.filter((event) => {
        const eventMonth = new Intl.DateTimeFormat("en-US", {
          timeZone: timezone,
          year: "numeric",
          month: "long",
        }).format(event.parsedStart);
        return eventMonth === selectedMonth;
      });
    }

    if (selectedCategory) {
      filtered = filtered.filter(
        (event) =>
          event.category?.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    const grouped: GroupedEvents = {};
    filtered.forEach((event) => {
      const monthKey = new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        year: "numeric",
        month: "long",
      }).format(event.parsedStart);

      if (!grouped[monthKey]) {
        grouped[monthKey] = [];
      }
      grouped[monthKey].push(event);
    });

    return grouped;
  }, [events, selectedMonth, selectedCategory, timezone]);

  const getCategoryColor = (category?: string) => {
    const colors: Record<string, string> = {
      worship: "bg-blue-100 text-blue-800",
      prayer: "bg-purple-100 text-purple-800",
      conference: "bg-green-100 text-green-800",
      celebration: "bg-yellow-100 text-yellow-800",
      concert: "bg-pink-100 text-pink-800",
    };
    return colors[category?.toLowerCase() || ""] || "bg-gray-100 text-gray-800";
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center pt-16">
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
            <h2 className="mb-4 text-3xl font-bold text-church-text">
              Upcoming <span className="text-church-gold">Events</span>
            </h2>
            <p className="text-church-text-light">
              We couldn&apos;t load events right now. Please try again shortly.
            </p>
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
            <h2 className="mb-4 text-3xl font-bold text-church-text">
              Upcoming <span className="text-church-gold">Events</span>
            </h2>
            <p className="text-church-text-light">
              No upcoming events scheduled at this time.
            </p>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <section className="bg-background py-20 pt-32" id="events">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="mb-12">
            <h1 className="mb-4 text-4xl font-bold text-church-text md:text-5xl">
              Upcoming <span className="text-church-gold">Events</span>
            </h1>
            <p className="text-lg text-church-text-light">
              Join us for these special services and events. We look forward to seeing you!
            </p>
          </div>

          <div className="mb-12 rounded-lg border border-border bg-card p-6">
            <h3 className="mb-6 text-lg font-semibold text-church-text">
              Filter Events
            </h3>

            <div className="grid gap-8 md:grid-cols-2">
              <FilterSelect
                id="month-filter"
                label="By Month"
                value={selectedMonth}
                onChange={setSelectedMonth}
                allLabel="All Months"
                options={availableMonths.map((month) => ({
                  label: month,
                  value: month,
                }))}
              />

              <FilterSelect
                id="category-filter"
                label="By Category"
                value={selectedCategory}
                onChange={setSelectedCategory}
                allLabel="All Categories"
                capitalize
                options={availableCategories.map((category) => ({
                  label: category.charAt(0).toUpperCase() + category.slice(1),
                  value: category,
                }))}
              />
            </div>
          </div>

          {(() => {
            const filteredAndGrouped = getFilteredAndGroupedEvents();
            const hasEvents = Object.keys(filteredAndGrouped).length > 0;

            if (!hasEvents) {
              return (
                <div className="py-12 text-center">
                  <p className="text-lg text-church-text-light">
                    No events match your filters.
                  </p>
                </div>
              );
            }

            return (
              <div className="space-y-12">
                {Object.entries(filteredAndGrouped).map(
                  ([monthKey, monthEvents]) => (
                    <div key={monthKey} className="mb-12">
                      <h2 className="mb-8 border-b-2 border-church-gold/30 pb-4 text-2xl font-bold text-church-text">
                        {monthKey}
                      </h2>

                      <div className="space-y-6">
                        {monthEvents.map((event) => (
                          <div
                            key={`${event.id}-${event.parsedStart.toISOString()}`}
                            className="group overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-lg"
                          >
                            <div className="grid gap-6 p-6 md:grid-cols-3">
                              {event.banner && (
                                <div className="md:col-span-1">
                                  <div className="relative h-74 sm:h-74 md:h-full w-full overflow-hidden rounded-lg bg-gradient-to-br from-church-blue to-church-blue/80">
                                    <img
                                      src={event.banner}
                                      alt={event.title}
                                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                      onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = "none";
                                      }}
                                    />
                                  </div>
                                </div>
                              )}

                              <div className={event.banner ? "md:col-span-2" : "md:col-span-3"}>
                                <div className="mb-3 flex items-start justify-between">
                                  <h3 className="flex-1 text-2xl font-bold text-church-text transition-colors hover:text-church-gold">
                                    {event.title}
                                  </h3>
                                  {event.category && (
                                    <Badge className={`ml-2 flex-shrink-0 ${getCategoryColor(event.category)}`}>
                                      {event.category}
                                    </Badge>
                                  )}
                                </div>

                                <p className="mb-6 leading-relaxed text-church-text-light">
                                  {event.description}
                                </p>

                                <div className="space-y-3">
                                  <div className="flex items-center gap-3">
                                    <Calendar className="h-5 w-5 flex-shrink-0 text-church-gold" />
                                    <span className="whitespace-nowrap font-medium text-church-text">
                                      {formatDate(event.parsedStart)}
                                    </span>
                                    {event.isRecurring && event.recurrenceInfo && (
                                      <span className="ml-2 text-xs italic text-church-text-light">
                                        ({event.recurrenceInfo})
                                      </span>
                                    )}
                                  </div>

                                  <div className="flex items-center gap-3">
                                    <Clock className="h-5 w-5 flex-shrink-0 text-church-gold" />
                                    <span className="text-church-text">
                                      {formatTime(event.parsedStart)} – {formatTime(event.parsedEnd)}
                                    </span>
                                  </div>

                                  <div className="flex items-start gap-3">
                                    <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-church-gold" />
                                    <span className="text-church-text">{event.location}</span>
                                  </div>

                                  {event.isOnline && (
                                    <div className="flex items-center gap-3 pt-1">
                                      <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">
                                        Online Event
                                      </span>
                                    </div>
                                  )}

                                  {event.isOnline && event.youtubeLiveUrl && (
                                    <div className="flex items-center gap-3 pt-2">
                                      <LinkIcon className="h-5 w-5 flex-shrink-0 text-church-gold" />
                                      <a
                                        href={event.youtubeLiveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold text-church-gold transition-colors hover:text-church-gold/80"
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
                  )
                )}
              </div>
            );
          })()}
        </div>
      </section>
      <Footer />
    </>
  );
}