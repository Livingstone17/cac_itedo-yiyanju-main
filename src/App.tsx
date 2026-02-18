import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Listen from "./pages/LiveStream";
import Sermons from "./pages/Sermons";
import Give from "./pages/Give";
import Navigation from "./components/Navigation";
import WhatsAppButton from "./components/Whatsapp";
import Events from "./pages/Events";
import AboutCAC from "./pages/AboutCAC";
import AboutItedo from "./pages/AboutItedo";
import Ministries from "./pages/Ministries";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/listen/:type" element={<Listen />} />
          <Route path="/about-cac" element={<AboutCAC />} />
          <Route path="/about-itedo" element={<AboutItedo />} />
          <Route path="/events" element={<Events />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/sermons" element={<Sermons />} />
          <Route path="/give" element={<Give />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;




