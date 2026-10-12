'use client'

import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

export default function AdmissionsFAQ() {
  const [openIndices, setOpenIndices] = useState<number[]>([0])

  const faqs = [
    {
      question: 'What is the admission procedure?',
      answer:
        'For those seeking admissions, an informal interaction will be conducted in which the pupil and both the parents have to be present. The final decision of the admission committee will be binding.',
    },
    {
      question: 'Is admission guaranteed?',
      answer:
        'Admission decision is made based on previous academic record and performance in online test. In special cases, applicants may be invited for a personal interview.',
    },
    {
      question: 'What curriculum will the school follow?',
      answer:
        'JRS follows CBSE curriculum.',
    },
    {
      question: 'Can I make an early application for admission?',
      answer:
        'Yes, we accept applications on a rolling basis. Applications are considered throughout the year and accepted until seats are filled in. In fact, we encourage you to apply early to avail fee-waiver based scholarships.',
    },
    {
      question: 'What is the fee structure?',
      answer:
        'Please call the school for fee details.',
    },
    {
      question: 'Can I get fee concessions?',
      answer:
        'Fees for any given academic year are decided by the School Management Committee (SMC). There are no concessions. However, merit-based and need-based fee waivers are available for eligible applicants. Speak to our Admission Manager for details.',
    },
    {
      question: 'How many terms will the school have?',
      answer:
        'We will be having only two semesters as per CBSE.',
    },
    {
      question: 'What will be the school timings?',
      answer:
        'School timings are: 8:15 AM to 3:30 PM.',
    },
    {
      question:
        'Will the school authorities be taking adequate measures to ensure hygiene in the school?',
      answer:
        'JRS maintains a high standard of cleanliness and hygiene. There are regular checks and monitoring by the school administration as well as the principal of the school.',
    },
    {
      question: 'What is the kind of security offered to the students?',
      answer:
        'The school has installed CCTV in all classrooms. Students are always accompanied by teachers or the class monitors.',
    },
    {
      question: 'How often will there be PTM’s?',
      answer:
        'After each term assessment.',
    },
    {
      question:
        'Other than a PTM, when can a parent interact with the teacher?',
      answer:
        'JRS considers parents as partners in the education process and parents are free to meet teachers, with prior appointment, as and when necessary.',
    },
    {
      question: 'How many students will be there per division?',
      answer:
        'We strive to maintain a ratio of 25 Students in each class.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  return (
    <section className="py-12 sm:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12" data-aos="fade-up">
          <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#dc2626] block mb-2">
            ADMISSIONS FAQS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#031c3f] tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Find answers to commonly asked questions about admissions, academics, and life at JRS.
          </p>
        </div>

        {/* FAQ Cards: 2 per row */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 items-start"
          data-aos="fade-up"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndices.includes(index)
            const isLastOdd = index === faqs.length - 1 && faqs.length % 2 !== 0

            return (
              <div
                key={index}
                className={`border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 bg-white shadow-sm hover:shadow-md hover:border-slate-300 self-start ${
                  isLastOdd ? 'md:col-span-2 md:w-[calc(50%-10px)] md:mx-auto w-full' : ''
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-white hover:bg-slate-50/80 transition-colors duration-150 gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-slate-900 text-sm sm:text-[15px] leading-snug">
                    {faq.question}
                  </span>

                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${
                      isOpen
                        ? 'bg-red-50 text-[#dc2626]'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-[#dc2626] stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 text-slate-700 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-slate-700 text-xs sm:text-[14px] leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}