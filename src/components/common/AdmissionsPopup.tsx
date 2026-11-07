'use client'

import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export default function AdmissionsPopup() {
  const [isOpen, setIsOpen] = useState(false)

  // Open modal automatically on page load / refresh after a brief natural delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  // Lock body scroll and handle Escape key while modal is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Festive Greeting - Happy Diwali"
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/75 backdrop-blur-sm animate-fade-in"
      onClick={() => setIsOpen(false)}
    >
      {/* Modal Dialog Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-auto max-w-[92vw] sm:max-w-xl md:max-w-2xl lg:max-w-3xl max-h-[90vh] bg-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-white/20 animate-scale-up flex items-center justify-center"
        style={{
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 50px rgba(245, 158, 11, 0.25)',
        }}
      >
        {/* Floating Close Button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close greeting"
          className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-[#e31e24] text-white shadow-xl flex items-center justify-center transition-all duration-200 cursor-pointer border border-white/30 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-amber-400"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Festive Greeting Image */}
        <img
          src="/images/diwali-popup.jpg"
          alt="Happy Diwali - JRS International School"
          className="w-full h-auto max-h-[90vh] object-contain block select-none rounded-2xl sm:rounded-3xl"
          loading="eager"
        />
      </div>
    </div>
  )
}
