import React, { useState } from "react";
import { Heart, Building2, DollarSign, Copy, Check, MapPin, Clock10 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import globusLogo from "@/assets/globus.png";
import gtbLogo from "@/assets/gtb.png";
import givingImage from "@/assets/giving.jpg";

const GivePage: React.FC = () => {
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
    const [copiedCampusIndex, setCopiedCampusIndex] = useState<number | null>(null);
    const [selectedCampus, setSelectedCampus] = useState<number>(0);

    const nigeriaOptions = [
        {
            name: "Globus Bank",
            logo: globusLogo,
            accountNumber: "1000229170",
            accountName: "Christ Apostolic Church - Itedo Yiyanju",
        },
        {
            name: "GTB",
            logo: gtbLogo,
            accountNumber: "0019268524",
            accountName: "Christ Apos Chr Itedo Yiyanju",
        },
    ];

    const branches = [
        {
            name: "CAC Itedo Yiyanju – Head Quarters",
            address: "5, Itedo Yiyanju Close, Alagbado, Lagos",
            serviceTime: "Service Time: 8:00 AM every Sunday",
            bankAccounts: [
                {
                    bank: "Globus Bank",
                    logo: globusLogo,
                    accountNumber: "1000229170",
                    accountName: "CAC Itedo Yiyanju Main",
                },
                {
                    bank: "GTB",
                    logo: gtbLogo,
                    accountNumber: "0019268524",
                    accountName: "CAC Itedo Yiyanju Main",
                },
            ],
        },
        {
            name: "CAC Itedo Yiyanju – Ikorodu Branch",
            address: "Beside Dampress Secondary School, New Covenant Estate, Eyebeere, Gbaga off Ijede Road, Ikorodu Lagos",
            serviceTime: "Service Time: 8:00 AM every Sunday",
            bankAccounts: [
                {
                    bank: "Globus Bank",
                    logo: globusLogo,
                    accountNumber: "1000229171",
                    accountName: "CAC Itedo Yiyanju Ikorodu",
                },
                {
                    bank: "GTB",
                    logo: gtbLogo,
                    accountNumber: "0019268525",
                    accountName: "CAC Itedo Yiyanju Ikorodu",
                },
            ],
        },
        {
            name: "CAC Itedo Yiyanju – Ifo Branch",
            address: "Ayoola Street, After Better land school, Balogun Tuntun, Gasline Ososun road, Ifo Ogun State",
            serviceTime: "Service Time: 8:00 AM every Sunday",
            bankAccounts: [
                {
                    bank: "Globus Bank",
                    logo: globusLogo,
                    accountNumber: "1000229172",
                    accountName: "CAC Itedo Yiyanju Ifo",
                },
                {
                    bank: "GTB",
                    logo: gtbLogo,
                    accountNumber: "0019268526",
                    accountName: "CAC Itedo Yiyanju Ifo",
                },
            ],
        },
    ];

    const handleCopyAccountNumber = (accountNumber: string, index: number) => {
        navigator.clipboard.writeText(accountNumber).then(() => {
            setCopiedIndex(index);
            // Reset the copied state after 2 seconds
            setTimeout(() => setCopiedIndex(null), 5000);
        });
    };

    const handleCopyCampusAccountNumber = (accountNumber: string, index: number) => {
        navigator.clipboard.writeText(accountNumber).then(() => {
            setCopiedCampusIndex(index);
            // Reset the copied state after 2 seconds
            setTimeout(() => setCopiedCampusIndex(null), 5000);
        });
    };

    return (
        <div className="min-h-screen pt-16">
            {/* Hero Section */}
            <section
                className="relative text-white py-20 px-6 overflow-hidden"
                style={{
                    backgroundImage: `url(${givingImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                }}
            >
                {/* Black Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Content */}
                <div className="relative z-10 container mx-auto text-center">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Your Generosity
                            <span className="block text-church-gold">Our Mission</span>
                        </h1>
                        <p className="text-xl text-white/90 mb-8">
                            Partner with God in purpose: give your tithes, offerings, and seeds to help us reach souls with the life-changing gospel.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <Button
                                variant="hero"
                                size="lg"
                                onClick={() => document.getElementById("giving-options")?.scrollIntoView({ behavior: "smooth" })}
                            >
                                Give Now
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Giving Options Section */}
            <section id="giving-options" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-church-text mb-4">Ways to Give</h2>
                        <p className="text-lg text-church-text-light max-w-2xl mx-auto">
                            Join us as we align our resources with our faith, partnering with God to advance the gospel in our time.
                        </p>
                    </div>

                    {/* Bank Transfer Section */}
                    <div className="mb-20">
                        <h3 className="text-2xl font-bold text-church-text mb-8 flex items-center gap-3">
                            <Building2 className="w-7 h-7 text-church-gold" />
                            Bank Transfer
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                            {/* Empty Column */}
                            <div></div>

                            {/* Cards Container */}
                            <div className="lg:col-span-3">
                                <div className="grid md:grid-cols-2 gap-6">
                                    {nigeriaOptions.map((option, index) => (
                                        <Card key={index} className="shadow-soft border-church-blue/10 hover:shadow-md transition">
                                            <CardHeader>
                                                <CardTitle className="text-lg text-church-text flex items-center gap-3">
                                                    <img src={option.logo} alt={option.name} className="w-8 h-8 object-contain" />
                                                    {option.name}
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent className="space-y-4">
                                                <div>
                                                    <p className="text-sm text-church-text-light font-medium">Account Number</p>
                                                    <div className="flex items-center justify-between mt-1 gap-2">
                                                        <p className="text-xl font-semibold text-church-text">{option.accountNumber}</p>
                                                        <button
                                                            onClick={() => handleCopyAccountNumber(option.accountNumber, index)}
                                                            className="p-2 rounded-lg hover:bg-church-blue/10 transition-colors"
                                                            title="Copy account number"
                                                        >
                                                            {copiedIndex === index ? (
                                                                <Check className="w-5 h-5 text-green-600" />
                                                            ) : (
                                                                <Copy className="w-5 h-5 text-church-gold" />
                                                            )}
                                                        </button>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-church-text-light font-medium">Account Name</p>
                                                    <p className="text-sm text-church-text mt-1">{option.accountName}</p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>

                            {/* Empty Column */}
                            <div></div>
                        </div>
                    </div>

                    {/* Online Payment Section */}
                    <div>
                        <h3 className="text-2xl font-bold text-church-text mb-8 flex items-center gap-3">
                            <DollarSign className="w-7 h-7 text-church-gold" />
                            Online Payment
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                            {/* Empty Column */}
                            <div></div>

                            {/* Payment Options */}
                            <div className="lg:col-span-3">
                                <div className="space-y-4">
                                    {/* Paystack */}
                                    <Card className="shadow-soft border-church-blue/10 hover:shadow-md transition">
                                        <CardContent className="p-6 flex items-center justify-between">
                                            <div>
                                                <h4 className="text-lg font-semibold text-church-text mb-2">Paystack</h4>
                                                <p className="text-sm text-church-text-light">Pay securely with Naira (₦)</p>
                                            </div>
                                            <Button
                                                variant="hero"
                                                onClick={() => window.open("https://paystack.com/pay/your-link", "_blank")}
                                            >
                                                Give Now
                                            </Button>
                                        </CardContent>
                                    </Card>

                                    {/* Flutterwave */}
                                    {/* <Card className="shadow-soft border-church-blue/10 hover:shadow-md transition">
                                        <CardContent className="p-6 flex items-center justify-between">
                                            <div>
                                                <h4 className="text-lg font-semibold text-church-text mb-2">Flutterwave</h4>
                                                <p className="text-sm text-church-text-light">Pay securely in multiple currencies</p>
                                            </div>
                                            <Button
                                                variant="hero"
                                                onClick={() => window.open("https://rave.flutterwave.com/pay/your-link", "_blank")}
                                            >
                                                Give Now
                                            </Button>
                                        </CardContent>
                                    </Card> */}
                                </div>
                            </div>

                            {/* Empty Column */}
                            <div></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Give to Specific Campus Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-church-text mb-4">Give to Specific Branch</h2>
                        <p className="text-lg text-church-text-light max-w-2xl mx-auto">
                            Support the work of God in a specific location. Choose which branch your giving should support.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                        {/* Empty Column */}
                        <div></div>

                        {/* Campus Selection */}
                        <div className="lg:col-span-3">
                            <div className="grid md:grid-cols-2 gap-4 mb-8">
                                {branches.map((campus, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedCampus(index)}
                                        className={`p-4 rounded-lg border-2 text-left transition-all ${selectedCampus === index
                                            ? "border-church-gold bg-church-gold/10"
                                            : "border-church-blue/20 hover:border-church-gold/50"
                                            }`}
                                    >
                                        <div className="flex items-start gap-3">
                                            <MapPin className={`w-5 h-5 flex-shrink-0 mt-1 ${selectedCampus === index ? "text-church-gold" : "text-church-text-light"}`} />
                                            <div>
                                                <h4 className="font-semibold text-church-text text-sm mb-1">{campus.name}</h4>
                                                <p className="text-xs text-church-text-light">{campus.address}</p>
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>

                            {/* Selected Campus Details */}
                            <Card className="shadow-soft border-church-blue/10 mb-8">
                                <CardContent className="p-6">
                                    <h3 className="text-lg font-semibold text-church-text mb-4">{branches[selectedCampus].name}</h3>
                                    <div className="space-y-3 mb-6">
                                        <div className="flex gap-3">
                                            <MapPin className="w-5 h-5 text-church-gold flex-shrink-0 mt-0.5" />
                                            <p className="text-church-text-light">{branches[selectedCampus].address}</p>
                                        </div>
                                        <div className="flex gap-3">
                                            <Clock10 className="w-5 h-5 text-church-gold flex-shrink-0 mt-0.5" />
                                            <p className="text-church-text-light">{branches[selectedCampus].serviceTime}</p>
                                        </div>
                                    </div>

                                    {/* Branch Account Details */}
                                    <div className="border-t border-church-blue/10 py-6">
                                        <h4 className="font-semibold text-church-text mb-4">Bank Accounts for This Branch</h4>
                                        <div className="space-y-4">
                                            {branches[selectedCampus].bankAccounts.map((account, idx) => (
                                                <div key={idx} className="bg-church-cream/50 rounded-lg p-4 space-y-2">
                                                    <div className="flex items-center gap-2">
                                                        <img src={account.logo} alt={account.bank} className="w-6 h-6 object-contain" />
                                                        <p className="text-sm font-semibold text-church-text">{account.bank}</p>
                                                    </div>
                                                    <div className="flex items-center justify-between gap-2">
                                                        <div>
                                                            <p className="text-xs text-church-text-light">Account Number</p>
                                                            <p className="text-sm font-mono font-semibold text-church-text">{account.accountNumber}</p>
                                                        </div>
                                                        <button
                                                            onClick={() => handleCopyCampusAccountNumber(account.accountNumber, idx)}
                                                            className="p-2 rounded-lg hover:bg-white transition-colors flex-shrink-0"
                                                            title="Copy account number"
                                                        >
                                                            {copiedCampusIndex === idx ? (
                                                                <Check className="w-5 h-5 text-green-600" />
                                                            ) : (
                                                                <Copy className="w-5 h-5 text-church-gold" />
                                                            )}
                                                        </button>
                                                    </div>
                                                    <div>
                                                        <p className="text-xs text-church-text-light">Account Name</p>
                                                        <p className="text-xs text-church-text">{account.accountName}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="border-t border-church-blue/10 pt-6 mt-6">
                                        <p className="text-sm text-church-text-light mb-4">
                                            Use the account details above for bank transfers, or use the online payment options provided earlier to give securely.
                                        </p>
                                        <Button variant="hero" className="w-full">
                                            Give to {branches[selectedCampus].name.split(" – ")[1] || "Head Quarters"}
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Empty Column */}
                        <div></div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gradient-subtle">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-church-text text-center mb-12">Frequently Asked Questions</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div>
                            <h3 className="text-lg font-semibold text-church-text mb-3">What are tithes?</h3>
                            <p className="text-church-text-light">
                                A tithe is 10% of your income given to support the ministry and spread the gospel.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-church-text mb-3">What are offerings?</h3>
                            <p className="text-church-text-light">
                                Offerings are voluntary gifts given as an act of worship and support beyond tithes.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-church-text mb-3">How is my giving used?</h3>
                            <p className="text-church-text-light">
                                Your giving supports our ministry, outreach programs, facilities, and spreading the gospel.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-church-text mb-3">Is giving secure?</h3>
                            <p className="text-church-text-light">
                                Yes, all online payments are secured by industry-standard encryption through Paystack and Flutterwave.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default GivePage;
