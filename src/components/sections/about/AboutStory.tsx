'use client'

import React from 'react'
import SchoolImage from '@/components/common/SchoolImage'

export default function AboutStory() {
  const pillars = [
    {
      title: 'Indian Ethos',
      subtitle: 'Rooted in values and traditions',
      icon: (
        <svg
          className="w-8 h-8 text-[#e31e24]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          {/* Stylized Lotus Petals */}
          <path d="M12 3C11 6.5 8 9.5 8 13C8 15.2 9.8 17 12 17C14.2 17 16 15.2 16 13C16 9.5 13 6.5 12 3Z" />
          <path d="M7 8C6 11 5 13.5 6 15.5C6.8 17.2 8.8 18 10.5 17.5C9.2 16 8.5 14 8.5 12C8.5 10.5 9 9.2 9.5 8.2C8.6 8 7.7 8 7 8Z" opacity="0.85" />
          <path d="M17 8C17.7 8 18.6 8 19.5 8.2C20 9.2 20.5 10.5 20.5 12C20.5 14 19.8 16 18.5 17.5C20.2 18 22.2 17.2 23 15.5C24 13.5 23 11 22 8C20 8 18 8 17 8Z" opacity="0.85" />
          <path d="M5 19H19C19 20.5 16 21.5 12 21.5C8 21.5 5 20.5 5 19Z" opacity="0.75" />
        </svg>
      ),
    },
    {
      title: 'International Standards',
      subtitle: 'Global outlook in education',
      icon: (
        <svg
          className="w-8 h-8 text-[#2563eb]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
    {
      title: 'Interactive Learning',
      subtitle: 'Engaging classroom experiences',
      icon: (
        <svg
          className="w-8 h-8 text-[#eab308]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M12 2a7 7 0 0 0-7 7c0 2.4 1.2 4.5 3 5.7V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.3c1.8-1.2 3-3.3 3-5.7a7 7 0 0 0-7-7z" />
          <line x1="12" y1="6" x2="12" y2="9" />
          <line x1="9.5" y1="7" x2="7.5" y2="5" />
          <line x1="14.5" y1="7" x2="16.5" y2="5" />
        </svg>
      ),
    },
    {
      title: 'Real-World Teaching',
      subtitle: 'Practical knowledge for life',
      icon: (
        <svg
          className="w-8 h-8 text-[#e31e24]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
    },
  ]

  return (
    <section id="our-story" className="py-16 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Stylized Image Frame with Origami Fold & Red Accents */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* SVG Filter / Clip Definitions */}
            <svg width="0" height="0" className="absolute">
              <defs>
                <clipPath id="aboutStoryClip" clipPathUnits="objectBoundingBox">
                  <path d="M 0 0 
                           L 0.86 0 
                           C 0.91 0, 0.94 0.05, 0.94 0.14 
                           L 0.94 0.52 
                           C 0.94 0.60, 0.91 0.68, 0.86 0.76 
                           L 0.74 1 
                           L 0 1 
                           Z" />
                </clipPath>
              </defs>
            </svg>

            {/* Container for photo + red vector accents */}
            <div className="relative w-full max-w-[520px] aspect-[4/3] sm:aspect-[1.32/1]">
              {/* Photo Container clipped to the contour */}
              <div
                className="absolute inset-0 z-0 bg-slate-100 overflow-hidden shadow-md"
                style={{ clipPath: 'url(#aboutStoryClip)' }}
              >
                <SchoolImage
                  src="/images/about-students.jpg"
                  alt="JRS International School Students"
                  className="w-full h-full object-cover object-top sm:object-[center_20%] hover:scale-105 transition-transform duration-500"
                  fallbackText="/images/about-students.jpg"
                  fallbackBg="from-red-50 via-slate-100 to-blue-50"
                />
              </div>

              {/* Exact Red Vector Accents Layered Over/Beside the Photo */}
              <svg
                viewBox="0 0 520 380"
                className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Bottom-right rich red gradient */}
                  <linearGradient id="storyRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#eb262d" />
                    <stop offset="100%" stopColor="#c71017" />
                  </linearGradient>

                  {/* Top-left outer darker facet */}
                  <linearGradient id="storyTopDarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#b91c1c" />
                    <stop offset="100%" stopColor="#991b1b" />
                  </linearGradient>

                  {/* Top-left inner bright red sweep */}
                  <linearGradient id="storyTopBrightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ef343a" />
                    <stop offset="100%" stopColor="#dc2626" />
                  </linearGradient>
                </defs>

                {/* 1. Top-Left Red Origami Fold Accent */}
                <g>
                  {/* Darker base wedge */}
                  <path d="M 0 0 L 115 0 L 0 165 Z" fill="url(#storyTopDarkGrad)" />
                  {/* Brighter foreground fold */}
                  <path d="M 0 0 L 85 0 C 62 40, 26 84, 0 140 Z" fill="url(#storyTopBrightGrad)" />
                </g>

                {/* 2. Bottom-Right Organic Red Swoop with Protruding Lobe */}
                <path
                  d="M 481 198 
                     C 492 205, 502 218, 502 234 
                     C 502 250, 488 273, 468 304 
                     L 426 380 
                     L 395 380 
                     L 450 281 
                     C 468 248, 481 220, 481 198 
                     Z"
                  fill="url(#storyRedGrad)"
                />
              </svg>
            </div>
          </div>

          {/* Right Column: Story Text Content */}
          <div className="lg:col-span-6 space-y-6 relative">
            {/* Subtle Bullseye Watermark in Top Right */}
            <div className="absolute top-0 right-0 pointer-events-none opacity-40">
              <svg width="70" height="70" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="45" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="3 3" />
                <circle cx="50" cy="50" r="30" stroke="#e2e8f0" strokeWidth="2" />
                <circle cx="50" cy="50" r="15" stroke="#cbd5e1" strokeWidth="2" />
              </svg>
            </div>

            {/* Eyebrow & Title */}
            <div>
              <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#e31e24]">
                OUR STORY
              </span>
              <h2
                style={{ lineHeight: '50px' }}
                className="text-3xl sm:text-4xl font-extrabold text-[#031c3f] mt-2 tracking-tight leading-[50px] sm:leading-[50px]"
              >
                A Journey of Learning <br className="hidden sm:inline" />
                and <span className="text-[#e31e24]">Human Values</span>
              </h2>
            </div>

            {/* Description Paragraph */}
            <p className="text-slate-700 text-[14px] leading-[25px]">
              JRS International School, Narapally, Near Uppal Depot, Hyderabad has been committed to the field of education and human values since 2021. We follow the CBSE/NCERT curriculum and strive to provide a perfect blend of academics, values and co-curricular activities. Our aim is to nurture confident, responsible and compassionate individuals who are prepared for a global future.
            </p>

            {/* 4 Pillars Horizontal Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 pt-3">
              {pillars.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center sm:items-start text-center sm:text-left group cursor-default"
                >
                  <div className="w-10 h-10 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform duration-200">
                    {item.icon}
                  </div>
                  <h4 className="text-xs sm:text-[13px] font-medium text-slate-800 leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-[14px] text-slate-700 leading-snug mt-1">
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
