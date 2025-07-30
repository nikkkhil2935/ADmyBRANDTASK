"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "What is ADmyBRAND AI Suite and how can it help my business?",
    answer:
      "ADmyBRAND AI Suite is an intelligent marketing platform that uses artificial intelligence to help you create content, target audiences, and optimize campaigns. It streamlines your marketing processes, improves efficiency, and delivers better results through data-driven insights.",
  },
  {
    question: "How much does it cost to implement?",
    answer:
      "Implementation costs vary based on your plan and customization needs. Our Starter plan begins at $49/month with no setup fees. We offer free migration assistance and onboarding support for all plans to ensure a smooth transition.",
  },
  {
    question: "Can I import my existing marketing data?",
    answer:
      "Yes! We provide easy-to-use import tools that support CSV files, Excel spreadsheets, and direct integrations with popular marketing platforms like HubSpot, Mailchimp, and Google Analytics.",
  },
  {
    question: "Is it safe to store my data in the cloud?",
    answer:
      "Absolutely. We use enterprise-grade security measures including SSL encryption, regular backups, SOC 2 compliance, and data centers with 99.9% uptime guarantee. Your data is safer in our cloud than on local servers.",
  },
  {
    question: "What support options are available?",
    answer:
      "We offer multiple support channels including email support (all plans), priority support (Professional+), and dedicated account managers (Enterprise). We also provide extensive documentation, video tutorials, and live chat support.",
  },
  {
    question: "Can I cancel anytime without penalties?",
    answer:
      "Yes, you can cancel your subscription at any time without penalties or cancellation fees. We offer month-to-month billing with no long-term contracts required.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Everything you need to know about ADmyBRAND AI Suite.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-slate-900 pr-4">{faq.question}</h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-blue-600" />
                  ) : (
                    <Plus className="w-6 h-6 text-slate-400" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
