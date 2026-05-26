
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const contactInfo = [
    {
      title: "Visit Us",
      content: "5, Itedo Yiyanju Close,\nAlagbado, Lagos",
      icon: MapPin,
      color: "bg-church-blue",
    },
    {
      title: "Call Us",
      content: "(234) 803-307-2838\n(234) 806-983-1978",
      icon: Phone,
      color: "bg-church-gold",
    },
    {
      title: "Email Us",
      content: "cacitedoyiyanju@gmail.com",
      icon: Mail,
      color: "bg-accent",
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
      address:
        "Beside Dampress Secondary School, New Covenant Estate, Eyebeere, Gbaga off Ijede Road, Ikorodu Lagos",
      mapUrl: "https://maps.app.goo.gl/q2e2kC3fWugVhw7y7",
      serviceTime: "Service Time: 8:00 AM every Sunday",
    },
    {
      name: "CAC Itedo Yiyanju – Ifo Worship Centre",
      address:
        "Ayoola Street,After Better land school,Balogun Tuntun,Gasline Ososun road, Ifo Ogun State",
      mapUrl: "https://maps.app.goo.gl/aD42amXhC632U6GX7",
      serviceTime: "Service Time: 8:00 AM every Sunday",
    },
  ];

  // 🔥 GSAP closing section animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      // Section header (slow, soft entrance)
      gsap.from(".contact-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out",
      });

      gsap.from(".contact-subtitle", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.1,
        ease: "power2.out",
      });

      // Left column cards (contact info + service times)
      gsap.from(".contact-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });

      // Form (main focus)
      gsap.from(".contact-form", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        x: 60,
        duration: 1,
        ease: "power3.out",
      });

      // Map reveal (gentle fade)
      gsap.from(".contact-map", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        opacity: 0,
        scale: 0.98,
        duration: 1,
        ease: "power2.out",
      });

      // Branch cards (final stagger)
      gsap.from(".contact-branch", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
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
    <section ref={sectionRef} id="contact" className="reveal bg-gradient-subtle py-8">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="mb-16 text-center stagger">
          <h2 className="contact-title mb-6 text-3xl font-bold text-church-text md:text-4xl stagger-item">
            Need Prayers <span className="text-church-gold">?</span>
          </h2>

          <p className="contact-subtitle mx-auto max-w-2xl text-base text-church-text-light stagger-item">
            When life feels overwhelming, prayer changes everything. We are here to stand with you.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid gap-8 lg:grid-cols-3">

          {/* LEFT */}
          <div className="space-y-6 lg:col-span-1 contact-card">

            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="contact-card border-church-blue/10 shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className={`h-12 w-12 ${info.color} flex items-center justify-center rounded-lg`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-church-text">{info.title}</h4>
                        <p className="whitespace-pre-line text-sm text-church-text-light">
                          {info.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            <Card className="contact-card border-church-blue/10 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center text-church-text">
                  <Clock className="mr-2 h-5 w-5 text-church-gold" />
                  Service Times
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {servicesTimes.map((s, i) => (
                    <div key={i} className="flex justify-between">
                      <span className="text-sm text-church-text">{s.service}</span>
                      <span className="text-sm font-semibold text-church-gold">{s.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FORM */}
          <div className="lg:col-span-2 contact-form">
            <Card className="border-0 shadow-large">
              <CardHeader>
                <CardTitle className="text-2xl text-church-text">
                  Send us a Message
                </CardTitle>
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
                  <Input name="firstName" placeholder="Your name" required />
                  <Input name="email" type="email" placeholder="Email" required />
                  <Textarea name="message" placeholder="Message..." required />

                  <Button type="submit" className="w-full">
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
          <Card className="overflow-hidden border-0 shadow-large">
            <div className="aspect-video relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.7992498029625!2d3.2491340759097!3d6.671779193323303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b99e6e2162077%3A0x510b8a2a2b7e1897!2sChrist%20Apostolic%20Church%2C%20Itedo%20Yiyanju!5e0!3m2!1sen!2sng!4v1758877020761!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 text-white">
                <h4 className="text-2xl font-bold">Find Us</h4>
              </div>
            </div>
          </Card>
        </div>

        {/* BRANCHES */}
        <div className="mt-16 text-center">
          <h3 className="mb-8 text-2xl font-bold text-church-text">
            Our Worship Centres
          </h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {otherBranches.map((b, i) => (
            <a key={i} href={b.mapUrl} target="_blank" className="contact-branch">
              <Card className="transition-transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold">{b.name}</h4>
                  <p className="text-sm text-church-text-light">{b.address}</p>
                  <p className="mb-4 text-sm text-church-text-light">{b.serviceTime}</p>
                  <Button variant="church-primary" size="sm">
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