
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import StyleProvider from "../design/StyleProvider";
import SectionTitle from "../design/SectionTitle";

const faqs = [
  {
    question: "What does Sudden Impact Agency offer?",
    answer: "We provide plug-and-play AI voice agents specifically designed for service-based businesses. Our agents handle calls, qualify leads, schedule appointments, and integrate seamlessly into your workflows."
  },
  {
    question: "Are your AI voice agents customizable?",
    answer: "Yes! We offer both ready-to-deploy voice agents and fully custom AI solutions built to match your specific industry needs and internal systems."
  },
  {
    question: "What is the Sudden Impact Automation Suite?",
    answer: "It's our bundled platform that includes voice agents, CRM tools, smart calendars, funnel pages, and automation systems—all under one streamlined SaaS solution."
  },
  {
    question: "Do you integrate with existing tools?",
    answer: "Yes. We support integrations with most CRMs, scheduling systems, and communication platforms. Custom integrations are available for complex workflows."
  },
  {
    question: "Is there a free trial?",
    answer: "Yes! We offer a 7-day free trial on all subscription plans, allowing you to experience the full power of our AI voice agents."
  }
];

const Faq = () => {
  return (
    <section className="py-16 md:py-24">
      <StyleProvider className="container-custom">
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our AI voice agent solutions"
          centered={true}
          light={false}
          className="mb-8 md:mb-16"
        />

        <StyleProvider 
          delay={0.2}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-b border-gray-200 last:border-0 px-6"
                >
                  <AccordionTrigger className="hover:no-underline py-4 md:py-5">
                    <span className="text-base md:text-lg font-medium text-gray-800 hover:text-agency-blue transition-colors text-left text-balance">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4 md:pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </StyleProvider>
      </StyleProvider>
    </section>
  );
};

export default Faq;
