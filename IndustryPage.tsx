import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Check, ArrowRight, BadgeDollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import StyleProvider from '@/components/design/StyleProvider';
import SectionTitle from '@/components/design/SectionTitle';
import IndustryAnimation from '@/components/industries/IndustryAnimation';

// Define industry data with testimonials
const industryData = {
  restaurants: {
    title: "Restaurants & Hospitality",
    intro: "Transform your restaurant or hospitality business with AI voice agents that handle reservations, takeout orders, and customer inquiries 24/7, allowing your staff to focus on delivering exceptional in-person experiences.",
    image: "/lovable-uploads/46b36e77-e44d-4dfd-8c35-6805698f485f.png",
    benefits: [
      "Never miss a reservation or takeout order call again",
      "Reduce staffing costs while maintaining excellent service",
      "Handle peak-time call overflow automatically",
      "Collect valuable customer feedback and preferences",
      "Provide 24/7 availability for information and bookings"
    ],
    pricing: [
      {
        title: "Impact Starter",
        price: "$397",
        description: "Perfect for small cafés and restaurants",
        features: [
          "1 AI voice agent",
          "100 minutes/month",
          "Restaurant menu integration",
          "Basic reservation handling",
          "Business hours configuration"
        ],
        highlighted: false,
        monthlyUrl: "https://buy.stripe.com/dRmaEPeRt38Ubmr7L7ejK0w",
        annualUrl: "https://buy.stripe.com/8x27sDbFh6l61LR0iFejK0x",
        annualPrice: "$3,811/annual",
        setupFee: "$197.00 One-time set-up"
      },
      {
        title: "Impact Pro",
        price: "$597",
        description: "Ideal for busy restaurants and small chains",
        features: [
          "2 AI voice agents",
          "300 minutes/month",
          "Advanced reservation system integration",
          "Special requests handling",
          "Custom voice and personality",
          "Customer recognition system",
          "Weekly performance reports"
        ],
        highlighted: true,
        monthlyUrl: "https://buy.stripe.com/28E3cncJl24Q2PVd5rejK0z",
        annualUrl: "https://buy.stripe.com/14AcMX7p1eRC3TZ4yVejK0A",
        annualPrice: "$5,731/annual",
        setupFee: "$197.00 One-time set-up"
      },
      {
        title: "Impact Enterprise",
        price: "$897",
        description: "For restaurant groups and large establishments",
        features: [
          "5 AI voice agents",
          "600 minutes/month",
          "Multi-location support",
          "POS & CRM integration",
          "VIP customer recognition",
          "Custom workflows and scripts",
          "Detailed analytics dashboard",
          "Priority support"
        ],
        highlighted: false,
        monthlyUrl: "https://buy.stripe.com/eVqdR18t538Ubmr8PbejK0B",
        annualUrl: "https://buy.stripe.com/6oU28j38L24QeyD5CZejK0C",
        annualPrice: "$8,611/annual",
        setupFee: "$197.00 One-time set-up"
      }
    ],
    testimonials: [
      {
        quote: "Our staff used to spend hours on the phone taking orders and reservations. Now our AI assistant handles it all, and our team can focus on creating amazing dining experiences.",
        name: "Michael Chen",
        position: "Owner, Fusion Bistro"
      },
      {
        quote: "We've seen a 35% increase in takeout orders since implementing the AI voice agent. It never misses specials or upsell opportunities!",
        name: "Sarah Johnson",
        position: "Manager, Harbor Grill"
      }
    ]
  },
  realestate: {
    title: "Real Estate",
    intro: "Elevate your real estate business with AI voice agents that qualify leads, schedule property viewings, and follow up with potential buyers 24/7, helping your agents focus on closing deals rather than administrative tasks.",
    image: "/lovable-uploads/3094ebcc-0925-48b6-9f13-c4e025b7e67d.png",
    benefits: [
      "Qualify leads 24/7 without agent intervention",
      "Automatically schedule and confirm property viewings",
      "Collect detailed buyer requirements and preferences",
      "Never miss a follow-up with interested buyers",
      "Free up agents' time for high-value activities"
    ],
    pricing: [
      {
        title: "Impact Starter",
        price: "$397",
        description: "Perfect for individual agents",
        features: [
          "1 AI voice agent",
          "150 minutes/month",
          "Lead qualification",
          "Viewing scheduling",
          "Basic CRM integration",
          "Property information handling"
        ],
        highlighted: false,
        monthlyUrl: "https://buy.stripe.com/4gM8wH10DcJu2PV0iFejK0d",
        annualUrl: "https://buy.stripe.com/28EfZ9aBd38U1LR0iFejK0e",
        annualPrice: "$3,811/annual",
        setupFee: "$197.00 One-time set-up"
      },
      {
        title: "Impact Pro",
        price: "$597",
        description: "Ideal for real estate teams and small agencies",
        features: [
          "3 AI voice agents",
          "400 minutes/month",
          "Advanced lead qualification",
          "Property matching system",
          "Detailed buyer preference tracking",
          "Automated follow-up sequences",
          "Performance analytics"
        ],
        highlighted: true,
        monthlyUrl: "https://buy.stripe.com/3cIcMX8t5dNy627d5rejK0f",
        annualUrl: "https://buy.stripe.com/8x23cn8t58tegGL6H3ejK0g",
        annualPrice: "$5,731/annual",
        setupFee: "$197.00 One-time set-up"
      },
      {
        title: "Impact Enterprise",
        price: "$897",
        description: "For large brokerages with multiple teams",
        features: [
          "10 AI voice agents",
          "1000 minutes/month",
          "Multi-team management",
          "Advanced CRM & MLS integration",
          "Custom workflows per agent team",
          "Lead routing and distribution",
          "White-labeled solution",
          "Priority support"
        ],
        highlighted: false,
        monthlyUrl: "https://buy.stripe.com/9B6dR124HeRC6275CZejK0h",
        annualUrl: "https://buy.stripe.com/3cIdR18t510MfCHd5rejK0i",
        annualPrice: "$8,611/annual",
        setupFee: "$197.00 One-time set-up"
      }
    ],
    testimonials: [
      {
        quote: "Our agents save at least 15 hours per week now that the AI assistant handles initial inquiries and schedules viewings. Our sales have increased by 28% this quarter!",
        name: "Jennifer Lopez",
        position: "Broker, Prime Properties"
      },
      {
        quote: "The detailed lead qualification from the AI voice agent means our agents only speak with serious buyers who are ready to move forward. Game changer!",
        name: "David Wilson",
        position: "Sales Director, Metropolitan Realty"
      }
    ]
  },
  healthcare: {
    title: "Healthcare & Wellness",
    intro: "Revolutionize your healthcare or wellness practice with HIPAA-compliant AI voice agents that handle appointment scheduling, patient inquiries, and follow-ups, allowing your staff to focus on providing exceptional care.",
    image: "/lovable-uploads/04e02938-36ca-4abc-adad-95afd668326b.png",
    benefits: [
      "Reduce administrative workload for front-office staff",
      "Decrease appointment no-shows with automated reminders",
      "Answer common patient questions 24/7",
      "Collect patient information securely before appointments",
      "Maintain HIPAA compliance while improving efficiency"
    ],
    pricing: [
      {
        title: "Impact Starter",
        price: "$797",
        description: "Perfect for small practices and individual providers",
        features: [
          "1 HIPAA-compliant AI voice agent",
          "150 minutes/month",
          "Appointment scheduling",
          "Basic patient triage",
          "Appointment reminders",
          "FAQ handling"
        ],
        highlighted: false,
        monthlyUrl: "https://buy.stripe.com/4gM3cnbFheRC3TZd5rejK0p",
        annualUrl: "https://buy.stripe.com/00wdR14cPdNyfCHaXjejK0r",
        annualPrice: "$7,651/annual",
        setupFee: "$297.00 One-time set-up"
      },
      {
        title: "Impact Pro",
        price: "$1,097",
        description: "Ideal for established practices and clinics",
        features: [
          "3 HIPAA-compliant AI voice agents",
          "400 minutes/month",
          "Advanced appointment management",
          "Insurance verification assistance",
          "Patient portal integration",
          "Customized patient communication",
          "Detailed reporting"
        ],
        highlighted: true,
        monthlyUrl: "https://buy.stripe.com/14A9ALgZBbFq76baXjejK0s",
        annualUrl: "https://buy.stripe.com/fZu28j4cP9xiain4yVejK0t",
        annualPrice: "$10,531/annual",
        setupFee: "$297.00 One-time set-up"
      },
      {
        title: "Impact Enterprise",
        price: "$1,497",
        description: "For medical groups and healthcare networks",
        features: [
          "10 HIPAA-compliant AI voice agents",
          "1000 minutes/month",
          "Multi-location support",
          "EHR/EMR system integration",
          "Complex scheduling workflows",
          "Custom provider availability rules",
          "Advanced analytics dashboard",
          "Priority support"
        ],
        highlighted: false,
        monthlyUrl: "https://buy.stripe.com/14AdR124HfVGainfdzejK0u",
        annualUrl: "https://buy.stripe.com/4gMbITbFh9xigGL4yVejK0v",
        annualPrice: "$14,371/annual",
        setupFee: "$297.00 One-time set-up"
      }
    ],
    testimonials: [
      {
        quote: "Our front desk was overwhelmed with calls before implementing this AI solution. Now they can focus on patients in the office while the voice agent handles scheduling and routine inquiries.",
        name: "Dr. Rebecca Harris",
        position: "Director, Wellness Medical Center"
      },
      {
        quote: "We've seen a 45% reduction in no-shows thanks to the automated appointment reminders. The ROI was evident within the first month.",
        name: "Thomas Miller",
        position: "Practice Manager, Family Health Associates"
      }
    ]
  },
  contractors: {
    title: "Service Contractors",
    intro: "Transform your service contracting business with AI voice agents that handle appointment scheduling, service inquiries, and follow-up calls 24/7, allowing your team to focus on providing exceptional service rather than phone management.",
    image: "/lovable-uploads/a8ea11c6-eee2-4a72-9e98-851efb0bdc3d.png",
    benefits: [
      "Never miss a service call or new customer inquiry",
      "Qualify leads and schedule appointments automatically",
      "Handle emergency service requests 24/7",
      "Gather detailed information before dispatching technicians",
      "Increase technician productivity with better scheduling"
    ],
    pricing: [
      {
        title: "Impact Starter",
        price: "$397",
        description: "Perfect for independent contractors",
        features: [
          "1 AI voice agent",
          "100 minutes/month",
          "Basic appointment scheduling",
          "Service inquiries handling",
          "Customizable availability calendar",
          "Simple follow-up calls"
        ],
        highlighted: false,
        monthlyUrl: "https://buy.stripe.com/aFa14ffVxdNy9ej1mJejK06",
        annualUrl: "https://buy.stripe.com/fZu00b38LaBm627aXjejK07",
        annualPrice: "$3,811/annual",
        setupFee: "$197.00 One-time set-up"
      },
      {
        title: "Impact Pro",
        price: "$597",
        description: "Ideal for small contractor teams",
        features: [
          "2 AI voice agents",
          "300 minutes/month",
          "Advanced appointment management",
          "Emergency service prioritization",
          "Technician-specific scheduling",
          "Quote request handling",
          "Customer satisfaction follow-ups"
        ],
        highlighted: true,
        monthlyUrl: "https://buy.stripe.com/eVqfZ95gT38UgGL3uRejK08",
        annualUrl: "https://buy.stripe.com/eVq8wHbFhaBm8af9TfejK09",
        annualPrice: "$5,731/annual",
        setupFee: "$197.00 One-time set-up"
      },
      {
        title: "Impact Enterprise",
        price: "$897",
        description: "For large service companies with multiple teams",
        features: [
          "5 AI voice agents",
          "800 minutes/month",
          "Multi-service area support",
          "CRM & field service software integration",
          "Complex dispatching logic",
          "Service contract management",
          "Custom reporting and analytics",
          "Priority support"
        ],
        highlighted: false,
        monthlyUrl: "https://buy.stripe.com/5kQ5kv10DbFq1LRe9vejK0a",
        annualUrl: "https://buy.stripe.com/bJe5kvdNp10MeyDc1nejK0b",
        annualPrice: "$8,611/annual",
        setupFee: "$197.00 One-time set-up"
      }
    ],
    testimonials: [
      {
        quote: "This AI assistant has transformed our business. We've expanded service coverage without adding office staff, and our technicians always have the information they need before arriving at a job.",
        name: "Robert Johnson",
        position: "Owner, Elite Plumbing Solutions"
      },
      {
        quote: "The AI voice agent efficiently screens emergency calls, ensuring our team responds to genuine emergencies quickly while scheduling routine matters appropriately. Our customer satisfaction is at an all-time high.",
        name: "Amanda Taylor",
        position: "Operations Manager, Reliable Electric"
      }
    ]
  },
  music: {
    title: "Music Industry",
    intro: "Revolutionize your music business with AI voice agents that handle booking requests, fan inquiries, and merchandising management 24/7, allowing your team to focus on creating and performing great music.",
    image: "/lovable-uploads/293aebbf-1435-4e16-867f-2a95f52ef685.png",
    benefits: [
      "Never miss a booking or performance opportunity",
      "Manage fan requests and inquiries automatically",
      "Handle merchandise orders efficiently",
      "Gather fan information for marketing purposes",
      "Increase booking efficiency and reduce scheduling conflicts"
    ],
    pricing: [
      {
        title: "Impact Starter",
        price: "$397",
        description: "Perfect for independent musicians and small studios",
        features: [
          "1 AI voice agent",
          "100 minutes/month",
          "Basic booking management",
          "Fan inquiries handling",
          "Customizable availability calendar",
          "Simple follow-up messages"
        ],
        highlighted: false,
        monthlyUrl: "https://buy.stripe.com/4gM00bfVxbFq2PV9TfejK0j",
        annualUrl: "https://buy.stripe.com/7sY00bcJl38UgGLaXjejK0k",
        annualPrice: "$3,811/annual",
        setupFee: "$197.00 One-time set-up"
      },
      {
        title: "Impact Pro",
        price: "$597",
        description: "Ideal for music labels and established artists",
        features: [
          "2 AI voice agents",
          "300 minutes/month",
          "Advanced booking management",
          "VIP fan engagement",
          "Artist-specific scheduling",
          "Merchandise order handling",
          "Fan satisfaction follow-ups"
        ],
        highlighted: true,
        monthlyUrl: "https://buy.stripe.com/cNi5kv6kX7pa2PVd5rejK0l",
        annualUrl: "https://buy.stripe.com/9B600bfVx4cYbmr2qNejK0m",
        annualPrice: "$5,731/annual",
        setupFee: "$197.00 One-time set-up"
      },
      {
        title: "Impact Enterprise",
        price: "$897",
        description: "For music companies with multiple artists and venues",
        features: [
          "5 AI voice agents",
          "800 minutes/month",
          "Multi-venue support",
          "CRM & ticketing software integration",
          "Complex event management",
          "Fan club management",
          "Custom reporting and analytics",
          "Priority support"
        ],
        highlighted: false,
        monthlyUrl: "https://buy.stripe.com/bJecMXeRt6l6bmr9TfejK0n",
        annualUrl: "https://buy.stripe.com/dRm7sD24HfVG4Y33uRejK0o",
        annualPrice: "$8,611/annual",
        setupFee: "$197.00 One-time set-up"
      }
    ],
    testimonials: [
      {
        quote: "Since implementing the AI voice agent, I've been able to focus more on music production and less on answering routine calls. Our booking inquiries are handled efficiently 24/7.",
        name: "Alex Morgan",
        position: "Independent Music Producer, Rhythm Studios"
      },
      {
        quote: "The AI voice system has revolutionized how we manage fan interactions and merchandise sales. It's like having a dedicated assistant working around the clock.",
        name: "Taylor Swift",
        position: "Artist & Performer, Melody Records"
      }
    ]
  }
};

const IndustryPage = () => {
  const { industryId } = useParams<{ industryId: string }>();
  const navigate = useNavigate();
  const [industry, setIndustry] = useState<string>(industryId || 'restaurants');
  const [selectedBusinessType, setSelectedBusinessType] = useState<string | null>(null);
  
  useEffect(() => {
    // Get selected business type from session storage if available
    const storedBusinessType = sessionStorage.getItem('selectedBusinessType');
    if (storedBusinessType) {
      setSelectedBusinessType(storedBusinessType);
      sessionStorage.removeItem('selectedBusinessType'); // Clean up after using
    }
    
    if (industryId && industryData[industryId as keyof typeof industryData]) {
      setIndustry(industryId);
    } else if (!industryId) {
      navigate('/industries/restaurants', { replace: true });
    }
    
    window.scrollTo(0, 0);
  }, [industryId, navigate]);
  
  const currentIndustry = industryData[industry as keyof typeof industryData];
  
  if (!currentIndustry) {
    return <Navigate to="/404" replace />;
  }

  // Extract the industry name and color based on industry ID
  let industryName = "";
  let textColorClass = "";
  let gradientClass = "";
  let animationType = "";
  
  switch(industry) {
    case "restaurants":
      industryName = "Restaurants &";
      textColorClass = "text-brand-pink";
      gradientClass = "from-brand-pink to-brand-aqua";
      animationType = "restaurants";
      break;
    case "realestate":
      industryName = "Real Estate";
      textColorClass = "text-brand-purple";
      gradientClass = "from-brand-purple to-brand-aqua";
      animationType = "realEstate";
      break;
    case "healthcare":
      industryName = "Healthcare &";
      textColorClass = "text-brand-aqua";
      gradientClass = "from-brand-aqua to-brand-pink";
      animationType = "healthcare";
      break;
    case "contractors":
      industryName = "Service Contractors";
      textColorClass = "text-brand-blue";
      gradientClass = "from-brand-blue to-brand-purple";
      animationType = "contractors";
      break;
    case "music":
      industryName = "Music Industry";
      textColorClass = "text-brand-pink";
      gradientClass = "from-brand-pink to-brand-purple";
      animationType = "music";
      break;
    default:
      industryName = "Restaurants &";
      textColorClass = "text-brand-pink";
      gradientClass = "from-brand-pink to-brand-aqua";
      animationType = "restaurants";
  }

  // Second part of title for restaurants and healthcare
  const secondLine = industry === "restaurants" ? "Hospitality" : industry === "healthcare" ? "Wellness" : "";

  return (
    <Layout lightMode={true}>
      {/* Hero Section */}
      <section className="bg-gray-50 pt-16 pb-24 overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <StyleProvider>
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className={`${textColorClass}`}>{industryName}</span>
                  {secondLine && (
                    <span className="block mt-1">{secondLine}</span>
                  )}
                  <span className="bg-gradient-to-r from-brand-pink to-brand-aqua bg-clip-text text-transparent mt-2 block">AI Voice Solutions</span>
                </h1>
                
                <p className="text-xl text-gray-600 mt-6 max-w-lg">
                  {currentIndustry.intro}
                </p>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-gradient-to-r from-brand-pink to-brand-aqua text-white hover:opacity-90 px-6 py-6 rounded-lg shadow-lg flex items-center gap-2 text-lg"
                    onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    View Pricing Options
                    <ArrowRight size={18} />
                  </Button>
                  
                  <Link
                    to="/demo"
                    className="px-6 py-6 rounded-lg border border-gray-200 hover:border-brand-pink/30 shadow-sm hover:shadow transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                  >
                    Try AI Demo
                  </Link>
                </div>
              </div>
            </StyleProvider>
            
            <StyleProvider delay={0.3}>
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-gradient-to-br from-brand-pink/5 via-transparent to-brand-aqua/5 blur-xl"></div>
                <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-brand-aqua/10 to-transparent blur-xl"></div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transform hover:scale-[1.02] transition-transform duration-300"
                >
                  {/* Show only the animation and remove the background image */}
                  <div className="relative">
                    <IndustryAnimation industry={animationType} />
                  </div>
                </motion.div>
              </div>
            </StyleProvider>
          </div>
        </div>
      </section>
      
      {/* Key Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Key Benefits"
            subtitle={`How our AI voice agents transform ${currentIndustry.title} businesses`}
            centered={true}
          />
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {currentIndustry.benefits.map((benefit, index) => (
              <StyleProvider key={index} delay={index * 0.1} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 flex-shrink-0">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${gradientClass} flex items-center justify-center shadow-md`}>
                      <Check className="text-white" size={16} />
                    </div>
                  </div>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              </StyleProvider>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      {currentIndustry.testimonials && (
        <section className="py-20 bg-gradient-to-br from-brand-pink/5 to-brand-aqua/5">
          <div className="container-custom">
            <SectionTitle
              title={`What ${currentIndustry.title} Clients Say`}
              subtitle="Success stories from businesses like yours"
              centered={true}
            />
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {currentIndustry.testimonials.map((testimonial, index) => (
                <StyleProvider key={index} delay={index * 0.2}>
                  <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 relative">
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-gradient-to-r from-brand-pink/10 to-brand-aqua/10 rounded-full blur-xl"></div>
                    <svg className="h-10 w-10 text-brand-pink/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${gradientClass} flex items-center justify-center text-white font-bold`}>
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <h4 className="text-gray-800 font-medium">{testimonial.name}</h4>
                        <p className="text-gray-500 text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </StyleProvider>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle
            title={`Pricing for ${currentIndustry.title}`}
            subtitle="Select the plan that's right for your business"
            centered={true}
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {currentIndustry.pricing.map((plan, index) => (
              <StyleProvider key={index} delay={index * 0.2}>
                <div 
                  className={`rounded-2xl overflow-hidden bg-white border transition-all duration-300 ${
                    plan.highlighted 
                      ? 'border-brand-pink shadow-xl transform scale-105 md:scale-110 relative z-10' 
                      : 'border-gray-200 shadow-md hover:-translate-y-2 hover:shadow-lg'
                  }`}
                >
                  {plan.highlighted && (
                    <div className={`bg-gradient-to-r ${gradientClass} text-white text-center py-2 font-medium`}>
                      Most Popular
                    </div>
                  )}
                  
                  <div className={`p-8 ${plan.highlighted ? 'bg-gradient-to-b from-gray-50 to-white' : ''}`}>
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold">{plan.title}</h3>
                      {plan.highlighted && (
                        <span className="bg-brand-pink/10 text-brand-pink text-xs font-semibold px-2 py-1 rounded-full">
                          BEST VALUE
                        </span>
                      )}
                    </div>

                    {/* Price Badge */}
                    <div className="mb-6 relative">
                      <div className="flex items-baseline mb-1">
                        <span className={`text-4xl font-bold ${plan.highlighted ? 'text-brand-pink' : ''}`}>{plan.price}</span>
                        <span className={`text-gray-500 ml-1 ${plan.highlighted ? 'text-brand-pink/70' : ''}`}>/mo</span>
                      </div>

                      {/* Setup Fee */}
                      {plan.setupFee && (
                        <div className="text-sm text-gray-500 mb-1">
                          + {plan.setupFee}
                        </div>
                      )}
                      
                      {/* Annual Option */}
                      {plan.annualPrice && (
                        <div className="flex items-center">
                          <BadgeDollarSign size={16} className="text-green-600 mr-1" />
                          <span className="text-sm text-green-600 font-medium">
                            Save with annual billing
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-6 min-h-[40px]">{plan.description}</p>
                    
                    <ul className="space-y-3 mb-8 min-h-[240px]">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start">
                          <div className={`mr-3 mt-1 flex-shrink-0 p-1 rounded-full ${
                            plan.highlighted 
                              ? 'bg-brand-pink/10 text-brand-pink' 
                              : 'bg-brand-aqua/10 text-brand-aqua'
                          }`}>
                            <Check size={12} className={plan.highlighted ? 'text-brand-pink' : 'text-brand-aqua'} />
                          </div>
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="space-y-3">
                      {/* Monthly Button */}
                      {plan.monthlyUrl && (
                        <a
                          href={plan.monthlyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full block text-center py-3 px-4 rounded-lg transition-all duration-300 ${
                            plan.highlighted 
                              ? `bg-gradient-to-r ${gradientClass} text-white hover:shadow-lg` 
                              : 'border border-gray-200 hover:border-brand-pink/30 text-gray-700 hover:shadow'
                          }`}
                        >
                          <span className="font-medium">Select Monthly</span>
                        </a>
                      )}
                      
                      {/* Annual Button */}
                      {plan.annualUrl && (
                        <a
                          href={plan.annualUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full block text-center py-3 px-4 rounded-lg transition-all duration-300 ${
                            plan.highlighted 
                              ? `bg-green-500 text-white hover:shadow-lg` 
                              : 'border border-green-200 bg-green-50 hover:border-green-300 text-green-700 hover:shadow'
                          }`}
                        >
                          <div className="flex flex-col">
                            <span className="font-medium">Select Annual</span>
                            {plan.annualPrice && (
                              <span className="text-xs opacity-90">{plan.annualPrice}</span>
                            )}
                          </div>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </StyleProvider>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-brand-pink/5 to-brand-aqua/5">
        <div className="container-custom text-center max-w-4xl mx-auto">
          <StyleProvider>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your {currentIndustry.title} Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Schedule a personalized demo to see how our AI voice agents can revolutionize your customer interactions and operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/demo"
                className="bg-gradient-to-r from-brand-pink to-brand-aqua text-white hover:opacity-90 px-6 py-3 rounded-lg font-medium shadow-lg flex items-center justify-center gap-2"
              >
                Try AI Demo Now
              </Link>
              <Link 
                to="https://www.go.suddenimpact.agency/meetings/suddenimpact/30min" 
                className="border border-gray-200 hover:border-brand-pink/30 px-6 py-3 rounded-lg font-medium shadow-sm hover:shadow flex items-center justify-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Consultation
              </Link>
            </div>
          </StyleProvider>
        </div>
      </section>
    </Layout>
  );
};

export default IndustryPage;
