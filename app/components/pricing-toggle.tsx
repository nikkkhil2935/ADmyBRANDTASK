"use client"

import { motion } from "framer-motion"
import { useRef, useEffect, useState } from "react"

interface PricingToggleProps {
  isYearly: boolean
  onToggle: (isYearly: boolean) => void
}

export default function PricingToggle({ isYearly, onToggle }: PricingToggleProps) {
  const monthlyRef = useRef<HTMLButtonElement>(null)
  const yearlyRef = useRef<HTMLButtonElement>(null)
  const [indicatorStyle, setIndicatorStyle] = useState({ x: 0, width: 0 })

  useEffect(() => {
    const updateIndicator = () => {
      const activeButton = isYearly ? yearlyRef.current : monthlyRef.current
      if (activeButton) {
        const rect = activeButton.getBoundingClientRect()
        const containerRect = activeButton.parentElement?.getBoundingClientRect()
        if (containerRect) {
          setIndicatorStyle({
            x: rect.left - containerRect.left,
            width: rect.width
          })
        }
      }
    }

    updateIndicator()
    window.addEventListener('resize', updateIndicator)
    return () => window.removeEventListener('resize', updateIndicator)
  }, [isYearly])

  return (
    <div className="flex items-center justify-center mb-12">
      <motion.div
        className="bg-white/90 backdrop-blur-xl border border-slate-200/50 rounded-2xl p-2 flex items-center gap-2 shadow-lg relative"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="absolute inset-y-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg"
          animate={{
            x: indicatorStyle.x,
            width: indicatorStyle.width,
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

        <motion.button
          ref={monthlyRef}
          onClick={() => onToggle(false)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300 relative z-10 ${
            !isYearly ? "text-white" : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Monthly
        </motion.button>

        <motion.button
          ref={yearlyRef}
          onClick={() => onToggle(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300 relative z-10 ${
            isYearly ? "text-white" : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Annual
        </motion.button>
      </motion.div>
    </div>
  )
}