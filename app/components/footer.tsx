"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const footerLinks = {
  product: ["Features", "Pricing", "Security", "Integrations"],
  company: ["About", "Careers", "Press", "Contact"],
  resources: ["Blog", "Help Center", "API Docs", "Status"],
}

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

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <footer className="bg-slate-900 text-white py-16 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-4 gap-8 mb-12"
        >
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview-yRlVouGjQZrMsnt0FUJVd7D2bpZnPq.png"
                alt="ADmyBRAND Logo"
                width={120}
                height={40}
                className="h-8 w-auto mb-4 brightness-0 invert"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-slate-400 leading-relaxed"
            >
              Transform your marketing with our next-generation AI-powered platform.
            </motion.p>
          </motion.div>

          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div key={category} variants={itemVariants}>
              <motion.h4
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: 0.1 + categoryIndex * 0.1, duration: 0.5 }}
                className="font-semibold text-lg mb-4 capitalize"
              >
                {category}
              </motion.h4>
              <ul className="space-y-3 text-slate-400">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: 0.2 + categoryIndex * 0.1 + linkIndex * 0.05, duration: 0.3 }}
                  >
                    <motion.a
                      href="#"
                      whileHover={{
                        color: "#ffffff",
                        x: 8,
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="hover:text-white transition-colors relative inline-block"
                    >
                      <motion.div
                        className="absolute -left-2 top-1/2 w-1 h-1 bg-blue-400 rounded-full opacity-0"
                        whileHover={{ opacity: 1, scale: 1.5 }}
                        transition={{ duration: 0.2 }}
                      />
                      {link}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="text-slate-400 text-sm"
          >
            © 2025 ADmyBRAND AI Suite. All rights reserved.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="flex gap-6 mt-4 md:mt-0"
          >
            {["Privacy", "Terms", "Cookies"].map((item, index) => (
              <motion.a
                key={item}
                href="#"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: 1.3 + index * 0.1, duration: 0.3 }}
                whileHover={{
                  color: "#ffffff",
                  y: -3,
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                className="text-slate-400 hover:text-white text-sm transition-colors relative"
              >
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
                {item}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
