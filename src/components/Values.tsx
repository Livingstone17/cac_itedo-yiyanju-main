import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Compass, BookOpen } from "lucide-react";
import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

const values = [
    {
        title: "LOVE",
        description: "Our love isn’t fleeting,it’s fierce, faithful, and fixed on Jesus. We live with undying commitment to God and His eternal purposes, loving Him above all and extending His grace to a hurting world.",
        icon: Heart,
        color: "bg-red-500",
    },
    {
        title: "INTIMACY",
        description: "We pursue more than religion, we seek relationship. In the presence of the Holy Spirit, we cultivate daily intimacy with God through prayer, worship, and surrendered living, allowing Him to lead, heal, and speak clearly in our lives.",
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

export default function ValuesSection() {
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate cards
            // gsap.from(".value-card", {
            //     scrollTrigger: {
            //         trigger: sectionRef.current,
            //         start: "top 80%",
            //     },
            //     opacity: 0,
            //     y: 50,
            //     duration: 0.8,
            //     ease: "power3.out",
            //     stagger: 0.2,
            // });

            // Animate icons (pop effect)
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

            // Title animation
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
            className="mb-2 py-12 bg-blue-50  border-y border-border/60 reveal"
            style={{
                marginLeft: "calc(-50vw + 50%)",
                marginRight: "calc(-50vw + 50%)",
                paddingLeft: "calc(50vw - 50%)",
                paddingRight: "calc(50vw - 50%)",
            }}
        >
            {/* Title */}
            <h3 className="values-title text-3xl font-bold text-church-text text-center mb-12 text-black/70">
                Our Core Values
            </h3>

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 stagger">
                {values.map((value, index) => {
                    const IconComponent = value.icon;

                    return (
                        <div
                            key={index}
                            className="value-card group transition-transform duration-300 hover:-translate-y-2 stagger-item"
                        >
                            <Card className="text-center bg-card text-card-foreground shadow-soft hover:shadow-medium transition-all duration-300 border border-border">
                                <CardContent className="p-6">
                                    {/* Icon */}
                                    <div
                                        className={`value-icon w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                                    >
                                        <IconComponent className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Title */}
                                    <h4 className="text-xl font-bold text-church-text mb-3">
                                        {value.title}
                                    </h4>

                                    {/* Description */}
                                    <p className="text-church-text-light text-sm">
                                        {value.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}