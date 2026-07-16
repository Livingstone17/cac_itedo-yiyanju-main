import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import gsap from "gsap";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const contactInfo = [
    {
      title: "Visit Us",
      content: "5, Matanmi Close, Oko-Filling,\nAlagbado, Lagos",
      icon: MapPin,
      color: "bg-church-blue-700",
    },
    {
      title: "Call Us",
      content: "(234) 803-307-2838\n(234) 806-983-1978",
      icon: Phone,
      color: "bg-church-gold-400",
    },
    {
      title: "Email Us",
      content: "cacitedoyiyanju@gmail.com",
      icon: Mail,
      color: "bg-church-blue-500",
    },
  ];

  const servicesTimes = [
    { service: "Sunday Morning Worship", time: "7:00 AM" },
    { service: "Tuesday Bible Study", time: "5:00 PM" },
    { service: "Thursday Prayer Meeting", time: "8:00 AM" },
    { service: "Friday Monthly Youth Vigil", time: "11:00 PM" },
  ];

  const otherBranches = [
    {
      name: "CAC Itedo Yiyanju – Ikorodu Worship Centre",
      address: "Beside Dampress Secondary School, New Covenant Estate, Eyebeere, Gbaga off Ijede Road, Ikorodu Lagos",
      mapUrl: "https://maps.app.goo.gl/q2e2kC3fWugVhw7y7",
      serviceTime: "Service Time: 8:00 AM every Sunday",
    },
    {
      name: "CAC Itedo Yiyanju – Ifo Worship Centre",
      address: "Ayoola Street, After Better land school, Balogun Tuntun, Gasline Ososun road, Ifo Ogun State",
      mapUrl: "https://maps.app.goo.gl/aD42amXhC632U6GX7",
      serviceTime: "Service Time: 8:00 AM every Sunday",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      gsap.from(".contact-title", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out",
      });

      gsap.from(".contact-subtitle", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.1,
        ease: "power2.out",
      });

      gsap.from(".contact-card", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });

      gsap.from(".contact-form", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        opacity: 0,
        x: 60,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".contact-map", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        opacity: 0,
        scale: 0.98,
        duration: 1,
        ease: "power2.out",
      });

      gsap.from(".contact-branch", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch("https://formspree.io/f/mgvnyndq", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          formRef.current?.reset();
          toast({
            title: "Message Sent!",
            description: "We will get back to you soon.",
          });
        }
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Failed to send message.",
          variant: "destructive",
        });
      });
  };

  return (
    <section ref={sectionRef} id="contact" className="reveal from-light-200 to-light-300 dark:from-dark-300 dark:to-dark-400 bg-linear-to-b py-8">
      <div className="container mx-auto px-4">
        <div className="stagger mb-16 text-center">
          <h2 className="contact-title stagger-item text-text dark:text-light mb-6 text-3xl font-bold md:text-4xl">
            Need Prayers <span className="text-church-gold-400">?</span>
          </h2>

          <p className="contact-subtitle stagger-item text-text-300 dark:text-text-400 mx-auto max-w-2xl text-base">When life feels overwhelming, prayer changes everything. We are here to stand with you.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* LEFT — contact info + service times */}
          <div className="contact-card space-y-6 lg:col-span-1">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="contact-card border-light-400 bg-light shadow-soft dark:border-dark-500 dark:bg-dark-400 border">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${info.color}`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-text dark:text-light font-semibold">{info.title}</h4>
                        <p className="text-text-300 dark:text-text-400 text-sm whitespace-pre-line">{info.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            <Card className="contact-card border-light-400 bg-light shadow-soft dark:border-dark-500 dark:bg-dark-400 border">
              <CardHeader>
                <CardTitle className="text-text dark:text-light flex items-center">
                  <Clock className="text-church-gold-400 mr-2 h-5 w-5" />
                  Service Times
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {servicesTimes.map((s, i) => (
                    <div key={i} className="flex justify-between">
                      <span className="text-text-300 dark:text-text-400 text-sm">{s.service}</span>
                      <span className="text-church-gold-400 text-sm font-semibold">{s.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FORM */}
          <div className="contact-form lg:col-span-2">
            <Card className="border-light-400 shadow-large dark:border-dark-500 dark:bg-dark-400 border">
              <CardHeader>
                <CardTitle className="text-text dark:text-light text-2xl">Send us a Message</CardTitle>
              </CardHeader>

              <CardContent>
                <form
                  ref={formRef}
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleFormSubmit(e);
                  }}
                  className="space-y-6"
                >
                  <Input name="firstName" placeholder="Your name" required className="border-light-400 bg-light text-text placeholder:text-text-400 dark:border-dark-500 dark:bg-dark-500 dark:text-light dark:placeholder:text-text-400" />
                  <Input name="email" type="email" placeholder="Email" required className="border-light-400 bg-light text-text placeholder:text-text-400 dark:border-dark-500 dark:bg-dark-500 dark:text-light dark:placeholder:text-text-400" />
                  <Textarea name="message" placeholder="Message..." required className="border-light-400 bg-light text-text placeholder:text-text-400 dark:border-dark-500 dark:bg-dark-500 dark:text-light dark:placeholder:text-text-400" />

                  <Button type="submit" className="bg-church-gold-400 text-church-blue-900 hover:bg-church-gold-300 hover:shadow-glow w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* MAP */}
        <div className="contact-map mt-16">
          <Card className="border-light-400 shadow-large dark:border-dark-500 overflow-hidden border">
            <div className="relative aspect-video">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.7992498029625!2d3.2491340759097!3d6.6717791933233155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b99e6e2162077%3A0x510b8a2a2b7e1897!2sChrist%20Apostolic%20Church%2C%20Itedo%20Yiyanju!5e0!3m2!1sen!2sng!4v1782062227366!5m2!1sen!2sng" width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              <div className="bg-church-blue-900/70 text-light absolute inset-0 flex flex-col items-center justify-center transition-opacity hover:opacity-0">
                <h4 className="mb-2 text-2xl font-bold">Find Us</h4>
                <p className="text-light/80 mb-6 text-sm">5, Itedo Yiyanju Close, Alagbado, Lagos</p>
                <Button asChild className="bg-church-gold-400 text-church-blue-900 hover:bg-church-gold-300">
                  <a href="https://www.google.com/maps/dir/?api=1&destination=6.671838,3.251764" target="_blank" rel="noopener noreferrer">
                    <MapPin className="mr-2 h-5 w-5" />
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* BRANCHES */}
        <div className="mt-16 text-center">
          <h3 className="text-text dark:text-light mb-8 text-2xl font-bold">Our Worship Centres</h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {otherBranches.map((b, i) => (
            <a key={i} href={b.mapUrl} target="_blank" rel="noopener noreferrer" className="contact-branch">
              <Card className="border-light-400 bg-light dark:border-dark-500 dark:bg-dark-400 h-full border transition-transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <h4 className="text-text dark:text-light mb-2 font-semibold">{b.name}</h4>
                  <p className="text-text-300 dark:text-text-400 text-sm">{b.address}</p>
                  <p className="text-text-300 dark:text-text-400 mb-4 text-sm">{b.serviceTime}</p>
                  <Button size="sm" className="bg-church-gold-400 text-church-blue-900 hover:bg-church-gold-300">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
