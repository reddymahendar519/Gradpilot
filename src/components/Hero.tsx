export default function Hero() {
  const dotPattern = {
    backgroundImage:
      'radial-gradient(circle, rgb(59, 130, 246) 1px, rgba(0, 0, 0, 0) 1px)',
    backgroundSize: '24px 24px',
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-16">
      {/* Dot pattern background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={dotPattern} />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: copy */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-200 border border-blue-400/20 rounded-full text-sm font-medium mb-8 animate-fade-in">
              <svg className="w-4 h-4 mr-2 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0l-1.18-4.455-3.354-1.935a1 1 0 010-1.732L9.854 7.2l1.18-4.456A1 1 0 0112 2z" />
              </svg>
              AI-Powered Job Matching for International Students
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.05] mb-6 animate-slide-up text-balance">
              Find UK Jobs That{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                Actually Match
              </span>{' '}
              Your Profile
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '100ms' }}>
              Built for international students. Discover sponsorship-friendly roles, match jobs to your CV, and track applications in one place.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-10 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary-600 rounded-xl shadow-lg shadow-primary-900/40 hover:bg-primary-700 hover:shadow-xl transition-all duration-200 w-full sm:w-auto"
              >
                Join the Waitlist
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/5 border border-white/20 rounded-xl hover:bg-white/10 transition-all duration-200 w-full sm:w-auto"
              >
                Get Early Access
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 text-slate-300 text-sm animate-fade-in" style={{ animationDelay: '400ms' }}>
              {['Free Early Access', 'Visa Sponsorship Focus', 'AI-Powered Matching'].map((label) => (
                <div key={label} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Right: dashboard mockup */}
          <div className="relative animate-slide-up" style={{ animationDelay: '300ms' }}>
            <div className="absolute -top-3 right-6 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500 text-white text-xs font-semibold rounded-full shadow-lg">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0l-1.18-4.455-3.354-1.935a1 1 0 010-1.732L9.854 7.2l1.18-4.456A1 1 0 0112 2z" />
              </svg>
              AI Matched
            </div>

            <div className="bg-white rounded-2xl shadow-2xl shadow-blue-950/50 p-5 sm:p-6">
              {/* Window chrome */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs text-gray-400 font-medium">GradPilot Dashboard</span>
              </div>

              {/* Job rows */}
              <div className="space-y-3 mb-5">
                {[
                  { company: 'Deloitte UK', role: 'Data Analyst · £45k', match: '94% Match', sponsor: true },
                  { company: 'HSBC', role: 'Software Engineer · £52k', match: '88% Match', sponsor: true },
                  { company: 'PwC London', role: 'Business Analyst · £42k', match: '81% Match', sponsor: false },
                ].map((job) => (
                  <div key={job.company} className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-primary-100 transition-colors">
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{job.company}</p>
                      <p className="text-xs text-gray-500">{job.role}</p>
                    </div>
                    <div className="text-right">
                      <span className="block text-sm font-bold text-primary-600">{job.match}</span>
                      {job.sponsor && (
                        <span className="inline-flex items-center gap-1 mt-1 text-xs font-medium text-emerald-600">
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Visa Sponsor
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center p-3 rounded-xl bg-blue-50">
                  <p className="text-xl font-bold text-primary-600">12</p>
                  <p className="text-xs text-gray-500">Applied</p>
                </div>
                <div className="text-center p-3 rounded-xl bg-emerald-50">
                  <p className="text-xl font-bold text-emerald-600">3</p>
                  <p className="text-xs text-gray-500">Interviews</p>
                </div>
                <div className="text-center p-3 rounded-xl bg-amber-50">
                  <p className="text-xl font-bold text-amber-600">1</p>
                  <p className="text-xs text-gray-500">Offers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
