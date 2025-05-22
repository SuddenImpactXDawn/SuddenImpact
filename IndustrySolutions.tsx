
import { useState } from 'react';
import { motion } from 'framer-motion';
import { IndustryCard } from '@/components/solutions/IndustryCard';
import IndustryDetails from '@/components/solutions/IndustryDetails';
import { Calendar, Building, Utensils, Music, Home, Briefcase, Palette, Stethoscope } from 'lucide-react';
import SectionTitle from '../design/SectionTitle';
import StyleProvider from '../design/StyleProvider';

const industries = [
  {
    id: "real-estate",
    icon: <Home className="h-5 w-5" />,
    title: "Real Estate",
    description: "Property management and real estate agent solutions",
    detailsTitle: "AI Voice Agents for Real Estate",
    detailsDescription: "Our AI agents handle property inquiries, schedule viewings, and follow up with potential buyers, freeing up agents to close more deals.",
    features: [
      "Instant response to property listing inquiries",
      "24/7 qualification of potential buyers",
      "Automated viewing scheduling and reminders",
      "Post-viewing feedback collection",
      "Continuous follow-ups with prospective clients"
    ],
    results: [
      "42% increase in qualified leads",
      "28% reduction in admin workload",
      "35% more properties shown per month"
    ]
  },
  {
    id: "restaurants",
    icon: <Utensils className="h-5 w-5" />,
    title: "Restaurants",
    description: "Streamline reservations and orders",
    detailsTitle: "AI Voice Agents for Restaurants",
    detailsDescription: "Our AI voice agents handle phone reservations, takeout orders, and answer common questions, allowing your staff to focus on delivering exceptional in-house service.",
    features: [
      "24/7 reservation management",
      "Takeout order processing",
      "Menu and allergen information",
      "Special event bookings",
      "Peak-time call overflow handling"
    ],
    results: [
      "89% reduction in missed calls",
      "32% increase in takeout orders",
      "4.8/5 average customer satisfaction"
    ]
  },
  {
    id: "music",
    icon: <Music className="h-5 w-5" />,
    title: "Music Producers & Artists",
    description: "Booking and fan engagement solutions",
    detailsTitle: "AI Voice Agents for Music Industry",
    detailsDescription: "Our AI voice agents handle booking inquiries, merchandise sales, and fan engagement, allowing artists and producers to focus on creative work.",
    features: [
      "24/7 booking inquiry handling",
      "Merchandise order processing",
      "Fan club membership management",
      "Event information distribution",
      "VIP package coordination"
    ],
    results: [
      "45% increase in merchandise sales",
      "37% more efficient booking process",
      "42% improvement in fan engagement"
    ]
  },
  {
    id: "professional-services",
    icon: <Briefcase className="h-5 w-5" />,
    title: "Professional Services",
    description: "Client intake and appointment scheduling",
    detailsTitle: "AI Voice Agents for Professional Services",
    detailsDescription: "Our AI voice agents handle initial client inquiries, collect information, and schedule consultations, letting professionals focus on delivering high-value services.",
    features: [
      "24/7 inquiry handling",
      "Client pre-screening",
      "Consultation scheduling",
      "Service information and pricing",
      "Follow-up management"
    ],
    results: [
      "52% reduction in administrative tasks",
      "38% increase in consultation bookings",
      "41% faster client onboarding"
    ]
  },
  {
    id: "artists",
    icon: <Palette className="h-5 w-5" />,
    title: "Artists",
    description: "Gallery management and commission handling",
    detailsTitle: "AI Voice Agents for Artists",
    detailsDescription: "Our AI voice agents manage gallery inquiries, commission requests, and art sales, allowing artists to focus on their creative process.",
    features: [
      "24/7 gallery information",
      "Commission request handling",
      "Art sales processing",
      "Exhibition scheduling",
      "Client follow-ups"
    ],
    results: [
      "48% increase in commission requests",
      "35% reduction in administrative time",
      "42% more gallery visits scheduled"
    ]
  },
  {
    id: "healthcare",
    icon: <Stethoscope className="h-5 w-5" />,
    title: "Healthcare",
    description: "Patient scheduling and information",
    detailsTitle: "AI Voice Agents for Healthcare Providers",
    detailsDescription: "Our AI voice agents handle appointment scheduling, insurance verification, and common patient questions, letting your staff focus on in-person care.",
    features: [
      "24/7 appointment scheduling",
      "New patient intake",
      "Insurance verification",
      "Appointment reminders",
      "Post-visit follow-ups"
    ],
    results: [
      "62% reduction in missed appointments",
      "41% decrease in scheduling staff workload",
      "35% faster new patient processing"
    ]
  },
];

const IndustrySolutions = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);

  return (
    <div>
      <StyleProvider className="text-center mb-16">
        <SectionTitle
          title="Industry Solutions"
          subtitle="Our AI voice agents are tailored to meet the specific needs of your industry"
          centered={true}
        />
      </StyleProvider>

      {/* Background gradient decorations */}
      <div className="relative">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-pink/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-aqua/5 rounded-full blur-3xl"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10">
          <div className="space-y-4">
            {industries.slice(0, 6).map((industry, index) => (
              <IndustryCard
                key={industry.id}
                id={industry.id}
                icon={industry.icon}
                title={industry.title}
                description={industry.description}
                isActive={selectedIndustry.id === industry.id}
                onClick={() => setSelectedIndustry(industry)}
                index={index}
              />
            ))}
          </div>

          <div className="lg:col-span-2">
            <motion.div
              key={selectedIndustry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="h-full"
            >
              <IndustryDetails industry={selectedIndustry} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrySolutions;
