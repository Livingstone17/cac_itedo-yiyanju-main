import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Compass, BookOpen } from "lucide-react";
import communityImage from "@/assets/prayer.jpg";

const About = () => {
  const values = [
    {
      title: "LOVE",
      description: "Our love isn’t fleeting,it’s fierce, faithful, and fixed on Jesus. We live with undying commitment to God and His eternal purposes, loving Him above all and extending His grace to a hurting world.",
      icon: Heart,
      color: "bg-red-500",
    },
    {
      title: "INTIMACY",
      description: "We pursue more than religion,we seek relationship. In the presence of the Holy Spirit, we cultivate daily intimacy with God through prayer, worship, and surrendered living, allowing Him to lead, heal, and speak clearly in our lives.",
      icon: Users,
      color: "bg-church-blue",
    },
    {
      title: "TRANSFORMATION",
      description: "When heaven touches earth, everything changes. Through biblical teaching, authentic discipleship, and the power of the cross, we witness radical transformation in individuals, families, and entire communities fulfilling God’s purpose for every believer.",
      icon: Compass,
      color: "bg-church-gold",
    },
    {
      title: "KINGDOM INFLUENCE",
      description: "We’re raising world-changers who don’t just adapt to culture—they transform it. Empowered by the Holy Spirit and grounded in kingdom principles, our Christian community advances society through justice, innovation, and Christ-centered leadership.",
      icon: BookOpen,
      color: "bg-green-500",
    },
  ];

  const openMaps = () => {
    const lat = 6.5244; // Replace with your church latitude
    const lng = 3.3792; // Replace with your church longitude
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);

    if (isIOS) {
      // Open in Apple Maps
      window.open(`http://maps.apple.com/?daddr=${lat},${lng}`, "_blank");
    } else if (isAndroid) {
      // Open in Google Maps App (if installed)
      window.open(`geo:${lat},${lng}?q=${lat},${lng}(CAC Itedo Yiyanju)`, "_blank");
    } else {
      // Default: open Google Maps in browser
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, "_blank");
    }
  };


  const stats = [
    { number: "20+", label: "Years of Ministry" },
    { number: "1000+", label: "Active Members" },
    { number: "50+", label: "Weekly Programs" },
    { number: "100+", label: "Volunteers" },
  ];

  return (
    <section id="about" className="py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-church-text mb-6">
            About <span className="text-church-gold">CAC Itedo Yiyanju</span>
          </h2>
          <p className="text-base text-church-text-light max-w-2xl mx-auto">
            We are a vibrant community of believers committed to loving God, loving people, and making a difference in our world.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Story */}
          <div>
            <h3 className="text-3xl font-bold text-church-text mb-6">Our Story</h3>
            <div className="space-y-4 text-church-text-light">
              <p>
                Founded in 2002, CAC Itedo Yiyanju began as a small group of families with a big vision:
                to create a place where everyone could experience God's love, be liberated from the hold of darkness, and find their purpose in God.
                What started in a living room has grown into a thriving community of over 1000 members.
              </p>
              <p>
                We believe that church should be a place of healing, hope, light, communion and transformation.
                Through authentic worship, practical teaching, word-based prayers and genuine community, we've seen
                countless lives changed by the power of God's love.
              </p>
              <p>
                Today, we're not just a church, we're a family committed to making a lasting
                impact in our city and beyond. Join us as we continue this incredible journey together.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button variant="church-primary" size="lg" onClick={openMaps}>
                Visit Us This Sunday
              </Button>
              {/* <Button variant="outline" size="lg">
                Learn More
              </Button> */}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-large">
              <img
                src={communityImage}
                alt="Grace Church Community"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-church-blue/30 to-transparent"></div>
            </div>

            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-large p-6 border border-church-blue/10">
              <div className="grid grid-cols-2 gap-4 text-center">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl font-bold text-church-gold">{stat.number}</div>
                    <div className="text-xs text-church-text-light">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-2 py-12" style={{ backgroundColor: "#F5F5EF", marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)", paddingLeft: "calc(50vw - 50%)", paddingRight: "calc(50vw - 50%)" }}>
          <h3 className="text-3xl font-bold text-church-text text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-all duration-300 border-church-blue/10 group">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-church-text mb-3">{value.title}</h4>
                    <p className="text-church-text-light text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Full Stats */}
        {/* <div className="bg-gradient-hero rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-8">Grace Church by the Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-church-gold mb-2">{stat.number}</div>
                <div className="text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;



