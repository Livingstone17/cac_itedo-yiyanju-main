import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Compass, BookOpen } from "lucide-react";
import gsap from "gsap";

const values = [
  {
    title: "LOVE",
    description: "Our love isn't fleeting, it's fierce, faithful, and fixed on Jesus. We live with undying commitment to God and His eternal purposes, loving Him above all and extending His grace to a hurting world.",
    icon: Heart,
    color: "bg-red-500",
  },
  {
    title: "INTIMACY",
    description: "We pursue more than religion, we seek relationship. In the presence of the Holy Spirit, we cultivate daily intimacy with God through prayer, worship, and surrendered living, allowing Him to lead, heal, and speak clearly in our lives.",
    icon: Users,
    color: "bg-church-blue-700",
  },
  {
    title: "TRANSFORMATION",
    description: "When heaven touches earth, everything changes. Through biblical teaching, authentic discipleship, and the power of the cross, we witness radical transformation in individuals, families, and entire communities fulfilling God's purpose for every believer.",
    icon: Compass,
    color: "bg-church-gold-400",
  },
  {
    title: "KINGDOM INFLUENCE",
    description: "We're raising world-changers who don't just adapt to culture—they transform it. Empowered by the Holy Spirit and grounded in kingdom principles, our Christian community advances society through justice, innovation, and Christ-centered leadership.",
    icon: BookOpen,
    color: "bg-green-500",
  },
];

export default function ValuesSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".value-icon", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        scale: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.2,
        delay: 0.2,
      });

      gsap.from(".values-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="reveal border-light-400/60 dark:border-dark-500/60 mb-2 border-y py-20"
      style={{
        marginLeft: "calc(-50vw + 50%)",
        marginRight: "calc(-50vw + 50%)",
        paddingLeft: "calc(50vw - 50%)",
        paddingRight: "calc(50vw - 50%)",
      }}
    >
      <h3 className="values-title text-text dark:text-light mb-12 text-center text-3xl font-bold">Our Core Values</h3>

      <div className="stagger grid gap-6 px-4 md:grid-cols-2 lg:grid-cols-4">
        {values.map((value, index) => {
          const IconComponent = value.icon;

          return (
            <div key={index} className="value-card stagger-item group h-full transition-transform duration-300 hover:-translate-y-2">
              <Card className="border-light-400 bg-light shadow-soft hover:shadow-medium dark:border-dark-500 dark:bg-dark-400 flex h-full flex-col border text-center transition-all duration-300">
                <CardContent className="flex grow flex-col p-6">
                  <div className={`value-icon mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${value.color}`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  <h4 className="text-text dark:text-light mb-3 text-xl font-bold">{value.title}</h4>

                  <p className="text-text-300 dark:text-text-400 grow text-sm">{value.description}</p>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
