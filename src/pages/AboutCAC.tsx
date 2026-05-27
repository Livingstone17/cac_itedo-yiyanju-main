import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function AboutCACPage() {

    const sectionRef = useRef(null); const pageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray(".reveal").forEach((el: any) => {
                gsap.fromTo(el,
                    { opacity: 0, y: 60 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            });

            // =========================
            // 2. HISTORY TEXT STAGGER ONLY (SCOPED!)
            // =========================
            gsap.from("#cac-history .stagger .stagger-item", {
                opacity: 0,
                y: 30,
                stagger: 0.15,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: "#cac-history .stagger",
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });

            // =========================
            // 3. TENETS GRID (ONE TRIGGER ONLY)
            // =========================
            gsap.fromTo("#tenets .stagger-item",
                {
                    opacity: 0,
                    y: 40,
                    scale: 0.96,
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: "#tenets",
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                }
            );

            // =========================
            // 4. LEFT BORDER ANIMATION
            // =========================
            gsap.from("#cac-history .border-l-4", {
                scaleY: 0,
                transformOrigin: "top",
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "#cac-history",
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            });

        }, pageRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const hash = window.location.hash;

        if (hash) {
            setTimeout(() => {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        } else {
            window.scrollTo(0, 0);
        }
    }, []);

    return (
        <>
            <section ref={pageRef} className="bg-background pb-20 pt-32" id="cac-history">
                <div className="container mx-auto max-w-4xl px-4">
                    {/* Page Title */}
                    <div className="mb-16 reveal">
                        <h1 className="mb-6 text-5xl font-bold text-church-text md:text-6xl">
                            About <span className="text-church-gold">CAC</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-church-text-light">Understanding the foundation and beliefs of the Christ Apostolic Church</p>
                    </div>

                    {/* History of CAC Section */}
                    <div className="mb-20 reveal">
                        <div className="relative border-l-4 border-church-gold pl-6">
                            <h2 className="mb-8 text-4xl font-bold text-church-text">
                                History of the <span className="text-church-gold">Christ Apostolic Church</span>
                            </h2>
                            <div className="space-y-6 leading-relaxed text-church-text-light stagger">
                                <div>
                                    <h3 className="mb-4 text-2xl font-bold text-church-text stagger-item">Origin of Pentecostalism and the Birth of the Aladura Group</h3>
                                    <p>The founding of the Christ Apostolic Church can be traced to a divine vision given to Daddy Alli, a sexton of Saint Saviour's Anglican Church in Ijebu Ode. In his dream, he saw the members of the Anglican Church parish divided into two groups: the first was large but in darkness because they were not praying, while the second group was small but in sparkling light because it was praying. When he shared this vision with the church vicar, Rev. Ganzallo, it was dismissed as meaningless. However, Daddy Alli was convinced of its significance.</p>
                                </div>

                                <p>With support from church members including Joseph Sadare (Esinsinade), D.C. Oduga, E.O. Onabanjo, and E.O.W. Olukoya, the group began regular prayer meetings. Soon, as Pa Alli had foreseen, God began to manifest His power through answered prayers. The vicar eventually joined them, and the group became known as the Precious Stone Society.</p>

                                <p>A pivotal figure in this early movement was Sophia Odunlami, a young schoolteacher with the gift of prophecy. After surviving a deadly influenza epidemic through divine healing, she became an advocate for faith in God's healing power. Through her prophetic ministry, she guided the group against worldly practices and idolatry. Her influence expanded the movement as she preached not only in Ijebu Ode but also in Ibadan and surrounding areas.</p>

                                <div>
                                    <h3 className="mb-4 mt-6 text-2xl font-bold text-church-text">From Precious Stone to Faith Tabernacle</h3>
                                    <p>As tension rose with the Anglican Church leadership over their radical and non-conformist beliefs, members of the prayer group faced persecution. They were dismissed from church positions, and their children were withdrawn from the church's schools. David Odubanjo established contacts with the Faith Tabernacle of Philadelphia, USA, through Pastor A. Clark. As persecution intensified, the group affiliated with the Faith Tabernacle movement. Within a decade, Faith Tabernacle branches had been established throughout Nigeria and extended to West African countries including Ghana.</p>
                                </div>

                                <div>
                                    <h3 className="mb-4 mt-6 text-2xl font-bold text-church-text">The Call of Apostle Joseph Ayo Babalola</h3>
                                    <p>A transformative moment came in October 1928 when Joseph Ayo Babalola, a roller driver, received a divine call from God. While operating a roadroller on the Akure-Owena-Ilesa road, he heard a heavenly voice calling him to abandon his employment and serve the Lord. After resigning and fasting for seven days, Jesus Christ appeared to him in a vision, commissioning him with a rod of iron and instructing him to sanctify water for healing of diseases. Babalola was later baptized by Pastor Esinsinade in 1929 and joined the Faith Tabernacle group.</p>
                                </div>

                                <div>
                                    <h3 className="mb-4 mt-6 text-2xl font-bold text-church-text">The Great Revival of 1930</h3>
                                    <p>The historic revival of 1930 began simultaneously with a miraculous event. During a leadership meeting at Oke-Ooye in Ilesa on July 30, 1930, a 12-year-old boy named Bamiji Ogundipe, who had died the previous night, was restored to life. This was attributed to the prayers and sanctified water of Prophet Babalola. The news of this resurrection sparked an unprecedented revival that spread like wildfire across West Africa.</p>
                                    <p className="mt-4">The revival was marked by extraordinary manifestations of God's power: hospitals were deserted as people flocked to revival grounds for healing, the possessed received instant deliverance, and many abandoned their idols and evil charms to embrace Jesus Christ. The revival embraced not only the beliefs of the Faith Tabernacle but also extended to baptism of the Holy Spirit, speaking in tongues, visions, prophecy, and divine dreams.</p>
                                </div>

                                <div>
                                    <h3 className="mb-4 mt-6 text-2xl font-bold text-church-text">From Faith Tabernacle to Christ Apostolic Church</h3>
                                    <p>As the church expanded rapidly, the colonial authorities began to persecute members, particularly because the practice of faith healing caused people to abandon hospitals. The church leadership approached the British Apostolic Brothers in Bradford, England for cooperation. Between 1931 and 1932, British Apostolic pastors visited Nigeria and re-ordained Nigerian leaders, establishing the Nigerian Apostolic Church.</p>
                                    <p className="mt-4">However, in 1940, a doctrinal crisis emerged when British missionaries were found using synthetic medicine to heal fever, contradicting the church's stance on divine healing. This division split the leadership into two groups. At a General Executive Council meeting in Ibadan on December 22, 1941, church delegates adopted the name "CHRIST APOSTOLIC CHURCH" (CAC) as the new identity. Isaac Akinyele became the president, David Odubanjo the general superintendent, and Joseph Ayo Babalola the general evangelist. At the convention held at Efon Alaaye in April 1942, the name was unanimously adopted. The church was officially registered on May 23, 1943, under the Perpetual Succession Ordinance of 1924 with Registration Number 147.</p>
                                </div>

                                <p className="mt-6 text-lg font-semibold text-church-text">From these humble beginnings rooted in prayer and faith in God's power, the Christ Apostolic Church has grown into a global movement with congregations on multiple continents, remaining faithful to the apostolic principles and supernatural power that characterized its founding.</p>
                            </div>
                        </div>
                    </div>

                    {/* Tenets of CAC Section */}
                    <section id="tenets" className="mb-20 reveal">
                        <div className="relative border-l-4 border-church-gold pl-6">
                            <h2 className="mb-8 text-4xl font-bold text-church-text">
                                Tenets of <span className="text-church-gold">CAC</span>
                            </h2>
                            <div className="space-y-8 leading-relaxed text-church-text-light">
                                <p className="text-lg">The Christ Apostolic Church is built upon these 13 fundamental biblical principles and beliefs that guide every aspect of church life and practice:</p>

                                {/* Tenets Grid */}
                                <div className="mt-10 grid gap-6 md:grid-cols-2">
                                    {/* Tenet 1 */}
                                    <div className="rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg stagger-item">
                                        <h3 className="mb-3 flex items-start text-lg font-bold text-church-text">
                                            <span className="mr-3 font-bold text-church-gold">1.</span>
                                            <span>The Unity of the God-head and the Trinity of Persons Therein</span>
                                        </h3>
                                        <p className="text-sm text-church-text-light">God exists in three persons: Father, Son, and Holy Spirit, yet one in essence and purpose.</p>
                                    </div>

                                    {/* Tenet 2 */}
                                    <div className="rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg stagger-item">
                                        <h3 className="mb-3 flex items-start text-lg font-bold text-church-text">
                                            <span className="mr-3 font-bold text-church-gold">2.</span>
                                            <span>The Utter Depravity of Human Nature</span>
                                        </h3>
                                        <p className="text-sm text-church-text-light">The necessity for repentance and regeneration and the eternal doom of the finally impenitent.</p>
                                    </div>

                                    {/* Tenet 3 */}
                                    <div className="rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg stagger-item">
                                        <h3 className="mb-3 flex items-start text-lg font-bold text-church-text">
                                            <span className="mr-3 font-bold text-church-gold">3.</span>
                                            <span>The Work of Christ</span>
                                        </h3>
                                        <p className="text-sm text-church-text-light">The virgin birth, sinless life, atoning death, triumphant resurrection, ascension and abiding intercession of our Lord Jesus Christ; His second coming and millennial reign on earth.</p>
                                    </div>

                                    {/* Tenet 4 */}
                                    <div className="rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg stagger-item">
                                        <h3 className="mb-3 flex items-start text-lg font-bold text-church-text">
                                            <span className="mr-3 font-bold text-church-gold">4.</span>
                                            <span>Justification and Sanctification</span>
                                        </h3>
                                        <p className="text-sm text-church-text-light">Justification and sanctification of the believers through the finished work of Christ.</p>
                                    </div>

                                    {/* Tenet 5 */}
                                    <div className="rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg stagger-item">
                                        <h3 className="mb-3 flex items-start text-lg font-bold text-church-text">
                                            <span className="mr-3 font-bold text-church-gold">5.</span>
                                            <span>The Baptism of the Holy Ghost</span>
                                        </h3>
                                        <p className="text-sm text-church-text-light">The baptism of the Holy Ghost for believers with signs following.</p>
                                    </div>

                                    {/* Tenet 6 */}
                                    <div className="rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg stagger-item">
                                        <h3 className="mb-3 flex items-start text-lg font-bold text-church-text">
                                            <span className="mr-3 font-bold text-church-gold">6.</span>
                                            <span>The Nine Gifts of the Holy Ghost</span>
                                        </h3>
                                        <p className="text-sm text-church-text-light">The nine gifts of the Holy Ghost for edification, exhortation and comfort of the church, which is the body of Christ.</p>
                                    </div>

                                    {/* Tenet 7 */}
                                    <div className="rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg stagger-item">
                                        <h3 className="mb-3 flex items-start text-lg font-bold text-church-text">
                                            <span className="mr-3 font-bold text-church-gold">7.</span>
                                            <span>The Sacraments</span>
                                        </h3>
                                        <p className="text-sm text-church-text-light">The sacraments of baptism by immersion and the Lord's supper.</p>
                                    </div>

                                    {/* Tenet 8 */}
                                    <div className="rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg stagger-item">
                                        <h3 className="mb-3 flex items-start text-lg font-bold text-church-text">
                                            <span className="mr-3 font-bold text-church-gold">8.</span>
                                            <span>The Divine Authority of Scripture</span>
                                        </h3>
                                        <p className="text-sm text-church-text-light">The divine inspiration and authority of the holy scriptures.</p>
                                    </div>

                                    {/* Tenet 9 */}
                                    <div className="rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg stagger-item">
                                        <h3 className="mb-3 flex items-start text-lg font-bold text-church-text">
                                            <span className="mr-3 font-bold text-church-gold">9.</span>
                                            <span>Church Government</span>
                                        </h3>
                                        <p className="text-sm text-church-text-light">Church government by apostles, prophets, evangelists, pastors, teachers, elders and deacons.</p>
                                    </div>

                                    {/* Tenet 10 */}
                                    <div className="rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg stagger-item">
                                        <h3 className="mb-3 flex items-start text-lg font-bold text-church-text">
                                            <span className="mr-3 font-bold text-church-gold">10.</span>
                                            <span>The Possibility of Falling From Grace</span>
                                        </h3>
                                        <p className="text-sm text-church-text-light">The possibility of falling from grace through disobedience and apostasy.</p>
                                    </div>

                                    {/* Tenet 11 */}
                                    <div className="rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg stagger-item">
                                        <h3 className="mb-3 flex items-start text-lg font-bold text-church-text">
                                            <span className="mr-3 font-bold text-church-gold">11.</span>
                                            <span>Tithes and Offerings</span>
                                        </h3>
                                        <p className="text-sm text-church-text-light">The obligatory nature of tithes and offerings to support the work of God.</p>
                                    </div>

                                    {/* Tenet 12 */}
                                    <div className="rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg stagger-item">
                                        <h3 className="mb-3 flex items-start text-lg font-bold text-church-text">
                                            <span className="mr-3 font-bold text-church-gold">12.</span>
                                            <span>Divine Healing</span>
                                        </h3>
                                        <p className="text-sm text-church-text-light">Divine healing through obedience to the command of our Lord Jesus Christ and faith in His name and the merit of His blood for all sicknesses, diseases and infirmities (Isaiah 53:5, Mark 16:18, James 5:14-18).</p>
                                    </div>

                                    {/* Tenet 13 */}
                                    <div className="rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg stagger-item">
                                        <h3 className="mb-3 flex items-start text-lg font-bold text-church-text">
                                            <span className="mr-3 font-bold text-church-gold">13.</span>
                                            <span>Faith in God's Provision</span>
                                        </h3>
                                        <p className="text-sm text-church-text-light">Faith in God, the Jehovah Jireh to supply all your financial needs without going into debt or borrowing money on interest and to be content with having food and raiment. Godliness with contentment is a great gain (Philippians 4:19, Romans 13:8, 1 Timothy 6:6-10).</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Call to Action */}
                    <div className="rounded-lg border border-church-gold/20 bg-gradient-to-r from-church-blue/10 to-church-gold/10 p-8 text-center reveal">
                        <h3 className="mb-4 text-2xl font-bold text-church-text">Join Our Church</h3>
                        <p className="mx-auto mb-6 max-w-2xl text-church-text-light">Discover more about the Christ Apostolic Church and how you can be part of this growing movement of believers dedicated to apostolic Christianity and spiritual renewal.</p>
                        <a href="/#contact" className="inline-block rounded-lg bg-church-gold px-8 py-3 font-semibold text-white transition-colors duration-300 hover:bg-church-gold/90">
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
