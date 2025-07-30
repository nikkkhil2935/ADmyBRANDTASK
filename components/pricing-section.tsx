"use client"

import { Check, Star } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: 49,
    period: "month",
    description: "Perfect for small teams getting started",
    features: [
      "Up to 5 team members",
      "Basic AI content generation",
      "Standard analytics",
      "Email support",
      "10GB storage",
    ],
    popular: false,
    cta: "Start Free Trial",
  },
  {
    name: "Professional",
    price: 149,
    period: "month",
    description: "Most popular choice for growing businesses",
    features: [
      "Up to 25 team members",
      "Advanced AI features",
      "Real-time analytics",
      "Priority support",
      "100GB storage",
      "Custom integrations",
      "Advanced targeting",
    ],
    popular: true,
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    price: null,
    period: "Custom",
    description: "Advanced features for large organizations",
    features: [
      "Unlimited team members",
      "Custom AI models",
      "White-label solution",
      "Dedicated support",
      "Unlimited storage",
      "API access",
      "Custom development",
    ],
    popular: false,
    cta: "Contact Sales",
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Flexible pricing options designed to scale with your business needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white/80 backdrop-blur-xl border rounded-3xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 ${
                plan.popular ? "border-blue-200 ring-2 ring-blue-100 lg:scale-105" : "border-slate-200/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-600 mb-6">{plan.description}</p>

                <div className="mb-6">
                  {plan.price ? (
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-5xl font-bold text-slate-900">${plan.price}</span>
                      <span className="text-slate-600">/{plan.period}</span>
                    </div>
                  ) : (
                    <div className="text-3xl font-bold text-slate-900">Custom Pricing</div>
                  )}
                </div>

                <button
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-xl hover:scale-105"
                      : "border-2 border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-600"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>

              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
