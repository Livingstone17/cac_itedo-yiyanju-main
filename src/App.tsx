import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Listen from "./pages/LiveStream";
import Sermons from "./pages/Sermons";
import Give from "./pages/Give";
import Navigation from "./components/Navigation";
import WhatsAppButton from "./components/Whatsapp";
import { ScrollToTop } from "./components/ui/scroll-to-top";
import Events from "./pages/Events";
import AboutCAC from "./pages/AboutCAC";
import AboutItedo from "./pages/AboutItedo";
import Ministries from "./pages/Ministries";
import { LiveStatusProvider } from "../src/contexts/LiveStatusContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
      gcTime: 1000 * 60 * 30,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <TooltipProvider>
        <LiveStatusProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Navigation />
            <Routes>
              <Route path="/" element={<Index />} />
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
            <ScrollToTop />
          </BrowserRouter>
        </LiveStatusProvider>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
