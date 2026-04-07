import { useEffect } from 'react';
import Footer from '@/components/Footer';

export default function AboutCACPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section className="pt-32 pb-20 bg-background" id="cac-history">
                <div className="container mx-auto px-4 max-w-4xl">
                    {/* Page Title */}
                    <div className="mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold text-church-text mb-6">
                            About <span className="text-church-gold">CAC</span>
                        </h1>
                        <p className="text-lg text-church-text-light leading-relaxed">
                            Understanding the foundation and beliefs of the Christ Apostolic Church
                        </p>
                    </div>

                    {/* History of CAC Section */}
                    <div className="mb-20">
                        <div className="relative pl-6 border-l-4 border-church-gold">
                            <h2 className="text-4xl font-bold text-church-text mb-8">
                                History of the <span className="text-church-gold">Christ Apostolic Church</span>
                            </h2>
                            <div className="space-y-6 text-church-text-light leading-relaxed">
                                <div>
                                    <h3 className="text-2xl font-bold text-church-text mb-4">Origin of Pentecostalism and the Birth of the Aladura Group</h3>
                                    <p>
                                        The founding of the Christ Apostolic Church can be traced to a divine vision given to Daddy Alli, a sexton of Saint Saviour's Anglican Church in Ijebu Ode. In his dream, he saw the members of the Anglican Church parish divided into two groups: the first was large but in darkness because they were not praying, while the second group was small but in sparkling light because it was praying. When he shared this vision with the church vicar, Rev. Ganzallo, it was dismissed as meaningless. However, Daddy Alli was convinced of its significance.
                                    </p>
                                </div>

                                <p>
                                    With support from church members including Joseph Sadare (Esinsinade), D.C. Oduga, E.O. Onabanjo, and E.O.W. Olukoya, the group began regular prayer meetings. Soon, as Pa Alli had foreseen, God began to manifest His power through answered prayers. The vicar eventually joined them, and the group became known as the Precious Stone Society.
                                </p>

                                <p>
                                    A pivotal figure in this early movement was Sophia Odunlami, a young schoolteacher with the gift of prophecy. After surviving a deadly influenza epidemic through divine healing, she became an advocate for faith in God's healing power. Through her prophetic ministry, she guided the group against worldly practices and idolatry. Her influence expanded the movement as she preached not only in Ijebu Ode but also in Ibadan and surrounding areas.
                                </p>

                                <div>
                                    <h3 className="text-2xl font-bold text-church-text mb-4 mt-6">From Precious Stone to Faith Tabernacle</h3>
                                    <p>
                                        As tension rose with the Anglican Church leadership over their radical and non-conformist beliefs, members of the prayer group faced persecution. They were dismissed from church positions, and their children were withdrawn from the church's schools. David Odubanjo established contacts with the Faith Tabernacle of Philadelphia, USA, through Pastor A. Clark. As persecution intensified, the group affiliated with the Faith Tabernacle movement. Within a decade, Faith Tabernacle branches had been established throughout Nigeria and extended to West African countries including Ghana.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-church-text mb-4 mt-6">The Call of Apostle Joseph Ayo Babalola</h3>
                                    <p>
                                        A transformative moment came in October 1928 when Joseph Ayo Babalola, a roller driver, received a divine call from God. While operating a roadroller on the Akure-Owena-Ilesa road, he heard a heavenly voice calling him to abandon his employment and serve the Lord. After resigning and fasting for seven days, Jesus Christ appeared to him in a vision, commissioning him with a rod of iron and instructing him to sanctify water for healing of diseases. Babalola was later baptized by Pastor Esinsinade in 1929 and joined the Faith Tabernacle group.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-church-text mb-4 mt-6">The Great Revival of 1930</h3>
                                    <p>
                                        The historic revival of 1930 began simultaneously with a miraculous event. During a leadership meeting at Oke-Ooye in Ilesa on July 30, 1930, a 12-year-old boy named Bamiji Ogundipe, who had died the previous night, was restored to life. This was attributed to the prayers and sanctified water of Prophet Babalola. The news of this resurrection sparked an unprecedented revival that spread like wildfire across West Africa.
                                    </p>
                                    <p className="mt-4">
                                        The revival was marked by extraordinary manifestations of God's power: hospitals were deserted as people flocked to revival grounds for healing, the possessed received instant deliverance, and many abandoned their idols and evil charms to embrace Jesus Christ. The revival embraced not only the beliefs of the Faith Tabernacle but also extended to baptism of the Holy Spirit, speaking in tongues, visions, prophecy, and divine dreams.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-church-text mb-4 mt-6">From Faith Tabernacle to Christ Apostolic Church</h3>
                                    <p>
                                        As the church expanded rapidly, the colonial authorities began to persecute members, particularly because the practice of faith healing caused people to abandon hospitals. The church leadership approached the British Apostolic Brothers in Bradford, England for cooperation. Between 1931 and 1932, British Apostolic pastors visited Nigeria and re-ordained Nigerian leaders, establishing the Nigerian Apostolic Church.
                                    </p>
                                    <p className="mt-4">
                                        However, in 1940, a doctrinal crisis emerged when British missionaries were found using synthetic medicine to heal fever, contradicting the church's stance on divine healing. This division split the leadership into two groups. At a General Executive Council meeting in Ibadan on December 22, 1941, church delegates adopted the name "CHRIST APOSTOLIC CHURCH" (CAC) as the new identity. Isaac Akinyele became the president, David Odubanjo the general superintendent, and Joseph Ayo Babalola the general evangelist. At the convention held at Efon Alaaye in April 1942, the name was unanimously adopted. The church was officially registered on May 23, 1943, under the Perpetual Succession Ordinance of 1924 with Registration Number 147.
                                    </p>
                                </div>

                                <p className="text-lg font-semibold text-church-text mt-6">
                                    From these humble beginnings rooted in prayer and faith in God's power, the Christ Apostolic Church has grown into a global movement with congregations on multiple continents, remaining faithful to the apostolic principles and supernatural power that characterized its founding.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Tenets of CAC Section */}
                    <div className="mb-20">
                        <div className="relative pl-6 border-l-4 border-church-gold">
                            <h2 className="text-4xl font-bold text-church-text mb-8">
                                Tenets of <span className="text-church-gold">CAC</span>
                            </h2>
                            <div className="space-y-8 text-church-text-light leading-relaxed">
                                <p className="text-lg">
                                    The Christ Apostolic Church is built upon these 13 fundamental biblical principles and beliefs that guide every aspect of church life and practice:
                                </p>

                                {/* Tenets Grid */}
                                <div className="grid md:grid-cols-2 gap-6 mt-10">
                                    {/* Tenet 1 */}
                                    <div className="bg-white rounded-lg p-6 border border-border hover:shadow-lg transition-all duration-300">
                                        <h3 className="text-lg font-bold text-church-text mb-3 flex items-start">
                                            <span className="text-church-gold mr-3 font-bold">1.</span>
                                            <span>The Unity of the God-head and the Trinity of Persons Therein</span>
                                        </h3>
                                        <p className="text-church-text-light text-sm">
                                            God exists in three persons: Father, Son, and Holy Spirit, yet one in essence and purpose.
                                        </p>
                                    </div>

                                    {/* Tenet 2 */}
                                    <div className="bg-white rounded-lg p-6 border border-border hover:shadow-lg transition-all duration-300">
                                        <h3 className="text-lg font-bold text-church-text mb-3 flex items-start">
                                            <span className="text-church-gold mr-3 font-bold">2.</span>
                                            <span>The Utter Depravity of Human Nature</span>
                                        </h3>
                                        <p className="text-church-text-light text-sm">
                                            The necessity for repentance and regeneration and the eternal doom of the finally impenitent.
                                        </p>
                                    </div>

                                    {/* Tenet 3 */}
                                    <div className="bg-white rounded-lg p-6 border border-border hover:shadow-lg transition-all duration-300">
                                        <h3 className="text-lg font-bold text-church-text mb-3 flex items-start">
                                            <span className="text-church-gold mr-3 font-bold">3.</span>
                                            <span>The Work of Christ</span>
                                        </h3>
                                        <p className="text-church-text-light text-sm">
                                            The virgin birth, sinless life, atoning death, triumphant resurrection, ascension and abiding intercession of our Lord Jesus Christ; His second coming and millennial reign on earth.
                                        </p>
                                    </div>

                                    {/* Tenet 4 */}
                                    <div className="bg-white rounded-lg p-6 border border-border hover:shadow-lg transition-all duration-300">
                                        <h3 className="text-lg font-bold text-church-text mb-3 flex items-start">
                                            <span className="text-church-gold mr-3 font-bold">4.</span>
                                            <span>Justification and Sanctification</span>
                                        </h3>
                                        <p className="text-church-text-light text-sm">
                                            Justification and sanctification of the believers through the finished work of Christ.
                                        </p>
                                    </div>

                                    {/* Tenet 5 */}
                                    <div className="bg-white rounded-lg p-6 border border-border hover:shadow-lg transition-all duration-300">
                                        <h3 className="text-lg font-bold text-church-text mb-3 flex items-start">
                                            <span className="text-church-gold mr-3 font-bold">5.</span>
                                            <span>The Baptism of the Holy Ghost</span>
                                        </h3>
                                        <p className="text-church-text-light text-sm">
                                            The baptism of the Holy Ghost for believers with signs following.
                                        </p>
                                    </div>

                                    {/* Tenet 6 */}
                                    <div className="bg-white rounded-lg p-6 border border-border hover:shadow-lg transition-all duration-300">
                                        <h3 className="text-lg font-bold text-church-text mb-3 flex items-start">
                                            <span className="text-church-gold mr-3 font-bold">6.</span>
                                            <span>The Nine Gifts of the Holy Ghost</span>
                                        </h3>
                                        <p className="text-church-text-light text-sm">
                                            The nine gifts of the Holy Ghost for edification, exhortation and comfort of the church, which is the body of Christ.
                                        </p>
                                    </div>

                                    {/* Tenet 7 */}
                                    <div className="bg-white rounded-lg p-6 border border-border hover:shadow-lg transition-all duration-300">
                                        <h3 className="text-lg font-bold text-church-text mb-3 flex items-start">
                                            <span className="text-church-gold mr-3 font-bold">7.</span>
                                            <span>The Sacraments</span>
                                        </h3>
                                        <p className="text-church-text-light text-sm">
                                            The sacraments of baptism by immersion and the Lord's supper.
                                        </p>
                                    </div>

                                    {/* Tenet 8 */}
                                    <div className="bg-white rounded-lg p-6 border border-border hover:shadow-lg transition-all duration-300">
                                        <h3 className="text-lg font-bold text-church-text mb-3 flex items-start">
                                            <span className="text-church-gold mr-3 font-bold">8.</span>
                                            <span>The Divine Authority of Scripture</span>
                                        </h3>
                                        <p className="text-church-text-light text-sm">
                                            The divine inspiration and authority of the holy scriptures.
                                        </p>
                                    </div>

                                    {/* Tenet 9 */}
                                    <div className="bg-white rounded-lg p-6 border border-border hover:shadow-lg transition-all duration-300">
                                        <h3 className="text-lg font-bold text-church-text mb-3 flex items-start">
                                            <span className="text-church-gold mr-3 font-bold">9.</span>
                                            <span>Church Government</span>
                                        </h3>
                                        <p className="text-church-text-light text-sm">
                                            Church government by apostles, prophets, evangelists, pastors, teachers, elders and deacons.
                                        </p>
                                    </div>

                                    {/* Tenet 10 */}
                                    <div className="bg-white rounded-lg p-6 border border-border hover:shadow-lg transition-all duration-300">
                                        <h3 className="text-lg font-bold text-church-text mb-3 flex items-start">
                                            <span className="text-church-gold mr-3 font-bold">10.</span>
                                            <span>The Possibility of Falling From Grace</span>
                                        </h3>
                                        <p className="text-church-text-light text-sm">
                                            The possibility of falling from grace through disobedience and apostasy.
                                        </p>
                                    </div>

                                    {/* Tenet 11 */}
                                    <div className="bg-white rounded-lg p-6 border border-border hover:shadow-lg transition-all duration-300">
                                        <h3 className="text-lg font-bold text-church-text mb-3 flex items-start">
                                            <span className="text-church-gold mr-3 font-bold">11.</span>
                                            <span>Tithes and Offerings</span>
                                        </h3>
                                        <p className="text-church-text-light text-sm">
                                            The obligatory nature of tithes and offerings to support the work of God.
                                        </p>
                                    </div>

                                    {/* Tenet 12 */}
                                    <div className="bg-white rounded-lg p-6 border border-border hover:shadow-lg transition-all duration-300">
                                        <h3 className="text-lg font-bold text-church-text mb-3 flex items-start">
                                            <span className="text-church-gold mr-3 font-bold">12.</span>
                                            <span>Divine Healing</span>
                                        </h3>
                                        <p className="text-church-text-light text-sm">
                                            Divine healing through obedience to the command of our Lord Jesus Christ and faith in His name and the merit of His blood for all sicknesses, diseases and infirmities (Isaiah 53:5, Mark 16:18, James 5:14-18).
                                        </p>
                                    </div>

                                    {/* Tenet 13 */}
                                    <div className="bg-white rounded-lg p-6 border border-border hover:shadow-lg transition-all duration-300">
                                        <h3 className="text-lg font-bold text-church-text mb-3 flex items-start">
                                            <span className="text-church-gold mr-3 font-bold">13.</span>
                                            <span>Faith in God's Provision</span>
                                        </h3>
                                        <p className="text-church-text-light text-sm">
                                            Faith in God, the Jehovah Jireh to supply all your financial needs without going into debt or borrowing money on interest and to be content with having food and raiment. Godliness with contentment is a great gain (Philippians 4:19, Romans 13:8, 1 Timothy 6:6-10).
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="bg-gradient-to-r from-church-blue/10 to-church-gold/10 rounded-lg p-8 border border-church-gold/20 text-center">
                        <h3 className="text-2xl font-bold text-church-text mb-4">
                            Join Our Community
                        </h3>
                        <p className="text-church-text-light mb-6 max-w-2xl mx-auto">
                            Discover more about the Christ Apostolic Church and how you can be part of this growing movement of believers dedicated to apostolic Christianity and spiritual renewal.
                        </p>
                        <a
                            href="/#contact"
                            className="inline-block px-8 py-3 bg-church-gold text-white rounded-lg hover:bg-church-gold/90 transition-colors duration-300 font-semibold"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
