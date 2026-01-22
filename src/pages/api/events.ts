// pages/api/events.ts
import type { NextApiRequest, NextApiResponse } from "next";

const events = [
  {
    id: 1,
    title: "Annual Thanksgiving Service",
    banner: "/images/thanksgiving.jpg", // put in /public/images
    date: "2025-10-15",
    time: "10:00 AM",
    location: "Church Auditorium",
    description: "Join us for our annual thanksgiving service with worship, testimonies, and praise."
  },
  {
    id: 2,
    title: "Youth Conference 2025",
    banner: "/images/youth-conference.jpg",
    date: "2025-11-02",
    time: "9:00 AM",
    location: "Main Hall",
    description: "A life-changing conference for the next generation of leaders."
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(events);
}
