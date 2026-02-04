// components/Events.tsx or pages/Events.tsx
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

export default function EventsPage() {
    const [events, setEvents] = useState<ChurchEvent[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/events')
            .then(res => res.json())
            .then(data => {
                setEvents(data.events || []);
                setLoading(false);
            })
            .catch(err => {
                console.error('Failed to load events', err);
                setLoading(false);
            });
    }, []);

    const formatDate = (isoString: string) => {
        return new Date(isoString).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const formatTime = (isoString: string) => {
        return new Date(isoString).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    if (loading) {
        return <div className="py-20 text-center">Loading upcoming events...</div>;
    }

    if (events.length === 0) {
        return (
            <section className="py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
                    <p className="text-muted-foreground">No upcoming events scheduled.</p>
                </div>
            </section>
        );
    }

    return (
        <>
            <section className="py-20 bg-background" id="events">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-church-text">
                        Upcoming <span className="text-church-gold">Events</span>
                    </h2>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {events.map(event => (
                            <Card key={event.id} className="overflow-hidden border-0 shadow-soft">
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-xl">{event.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                        {event.description}
                                    </p>

                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-start gap-2">
                                            <Calendar className="w-4 h-4 mt-0.5 text-church-blue" />
                                            <span>{formatDate(event.date)}</span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4 text-church-blue" />
                                            <span>
                                                {formatTime(event.date)} – {formatTime(event.endDate)}
                                            </span>
                                        </div>

                                        <div className="flex items-start gap-2">
                                            <MapPin className="w-4 h-4 mt-0.5 text-church-blue" />
                                            <span>{event.location}</span>
                                        </div>

                                        {event.isOnline && event.youtubeLiveUrl && (
                                            <div className="flex items-center gap-2 pt-2">
                                                <LinkIcon className="w-4 h-4 text-church-blue" />
                                                <a
                                                    href={event.youtubeLiveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-church-gold hover:underline"
                                                >
                                                    Watch Live on YouTube
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}