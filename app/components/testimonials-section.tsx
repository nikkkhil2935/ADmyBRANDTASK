"use client"

import { Star } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const testimonials = [
  {
    quote:
      "ADmyBRAND AI Suite has completely transformed our marketing strategy. The AI-powered content generation saves us hours every week, and the results speak for themselves.",
    author: "Sarah Johnson",
    title: "Marketing Director",
    company: "TechCorp",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E2%80%94Pngtree%E2%80%94a%20woman%20in%20gray%20suit_15511574.PNG-EQ5OyhwfhAJ9NEnYjBk238ehhDPAmi.jpeg",
    rating: 5,
  },
  {
    quote:
      "The analytics dashboard gives us insights we never had before. We can now predict customer behavior and optimize our campaigns in real-time.",
    author: "Michael Chen",
    title: "VP of Marketing",
    company: "GrowthCo",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E2%80%94Pngtree%E2%80%94smiling%20business%20people_96878-ozBROuFY8iacE8wMeSeXLEwSG4uA1d.png",
    rating: 5,
  },
  {
    quote:
      "Easy to use, powerful features, and excellent customer support. This platform has become essential to our marketing operations.",
    author: "Jessica Rodriguez",
    title: "CMO",
    company: "StartupXYZ",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E2%80%94Pngtree%E2%80%94a%20woman%20in%20gray%20suit_15511574.PNG-EQ5OyhwfhAJ9NEnYjBk238ehhDPAmi.jpeg",
    rating: 5,
  },
]

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

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="testimonials" className="py-20 px-4 bg-white" ref={ref}>
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
            What Our{" "}
            <motion.span
              initial={{ backgroundPosition: "0% 50%" }}
              animate={isInView ? { backgroundPosition: "100% 50%" } : { backgroundPosition: "0% 50%" }}
              transition={{ duration: 2, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent bg-[length:200%_100%]"
            >
              Customers
            </motion.span>{" "}
            Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Join thousands of satisfied customers who have transformed their marketing with ADmyBRAND AI Suite.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                rotateY: 3,
                rotateX: 2,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.4, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-2xl p-8 transition-all duration-300 cursor-pointer relative overflow-hidden group"
            >
              {/* Add animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-indigo-50/30 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-1 mb-6"
              >
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -180 }}
                    transition={{ delay: 0.4 + index * 0.1 + i * 0.1, type: "spring" }}
                  >
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  </motion.div>
                ))}
              </motion.div>

              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-slate-700 text-lg leading-relaxed mb-8"
              >
                "{testimonial.quote}"
              </motion.blockquote>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-4"
              >
                {/* Add floating effect to avatar */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-white shadow-lg"
                  />
                </motion.div>
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="font-semibold text-slate-900"
                  >
                    {testimonial.author}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="text-slate-600"
                  >
                    {testimonial.title}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    className="text-slate-500 text-sm"
                  >
                    {testimonial.company}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
