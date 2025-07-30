"use client"

import { Zap, Target, TrendingUp, Shield, Smartphone, BarChart3 } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const features = [
  {
    icon: Zap,
    title: "AI Content Generation",
    description: "Generate high-quality marketing content in seconds with our advanced AI algorithms.",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    icon: Target,
    title: "Smart Targeting",
    description: "Reach the right audience with precision targeting powered by machine learning.",
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    icon: TrendingUp,
    title: "Advanced Analytics",
    description: "Get deep insights into your marketing performance with real-time analytics.",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security to protect your sensitive marketing data and campaigns.",
    gradient: "from-purple-400 to-pink-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimization",
    description: "Manage your campaigns on-the-go with our fully responsive mobile interface.",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    icon: BarChart3,
    title: "Performance Tracking",
    description: "Monitor campaign performance with detailed reports and actionable insights.",
    gradient: "from-red-400 to-pink-500",
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
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="features" className="py-20 px-4 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
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
            Powerful Features to{" "}
            <motion.span
              initial={{ backgroundPosition: "0% 50%" }}
              animate={isInView ? { backgroundPosition: "100% 50%" } : { backgroundPosition: "0% 50%" }}
              transition={{ duration: 2, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent bg-[length:200%_100%]"
            >
              Transform
            </motion.span>{" "}
            Your Marketing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Everything you need to create, manage, and optimize your marketing campaigns with the power of artificial
            intelligence.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.08,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.4, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.98 }}
              className="group bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-2xl p-8 hover:border-blue-200 transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              {/* Add animated background gradient on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div
                whileHover={{ scale: 1.15, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`relative z-10 w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6`}
              >
                <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors"
              >
                {feature.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="text-slate-600 leading-relaxed"
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
