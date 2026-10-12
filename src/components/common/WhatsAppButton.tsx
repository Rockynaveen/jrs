'use client'

import React from 'react'

export default function WhatsAppButton() {
  const phoneNumber = '9191574043210'
  const message = 'Hello JRS International School, I would like to enquire about admissions.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <aside
      aria-label="WhatsApp Contact"
      className="fixed bottom-[84px] right-[20px] sm:bottom-[96px] sm:right-[24px] z-40 flex items-center justify-center group pointer-events-none"
    >
      {/* Desktop Hover Tooltip (Positioned absolutely so it does not affect button alignment) */}
      <span
        className="hidden md:inline-block absolute right-full mr-3 px-3.5 py-1.5 rounded-full bg-slate-900/95 text-white text-xs font-semibold shadow-xl border border-white/10 pointer-events-none transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 whitespace-nowrap"
      >
        Chat on WhatsApp
      </span>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with JRS International School on WhatsApp"
        className="relative w-[50px] h-[50px] sm:w-[56px] sm:h-[56px] rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer pointer-events-auto"
        style={{
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.45), 0 2px 6px rgba(0, 0, 0, 0.2)',
        }}
      >
        {/* Subtle Pulse Ping Animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />

        {/* Official WhatsApp Vector Icon */}
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 fill-current relative z-10"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.507 14.307l-.009.075c-.301-.15-1.777-.878-2.052-.978-.276-.1-.476-.15-.676.15-.2.3-.776.978-.952 1.178-.175.2-.351.225-.651.075s-1.268-.468-2.416-1.492c-.894-.798-1.497-1.783-1.673-2.083-.175-.3-.019-.462.131-.611.136-.134.301-.35.451-.525.15-.175.2-.3.301-.5.1-.2.05-.375-.025-.525s-.676-1.63-.927-2.234c-.244-.588-.492-.508-.676-.517l-.576-.01c-.2 0-.526.075-.802.375-.276.3-1.053 1.03-1.053 2.513s1.078 2.915 1.228 3.116c.15.2 2.122 3.24 5.141 4.544 3.019 1.304 3.019.869 3.57.819.551-.05 1.777-.726 2.028-1.428.25-.701.25-1.303.175-1.428-.075-.125-.275-.2-.576-.35zm-5.518 7.391c-1.892 0-3.649-.519-5.163-1.423l-.37-.222-3.834 1.006 1.024-3.738-.242-.385c-.991-1.579-1.516-3.415-1.516-5.305 0-5.526 4.494-10.02 10.023-10.02 2.678 0 5.195 1.043 7.087 2.937 1.892 1.893 2.934 4.411 2.934 7.089 0 5.526-4.494 10.02-10.023 10.021zm8.508-18.529c-2.273-2.273-5.294-3.525-8.508-3.525-6.626 0-12.02 5.394-12.02 12.02 0 2.115.553 4.18 1.603 6l-1.704 6.222 6.368-1.671c1.751.955 3.732 1.469 5.753 1.469 6.626 0 12.02-5.394 12.02-12.02 0-3.214-1.252-6.236-3.525-8.509z" />
        </svg>
      </a>
    </aside>
  )
}
