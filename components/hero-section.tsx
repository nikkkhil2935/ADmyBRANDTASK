"use client"

import { Play } from "lucide-react"
import dynamic from "next/dynamic"

const Spline = dynamic(() => import("@splinetool/react-spline/next"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl animate-pulse flex items-center justify-center">
      <div className="text-slate-500">Loading 3D Scene...</div>
    </div>
  ),
})

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                Transform Your{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Marketing
                </span>{" "}
                with AI
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                Streamline your business, manage customer relationships, and boost your team's productivity with our
                intelligent ADmyBRAND AI Suite platform.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200">
                Start Free Trial
              </button>
              <button className="flex items-center justify-center gap-3 border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-200">
                <Play size={20} />
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8">
              <p className="text-sm text-slate-500 mb-4">Trusted by 10,000+ businesses worldwide</p>
              <div className="flex items-center gap-8 opacity-60">
                <div className="text-slate-400 font-semibold">Microsoft</div>
                <div className="text-slate-400 font-semibold">Google</div>
                <div className="text-slate-400 font-semibold">Amazon</div>
                <div className="text-slate-400 font-semibold">Salesforce</div>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Animation */}
          <div className="relative">
            <div className="relative z-10">
              <Spline scene="https://prod.spline.design/N1yzWrVMgIunBOc3/scene.splinecode" />
            </div>

            {/* Floating Elements */}
            <div className="absolute top-10 -left-4 bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl p-4 shadow-xl animate-bounce">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-slate-700">AI Content Generated</span>
              </div>
            </div>

            <div className="absolute bottom-10 -right-4 bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl p-4 shadow-xl animate-pulse">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">AI</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-700">Performance</div>
                  <div className="text-xs text-slate-500">+127% increase</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
