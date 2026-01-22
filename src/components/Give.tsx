// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Heart, CreditCard, Smartphone, DollarSign, Users, Home, GraduationCap } from "lucide-react";

// const Give = () => {
//   const givingOptions = [
//     {
//       title: "One-Time Gift",
//       description: "Make a single donation to support our ministry",
//       icon: Heart,
//       color: "bg-church-gold",
//     },
//     {
//       title: "Monthly Giving",
//       description: "Set up recurring monthly donations",
//       icon: CreditCard,
//       color: "bg-church-blue",
//     },
//     {
//       title: "Text to Give",
//       description: "Give quickly and securely via text message",
//       icon: Smartphone,
//       color: "bg-accent",
//     },
//   ];

//   const impactAreas = [
//     {
//       title: "Community Outreach",
//       description: "Supporting local families and community programs",
//       icon: Users,
//       amount: "$15,000",
//       period: "this month",
//     },
//     {
//       title: "Building Fund",
//       description: "Expanding our facilities to serve more people",
//       icon: Home,
//       amount: "$45,000",
//       period: "this quarter",
//     },
//     {
//       title: "Youth Ministry",
//       description: "Investing in the next generation",
//       icon: GraduationCap,
//       amount: "$8,500",
//       period: "this month",
//     },
//   ];

//   return (
//     <section id="give" className="py-20 bg-gradient-subtle">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-church-text mb-6">
//             Partner with <span className="text-church-gold">Our Mission</span>
//           </h2>
//           <p className="text-xl text-church-text-light max-w-2xl mx-auto">
//             Your generous giving helps us reach more people with God's love and make a lasting impact in our community.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 items-start">
//           {/* Giving Options */}
//           <div>
//             <h3 className="text-2xl font-bold text-church-text mb-8">Ways to Give</h3>
//             <div className="space-y-6">
//               {givingOptions.map((option, index) => {
//                 const IconComponent = option.icon;
//                 return (
//                   <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300 border-church-blue/10 cursor-pointer group">
//                     <CardContent className="p-6">
//                       <div className="flex items-center space-x-4">
//                         <div className={`w-12 h-12 ${option.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
//                           <IconComponent className="w-6 h-6 text-white" />
//                         </div>
//                         <div className="flex-1">
//                           <h4 className="text-lg font-semibold text-church-text mb-1">{option.title}</h4>
//                           <p className="text-church-text-light text-sm">{option.description}</p>
//                         </div>
//                         <Button variant="ghost" className="text-church-gold hover:text-church-gold-light">
//                           Give
//                         </Button>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Impact Areas */}
//           <div>
//             <h3 className="text-2xl font-bold text-church-text mb-8">Your Impact</h3>
//             <div className="space-y-6">
//               {impactAreas.map((area, index) => {
//                 const IconComponent = area.icon;
//                 return (
//                   <Card key={index} className="shadow-soft border-church-blue/10">
//                     <CardHeader className="pb-3">
//                       <div className="flex items-center space-x-3">
//                         <div className="w-10 h-10 bg-church-blue rounded-lg flex items-center justify-center">
//                           <IconComponent className="w-5 h-5 text-white" />
//                         </div>
//                         <div>
//                           <CardTitle className="text-church-text text-lg">{area.title}</CardTitle>
//                           <CardDescription>{area.description}</CardDescription>
//                         </div>
//                       </div>
//                     </CardHeader>
//                     <CardContent className="pt-0">
//                       <div className="flex items-center justify-between">
//                         <span className="text-2xl font-bold text-church-gold">{area.amount}</span>
//                         <span className="text-sm text-church-text-light">raised {area.period}</span>
//                       </div>
//                       <div className="w-full bg-church-cream rounded-full h-2 mt-3">
//                         <div className="bg-church-gold h-2 rounded-full" style={{ width: "65%" }}></div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 );
//               })}
//             </div>

//             <div className="mt-8 text-center">
//               <Button variant="hero" size="lg" className="w-full shadow-large">
//                 <Heart className="w-5 h-5 mr-2" />
//                 Give Now
//               </Button>
//               <p className="text-sm text-church-text-light mt-3">
//                 Secure giving powered by trusted payment partners
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Give;

// "use client";

// import React, { useState } from "react";
// import { PaystackButton } from "react-paystack";
// import givingImage from "@/assets/giving.jpg"; // <-- replace with your image

// export default function Give() {
//   // const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "";
//   const publicKey = "pk_test_98ee3e773f250b01327ad531ad373b0134c46d91";
//   const [email, setEmail] = useState("");
//   const [amount, setAmount] = useState<number>();
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");

//   const componentProps = {
//     email,
//     amount: amount * 100, // Paystack expects amount in kobo
//     currency: "NGN",
//     metadata: {
//       custom_fields: [
//         {
//           display_name: "Donor Name",
//           variable_name: "donor_name",
//           value: name,
//         },
//         {
//           display_name: "Phone Number",
//           variable_name: "phone_number",
//           value: phone,
//         },
//       ],
//     },
//     publicKey,
//     text: "Donate Now",
//     onSuccess: () => alert("🎉 Thanks for your donation!"),
//     onClose: () => alert("Transaction was not completed."),
//   };

//   return (
//     <section id="give" className="py-20 bg-gray-50">
//       <div className="text-center mb-16">
//       <h2 className="text-3xl font-bold text-church-text mb-4">
//               Support{" "}
//               <span className="text-church-gold">CAC Itedo Yiyanju</span>
//             </h2>
//             <p className="text-church-text-light text-lg">
//               Your generosity helps us spread God’s love, support our community,
//               and reach more lives with the gospel. Thank you for being part of
//               this mission.
//             </p>
         
//         </div>
//       <div className="container mx-auto px-6 lg:px-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           {/* LEFT SIDE - Illustration & Church Info */}
//           <div className="text-center md:text-left">
//             <img
//               src={givingImage}
//               alt="Giving Illustration"
//               className="rounded-xl shadow-lg mb-6 mx-auto md:mx-0"
//             />
            
//           </div>

//           {/* RIGHT SIDE - Paystack Form */}
//           <div className="bg-white shadow-lg rounded-2xl p-8">
//             <h3 className="text-2xl font-bold text-center mb-6">
//               Give / Donate
//             </h3>
//             <form className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full p-3 border rounded-lg"
//                 required
//               />
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full p-3 border rounded-lg"
//                 required
//               />
//               <input
//                 type="tel"
//                 placeholder="Phone Number"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 className="w-full p-3 border rounded-lg"
//                 required
//               />
//               {/* <input
//                 type="number"
//                 placeholder="Amount (NGN)"
//                 value={amount}
//                 onChange={(e) => setAmount(Number(e.target.value))}
//                 className="w-full p-3 border rounded-lg"
//                 required
//               /> */}
//               <div className="relative">
//                 <span className="absolute left-3 top-1/2 -translate-y-1/2 text-church-gold font-semibold">
//                   ₦
//                 </span>
//                 <input
//                   type="number"
//                   placeholder="Amount"
//                   value={amount}
//                   onChange={(e) => setAmount(Number(e.target.value))}
//                   className="w-full pl-8 p-3 border rounded-lg"
//                   required
//                 />
//               </div>
//               <p className="text-sm text-church-text-light mt-1">
//                 Donations are accepted in Nigerian Naira (₦) only
//               </p>

//               <PaystackButton
//                 {...componentProps}
//                 className="w-full bg-church-blue text-white py-3 rounded-lg font-semibold hover:bg-church-blue/90 transition"
//               />
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// import { useState } from "react";
// import { PaystackButton } from "react-paystack";
// import givingImage from "@/assets/giving.jpg";
// import { Lock } from "lucide-react";

// const Give = () => {
//   const publicKey = "pk_test_98ee3e773f250b01327ad531ad373b0134c46d91"; // your test key
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [amount, setAmount] = useState<number>();

//   // simple email validation regex
//   const isValidEmail = (email: string) =>
//     /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

//   const isFormValid =
//     name.trim().length > 0 &&
//     isValidEmail(email) &&
//     phone.trim().length > 0 &&
//     amount > 0;

//   const componentProps = {
//     email,
//     amount: amount * 100, // Paystack uses kobo
//     currency: "NGN",
//     metadata: {
//       custom_fields: [
//         {
//           display_name: "Name",
//           variable_name: "name",
//           value: name,
//         },
//         {
//           display_name: "Phone Number",
//           variable_name: "phone",
//           value: phone,
//         },
//       ],
//     },
//     publicKey,
//     text: "Donate Now",
//     onSuccess: () => alert("🎉 Thank you for your donation!"),
//     onClose: () => alert("⚠️ Transaction cancelled"),
//   };

//   return (
//     <section id="give" className="py-20 bg-accent/5">
//       <div className="text-center mb-16">
//        <h2 className="text-3xl font-bold text-church-text mb-4">
//                Support{" "}
//                <span className="text-church-gold">CAC Itedo Yiyanju</span>
//              </h2>
//              <p className="text-church-text-light text-lg">
//                Your generosity helps us spread God’s love, support our community,
//              and reach more lives with the gospel. Thank you for being part of
//                this mission.
//             </p>
         
//        </div>
//       <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
//         {/* Left side illustration */}
//         <div className="flex flex-col justify-center text-center md:text-left">
//           <img
//             src={givingImage}
//             alt="Giving Illustration"
//             className="rounded-lg shadow-md"
//           />
//         </div>

//         {/* Right side donation form */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h3 className="text-2xl font-bold text-church-text mb-6">
//             Donation Form
//           </h3>
//           <form
//             className="space-y-4"
//             onSubmit={(e) => e.preventDefault()} // prevent refresh
//           >
//             <input
//               type="text"
//               placeholder="Full Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full p-3 border rounded-lg"
//               required
//             />
//             <input
//               type="email"
//               placeholder="Email Address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-3 border rounded-lg"
//               required
//             />
//             <input
//               type="tel"
//               placeholder="Phone Number"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className="w-full p-3 border rounded-lg"
//               required
//             />
//             <div className="relative">
//               <span className="absolute left-3 top-1/2 -translate-y-1/2 text-church-gold font-semibold">
//                 ₦
//               </span>
//               <input
//                 type="number"
//                 placeholder="Amount"
//                 value={amount}
//                 onChange={(e) => setAmount(Number(e.target.value))}
//                 className="w-full pl-8 p-3 border rounded-lg"
//                 required
//               />
//             </div>
//             <p className="text-sm text-church-text-light">
//               Donations are accepted in Nigerian Naira (₦) only
//             </p>

//             {/* Paystack button */}
//             <PaystackButton
//               {...componentProps}
//               disabled={!isFormValid}
//               className={`w-full py-3 rounded-lg font-semibold transition ${
//                 isFormValid
//                   ? "bg-church-gold text-white hover:bg-church-gold/90 cursor-pointer"
//                   : "bg-gray-300 text-gray-500 cursor-not-allowed"
//               }`}
//             />
//           </form>

//           {/* Trust Note */}
//           <div className="flex flex-col items-center mt-6 space-y-2 text-sm text-gray-500">
//             <div className="flex items-center space-x-2">
//               <Lock className="w-4 h-4 text-green-600" />
//               <span>Secured by Paystack</span>
//             </div>
//             <div className="flex space-x-3">
//               <img src="/visa.png" alt="Visa" className="h-6" />
//               <img src="/mastercard.png" alt="MasterCard" className="h-6" />
//               <img src="/verve.png" alt="Verve" className="h-6" />
//             </div>
//             <p>We accept all major cards</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Give;


import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import { Lock } from "lucide-react";
import givingImage from "@/assets/giving.jpg";
import giving from "@/assets/giving.svg";

const GiveSection: React.FC = () => {
  const publicKey = "pk_test_98ee3e773f250b01327ad531ad373b0134c46d91"; // replace with your Paystack test/live key
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [name, setName] = useState("");

  const presetAmounts = [5000, 10000, 20000, 50000,100000];

  const componentProps = {
    email,
    amount: amount * 100, // Paystack expects kobo
    currency: "NGN",
    metadata: {
      custom_fields: [
        {
          display_name: "Name",
          variable_name: "name",
          value: name,
        },
        {
          display_name: "Phone",
          variable_name: "phone",
          value: phone,
        },
      ],
    },
    publicKey,
    text: "Donate Now",
    onSuccess: () => alert("Thanks for your donation 🙏"),
    onClose: () => alert("Payment window closed."),
  };

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16" id="give">
       <div className="text-center mb-16">
       <h2 className="text-3xl font-bold text-church-text mb-4">
               Give{" "}
               <span className="text-church-gold">Online</span>
              </h2>
              <p className="text-church-text-light text-lg">
                Sow your seeds, Tithes and offerings and partner with us to take the gospel to the ends of  the  earth.
             </p>
         
       </div>
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        {/* Left Column */}
        <div >
          <img
            src={givingImage}
            alt="Give Illustration"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Right Column (Form) */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-6">Make a Donation</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-md px-4 py-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-md px-4 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border rounded-md px-4 py-2"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            {/* Preset Amount Buttons */}
            <div className="flex flex-wrap gap-3 mt-4">
              {presetAmounts.map((preset) => (
                <button
                  type="button"
                  key={preset}
                  className={`px-4 py-2 rounded-md border ${
                    amount === preset
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() => setAmount(preset)}
                >
                  ₦{preset.toLocaleString()}
                </button>
              ))}
            </div>

            {/* Custom Amount */}
           <div className="relative">
           <span className="absolute left-3 top-1/4 -translate-y-1/2 text-church-gold font-semibold">
                 ₦
             </span>
            <input
              type="number"
              placeholder="Enter custom amount (NGN only)"
              className="w-full border rounded-md px-4 py-2 mt-4"
              value={amount || ""}
              onChange={(e) => setAmount(Number(e.target.value))}
              required
            />
           </div>

            <PaystackButton
              {...componentProps}
              className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 mt-4"
            />
          </form>

          {/* Trust Note */}
          <div className="flex flex-col items-center mt-6 space-y-2 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Lock className="w-4 h-4 text-green-600" />
              <span>Secured by Paystack</span>
            </div>
            <div className="flex">
              <img src={giving} alt="cards" className="h-8" />
              {/* <img src="/mastercard.png" alt="MasterCard" className="h-6" />
              <img src="/verve.png" alt="Verve" className="h-6" /> */}
            </div>
            <p>We accept all major cards</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiveSection;
