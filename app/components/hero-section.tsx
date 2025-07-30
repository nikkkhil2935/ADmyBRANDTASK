"use client"

import { Play } from "lucide-react"
import { motion } from "framer-motion"
import { Suspense } from "react"
import Spline from "@splinetool/react-spline"
import { Loader2 } from "lucide-react"

function SplineLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-transparent">
      <div className="text-center">
        <Loader2 className="h-8 w-8 animate-spin text-slate-600 mx-auto mb-4" />
        <p className="text-slate-600/70 text-sm">Loading 3D Scene...</p>
      </div>
    </div>
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
            <div className="space-y-6">
              <motion.h1
                variants={itemVariants}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight"
              >
                Transform Your{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Marketing
                </span>{" "}
                with AI
              </motion.h1>
              <motion.p variants={itemVariants} className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                Streamline your business, manage customer relationships, and boost your team's productivity with our
                intelligent ADmyBRAND AI Suite platform.
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-200"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgb(59 130 246)",
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-3 border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-200"
              >
                <Play size={20} />
                Watch Demo
              </motion.button>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-8">
              <p className="text-sm text-slate-500 mb-4">Trusted by 10,000+ businesses worldwide</p>
              <div className="flex items-center gap-8 opacity-60">
                <div className="text-slate-400 font-semibold">Microsoft</div>
                <div className="text-slate-400 font-semibold">Google</div>
                <div className="text-slate-400 font-semibold">Amazon</div>
                <div className="text-slate-400 font-semibold">Salesforce</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Scene */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full h-[500px]">
  <Suspense fallback={<SplineLoader />}>
    <Spline
      scene="https://prod.spline.design/IX4xjvsoLB1UO8oS/scene.splinecode"
      className="w-full h-full [&>canvas]:!bg-transparent"
      style={{
        background: "transparent",
        backgroundColor: "transparent",
      }}
    />
  </Suspense>
</div>

            {/* Floating Elements */}
            

            
          </motion.div>
        </div>
      </div>
    </section>
  )
}
