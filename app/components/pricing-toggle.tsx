"use client"

import { motion } from "framer-motion"

interface PricingToggleProps {
  isYearly: boolean
  onToggle: (isYearly: boolean) => void
}

export default function PricingToggle({ isYearly, onToggle }: PricingToggleProps) {
  return (
    <div className="flex items-center justify-center mb-12">
      <motion.div
        className="bg-white/90 backdrop-blur-xl border border-slate-200/50 rounded-2xl p-2 flex items-center gap-2 shadow-lg"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <motion.button
          onClick={() => onToggle(false)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300 relative overflow-hidden ${
            !isYearly ? "text-white" : "text-slate-600 hover:text-slate-900"
          }`}
        >
          {!isYearly && (
            <motion.div
              layoutId="pricing-toggle"
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg"
              animate={{
                boxShadow: [
                  "0 4px 20px rgba(59, 130, 246, 0.3)",
                  "0 8px 30px rgba(59, 130, 246, 0.4)",
                  "0 4px 20px rgba(59, 130, 246, 0.3)",
                ],
              }}
              transition={{
                boxShadow: {
                  type: "tween",
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                default: {
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  duration: 0.6,
                },
              }}
            />
          )}
          <span className="relative z-10">Monthly</span>
        </motion.button>

        <motion.button
          onClick={() => onToggle(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300 relative overflow-hidden ${
            isYearly ? "text-white" : "text-slate-600 hover:text-slate-900"
          }`}
        >
          {isYearly && (
            <motion.div
              layoutId="pricing-toggle"
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg"
              animate={{
                boxShadow: [
                  "0 4px 20px rgba(59, 130, 246, 0.3)",
                  "0 8px 30px rgba(59, 130, 246, 0.4)",
                  "0 4px 20px rgba(59, 130, 246, 0.3)",
                ],
              }}
              transition={{
                boxShadow: {
                  type: "tween",
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                default: {
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  duration: 0.6,
                },
              }}
            />
          )}
          <span className="relative z-10">Annual</span>
          
        </motion.button>
      </motion.div>
    </div>
  )
}