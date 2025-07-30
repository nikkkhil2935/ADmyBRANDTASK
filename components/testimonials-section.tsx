"use client"

import { Star } from "lucide-react"
import Image from "next/image"

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

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            What Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Customers
            </span>{" "}
            Say
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who have transformed their marketing with ADmyBRAND AI Suite.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-slate-700 text-lg leading-relaxed mb-8">"{testimonial.quote}"</blockquote>

              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.author}</div>
                  <div className="text-slate-600">{testimonial.title}</div>
                  <div className="text-slate-500 text-sm">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
