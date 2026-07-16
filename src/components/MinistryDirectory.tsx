import { Card, CardContent } from "@/components/ui/card";
import choir from "../assets/choir.jpg";
import youth from "../assets/program.jpg";

const MinistryDirectory = () => {
  const featuredMinistries = [
    {
      id: 1,
      name: "Youth & Young Adults",
      subtitle: "BETHEL COVENANT YOUTH",
      image: youth,
    },
    {
      id: 2,
      name: "Worship & Music",
      subtitle: "BETHEL COVENANT CHOIR",
      image: choir,
    },
  ];

  return (
    <section
      id="ministries"
      className="reveal border-light-400/60 bg-light-100 dark:border-dark-500/60 dark:bg-dark-200 border-y py-20"
      style={{
        marginLeft: "calc(-50vw + 50%)",
        marginRight: "calc(-50vw + 50%)",
        paddingLeft: "calc(50vw - 50%)",
        paddingRight: "calc(50vw - 50%)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="stagger mb-16 text-center">
          <h2 className="stagger-item text-text dark:text-light mb-6 text-3xl font-bold md:text-4xl">
            Our <span className="text-church-gold-400">Ministries</span>
          </h2>

          <p className="stagger-item text-text-300 dark:text-text-400 mx-auto max-w-2xl text-base">Be a functional part of our church family. Explore the various ministries where you can serve, grow, and make a difference.</p>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="stagger flex flex-col justify-center">
            <h2 className="stagger-item text-text dark:text-light mb-8 text-5xl leading-tight font-black md:text-6xl">
              There's a Place for <span className="text-church-gold-400">Everyone</span>
            </h2>

            <p className="stagger-item text-text-300 dark:text-text-400 mb-8 max-w-md text-lg leading-relaxed">Discover the various ways you can serve, grow, and make a difference in our church family.</p>

            <div className="stagger-item">
              <a href="/ministries" className="border-church-blue-700 text-church-blue-700 hover:bg-church-blue-700 hover:text-light dark:border-light dark:text-light dark:hover:bg-light dark:hover:text-dark-300 inline-flex items-center justify-center gap-2 rounded-full border-2 px-8 py-3 font-semibold transition-colors duration-300">
                See All Ministries
              </a>
            </div>
          </div>

          <div className="stagger grid grid-cols-1 gap-6 sm:grid-cols-2">
            {featuredMinistries.map((ministry) => (
              <div key={ministry.id} className="stagger-item">
                <Card className="group border-light-400 bg-light dark:border-dark-500 dark:bg-dark-400 overflow-hidden border shadow-lg transition-all duration-500 hover:shadow-2xl">
                  <div className="relative h-64 overflow-hidden">
                    <img src={ministry.image} alt={ministry.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="bg-church-blue-900/20 group-hover:bg-church-blue-900/40 absolute inset-0 transition-colors duration-300" />
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-text dark:text-light mb-2 text-xl font-bold">{ministry.name}</h3>
                    <p className="text-text-300 dark:text-text-400 text-sm">{ministry.subtitle}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinistryDirectory;
