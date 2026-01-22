


import { Calendar, Clock, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Bethel from "@/assets/bethel2025.jpg";

// Utility to format date range for Google Calendar
function formatDateForCalendar(date: string, time: string, endDate?: string) {
  const start = new Date(`${date} ${time}`);
  const end = endDate
    ? new Date(`${endDate} ${time}`)
    : new Date(start.getTime() + 2 * 60 * 60 * 1000); // +2h fallback

  const format = (d: Date) =>
    d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

  return `${format(start)}/${format(end)}`;
}

// Utility to create ICS file (Apple, Outlook)
function downloadICS(event: {
  title: string;
  date: string;
  time: string;
  endDate?: string;
  location: string;
  description: string;
}) {
  const start = new Date(`${event.date} ${event.time}`);
  const end = event.endDate
    ? new Date(`${event.endDate} ${event.time}`)
    : new Date(start.getTime() + 2 * 60 * 60 * 1000);

  const formatICSDate = (d: Date) =>
    d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

  const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${event.title}
DTSTART:${formatICSDate(start)}
DTEND:${formatICSDate(end)}
LOCATION:${event.location}
DESCRIPTION:${event.description}
END:VEVENT
END:VCALENDAR
`;

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${event.title.replace(/\s+/g, "_")}.ics`;
  link.click();
  URL.revokeObjectURL(url);
}

const UpcomingEvents = () => {
  const events = [
    {
      title: "BETHEL 2025",
      date: "Oct 12, 2025",
      endDate: "Nov 23, 2025", // multi-day event
      time: "08:00 AM",
      location: "Church Auditorium, Lagos",
      banner: Bethel,
      description:
        "Join us for our annual 40-days Apostolic Encounter; A season of retreat, encounters, breakthrough and deliverances.",
    },
    {
      title: "Christmas Carol Service",
      date: "Dec 24, 2025",
      time: "6:00 PM",
      location: "Main Sanctuary",
      banner:
        "https://images.unsplash.com/photo-1513623954575-263b06149894?w=800",
      description:
        "Celebrate the birth of Christ with songs of worship, drama, and a candlelight procession.",
    },
  ];

  return (
    <section id="events" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-church-text mb-6">
            Upcoming <span className="text-church-gold">Events</span>
          </h2>
          <p className="text-xl text-church-text-light max-w-2xl mx-auto">
            Stay connected with what’s happening in our church family.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-soft hover:shadow-large transition-all duration-300 border-0"
            >
              <div className="relative aspect-video">
                <img
                  src={
                    typeof event.banner === "string"
                      ? event.banner
                      : event.banner      //.src
                  }
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <CardHeader>
                <CardTitle className="text-2xl text-church-text">
                  {event.title}
                </CardTitle>
                <p className="text-church-text-light mt-2">
                  {event.description}
                </p>
              </CardHeader>

              <CardContent>
                <div className="flex items-center gap-4 text-sm text-church-text-light mb-4">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                    {event.endDate ? ` - ${event.endDate}` : ""}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {event.time}
                  </span>
                </div>
                <div className="flex items-center text-sm text-church-text-light mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  {event.location}
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <Button variant="church-primary" className="flex-1">
                    Learn More
                  </Button>

                  {/* Google Calendar */}
                  <Button variant="outline" className="flex-1" asChild>
                    <a
                      href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                        event.title
                      )}&dates=${formatDateForCalendar(
                        event.date,
                        event.time,
                        event.endDate
                      )}&details=${encodeURIComponent(
                        event.description
                      )}&location=${encodeURIComponent(event.location)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Add to Google Calendar
                    </a>
                  </Button>

                  {/* Apple / Outlook */}
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => downloadICS(event)}
                  >
                    Add .ICS
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
