export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Ready to Transform Your Marketing?</h2>
        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
          Join thousands of businesses that trust ADmyBRAND AI Suite to power their marketing success.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200">
            Start Your Free Trial
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200">
            Schedule Demo
          </button>
        </div>

        <p className="text-blue-200 text-sm mt-6">No credit card required • 14-day free trial • Cancel anytime</p>
      </div>
    </section>
  )
}
