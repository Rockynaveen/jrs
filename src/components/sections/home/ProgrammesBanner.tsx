'use client'

import React from 'react'
import Link from 'next/link'

export default function ProgrammesBanner() {
  return (
    <section className="py-6 sm:py-8 bg-white overflow-hidden" aria-label="Academic Programmes Announcement Banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/admissions"
          data-aos="fade-up"
          className="group relative block w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 hover:border-slate-300 bg-white shadow-none transition-all duration-300 active:scale-[0.995] cursor-pointer"
          title="Click to Enquire for Admissions - IIT, JEE, NEET, Olympiad & XI-XII"
          aria-label="IIT JEE NEET Olympiad and Classes XI & XII Programmes - Click to apply for admissions"
        >
          {/* Banner Graphic - Clean and completely shadow-free */}
          <div className="relative w-full overflow-hidden">
            <img
              src="/images/iit-jee-neet-olympiad-banner.jpg"
              alt="JRS International School - IIT, JEE, NEET Foundation (VI to IX), Olympiad (I to V), and Classes XI & XII Admissions Open"
              className="w-full h-auto object-cover object-center group-hover:opacity-95 transition-opacity duration-300 block"
              loading="lazy"
            />
          </div>
        </Link>
      </div>
    </section>
  )
}
