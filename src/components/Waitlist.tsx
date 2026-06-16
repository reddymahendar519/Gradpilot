export default function Waitlist() {
  const dotPattern = {
    backgroundImage:
      'radial-gradient(circle, rgb(147, 197, 253) 1px, rgba(0, 0, 0, 0) 1px)',
    backgroundSize: '24px 24px',
  }

  return (
    <section id="waitlist" className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={dotPattern} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Benefits pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['Free Early Access', 'Priority Support', 'Shape the Product'].map((label) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-white"
              >
                <svg className="w-4 h-4 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {label}
              </span>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 text-balance">
            Join the GradPilot Early Access Waitlist
          </h2>
          <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto">
            Be the first to access AI-powered job matching built for international students in the UK.
          </p>
        </div>

        {/* CTA card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="flex items-center justify-center gap-2 text-2xl font-bold text-white mb-3">
              <svg className="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" strokeWidth={2} />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.5 9.5l-1.5 5-3.5 1 1.5-5z" />
              </svg>
              Secure Your Spot on the Waitlist
            </h3>
            <p className="text-blue-100/80 max-w-md mx-auto mb-8">
              Join hundreds of international students getting early access to AI-powered job matching.
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdGtJ5UMNh-WEODc-ttNt65SzOjYm5_8MWaTyLvjCUH3pb6vg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-col items-center justify-center px-10 py-4 bg-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="text-lg font-bold text-primary-600">Join the Waitlist</span>
              <span className="text-xs text-gray-500 mt-0.5">Takes less than 1 minute</span>
            </a>

            <p className="mt-8 text-sm text-blue-100/70">
              Questions? Reach out to us at{' '}
              <a href="mailto:support@gradpilot.co.in" className="text-white underline hover:text-blue-200">
                support@gradpilot.co.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
