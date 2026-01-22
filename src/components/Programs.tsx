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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-church-text mb-6">
            Our <span className="text-church-gold">Weekly Meetings</span>
          </h2>
          <p className="text-base text-church-text-light max-w-2xl mx-auto">
            Fellowship with us every week!
          </p>
        </div>

        {/* 3-Column Grid Layout: 1-2-1 */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Empty Column 1 */}
          <div></div>

          {/* Middle Column - Image and Programs */}
          <div className="lg:col-span-3">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Image Section - Left Side */}
              <div className="flex justify-center">
                <img
                  src={Prayer}
                  alt="Weekly Meetings"
                  className=" shadow-lg w-full h-auto object-cover"
                />
              </div>

              {/* Programs List - Right Side */}
              <div>
                {weeklyMeetings.map((meeting, index) => {
                  const IconComponent = meeting.icon;
                  return (
                    <div key={index}>
                      <div className="py-4 flex gap-4">
                        {/* Icon */}
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-church-gold/10 rounded-lg flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-church-black" />
                          </div>
                        </div>
                        {/* Program Details */}
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-church-text mb-1">
                            {meeting.title}
                          </h3>
                          <div className="flex items-center gap-4 text-church-text-light">
                            <span className="text-sm font-medium">{meeting.day}</span>
                            <span className="text-sm font-semibold text-church-gold">
                              {meeting.time}
                            </span>
                          </div>
                        </div>
                      </div>
                      {index < weeklyMeetings.length - 1 && (
                        <div className="border-b border-church-blue/10"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Empty Column 2 */}
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
