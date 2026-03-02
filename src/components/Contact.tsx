

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useRef } from "react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
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

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;

    // Get form data
    const formData = new FormData(form);

    // Send to Formspree
    fetch("https://formspree.io/f/mgvnyndq", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          // Clear form fields on success
          if (formRef.current) {
            formRef.current.reset();
          }
          // Show success toast
          toast({
            title: "Message Sent!",
            description: "We've received your message and will get back to you soon.",
          });
        }
      })
      .catch(() => {
        // Handle error if needed
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
      });
  };

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

  return (
    <section id="contact" className="py-8 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-church-text mb-6">
            Need Prayers <span className="text-church-gold">?</span>
          </h2>
          <p className="text-base text-church-text-light  mx-auto">
            When life feels overwhelming and all you have are questions, it’s easy to feel like hope is out of reach. But here’s the miracle: prayer changes everything. It doesn’t just change your circumstances; it transforms your heart and reconnects you with the God who’s always listening. No matter what you’re facing, we’re here to stand in faith with you. Let us pray for you today!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-2xl font-bold text-church-text mb-6">
              Contact Information
            </h3>

            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="shadow-soft border-church-blue/10">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 ${info.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-church-text mb-2">
                          {info.title}
                        </h4>
                        <p className="text-church-text-light text-sm whitespace-pre-line">
                          {info.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Service Times */}
            <Card className="shadow-soft border-church-blue/10">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-church-text">
                  <Clock className="w-5 h-5 mr-2 text-church-gold" />
                  Service Times
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  {servicesTimes.map((service, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span className="text-church-text text-sm">
                        {service.service}
                      </span>
                      <span className="text-church-gold font-semibold text-sm">
                        {service.time}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-large border-0">
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
                  {/* <div className="grid md:grid-cols-2 gap-4"> */}
                  <div>
                    <label className="text-sm font-medium text-church-text mb-2 block">
                      Name
                    </label>
                    <Input
                      name="firstName"
                      placeholder="Your name"
                      className="border-church-blue/20"
                      required
                    />
                  </div>

                  {/* </div> */}

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-church-text mb-2 block">
                        Email
                      </label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="your.email@example.com"
                        className="border-church-blue/20"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-church-text mb-2 block">
                        Phone
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="+234 800 000 0000"
                        className="border-church-blue/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-church-text mb-2 block">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      placeholder="Tell us how we can help you..."
                      className="min-h-[120px] border-church-blue/20"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full shadow-large"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>

                  <p className="text-sm text-church-text-light text-center">
                    We'll get back to you within 24 hours. For urgent matters,
                    please call us directly.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="overflow-hidden shadow-large border-0">
            <div className="relative aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.7992498029625!2d3.2491340759097!3d6.671779193323303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b99e6e2162077%3A0x510b8a2a2b7e1897!2sChrist%20Apostolic%20Church%2C%20Itedo%20Yiyanju!5e0!3m2!1sen!2sng!4v1758877020761!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 text-white">
                <h4 className="text-2xl font-bold mb-2">Find Us Here</h4>
                <p className="text-sm">
                  5, Itedo Yiyanju Close, Alagbado, Lagos
                </p>
                <Button
                  variant="church-primary"
                  size="sm"
                  className="mt-4"
                  onClick={() =>
                    window.open(
                      `https://www.google.com/maps/dir/?api=1&destination=6.67181,3.25171`,
                      "_blank"
                    )
                  }
                >
                  Get Directions
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Other Branches Section */}
        <div className="mt-16 mb-5">
          <h3 className="text-2xl font-bold text-church-text mb-8 text-center">
            Our Worship Centres
          </h3>
          <p className="text-base text-church-text-light max-w-2xl mx-auto text-center">We are one church with multiple branches across Lagos and beyond.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {otherBranches.map((branch, index) => (
            <a
              key={index}
              href={branch.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="shadow-soft border-church-blue/10 transition-transform transform group-hover:scale-105 group-hover:shadow-lg cursor-pointer">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-lg text-church-text mb-2">
                    {branch.name}
                  </h4>
                  <p className="text-church-text-light text-sm mb-4">
                    {branch.address}
                  </p>
                  <p className="text-church-text-light text-sm mb-4">
                    {branch.serviceTime}
                  </p>
                  <Button variant="church-primary" size="sm">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Contact;
