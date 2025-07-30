"use client"

import { Check, Star, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import AnimatedPriceDisplay from "./animated-price-display"
import PricingToggle from "./pricing-toggle"

const plans = [
  {
    name: "Starter",
    monthlyPrice: 49,
    yearlyPrice: 39,
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
    color: "from-slate-600 to-slate-700",
    accent: "slate",
  },
  {
    name: "Professional",
    monthlyPrice: 149,
    yearlyPrice: 119,
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
    color: "from-blue-600 to-indigo-600",
    accent: "blue",
  },
  {
    name: "Enterprise",
    monthlyPrice: null,
    yearlyPrice: null,
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
    color: "from-purple-600 to-pink-600",
    accent: "purple",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
    rotateX: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
}

const featureVariants = {
  hidden: { opacity: 0, x: -20, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
}

export default function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [isYearly, setIsYearly] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="pricing" className="py-24 px-4 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header with enhanced animations */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 px-4 py-2 rounded-full text-sm font-medium text-blue-700 mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Flexible Pricing Plans
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 leading-tight"
          >
            Choose Your{" "}
            <motion.span
              initial={{ backgroundPosition: "0% 50%" }}
              animate={isInView ? { backgroundPosition: "100% 50%" } : { backgroundPosition: "0% 50%" }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 1,
              }}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent bg-[length:200%_100%]"
            >
              Perfect Plan
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Scale your business with confidence. Choose from our flexible pricing options designed to grow with your
            success.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.7, type: "spring" }}
          >
            <PricingToggle isYearly={isYearly} onToggle={setIsYearly} />
          </motion.div>
        </motion.div>

        {/* Enhanced pricing cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => {
            const currentPrice = isYearly ? plan.yearlyPrice : plan.monthlyPrice
            const period = isYearly ? "year" : "month"
            const isHovered = hoveredCard === index

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{
                  scale: plan.popular ? 1.02 : 1.05,
                  y: -15,
                  rotateY: isHovered ? 2 : 0,
                  transition: {
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                  },
                }}
                whileTap={{ scale: 0.98 }}
                className={`relative bg-white/90 backdrop-blur-xl border rounded-3xl p-8 transition-all duration-500 cursor-pointer group overflow-hidden ${
                  plan.popular
                    ? "border-blue-200/60 ring-2 ring-blue-100/50 lg:scale-105 shadow-xl shadow-blue-500/10"
                    : "border-slate-200/50 hover:border-slate-300/60 shadow-lg hover:shadow-xl"
                }`}
                style={{
                  boxShadow: isHovered
                    ? plan.popular
                      ? "0 25px 50px rgba(59, 130, 246, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.1)"
                      : "0 25px 50px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(148, 163, 184, 0.1)"
                    : undefined,
                }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br opacity-0 transition-opacity duration-500 ${
                    plan.popular ? "from-blue-50/80 via-indigo-50/60 to-purple-50/40" : "from-slate-50/60 to-gray-50/40"
                  }`}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                />

                {/* Floating particles effect for popular plan */}
                {plan.popular && (
                  <motion.div
                    className="absolute inset-0 overflow-hidden rounded-3xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400 rounded-full"
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${30 + (i % 2) * 40}%`,
                        }}
                        animate={{
                          y: [-10, -20, -10],
                          opacity: [0.4, 1, 0.4],
                          scale: [1, 1.5, 1],
                        }}
                        transition={{
                          duration: 2 + i * 0.5,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </motion.div>
                )}

                {/* Popular badge with enhanced animation */}
                {plan.popular && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 10 }}
                    transition={{ delay: 0.5 + index * 0.2, duration: 0.6, type: "spring", stiffness: 200 }}
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                  >
                    
                  </motion.div>
                )}

                <div className="relative z-10">
                  {/* Plan header */}
                  <div className="text-center mb-8">
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                      className="text-2xl font-bold text-slate-900 mb-2"
                    >
                      {plan.name}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      className="text-slate-600 mb-8"
                    >
                      {plan.description}
                    </motion.p>

                    {/* Enhanced price display */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: 0.6 + index * 0.1, type: "spring", stiffness: 200 }}
                      className="mb-8"
                    >
                      <AnimatedPriceDisplay price={currentPrice} unit={`/${period}`} />
                      {isYearly && currentPrice && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                          className="mt-3"
                        >
                          <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            Save ${(plan.monthlyPrice! - plan.yearlyPrice!) * 12}/year
                          </span>
                        </motion.div>
                      )}
                    </motion.div>

                    {/* Enhanced CTA button */}
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                      whileHover={{
                        scale: 1.02,
                        y: -2,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.98 }}
                      className={`relative w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 overflow-hidden group ${
                        plan.popular
                          ? `bg-gradient-to-r ${plan.color} text-white shadow-lg hover:shadow-xl`
                          : "border-2 border-slate-300 text-slate-700 hover:border-slate-400 bg-white hover:bg-slate-50"
                      }`}
                    >
                      {/* Button shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                        animate={isHovered ? { translateX: "200%" } : { translateX: "-100%" }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      />
                      <span className="relative z-10">{plan.cta}</span>
                    </motion.button>
                  </div>

                  {/* Enhanced features list */}
                  <div className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        custom={featureIndex}
                        variants={featureVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="flex items-center gap-3 group/feature"
                      >
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                          transition={{
                            delay: 1 + index * 0.1 + featureIndex * 0.05,
                            type: "spring",
                            stiffness: 200,
                            damping: 15,
                          }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                            plan.popular
                              ? "bg-blue-100 group-hover/feature:bg-blue-200"
                              : "bg-green-100 group-hover/feature:bg-green-200"
                          }`}
                        >
                          <Check className={`w-4 h-4 ${plan.popular ? "text-blue-600" : "text-green-600"}`} />
                        </motion.div>
                        <motion.span
                          className="text-slate-700 group-hover/feature:text-slate-900 transition-colors duration-200"
                          whileHover={{ x: 2 }}
                        >
                          {feature}
                        </motion.span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-slate-500 text-sm mb-4">Trusted by 10,000+ businesses worldwide</p>
          <div className="flex items-center justify-center gap-8 text-slate-400 text-sm">
            <span>✓ No setup fees</span>
            <span>✓ Cancel anytime</span>
            <span>✓ 14-day free trial</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
