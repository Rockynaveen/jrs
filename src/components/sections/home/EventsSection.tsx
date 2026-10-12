'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SchoolImage from '@/components/common/SchoolImage'

const events = [
  {
    day: '26',
    month: 'JAN',
    title: 'Republic Day Celebrations',
    description: 'Students showcased patriotic fervor in traditional costumes, march past and cultural performances.',
    image: '/images/events/republic-day.jpg',
    objectPosition: 'object-[center_35%]',
  },
  {
    day: '11',
    month: 'FEB',
    title: 'Annual Day Celebrations',
    description: 'A spectacular evening of music, dance, theatrical drama, and honoring student excellence.',
    image: '/images/events/annual-day.jpg',
    objectPosition: 'object-[center_40%]',
  },
  {
    day: '28',
    month: 'AUG',
    title: 'Sports Day',
    description: 'Showcasing athleticism, team spirit, athletic track events, and enthusiastic sportsmanship.',
    image: '/images/events/sports-day.jpg',
    objectPosition: 'object-[center_65%]',
  },
]

export default function EventsSection() {
  return (
    <section id="events" className="py-10 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-4 space-y-5">
            <div>
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="w-8 h-[2px] bg-[#e31e24]" />
                <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#e31e24]">
                  LATEST EVENTS
                </span>
              </div>
              <h2
                style={{ lineHeight: '50px' }}
                className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#031c3f] tracking-tight leading-[50px] sm:leading-[50px] lg:leading-[50px]"
              >
                What's Happening <br className="hidden sm:block" />
                at <span className="text-[#e31e24]" style={{ lineHeight: 'inherit' }}>JRS</span>
              </h2>
            </div>

            <p className="text-[15px] sm:text-base text-slate-600 leading-relaxed">
              Explore our recent events, celebrations and achievements that make JRS a vibrant place to learn and grow.
            </p>

            <div>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-[#e31e24] hover:bg-red-700 active:scale-95 shadow-md shadow-red-600/20 transition-all duration-200 cursor-pointer"
              >
                <span>View All Events</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Normal Event Cards Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 items-stretch">
              {events.map((event, index) => (
                <div
                  key={index}
                  style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}
                  className="bg-white rounded-2xl border border-slate-100 hover:border-red-200 transition-all duration-300 overflow-hidden flex flex-col h-full group"
                >
                  {/* Event Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 shrink-0">
                    <SchoolImage
                      src={event.image}
                      alt={event.title}
                      className={`w-full h-full object-cover ${event.objectPosition} group-hover:scale-105 transition-transform duration-500`}
                      fallbackText={event.title}
                      fallbackBg="from-slate-100 via-rose-50 to-slate-200"
                    />

                    {/* Date Badge over image */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs rounded-xl py-1 px-2.5 shadow-sm border border-slate-100 flex flex-col items-center leading-tight">
                      <span className="text-sm font-bold text-[#e31e24]">
                        {event.day}
                      </span>
                      <span className="text-[10px] font-bold text-[#031c3f] tracking-wider uppercase">
                        {event.month}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="text-[15px] sm:text-base font-bold text-[#031c3f] leading-snug group-hover:text-[#e31e24] transition-colors line-clamp-2">
                        {event.title}
                      </h3>
                      <p className="text-[13px] sm:text-[13.5px] text-slate-600 leading-relaxed mt-2 line-clamp-3">
                        {event.description}
                      </p>
                    </div>

                    <div className="pt-3 mt-4 border-t border-slate-100">
                      <Link
                        href="/gallery"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-[#e31e24] hover:text-[#b91c1c] transition-colors group/link cursor-pointer"
                      >
                        <span>Explore event</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
