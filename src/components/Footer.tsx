export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="9" strokeWidth={2} />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.5 9.5l-1.5 5-3.5 1 1.5-5z" />
                </svg>
              </div>
              <span className="text-xl font-bold">
                Grad<span className="text-primary-400">Pilot</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              AI-powered job search for international students in the UK.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a
              href="mailto:support@gradpilot.co.in"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              onClick={(e) => e.preventDefault()}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              onClick={(e) => e.preventDefault()}
            >
              Terms of Service
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} GradPilot. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#waitlist"
              className="text-sm text-primary-400 hover:text-primary-300 transition-colors font-medium"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
