import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Is GradPilot free?',
      answer: 'Yes, early users will get free access during the testing phase. Join the waitlist to secure your spot.',
    },
    {
      question: 'Does it guarantee job offers or sponsorship?',
      answer: 'No. GradPilot improves your chances by finding better-matched and sponsorship-friendly roles, but cannot guarantee job offers or visa sponsorship.',
    },
    {
      question: 'Who is it for?',
      answer: 'GradPilot is designed for international students and recent graduates navigating the UK job market who need visa sponsorship.',
    },
    {
      question: 'How does the AI matching work?',
      answer: 'Our AI analyzes your CV to understand your skills, experience, and education. It then matches you with jobs based on fit score, sponsorship likelihood, salary match, and role relevance.',
    },
    {
      question: 'Which job boards do you search?',
      answer: 'We aggregate opportunities from multiple sources including LinkedIn, Indeed, Glassdoor, and company career pages, focusing specifically on roles with visa sponsorship potential.',
    },
  ]

  return (
    <section id="faq" className="py-20 lg:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading mb-4">Frequently Asked Questions</h2>
          <p className="section-subheading">
            Everything you need to know about GradPilot
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg
                    className={`w-5 h-5 text-gray-600 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="mailto:support@gradpilot.co.in"
            className="inline-flex items-center text-primary-600 font-semibold hover:underline"
          >
            Contact us at support@gradpilot.co.in
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
