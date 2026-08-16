import React, { useState, useRef, useEffect } from 'react';
import { Heart, Building2, CreditCard, Copy, Check, MapPin, Clock10, ArrowRight, Globe, Smartphone, ShieldCheck, Bell } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Footer from '@/components/Footer';
import globusLogo from '@/assets/globus.png';
import gtbLogo from '@/assets/gtb.png';
import givingImage from '@/assets/giving.jpg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GivePage: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const tabContentRef = useRef<HTMLDivElement>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedCampusIndex, setCopiedCampusIndex] = useState<number | null>(null);
  const [selectedCampus, setSelectedCampus] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'online' | 'bank' | 'branch'>('bank');

  const nigeriaOptions = [
    {
      name: 'Globus Bank',
      logo: globusLogo,
      accountNumber: '1000229170',
      accountName: 'Christ Apostolic Church - Itedo Yiyanju',
    },
    {
      name: 'GTB',
      logo: gtbLogo,
      accountNumber: '0019268524',
      accountName: 'Christ Apos Chr Itedo Yiyanju',
    },
  ];

  const branches = [
    {
      name: 'CAC Itedo Yiyanju – Head Quarters',
      shortName: 'Head Quarters',
      address: '5, Itedo Yiyanju Close, Alagbado, Lagos',
      serviceTime: 'Service Time: 8:00 AM every Sunday',
      bankAccounts: [
        {
          bank: 'Globus Bank',
          logo: globusLogo,
          accountNumber: '1000229170',
          accountName: 'Christ Apostolic Church - Itedo Yiyanju',
        },
        {
          bank: 'GTB',
          logo: gtbLogo,
          accountNumber: '0019268524',
          accountName: 'Christ Apos Chr Itedo Yiyanju',
        },
      ],
    },
    {
      name: 'CAC Itedo Yiyanju – Ikorodu Branch',
      shortName: 'Ikorodu Branch',
      address: 'Beside Dampress Secondary School, New Covenant Estate, Eyebeere, Gbaga off Ijede Road, Ikorodu Lagos',
      serviceTime: 'Service Time: 8:00 AM every Sunday',
      bankAccounts: [
        {
          bank: 'GTB',
          logo: gtbLogo,
          accountNumber: '0019268525',
          accountName: 'CAC Itedo Yiyanju Ikorodu',
        },
      ],
    },
    {
      name: 'CAC Itedo Yiyanju – Ifo Branch',
      shortName: 'Ifo Branch',
      address: 'Ayoola Street, After Better land school, Balogun Tuntun, Gasline Ososun road, Ifo Ogun State',
      serviceTime: 'Service Time: 8:00 AM every Sunday',
      bankAccounts: [
        {
          bank: 'Globus Bank',
          logo: globusLogo,
          accountNumber: '1000229172',
          accountName: 'Christ Apostolic Church - Itedo Yiyanju Ifo Branch',
        },
      ],
    },
  ];

  const handleCopyAccountNumber = (accountNumber: string, index: number) => {
    navigator.clipboard.writeText(accountNumber).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  const handleCopyCampusAccountNumber = (accountNumber: string, index: number) => {
    navigator.clipboard.writeText(accountNumber).then(() => {
      setCopiedCampusIndex(index);
      setTimeout(() => setCopiedCampusIndex(null), 2000);
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2,
      });
      gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        delay: 0.4,
      });
      gsap.from('.hero-cta', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        delay: 0.6,
      });

      gsap.utils.toArray('.section-reveal').forEach((el: any) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: 'power3.out',
        });
      });

      gsap.utils.toArray('.section-stagger').forEach((container: any) => {
        const items = container.querySelectorAll('.section-stagger-item');
        gsap.from(items, {
          scrollTrigger: { trigger: container, start: 'top 85%' },
          opacity: 0,
          y: 30,
          stagger: 0.15,
          duration: 0.6,
          ease: 'power3.out',
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!tabContentRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo('.tab-content', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' });

      document.querySelectorAll('.tab-stagger').forEach((container) => {
        const items = container.querySelectorAll('.tab-stagger-item');
        gsap.fromTo(
          items,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.5,
            ease: 'power3.out',
            delay: 0.2,
          },
        );
      });
    }, tabContentRef);

    return () => ctx.revert();
  }, [activeTab]);

  return (
    <div ref={pageRef} className="bg-light-200 dark:bg-dark-300 min-h-[max(700px,30vh)]">
      <section className="bg-background relative mt-10 flex items-center justify-center overflow-hidden">
        <div className="relative z-10 container mx-auto px-6 py-20 text-center">
          <div className="mx-auto max-w-3xl">
            <div className="border-foreground/10 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium backdrop-blur-sm">
              <Heart className="h-4 w-4 text-red-400" />
              <span className="text-foreground/90">Partner with God's Work</span>
            </div>

            <h1 className="hero-title text-foreground mb-6 text-4xl leading-tight font-bold md:text-6xl lg:text-7xl">
              Your Giving.
              <br />
              <span className="text-church-gold-300">Eternal Impact.</span>
            </h1>

            <p className="hero-subtitle text-foreground/80 mx-auto mb-8 max-w-2xl text-lg leading-relaxed md:text-xl">Join us in advancing the Kingdom through your generous support. Every seed sown produces a harvest of righteousness.</p>

            <div className="hero-cta flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-church-gold-400 text-church-blue-900 hover:bg-church-gold-300 hover:shadow-glow px-8 font-semibold"
                onClick={() => {
                  setActiveTab('bank');
                  document.getElementById('giving-tabs')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Give via Bank Transfer
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                size="lg"
                className="border-foreground/10 bg-background text-foreground hover:bg-background/20 border backdrop-blur-sm"
                onClick={() => {
                  setActiveTab('branch');
                  document.getElementById('giving-tabs')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Give to a Branch
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section id="giving-tabs" className="relative z-20 -mt-20 py-16 md:py-24">
        <div className="container mx-auto px-6">
          {/* Tab Nav */}
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {[
              { id: 'bank' as const, label: 'Bank Transfer', icon: Building2 },
              { id: 'branch' as const, label: 'Specific Branch', icon: MapPin },
              { id: 'online' as const, label: 'Online Giving', icon: CreditCard },
            ].map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-2 rounded-full px-6 py-3 font-medium transition-all duration-300 ${activeTab === tab.id ? 'bg-church-gold-400 text-church-blue-900 shadow-glow scale-105' : 'border-light-400 bg-light text-text hover:bg-light-300 dark:border-dark-500 dark:bg-dark-400 dark:text-light dark:hover:bg-dark-500 border'}`}>
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div ref={tabContentRef}>
            {/* ── BANK TRANSFER ── */}
            {activeTab === 'bank' && (
              <div className="tab-content mx-auto max-w-4xl">
                <div className="mb-12 text-center">
                  <h2 className="text-text dark:text-light mb-4 text-3xl font-bold md:text-4xl">Bank Transfer</h2>
                  <p className="text-text-300 dark:text-text-400 text-lg">Transfer directly to our church accounts</p>
                </div>

                <div className="tab-stagger grid gap-6 md:grid-cols-2">
                  {nigeriaOptions.map((option, index) => (
                    <Card key={index} className="tab-stagger-item border-light-400 bg-light hover:border-church-gold-400/40 hover:shadow-medium dark:border-dark-500 dark:bg-dark-400 border-2 transition-all duration-300">
                      <CardHeader className="border-light-400 bg-light-200 dark:border-dark-500 dark:bg-dark-500 border-b pb-4">
                        <CardTitle className="flex items-center gap-3 text-xl">
                          <img src={option.logo} alt={option.name} className="h-10 w-10 object-contain" />
                          <span className="text-text dark:text-light">{option.name}</span>
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="space-y-6 pt-6">
                        <div className="space-y-2">
                          <label className="text-text-300 dark:text-text-400 text-xs font-medium tracking-wider uppercase">Account Number</label>
                          <div className="flex items-center gap-3">
                            <Input value={option.accountNumber} readOnly className="bg-light-200 text-text dark:bg-dark-500 dark:text-light h-14 border-0 font-mono text-2xl font-bold" />
                            <Button size="icon" onClick={() => handleCopyAccountNumber(option.accountNumber, index)} className="border-light-400 text-text hover:bg-light-300 dark:border-dark-500 dark:text-light dark:hover:bg-dark-500 h-14 w-14 shrink-0 border bg-transparent">
                              {copiedIndex === index ? <Check className="h-6 w-6 text-green-600" /> : <Copy className="h-6 w-6" />}
                            </Button>
                          </div>
                          {copiedIndex === index && <p className="animate-in fade-in slide-in-from-top-1 text-sm font-medium text-green-600">Copied to clipboard!</p>}
                        </div>

                        <div className="space-y-2">
                          <label className="text-text-300 dark:text-text-400 text-xs font-medium tracking-wider uppercase">Account Name</label>
                          <p className="bg-light-200 text-text dark:bg-dark-500 dark:text-light rounded-lg p-3 text-lg font-semibold">{option.accountName}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="bg-church-gold-400/10 dark:bg-church-gold-400/5 mt-12 rounded-2xl p-8 text-center">
                  <Smartphone className="text-church-gold-400 mx-auto mb-4 h-12 w-12" />
                  <h3 className="text-text dark:text-light mb-2 text-xl font-bold">Mobile Banking?</h3>
                  <p className="text-text-300 dark:text-text-400">Use the account details above for instant transfers via your banking app.</p>
                </div>
              </div>
            )}

            {/* ── ONLINE GIVING ── */}
            {activeTab === 'online' && (
              <div className="tab-content mx-auto max-w-2xl">
                <div className="text-center">
                  <div className="bg-church-gold-400/10 mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full">
                    <CreditCard className="text-church-gold-400 h-12 w-12" />
                  </div>

                  <h2 className="text-text dark:text-light mb-4 text-3xl font-bold md:text-4xl">Online Giving</h2>

                  <div className="border-church-gold-300 bg-church-gold-50 text-church-gold-700 dark:border-church-gold-700 dark:bg-church-gold-950/30 dark:text-church-gold-300 mb-6 inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-semibold">
                    <Bell className="h-4 w-4" />
                    Coming Soon
                  </div>

                  <p className="text-text-300 dark:text-text-400 mx-auto mb-8 max-w-lg text-lg leading-relaxed">We're working on integrating secure online payment options so you can give conveniently from anywhere in the world. Stay tuned!</p>

                  <div className="tab-stagger border-light-400 bg-light dark:border-dark-500 dark:bg-dark-400 mx-auto max-w-md space-y-4 rounded-2xl border p-8 text-left">
                    <h3 className="text-text dark:text-light text-center font-semibold">What to expect</h3>
                    <div className="space-y-3">
                      {[
                        {
                          icon: CreditCard,
                          text: 'Card payments (Visa, Mastercard, Verve)',
                        },
                        { icon: Globe, text: 'International currency support' },
                        {
                          icon: ShieldCheck,
                          text: 'Bank-grade encryption & security',
                        },
                        {
                          icon: Smartphone,
                          text: 'Mobile-friendly checkout',
                        },
                      ].map((feature, idx) => (
                        <div key={idx} className="tab-stagger-item text-text-300 dark:text-text-400 flex items-center gap-3 text-sm">
                          <div className="bg-church-gold-400/10 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
                            <feature.icon className="text-church-gold-400 h-4 w-4" />
                          </div>
                          <span>{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Button size="lg" className="bg-church-gold-400 text-church-blue-900 hover:bg-church-gold-300" onClick={() => setActiveTab('bank')}>
                      <Building2 className="mr-2 h-4 w-4" />
                      Give via Bank Transfer Instead
                    </Button>
                  </div>

                  <p className="text-text-300 dark:text-text-400 mt-6 text-sm">
                    Questions? Contact our finance team at{' '}
                    <a href="mailto:finance@cactedo.org" className="text-church-gold-500 dark:text-church-gold-300 hover:underline">
                      finance@cactedo.org
                    </a>
                  </p>
                </div>
              </div>
            )}

            {/* ── BRANCH SELECTION ── */}
            {activeTab === 'branch' && (
              <div className="tab-content mx-auto max-w-5xl">
                <div className="mb-12 text-center">
                  <h2 className="text-text dark:text-light mb-4 text-3xl font-bold md:text-4xl">Support a Specific Branch</h2>
                  <p className="text-text-300 dark:text-text-400 text-lg">Direct your giving to the location where you want to make an impact</p>
                </div>

                {/* Branch selector */}
                <div className="tab-stagger mb-8 grid gap-4 md:grid-cols-3">
                  {branches.map((campus, index) => (
                    <button key={index} onClick={() => setSelectedCampus(index)} className={`tab-stagger-item rounded-xl border-2 p-6 text-left transition-all duration-300 ${selectedCampus === index ? 'border-church-gold-400 bg-church-gold-400/10 shadow-glow dark:bg-church-gold-400/5 scale-105' : 'border-light-400 hover:border-church-gold-400/40 hover:bg-light-300 dark:border-dark-500 dark:hover:border-church-gold-400/30 dark:hover:bg-dark-500'}`}>
                      <div className="mb-2 flex items-start gap-3">
                        <div className={`rounded-lg p-2 ${selectedCampus === index ? 'bg-church-gold-400 text-church-blue-900' : 'bg-light-300 dark:bg-dark-500'}`}>
                          <MapPin className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className={`text-lg font-bold ${selectedCampus === index ? 'text-church-gold-500 dark:text-church-gold-300' : 'text-text dark:text-light'}`}>{campus.shortName}</h4>
                          <p className="text-text-300 dark:text-text-400 mt-1 line-clamp-2 text-xs">{campus.address}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Selected campus card */}
                <Card className="campus-details border-church-gold-400/20 bg-light shadow-large dark:bg-dark-400 overflow-hidden border-2">
                  <div className="border-church-gold-400/20 bg-church-gold-400/5 dark:bg-church-gold-400/5 border-b p-6">
                    <div className="flex items-center gap-3">
                      <div className="bg-church-gold-400 text-church-blue-900 rounded-full p-3">
                        <Building2 className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-text dark:text-light text-2xl font-bold">{branches[selectedCampus].name}</h3>
                        <p className="text-text-300 dark:text-text-400 mt-1 flex items-center gap-2">
                          <Clock10 className="h-4 w-4" />
                          {branches[selectedCampus].serviceTime}
                        </p>
                      </div>
                    </div>
                  </div>

                  <CardContent className="space-y-6 p-6">
                    <div className="bg-light-200 dark:bg-dark-500 flex items-start gap-3 rounded-xl p-4">
                      <MapPin className="text-church-gold-400 mt-0.5 h-5 w-5 shrink-0" />
                      <div>
                        <p className="text-text dark:text-light mb-1 font-medium">Address</p>
                        <p className="text-text-300 dark:text-text-400">{branches[selectedCampus].address}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-text dark:text-light flex items-center gap-2 text-lg font-bold">
                        <Building2 className="text-church-gold-400 h-5 w-5" />
                        Bank Accounts
                      </h4>

                      <div className="space-y-3">
                        {branches[selectedCampus].bankAccounts.map((account, idx) => (
                          <div key={idx} className="border-light-400 bg-light hover:shadow-soft dark:border-dark-500 dark:bg-dark-500 rounded-xl border p-5 transition-shadow">
                            <div className="mb-4 flex items-center gap-3">
                              <img src={account.logo} alt={account.bank} className="h-8 w-8 object-contain" />
                              <span className="text-text dark:text-light font-bold">{account.bank}</span>
                            </div>

                            <div className="space-y-3">
                              <div className="bg-light-200 dark:bg-dark-600 flex items-center justify-between gap-4 rounded-lg p-3">
                                <div>
                                  <p className="text-text-300 dark:text-text-400 mb-1 text-xs tracking-wider uppercase">Account Number</p>
                                  <p className="text-text dark:text-light font-mono text-xl font-bold">{account.accountNumber}</p>
                                </div>
                                <Button size="icon" onClick={() => handleCopyCampusAccountNumber(account.accountNumber, idx)} className="border-light-400 text-text hover:bg-light-300 dark:border-dark-500 dark:text-light dark:hover:bg-dark-500 h-10 w-10 shrink-0 border bg-transparent">
                                  {copiedCampusIndex === idx ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                                </Button>
                              </div>

                              {copiedCampusIndex === idx && <p className="animate-in fade-in slide-in-from-top-1 text-sm font-medium text-green-600">Copied to clipboard!</p>}

                              <div>
                                <p className="text-text-300 dark:text-text-400 mb-1 text-xs tracking-wider uppercase">Account Name</p>
                                <p className="text-text dark:text-light font-medium">{account.accountName}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="from-light-300 to-light-200 dark:from-dark-400 dark:to-dark-300 bg-linear-to-b py-16">
        <div className="container mx-auto px-6">
          <div className="section-reveal mb-12 text-center">
            <h2 className="text-text dark:text-light mb-4 text-3xl font-bold">Why Your Giving Matters</h2>
            <div className="bg-church-gold-400 mx-auto h-1 w-20 rounded-full" />
          </div>

          <div className="section-stagger mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            {[
              {
                title: 'Evangelism',
                desc: 'Supporting outreach programs that spread the gospel to unreached communities.',
                icon: Globe,
              },
              {
                title: 'Discipleship',
                desc: 'Training and equipping believers to grow deeper in their faith and service.',
                icon: Heart,
              },
              {
                title: 'Community',
                desc: 'Building facilities and resources that serve our congregation and neighbors.',
                icon: Building2,
              },
            ].map((item, idx) => (
              <div key={idx} className="section-stagger-item rounded-2xl p-6 text-center">
                <div className="bg-church-gold-400/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                  <item.icon className="text-church-gold-400 h-8 w-8" />
                </div>
                <h3 className="text-text dark:text-light mb-3 text-xl font-bold">{item.title}</h3>
                <p className="text-text-300 dark:text-text-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-light dark:bg-dark-400 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="section-reveal mb-12 text-center">
            <h2 className="text-text dark:text-light mb-4 text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="text-text-300 dark:text-text-400">Everything you need to know about giving</p>
          </div>

          <div className="section-stagger space-y-4">
            {[
              {
                q: 'What is the difference between tithes and offerings?',
                a: 'Tithes are 10% of your income given as an act of worship and obedience. Offerings are additional gifts given voluntarily to support specific needs or projects.',
              },
              {
                q: 'How is my donation used?',
                a: 'Your giving supports our ministry operations, evangelism programs, facility maintenance, staff welfare, and community outreach initiatives.',
              },
              {
                q: 'Can I give anonymously?',
                a: 'Yes. For bank transfers, you can contact our finance team if you prefer to remain anonymous.',
              },
              {
                q: 'Is my payment information secure?',
                a: 'Absolutely. Bank transfers use your own secure banking platform. When we launch online giving, we will partner with PCI-DSS compliant payment processors.',
              },
              {
                q: 'Can I get a receipt for tax purposes?',
                a: 'Yes, all donations are acknowledged. For bank transfers, contact finance@cactedo.org to request a receipt.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="section-stagger-item border-light-400 bg-light-200 hover:shadow-soft dark:border-dark-500 dark:bg-dark-500 rounded-xl border p-6 transition-shadow">
                <h3 className="text-text dark:text-light mb-2 text-lg font-bold">{faq.q}</h3>
                <p className="text-text-300 dark:text-text-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-church-blue-700 text-light dark:bg-church-blue-900 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Partner with Us?</h2>
          <p className="text-light/80 mx-auto mb-8 max-w-2xl text-lg">"Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." – 2 Corinthians 9:7</p>
          <Button
            size="lg"
            className="bg-church-gold-400 text-church-blue-900 hover:bg-church-gold-300 hover:shadow-glow px-8 font-semibold"
            onClick={() => {
              setActiveTab('bank');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Start Giving Now
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default GivePage;
