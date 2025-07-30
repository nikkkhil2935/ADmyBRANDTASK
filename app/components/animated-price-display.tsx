"use client"

import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect, useState } from "react"

interface AnimatedPriceDisplayProps {
  price: number | null
  unit: string
}

const priceContainerVariants = {
  enter: {
    y: 30,
    opacity: 0,
    scale: 0.9,
  },
  center: {
    y: 0,
    opacity: 1,
    scale: 1,
  },
  exit: {
    y: -30,
    opacity: 0,
    scale: 0.9,
  },
}

export default function AnimatedPriceDisplay({ price, unit }: AnimatedPriceDisplayProps) {
  const [displayPrice, setDisplayPrice] = useState(price !== null ? price : 0)
  const count = useMotionValue(displayPrice)
  const rounded = useTransform(count, Math.round)

  useEffect(() => {
    if (price !== null && price !== displayPrice) {
      const controls = animate(count, price, {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        onComplete: () => setDisplayPrice(price),
      })
      return controls.stop
    }
  }, [price, count, displayPrice])

  if (price === null) {
    return (
      <div className="flex items-baseline justify-center gap-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 0.8, stiffness: 200 }}
          className="text-4xl font-bold text-slate-900"
        >
          <motion.span
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="bg-gradient-to-r from-slate-900 via-purple-600 to-slate-900 bg-clip-text text-transparent bg-[length:200%_100%]"
          >
            Custom Pricing
          </motion.span>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="flex items-baseline justify-center gap-2">
      <motion.span
        className="text-4xl font-bold text-slate-900"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        $
      </motion.span>

      <div className="relative h-20 overflow-hidden flex items-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={price}
            variants={priceContainerVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              y: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
              scale: { type: "spring", stiffness: 200, damping: 20 },
            }}
            className="text-6xl font-bold inline-block text-slate-900 tabular-nums"
          >
            <motion.span
              animate={{
                textShadow: [
                  "0 0 0px rgba(59, 130, 246, 0)",
                  "0 0 20px rgba(59, 130, 246, 0.3)",
                  "0 0 0px rgba(59, 130, 246, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              {rounded}
            </motion.span>
          </motion.span>
        </AnimatePresence>
      </div>

      <motion.span
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-xl font-medium text-slate-600"
      >
        {unit}
      </motion.span>
    </div>
  )
}
