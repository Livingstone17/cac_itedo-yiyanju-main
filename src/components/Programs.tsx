import React from "react";
import Prayer from "@/assets/program.jpg";
import { FaChalkboardUser, FaUsers, FaBookBible, FaHandsPraying } from "react-icons/fa6";

const ProgramsSection = () => {
  const weeklyMeetings = [
    {
      title: "Sunday School",
      time: "7:00 AM",
      day: "Sunday",
      icon: FaChalkboardUser,
    },
    {
      title: "Sunday Service",
      time: "8:00 AM",
      day: "Sunday",
      icon: FaUsers,
    },
    {
      title: "Bible Study",
      time: "5:00 PM",
      day: "Tuesday",
      icon: FaBookBible,
    },
    {
      title: "Prayer Meeting",
      time: "8:00 AM",
      day: "Thursday",
      icon: FaHandsPraying,
    },
  ];

  return (
    <section className="reveal py-16 bg-church-cream border-y border-border/60">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our <span className="text-church-gold">Weekly Meetings</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 stagger">

          <div></div>

          <div className="lg:col-span-3">
            <div className="grid lg:grid-cols-2 gap-8 items-start">

              <div className="stagger-item">
                <img
                  src={Prayer}
                  className="rounded-lg shadow-lg w-full object-cover parallax"
                />
              </div>

              <div>
                {weeklyMeetings.map((meeting, index) => {
                  const IconComponent = meeting.icon;
                  return (
                    <div key={index} className="stagger-item">
                      <div className="py-4 flex gap-4">
                        <div className="w-12 h-12 bg-church-gold/15 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-church-gold" />
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold">
                            {meeting.title}
                          </h3>
                          <div className="flex gap-4">
                            <span>{meeting.day}</span>
                            <span className="text-church-gold">
                              {meeting.time}
                            </span>
                          </div>
                        </div>
                      </div>

                      {index < weeklyMeetings.length - 1 && (
                        <div className="border-b border-border"></div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

          <div></div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
