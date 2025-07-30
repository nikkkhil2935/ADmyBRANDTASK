"use client"

import { useState, useRef } from "react"
import { Plus, Minus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6"
          >
            Frequently Asked{" "}
            <motion.span
              initial={{ backgroundPosition: "0% 50%" }}
              animate={isInView ? { backgroundPosition: "100% 50%" } : { backgroundPosition: "0% 50%" }}
              transition={{ duration: 2, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent bg-[length:200%_100%]"
            >
              Questions
            </motion.span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-slate-600 leading-relaxed"
          >
            Everything you need to know about ADmyBRAND AI Suite.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 },
              }}
              className="bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg group"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-6 text-left flex items-center justify-between transition-colors relative"
              >
                {/* Add animated underline */}
                <motion.div
                  className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <h3 className="text-lg font-semibold text-slate-900 pr-4 group-hover:text-blue-600 transition-colors duration-300">
                  {faq.question}
                </h3>

                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-blue-600" />
                  ) : (
                    <Plus className="w-6 h-6 text-slate-400 group-hover:text-blue-500 transition-colors duration-300" />
                  )}
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ delay: 0.1, duration: 0.2 }}
                      className="px-8 pb-6"
                    >
                      <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
