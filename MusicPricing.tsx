
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StyleProvider from '@/components/design/StyleProvider';
import SectionTitle from '@/components/design/SectionTitle';

const MusicPricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: "Music Impact Starter",
      price: 397,
      description: "Perfect for small studios and independent artists",
      features: [
        "1 AI voice agent",
        "100 minutes/month",
        "Studio booking integration",
        "Basic artist management",
        "Business hours configuration"
      ],
      popularTag: false,
      buttonText: "Start Free Trial",
      buttonVariant: "outline" as const,
      stripeLinks: {
        monthly: "https://buy.stripe.com/4gM00bfVxbFq2PV9TfejK0j",
        annual: "https://buy.stripe.com/7sY00bcJl38UgGLaXjejK0k"
      },
      setupFee: "$197.00 One-time set-up",
      annualPrice: 3811/12, // Annual price divided by 12 for monthly equivalent
      highlight: false
    },
    {
      name: "Music Impact Pro",
      price: 597,
      description: "Ideal for busy studios and small labels",
      features: [
        "2 AI voice agents",
        "300 minutes/month",
        "Advanced booking system integration",
        "Special requests handling",
        "Custom voice and personality",
        "Artist recognition system",
        "Weekly performance reports"
      ],
      popularTag: true,
      buttonText: "Start Free Trial",
      buttonVariant: "default" as const,
      stripeLinks: {
        monthly: "https://buy.stripe.com/cNi5kv6kX7pa2PVd5rejK0l",
        annual: "https://buy.stripe.com/9B600bfVx4cYbmr2qNejK0m"
      },
      setupFee: "$197.00 One-time set-up",
      annualPrice: 5731/12, // Annual price divided by 12 for monthly equivalent
      highlight: true
    },
    {
      name: "Music Impact Enterprise",
      price: 897,
      description: "For music groups and large establishments",
      features: [
        "5 AI voice agents",
        "600 minutes/month",
        "Multi-location support",
        "DAW & CRM integration",
        "VIP artist recognition",
        "Custom workflows and scripts",
        "Detailed analytics dashboard",
        "Priority support"
      ],
      popularTag: false,
      buttonText: "Start Free Trial",
      buttonVariant: "outline" as const,
      stripeLinks: {
        monthly: "https://buy.stripe.com/bJecMXeRt6l6bmr9TfejK0n",
        annual: "https://buy.stripe.com/dRm7sD24HfVG4Y33uRejK0o"
      },
      setupFee: "$197.00 One-time set-up",
      annualPrice: 8611/12, // Annual price divided by 12 for monthly equivalent
      highlight: false
    }
  ];

  const handlePeriodChange = (period: 'monthly' | 'annual') => {
    setBillingPeriod(period);
  };

  const getStripeLink = (plan: typeof plans[0]) => {
    return billingPeriod === 'monthly' ? plan.stripeLinks.monthly : plan.stripeLinks.annual;
  };

  const displayPrice = (plan: typeof plans[0]) => {
    return billingPeriod === 'monthly' ? plan.price : Math.round(plan.annualPrice);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <SectionTitle
          title="Pricing for Music Studios"
          subtitle="Choose the right plan for your music business needs"
          centered={true}
        />
        
        <div className="mt-8 text-center">
          <div className="inline-flex items-center p-1 bg-gray-100 rounded-lg mb-12">
            <button
              className={`py-2 px-6 rounded-md text-sm font-medium transition-all ${
                billingPeriod === 'monthly'
                  ? 'bg-white text-gray-800 shadow-sm'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
              onClick={() => handlePeriodChange('monthly')}
            >
              Monthly
            </button>
            <button
              className={`py-2 px-6 rounded-md text-sm font-medium ml-1 transition-all ${
                billingPeriod === 'annual'
                  ? 'bg-white text-gray-800 shadow-sm'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
              onClick={() => handlePeriodChange('annual')}
            >
              Annual <span className="text-xs text-green-600">(Save 20%)</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <StyleProvider 
              key={plan.name} 
              delay={index * 0.1} 
              className={`relative rounded-xl overflow-hidden shadow-lg border transition-all ${
                plan.highlight 
                  ? 'border-brand-pink transform hover:-translate-y-1 hover:scale-105' 
                  : 'border-gray-200 hover:-translate-y-1 transform hover:scale-102'
              }`}
            >
              {plan.popularTag && (
                <div className="absolute top-0 w-full">
                  <div className="bg-gradient-to-r from-brand-pink to-brand-aqua text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className={`p-6 ${plan.popularTag ? 'pt-10' : ''}`}>
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <div className="flex items-baseline mb-3">
                  <span className="text-4xl font-bold">${displayPrice(plan)}</span>
                  <span className="text-gray-500 ml-1.5">/month</span>
                </div>
                <p className="text-gray-600 mb-5">{plan.description}</p>
                
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check className={`mt-0.5 mr-2 flex-shrink-0 ${plan.highlight ? 'text-brand-pink' : 'text-brand-aqua'}`} size={18} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <p className="text-sm text-gray-500 mb-6">{plan.setupFee}</p>
                
                <Button
                  variant={plan.buttonVariant}
                  className={`w-full ${
                    plan.buttonVariant === 'default' 
                      ? 'bg-gradient-to-r from-brand-pink to-brand-aqua text-white hover:opacity-90' 
                      : 'border-brand-pink text-brand-pink hover:bg-brand-pink/5'
                  }`}
                  onClick={() => window.open(getStripeLink(plan), '_blank')}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </StyleProvider>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <div className="flex items-center text-sm text-gray-600">
              <Check size={16} className="text-brand-aqua mr-2" />
              No hidden fees
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Check size={16} className="text-brand-aqua mr-2" />
              Cancel anytime
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Check size={16} className="text-brand-aqua mr-2" />
              14-day money back guarantee
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicPricing;
