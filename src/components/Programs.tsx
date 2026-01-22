import React from "react";

const programs = [
    {
      title: "Sunday School",
      description: "Join us at 7:00 AM every Sunday for this adventure into the Word.",
      image: "/assets/programs/sunday-school.jpg",
    },
    {
      title: "Sunday Service",
      description:
        "Enrich your walk with God. Sunday service begins at 8:00 AM with Sunday School.",
      image: "/assets/programs/sunday-service.jpg",
    },
    {
      title: "Bible Study",
      description:
        "Join us online and onsite at 5:00 PM every Tuesday for an experience in the Word of God.",
      image: "/assets/programs/epistle-life.jpg",
    },
    {
      title: "Prayer Meeting",
      description:
        "Holds every Thursday by 8AM.",
      image: "/assets/programs/season-of-the-spirit.jpg",
    },
  ];
  
  const ProgramsSection = () => {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          {/* Section Heading */}
          {/* <div className="text-center mb-12">
            <p className="text-sm font-semibold text-orange-600 tracking-wider uppercase">
              Grow Deeper in Faith!
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Attend soul-transforming meetings
            </h2>
          </div> */}
           <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-church-text mb-6">
            Our <span className="text-church-gold">Weekly Meetings</span>
          </h2>
          <p className="text-xl text-church-text-light max-w-2xl mx-auto">
          Attend soul-transforming meetings
          </p>
        </div>
  
          {/* Programs Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-lg  hover:shadow-xl transition overflow-hidden"
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {program.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ProgramsSection;
  