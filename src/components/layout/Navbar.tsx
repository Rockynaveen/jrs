'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, ChevronRight, Phone, Mail, FileText, Award, Download } from 'lucide-react'

interface DropdownSubItem {
  name: string
  href: string
  target?: string
  rel?: string
}

interface DropdownItem {
  name: string
  href: string
  target?: string
  rel?: string
  subItems?: DropdownSubItem[]
}

interface NavLinkItem {
  name: string
  href: string
  id: string
  dropdown?: DropdownItem[]
}

interface NavbarProps {
  activePage?:
    | 'home'
    | 'about'
    | 'chairman'
    | 'principal'
    | 'educational-society'
    | 'school-management-committee'
    | 'certificates'
    | 'academics'
    | 'admissions'
    | 'beyond'
    | 'facilities'
    | 'gallery'
    | 'media'
    | '360-degree-campus'
    | 'events'
    | 'contact'
    | 'careers'
}

export default function Navbar({ activePage = 'home' }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null)
  const [openMobileSubDropdown, setOpenMobileSubDropdown] = useState<string | null>(null)

  const navLinks: NavLinkItem[] = [
    { name: 'Home', href: '/', id: 'home' },
    {
      name: 'About JRS',
      href: '/about',
      id: 'about',
      dropdown: [
        { name: 'About JRS', href: '/about' },
        {
          name: 'Leadership',
          href: '#',
          subItems: [
            { name: 'Chairman of JRS', href: '/chairman' },
            { name: 'Principal', href: '/principal' },
          ],
        },
        {
          name: 'Committee',
          href: '#',
          subItems: [
            { name: 'Educational Society', href: '/educational-society' },
            { name: 'School Management Committee', href: '/school-management-committee' },
          ],
        },
        {
          name: 'Mandatory Disclosure',
          href: '/mandatory-disclosure',
        },
      ],
    },
    { name: 'Academics', href: '/academics', id: 'academics' },
    {
      name: 'Admissions',
      href: '/admissions',
      id: 'admissions',
      dropdown: [
        { name: 'Admissions Overview', href: '/admissions' },
        {
          name: 'Download Brochure',
          href: 'https://jrsinternationalschooluppal.com/wp-content/uploads/2022/01/Brochure-2020-JRS.pdf',
          target: '_blank',
          rel: 'noopener noreferrer',
        },
      ],
    },
    { name: 'Beyond Classroom', href: '/beyond', id: 'beyond' },
    { name: 'Amenities', href: '/facilities', id: 'facilities' },
    {
      name: 'Gallery',
      href: '/gallery',
      id: 'gallery',
      dropdown: [
        { name: 'Media', href: '/media' },
        { name: '360 Degree Campus', href: '/gallery/360-degree-campus' },
      ],
    },
    { name: 'Contact', href: '/contact', id: 'contact' },
    { name: 'Careers', href: '/careers', id: 'careers' },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white border-b border-slate-100 shadow-sm transition-all duration-300 font-['Inter',sans-serif]">
        {/* Top Bar: Above Header Navigation (hidden on mobile devices) */}
        <div
          style={{ backgroundColor: 'rgb(240, 244, 250)', fontFamily: "'Inter', sans-serif" }}
          className="hidden md:block text-slate-700 border-b border-slate-200/80 relative z-20 font-['Inter',sans-serif] font-medium"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5 xl:px-8 flex items-center justify-between min-h-[34px] sm:min-h-[38px] py-1 gap-2 font-['Inter',sans-serif] font-medium">
            {/* Left Contact & Affiliation Info */}
            <div className="flex items-center gap-2 sm:gap-3 xl:gap-4 text-xs sm:text-[12px] xl:text-[13px] text-slate-700 font-medium font-['Inter',sans-serif] min-w-0 shrink">
              <a
                href="tel:+9191574043210"
                className="inline-flex items-center gap-2 text-slate-700 hover:text-[#e31e24] transition-colors font-medium shrink-0 font-['Inter',sans-serif] group"
              >
                <span className="w-5 h-5 rounded-full bg-[#013aa3] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:bg-[#012f86] transition-colors">
                  <Phone className="w-2.5 h-2.5 text-white stroke-[2.5]" />
                </span>
                <span className="text-slate-700 font-['Inter',sans-serif] font-medium whitespace-nowrap group-hover:text-[#e31e24] transition-colors">+91 915740 43210</span>
              </a>

              <span className="text-slate-400 hidden md:inline shrink-0">•</span>

              <a
                href="mailto:info@jrsinternationalschool.com"
                className="hidden md:inline-flex items-center gap-2 text-slate-700 hover:text-[#e31e24] transition-colors font-medium shrink truncate max-w-[200px] lg:max-w-none font-['Inter',sans-serif] group"
              >
                <span className="w-5 h-5 rounded-full bg-[#013aa3] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:bg-[#012f86] transition-colors">
                  <Mail className="w-2.5 h-2.5 text-white stroke-[2.5]" />
                </span>
                <span className="text-slate-700 font-['Inter',sans-serif] font-medium truncate group-hover:text-[#e31e24] transition-colors">info@jrsinternationalschool.com</span>
              </a>

              <span className="text-slate-400 hidden xl:inline shrink-0">•</span>

              <span className="hidden xl:inline-flex items-center gap-2 text-slate-700 font-medium shrink-0 font-['Inter',sans-serif] whitespace-nowrap">
                <span className="w-5 h-5 rounded-full bg-[#013aa3] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Award className="w-2.5 h-2.5 text-white stroke-[2.5]" />
                </span>
                <span className="text-slate-700 font-['Inter',sans-serif] font-medium">CBSE Affiliated School</span>
              </span>
            </div>

            {/* Right: Mandatory Disclosure & Quick links */}
            <div className="flex items-center gap-2 sm:gap-3 xl:gap-4 text-xs sm:text-[12px] xl:text-[13px] text-slate-700 font-medium shrink-0 font-['Inter',sans-serif]">
              <Link
                href="/mandatory-disclosure"
                className="inline-flex items-center gap-2 font-medium text-slate-700 hover:text-[#e31e24] transition-colors shrink-0 font-['Inter',sans-serif] whitespace-nowrap group"
              >
                <span className="w-5 h-5 rounded-full bg-[#013aa3] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:bg-[#012f86] transition-colors">
                  <FileText className="w-2.5 h-2.5 text-white stroke-[2.5]" />
                </span>
                <span className="text-slate-700 font-['Inter',sans-serif] font-medium group-hover:text-[#e31e24] transition-colors">Mandatory Disclosure</span>
              </Link>

              <span className="text-slate-400 hidden sm:inline shrink-0">•</span>

              <a
                href="https://jrsinternationalschooluppal.com/wp-content/uploads/2022/01/Brochure-2020-JRS.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 font-medium text-slate-700 hover:text-[#e31e24] transition-colors shrink-0 font-['Inter',sans-serif] whitespace-nowrap group"
              >
                <span className="w-5 h-5 rounded-full bg-[#013aa3] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:bg-[#012f86] transition-colors animate-top-to-down">
                  <Download className="w-2.5 h-2.5 text-white stroke-[2.5]" />
                </span>
                <span className="text-slate-700 font-['Inter',sans-serif] font-medium group-hover:text-[#e31e24] transition-colors">School Prospectus</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5 xl:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-2 lg:gap-3 xl:gap-4">
          {/* Logo Area */}
          <Link href="/" className="flex items-center group py-1 shrink-0">
            <img
              src="/images/logo.png"
              alt="JRS International School"
              className="h-9 sm:h-11 md:h-12 lg:h-11 xl:h-13 2xl:h-14 w-auto object-contain shrink-0 group-hover:scale-[1.02] transition-transform duration-200"
              style={{ imageRendering: '-webkit-optimize-contrast' }}
            />
          </Link>

          {/* Desktop Navigation Links (Responsive from laptops: lg through 2xl) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2.5 2xl:gap-5 shrink-0">
            {navLinks.map((link) => {
              const isActive =
                link.id === activePage ||
                (link.id === 'about' &&
                  (activePage === 'chairman' ||
                    activePage === 'principal' ||
                    activePage === 'educational-society' ||
                    activePage === 'school-management-committee' ||
                    activePage === 'certificates')) ||
                (link.id === 'gallery' &&
                  (activePage === 'gallery' ||
                    activePage === 'media' ||
                    activePage === '360-degree-campus'))

              if (link.dropdown) {
                return (
                  <div key={link.name} className="relative group">
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-0.5 xl:gap-1 text-[13px] xl:text-[14px] 2xl:text-[15px] font-medium transition-colors hover:text-red-600 py-1.5 px-1.5 xl:px-2 rounded-md whitespace-nowrap ${
                        isActive ? 'text-red-600 font-semibold' : 'text-slate-700'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-3 h-3 xl:w-3.5 xl:h-3.5 transition-transform duration-200 group-hover:rotate-180 text-slate-400 group-hover:text-red-600 shrink-0" />
                    </Link>

                    {/* Desktop Dropdown Menu */}
                    <div className="absolute top-full left-0 pt-1.5 hidden group-hover:block z-50 min-w-[210px]">
                      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 py-2 overflow-visible ring-1 ring-black/5 animate-fade-in">
                        {link.dropdown.map((subItem) => {
                          if (subItem.subItems) {
                            return (
                              <div key={subItem.name} className="relative group/sub">
                                <div className="flex items-center justify-between px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-red-600 hover:bg-red-50/60 transition-colors cursor-pointer">
                                  <span>{subItem.name}</span>
                                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover/sub:text-red-600 group-hover/sub:translate-x-0.5 transition-transform" />
                                </div>

                                {/* Desktop Nested Flyout Submenu */}
                                <div className="absolute left-full top-0 -ml-1 pl-2 hidden group-hover/sub:block z-50 min-w-[260px]">
                                  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 py-2 overflow-hidden ring-1 ring-black/5 animate-fade-in">
                                    {subItem.subItems.map((nested) => (
                                      <Link
                                        key={nested.name}
                                        href={nested.href}
                                        target={nested.target}
                                        rel={nested.rel}
                                        className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-red-600 hover:bg-red-50/60 transition-colors whitespace-nowrap"
                                      >
                                        {nested.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )
                          }

                          return (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              target={subItem.target}
                              rel={subItem.rel}
                              className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-red-600 hover:bg-red-50/60 transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[13px] xl:text-[14px] 2xl:text-[15px] font-medium transition-colors hover:text-red-600 py-1.5 px-1.5 xl:px-2 rounded-md whitespace-nowrap ${
                    isActive ? 'text-red-600 font-semibold' : 'text-slate-700'
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
          </nav>

          {/* Enquire Now CTA Button */}
          <div className="hidden sm:flex items-center shrink-0">
            <Link
              href="/admissions#enquiry-form"
              className="inline-flex items-center justify-center px-3.5 py-1.5 lg:px-4 lg:py-2 xl:px-5 xl:py-2.5 rounded-full text-xs lg:text-[13px] xl:text-sm font-semibold text-white bg-[#dc2626] hover:bg-[#b91c1c] active:scale-95 shadow-md shadow-red-500/20 transition-all duration-200 whitespace-nowrap"
            >
              Enquire Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-red-600 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-2 max-h-[calc(100dvh-4.5rem)] overflow-y-auto">
          {navLinks.map((link) => {
            const isActive =
              link.id === activePage ||
              (link.id === 'about' &&
                (activePage === 'chairman' ||
                  activePage === 'principal' ||
                  activePage === 'educational-society' ||
                  activePage === 'school-management-committee' ||
                  activePage === 'certificates')) ||
              (link.id === 'gallery' &&
                (activePage === 'gallery' ||
                  activePage === 'media' ||
                  activePage === '360-degree-campus'))

            if (link.dropdown) {
              return (
                <div key={link.name} className="space-y-1">
                  <div
                    className={`flex items-center justify-between px-3 py-2 rounded-md text-[15px] font-medium ${
                      isActive ? 'bg-red-50 text-red-600 font-semibold' : 'text-slate-700'
                    }`}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex-1 hover:text-red-600"
                    >
                      {link.name}
                    </Link>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenMobileDropdown(
                          openMobileDropdown === link.id ? null : link.id
                        )
                      }
                      className="p-1 text-slate-400 hover:text-red-600 focus:outline-none"
                      aria-label="Toggle dropdown"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          openMobileDropdown === link.id ? 'rotate-180 text-red-600' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {openMobileDropdown === link.id && (
                    <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50/70 rounded-lg">
                      {link.dropdown.map((subItem) => {
                        if (subItem.subItems) {
                          const isSubOpen = openMobileSubDropdown === subItem.name
                          return (
                            <div key={subItem.name} className="space-y-1">
                              <div
                                onClick={() => setOpenMobileSubDropdown(isSubOpen ? null : subItem.name)}
                                className="flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-red-600 hover:bg-white transition-colors cursor-pointer"
                              >
                                <span>{subItem.name}</span>
                                <ChevronDown
                                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                                    isSubOpen ? 'rotate-180 text-red-600' : 'text-slate-400'
                                  }`}
                                />
                              </div>

                              {isSubOpen && (
                                <div className="pl-4 pr-2 py-1 space-y-1 border-l-2 border-red-200 ml-3">
                                  {subItem.subItems.map((nested) => (
                                    <Link
                                      key={nested.name}
                                      href={nested.href}
                                      target={nested.target}
                                      rel={nested.rel}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="block px-3 py-1.5 rounded-md text-[13px] font-medium text-slate-600 hover:text-red-600 hover:bg-white transition-colors"
                                    >
                                      {nested.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          )
                        }

                        return (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            target={subItem.target}
                            rel={subItem.rel}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-red-600 hover:bg-white transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-[15px] font-medium transition-colors ${
                  isActive
                    ? 'bg-red-50 text-red-600 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-red-600'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
          <div className="pt-2">
            <Link
              href="/admissions#enquiry-form"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center block px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-[#dc2626] hover:bg-[#b91c1c] shadow-md shadow-red-500/20"
            >
              Enquire Now
            </Link>
          </div>

          {/* Social Media Links in Mobile Drawer */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-center gap-3">
            <span className="text-xs font-semibold text-slate-500 mr-1">Follow Us:</span>
            <a
              href="https://www.facebook.com/AtJRSSchool/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#1877f2] text-slate-600 hover:text-white flex items-center justify-center transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/jrs_international_school/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#e4405f] text-slate-600 hover:text-white flex items-center justify-center transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://x.com/AtJRSSchool"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-black text-slate-600 hover:text-white flex items-center justify-center transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/channel/UCep-jmPHdWe-dCOYkAOCL1Q"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#ff0000] text-slate-600 hover:text-white flex items-center justify-center transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </header>
    {/* Spacer to preserve document flow underneath the fixed header */}
    <div className="h-16 sm:h-20 md:h-[122px] w-full shrink-0 pointer-events-none" aria-hidden="true" />
  </>
  )
}
