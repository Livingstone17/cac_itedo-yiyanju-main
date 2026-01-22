import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "2348033072838"; // Replace with your church WhatsApp number
  const message = "Hello! I’d like to learn more about CAC Itedo Yiyanju.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-all transform hover:scale-110 animate-bounce z-50"
    //   className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-transform transform hover:scale-110 z-50"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8" />
    </a>
  );
};

export default WhatsAppButton;
