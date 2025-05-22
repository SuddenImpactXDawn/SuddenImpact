
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import SectionTitle from "@/components/design/SectionTitle";
import StyleProvider from "@/components/design/StyleProvider";

const faqItems = [
  {
    question: "What happens after the 7-day trial?",
    answer: "If you don't cancel before the trial ends, your chosen plan will begin automatically, and your card will be charged the monthly (or annual) subscription fee, along with a one-time $197 setup fee."
  },
  {
    question: "Can I cancel during the trial?",
    answer: "Absolutely. You can cancel anytime during your 7-day trial with no charge."
  },
  {
    question: "What are AI Engagement Minutes?",
    answer: "AI Engagement Minutes are the amount of time your AI agent spends actively engaging with your leads or customers. This includes live calls, demo sessions, and appointment workflows."
  },
  {
    question: "What if I go over my monthly minutes?",
    answer: "If you exceed your plan's allocated minutes, you'll be charged an overage fee per minute at the current rate (currently $0.15/min). Your card on file will be billed automatically."
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes! You can change your plan at any time. Upgrades go into effect immediately; downgrades take effect at the start of the next billing cycle."
  }
];

const PricingFaq = () => {
  const [openItem, setOpenItem] = useState<string | null>("item-0");

  return (
    <section className="py-12 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our pricing and plans"
          centered={true}
        />
        
        <StyleProvider 
          delay={0.2}
          className="max-w-3xl mx-auto mt-8 md:mt-16"
        >
          <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg">
            <Accordion
              type="single"
              collapsible
              value={openItem}
              onValueChange={setOpenItem}
              className="w-full"
            >
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={`item-${index}`}
                  value={`item-${index}`}
                  className="border-b border-gray-200 last:border-0 px-6"
                >
                  <AccordionTrigger className="hover:no-underline py-4 md:py-5 group">
                    <span className="text-base md:text-lg font-medium text-gray-800 group-hover:text-brand-pink transition-colors text-left text-balance">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4 md:pb-5">
                    <div className="leading-relaxed">
                      {item.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </StyleProvider>
      </div>
    </section>
  );
};

export default PricingFaq;
