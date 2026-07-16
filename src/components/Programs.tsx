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
    <section className="reveal border-light-400/60 bg-light dark:border-dark-500/60 dark:bg-dark-300 border-y py-16">
      <div className="container mx-auto px-6">
        <div className="fade-in mb-16 text-center">
          <h2 className="text-text dark:text-light mb-6 text-3xl font-bold md:text-4xl">
            Our <span className="text-church-gold-400">Weekly Meetings</span>
          </h2>
        </div>

        <div className="stagger grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div />

          <div className="lg:col-span-3">
            <div className="grid items-start gap-8 lg:grid-cols-2">
              <div className="stagger-item">
                <img src={Prayer} alt="Weekly programs" className="parallax shadow-large w-full rounded-lg object-cover" />
              </div>

              <div>
                {weeklyMeetings.map((meeting, index) => {
                  const IconComponent = meeting.icon;

                  return (
                    <div key={index} className="stagger-item">
                      <div className="flex gap-4 py-4">
                        <div className="bg-church-gold-400/15 flex h-12 w-12 items-center justify-center rounded-lg">
                          <IconComponent className="text-church-gold-400 h-6 w-6" />
                        </div>

                        <div>
                          <h3 className="text-text dark:text-light text-lg font-semibold">{meeting.title}</h3>

                          <div className="flex gap-4">
                            <span className="text-text-300 dark:text-text-400">{meeting.day}</span>
                            <span className="text-church-gold-400 font-medium">{meeting.time}</span>
                          </div>
                        </div>
                      </div>

                      {index < weeklyMeetings.length - 1 && <div className="border-light-400 dark:border-dark-500 border-b" />}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div />
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
