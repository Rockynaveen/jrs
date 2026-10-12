'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  MapPin,
  Phone,
  Mail,
  ChevronUp,
  Heart,
  ArrowRight,
} from 'lucide-react'

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Hide button in Hero section, reveal only after user scrolls down past the hero
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About JRS', href: '/about' },
    { name: 'Academics', href: '/academics' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Beyond Classroom', href: '/beyond' },
    { name: 'Amenities', href: '/facilities' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ]

  const importantLinks = [
    {
      name: 'School Prospectus',
      href: 'https://jrsinternationalschooluppal.com/wp-content/uploads/2022/01/Brochure-2020-JRS.pdf',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      name: 'Mandatory Disclosure',
      href: '/certificates',
    },
    {
      name: 'CBSE Affiliation',
      href: '/certificates',
    },
    {
      name: 'Careers',
      href: '/careers',
    },
    {
      name: 'Enquire Now',
      href: '/admissions#enquiry-form',
    },
    {
      name: 'Online Enquiry',
      href: '/admissions#enquiry-form',
    },
  ]

  return (
    <footer
      className="relative bg-[#031c3f] text-slate-200 overflow-hidden text-sm font-['Inter',sans-serif] font-light"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* Column 1: School Identity (Col span 4) */}
          <div className="lg:col-span-4 space-y-3">
            {/* Logo in White */}
            <Link href="/" className="inline-block group">
              <img
                src="/images/logo.png"
                alt="JRS International School"
                className="h-12 sm:h-14 md:h-16 w-auto object-contain brightness-0 invert opacity-95 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-200"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
              />
            </Link>

            <div>
              <h3 className="text-white font-normal text-sm sm:text-[15px] tracking-wide leading-snug">
                JRS International School, Narapally, Hyderabad
              </h3>
              <p className="text-slate-200 text-sm leading-relaxed mt-1 max-w-sm font-light">
                Nurturing young minds with knowledge, values and a global perspective.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="pt-0.5">
              <span className="text-[11px] font-normal text-slate-300 uppercase tracking-widest block mb-1.5">
                Connect With Us
              </span>
              <div className="flex items-center gap-2">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/AtJRSSchool/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#1877f2] text-white flex items-center justify-center transition-all duration-200 border border-white/10 hover:border-transparent hover:-translate-y-0.5 shadow-sm"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/jrs_international_school/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] text-white flex items-center justify-center transition-all duration-200 border border-white/10 hover:border-transparent hover:-translate-y-0.5 shadow-sm"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* X (formerly Twitter) */}
                <a
                  href="https://x.com/AtJRSSchool"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-black text-white flex items-center justify-center transition-all duration-200 border border-white/10 hover:border-transparent hover:-translate-y-0.5 shadow-sm"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/channel/UCep-jmPHdWe-dCOYkAOCL1Q"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#ff0000] text-white flex items-center justify-center transition-all duration-200 border border-white/10 hover:border-transparent hover:-translate-y-0.5 shadow-sm"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (Col span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <div>
              <h4 className="text-base font-normal text-white tracking-wide">
                Quick Links
              </h4>
              <div className="w-7 h-0.5 bg-white/30 mt-1 rounded-full" />
            </div>

            <ul className="space-y-2 text-sm font-light text-slate-200">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-slate-200 hover:text-white hover:translate-x-1 transition-all duration-200 font-light"
                  >
                    <ArrowRight className="w-3 h-3 text-white/70 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Important Links (Col span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <div>
              <h4 className="text-base font-normal text-white tracking-wide">
                Important Links
              </h4>
              <div className="w-7 h-0.5 bg-white/30 mt-1 rounded-full" />
            </div>

            <ul className="space-y-2 text-sm font-light text-slate-200">
              {importantLinks.map((link) => {
                const isExternal = link.href.startsWith('http')
                return (
                  <li key={link.name}>
                    {isExternal ? (
                      <a
                        href={link.href}
                        target={link.target || '_blank'}
                        rel={link.rel || 'noopener noreferrer'}
                        className="group inline-flex items-center gap-1.5 text-slate-200 hover:text-white hover:translate-x-1 transition-all duration-200 font-light"
                      >
                        <ArrowRight className="w-3 h-3 text-white/70 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                        <span>{link.name}</span>
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-1.5 text-slate-200 hover:text-white hover:translate-x-1 transition-all duration-200 font-light"
                      >
                        <ArrowRight className="w-3 h-3 text-white/70 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                        <span>{link.name}</span>
                      </Link>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Column 4: Contact Us & Campus Map (Col span 4) */}
          <div id="footer-contact" className="lg:col-span-4 space-y-3">
            <div>
              <h4 className="text-base font-normal text-white tracking-wide">
                Contact Us
              </h4>
              <div className="w-7 h-0.5 bg-white/30 mt-1 rounded-full" />
            </div>

            <div className="space-y-2.5 text-sm text-slate-200 font-light">
              {/* Address */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/15 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="leading-relaxed">
                  JRS International School, Narapally, Near Uppal Depot, Hyderabad, Telangana
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/15 text-white flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <a
                  href="tel:+9191574043210"
                  className="hover:text-white transition-colors"
                >
                  +91 915740 43210
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/15 text-white flex items-center justify-center flex-shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <a
                  href="mailto:info@jrsinternationalschool.com"
                  className="hover:text-white transition-colors"
                >
                  info@jrsinternationalschool.com
                </a>
              </div>
            </div>

            {/* Interactive Campus Google Map Embed */}
            <div className="mt-2.5 relative rounded-xl overflow-hidden border border-white/15 shadow-md h-28 sm:h-32 w-full bg-[#02132d] group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.007807061472!2d78.64582367390636!3d17.406331902261698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99d739fb75a1%3A0xb3a2624674fea4ab!2sJRS%20International%20School%20-%20Narapally%2C%20Hyderabad!5e1!3m2!1sen!2sin!4v1790770247998!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="JRS International School - Narapally, Hyderabad"
                className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll-to-Top Button (positioned above WhatsApp & live chat, vertically aligned) */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-[148px] right-[25px] sm:bottom-[168px] sm:right-[32px] z-40 w-10 h-10 rounded-full bg-[#031c3f] hover:bg-[#02132d] text-white flex items-center justify-center shadow-2xl border border-white/20 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer ${showScrollTop
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
      >
        <ChevronUp className="w-5 h-5 stroke-[2.5]" />
      </button>

      {/* Bottom Copyright Strip in Logo Blue Tone */}
      <div className="relative z-10 bg-[#02142d] border-t border-white/10 py-3 px-4 sm:px-6 lg:px-8 text-[13px] font-light">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-slate-300">
          <div>
            © 2026 <span className="text-white font-normal">JRS International School</span>. All Rights Reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-slate-300">
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="text-white/30">|</span>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
            <span className="text-white/30">|</span>
            <a href="#sitemap" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div>

          <div className="flex items-center gap-1.5 text-slate-300">
            <span>Designed by</span>
            <a
              href="https://www.sunseaz.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-normal text-white tracking-wide no-underline hover:text-amber-400 transition-colors"
            >
              Sunseaz
            </a>
            <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500 inline-block animate-pulse" />
          </div>
        </div>
      </div>
    </footer>
  )
}
