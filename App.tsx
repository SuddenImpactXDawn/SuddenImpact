
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import Solutions from "./pages/Solutions";
import Industries from "./pages/Industries";
import IndustryPage from "./components/industries/IndustryPage";
import Demo from "./pages/Demo";
import Legal from "./pages/Legal";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Import niche pages
import HealthcareNiche from "./pages/niches/Healthcare";
import RealEstateNiche from "./pages/niches/RealEstate";
import RestaurantsNiche from "./pages/niches/Restaurants";
import ServiceContractorsNiche from "./pages/niches/ServiceContractors";
import MusicNiche from "./pages/niches/Music";

// Import niche common pages
import NicheAbout from "./pages/niches/common/NicheAbout";
import NicheBooking from "./pages/niches/common/NicheBooking";

import "./styles/iframe-container.css"; // Import the iframe container styles globally

// Import the new MusicIndustry component
import MusicIndustry from "./components/industries/MusicIndustry";

// Create the client
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:industryId" element={<IndustryPage />} />
          {/* Add new route for Music Industry */}
          <Route path="/industries/music" element={<MusicIndustry />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Niche page routes - separate from main navigation */}
          <Route path="/niches/healthcare" element={<HealthcareNiche />} />
          <Route path="/niches/real-estate" element={<RealEstateNiche />} />
          <Route path="/niches/restaurants" element={<RestaurantsNiche />} />
          <Route path="/niches/service-contractors" element={<ServiceContractorsNiche />} />
          <Route path="/niches/music" element={<MusicNiche />} /> {/* Keep this route for direct access */}
          
          {/* Common niche page routes */}
          <Route path="/niches/:industry/about" element={<NicheAbout />} />
          <Route path="/niches/:industry/booking" element={<NicheBooking />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
