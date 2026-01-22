import React from "react";
import { Heart, Building2, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const GiveSection: React.FC = () => {
  const nigeriaOptions = [
    {
      name: "Globus Bank",
      accountNumber: "1000229170",
      accountName: "Christ Apostolic Church - Itedo Yiyanju",
      icon: Building2,
    },
    {
      name: "Zenith Bank",
      accountNumber: "1010503530",
      accountName: "CAC Itedo Yiyanju",
      icon: Building2,
    },
    {
      name: "GTB",
      accountNumber: "0019268524",
      accountName: "Christ Apos Chr Itedo Yiyanju",
      icon: Building2,
    },
  ];

  const onlinePaymentOptions = [
    {
      name: "Paystack",
      currency: "Naira",
      description: "Pay securely with Naira",
      link: "https://paystack.com/pay/your-paystack-link", // Replace with actual link
    },
    {
      name: "Flutterwave",
      currency: "Naira",
      description: "Pay securely with Naira",
      link: "https://rave.flutterwave.com/pay/your-flutterwave-link", // Replace with actual link
    },
  ];

  const internationalOptions = [
    {
      name: "PayPal",
      email: "giving@cacitedoyiyanju.org",
      link: "https://www.paypal.com/donate/",
    },
    {
      name: "Stripe",
      email: "giving@cacitedoyiyanju.org",
      link: "https://donate.stripe.com/",
    },
  ];

  return (
    <section className="py-8 bg-white" id="give">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-church-text mb-6">
            Give <span className="text-church-gold">Online</span>
          </h2>
          <p className="text-base text-church-text-light max-w-2xl mx-auto">
            Sow your seeds, Tithes and offerings and partner with us to take the gospel to the ends of the earth.
          </p>
        </div>

        {/* Give From Nigeria */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-church-text mb-8 flex items-center gap-2">
            <Heart className="w-6 h-6 text-church-gold" />
            Give From Nigeria
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Bank Accounts */}
            {nigeriaOptions.map((option, index) => (
              <Card key={index} className="shadow-soft border-church-blue/10">
                <CardHeader>
                  <CardTitle className="text-lg text-church-text flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-church-gold" />
                    {option.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm text-church-text-light">Account Number</p>
                    <p className="text-lg font-semibold text-church-text">{option.accountNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-church-text-light">Account Name</p>
                    <p className="text-sm text-church-text">{option.accountName}</p>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Paystack */}
            <Card className="shadow-soft border-church-blue/10">
              <CardHeader>
                <CardTitle className="text-lg text-church-text">Paystack</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-church-text-light mb-2">Currency</p>
                  <p className="text-lg font-semibold text-church-gold">Naira (₦)</p>
                </div>
                <Button
                  variant="hero"
                  className="w-full"
                  onClick={() => window.open("https://paystack.com/pay/your-link", "_blank")}
                >
                  Give Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Give From Foreign Countries */}
        {/* <div className="mb-16">
          <h3 className="text-2xl font-bold text-church-text mb-8 flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-church-gold" />
            Give From Foreign Countries
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {onlinePaymentOptions.map((option, index) => (
              <Card key={index} className="shadow-soft border-church-blue/10">
                <CardHeader>
                  <CardTitle className="text-lg text-church-text">{option.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-church-text-light mb-1">Currency</p>
                    <p className="text-lg font-semibold text-church-gold">{option.currency}</p>
                  </div>
                  <p className="text-sm text-church-text">{option.description}</p>
                  <Button
                    variant="hero"
                    className="w-full"
                    onClick={() => window.open(option.link, "_blank")}
                  >
                    Give Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}

        {/* International Options */}
        {/* <div>
          <h3 className="text-2xl font-bold text-church-text mb-8 flex items-center gap-2">
            <Heart className="w-6 h-6 text-church-gold" />
            Give Worldwide
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {internationalOptions.map((option, index) => (
              <Card key={index} className="shadow-soft border-church-blue/10">
                <CardHeader>
                  <CardTitle className="text-lg text-church-text">{option.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-church-text-light mb-1">Email</p>
                    <p className="text-sm text-church-text font-mono">{option.email}</p>
                  </div>
                  <Button
                    variant="hero"
                    className="w-full"
                    onClick={() => window.open(option.link, "_blank")}
                  >
                    Give Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default GiveSection;
