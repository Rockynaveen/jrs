'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Play, PhoneCall } from 'lucide-react'

export interface PageHeroButton {
  text: string
  href?: string
  onClick?: () => void
  icon?: 'arrow' | 'play' | 'phone'
}

export interface PageHeroProps {
  breadcrumb: string
  title: string
  titleHighlight?: string
  subtitle?: string
  description?: string
  imageSrc?: string
  imageAlt?: string
  imagePosition?: string
  overlayType?: 'default' | 'logo-blue'
  primaryButton?: PageHeroButton
  secondaryButton?: PageHeroButton
  rightElement?: React.ReactNode
  className?: string
  children?: React.ReactNode
}

export default function PageHero({
  breadcrumb,
  title,
  titleHighlight,
  subtitle,
  description,
  imageSrc = '/images/campus-building.jpg',
  imageAlt = 'JRS International School Campus',
  imagePosition,
  overlayType = 'default',
  primaryButton,
  secondaryButton,
  rightElement,
  className,
  children,
}: PageHeroProps) {
  return (
    <section className={`relative overflow-hidden bg-[#031c3f] text-white h-[70vh] min-h-[70vh] h-[70dvh] min-h-[70dvh] flex flex-col justify-center ${className || ''}`}>
      {/* Background Campus Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageSrc}
          alt={imageAlt}
          className={`w-full h-full object-cover ${
            imagePosition || 'object-center sm:object-[center_35%]'
          }`}
          onError={(e) => {
            const target = e.currentTarget
            target.src = '/images/campus-building.jpg'
          }}
        />

        {overlayType === 'logo-blue' ? (
          <>
            {/* Logo Blue Overlay: Full mobile protection + desktop horizontal fade */}
            <div className="absolute inset-0 bg-[#013aa3]/50 md:bg-[#013aa3]/40 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#013aa3] via-[#013aa3]/80 to-[#013aa3]/50 md:hidden pointer-events-none" />
            <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#013aa3]/90 via-[#013aa3]/60 via-40% to-transparent pointer-events-none" />
            <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-[#013aa3]/40 via-transparent to-transparent pointer-events-none" />
          </>
        ) : (
          <>
            {/* Navy Overlay: Full mobile protection + desktop horizontal fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#031c3f] via-[#031c3f]/85 to-[#031c3f]/65 md:hidden pointer-events-none" />
            <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#031c3f] via-[#031c3f]/85 via-35% md:via-45% to-transparent pointer-events-none" />
            <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-[#031c3f]/30 via-transparent to-transparent pointer-events-none" />
          </>
        )}
      </div>

      {/* Decorative Red Curved Swoosh in Bottom-Right Corner (subtle on mobile) */}
      <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 w-36 sm:w-56 md:w-80 h-36 sm:h-56 md:h-80 pointer-events-none z-10 overflow-hidden opacity-40 sm:opacity-90">
        <svg
          viewBox="0 0 300 300"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 120 300 C 180 260, 260 210, 300 120 L 300 300 Z"
            fill="#e31e24"
            opacity="0.95"
          />
          <path
            d="M 170 300 C 210 270, 270 230, 300 170 L 300 300 Z"
            fill="#ff3b44"
            opacity="0.85"
          />
        </svg>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-8 md:py-10 lg:py-12 w-full">
        <div className={rightElement ? "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" : ""}>
          <div className={rightElement ? "lg:col-span-8 max-w-xl md:max-w-2xl" : "max-w-xl md:max-w-2xl"} data-aos="fade-right">
            {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-300 mb-2.5 sm:mb-4"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-slate-400 font-normal">›</span>
            <span className="text-white font-semibold">{breadcrumb}</span>
          </nav>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[42px] font-bold tracking-tight text-white leading-[1.2] break-words">
            {title}{' '}
            {titleHighlight && (
              <span className="text-[#f59e0b] font-bold">{titleHighlight}</span>
            )}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-white/90 mt-1.5 sm:mt-2.5 tracking-tight leading-snug">
              {subtitle}
            </p>
          )}

          {/* Description Paragraph */}
          {description && (
            <p className="text-slate-200 text-sm md:text-[15px] lg:text-base max-w-xl opacity-90 leading-relaxed mt-2.5 sm:mt-3.5">
              {description}
            </p>
          )}

          {/* Action Buttons */}
          {(primaryButton || secondaryButton) && (
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-4 sm:mt-6">
              {/* Primary Button */}
              {primaryButton &&
                (primaryButton.href ? (
                  primaryButton.href.startsWith('http') || primaryButton.href.startsWith('tel:') ? (
                    <a
                      href={primaryButton.href}
                      onClick={primaryButton.onClick}
                      className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full text-sm font-semibold text-white bg-[#e31e24] hover:bg-[#c9181e] shadow-lg shadow-red-600/30 transition-all duration-200 active:scale-95 text-center"
                    >
                      <span>{primaryButton.text}</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </a>
                  ) : (
                    <Link
                      href={primaryButton.href}
                      onClick={primaryButton.onClick}
                      className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full text-sm font-semibold text-white bg-[#e31e24] hover:bg-[#c9181e] shadow-lg shadow-red-600/30 transition-all duration-200 active:scale-95 text-center"
                    >
                      <span>{primaryButton.text}</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </Link>
                  )
                ) : (
                  <button
                    type="button"
                    onClick={primaryButton.onClick}
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full text-sm font-semibold text-white bg-[#e31e24] hover:bg-[#c9181e] shadow-lg shadow-red-600/30 transition-all duration-200 active:scale-95 text-center"
                  >
                    <span>{primaryButton.text}</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                ))}

              {/* Secondary Button */}
              {secondaryButton &&
                (secondaryButton.href ? (
                  secondaryButton.href.startsWith('http') || secondaryButton.href.startsWith('tel:') ? (
                    <a
                      href={secondaryButton.href}
                      onClick={secondaryButton.onClick}
                      className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/40 backdrop-blur-sm transition-all duration-200 active:scale-95 text-center"
                    >
                      <span>{secondaryButton.text}</span>
                      {secondaryButton.icon === 'phone' ? (
                        <PhoneCall className="w-3.5 h-3.5 text-[#f59e0b]" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border border-white flex items-center justify-center">
                          <Play className="w-2 h-2 fill-white ml-0.5" />
                        </div>
                      )}
                    </a>
                  ) : (
                    <Link
                      href={secondaryButton.href}
                      onClick={secondaryButton.onClick}
                      className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/40 backdrop-blur-sm transition-all duration-200 active:scale-95 text-center"
                    >
                      <span>{secondaryButton.text}</span>
                      {secondaryButton.icon === 'phone' ? (
                        <PhoneCall className="w-3.5 h-3.5 text-[#f59e0b]" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border border-white flex items-center justify-center">
                          <Play className="w-2 h-2 fill-white ml-0.5" />
                        </div>
                      )}
                    </Link>
                  )
                ) : (
                  <button
                    type="button"
                    onClick={secondaryButton.onClick}
                    className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/40 backdrop-blur-sm transition-all duration-200 active:scale-95 text-center cursor-pointer"
                  >
                    <span>{secondaryButton.text}</span>
                    {secondaryButton.icon === 'phone' ? (
                      <PhoneCall className="w-3.5 h-3.5 text-[#f59e0b]" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border border-white flex items-center justify-center">
                        <Play className="w-2 h-2 fill-white ml-0.5" />
                      </div>
                    )}
                  </button>
                ))}
            </div>
          )}
          </div>

          {rightElement && (
            <div
              className="hidden lg:flex lg:col-span-4 justify-end items-center pr-4"
              data-aos="fade-left"
            >
              {rightElement}
            </div>
          )}
        </div>

        {/* Optional Children slot (e.g. highlight cards) */}
        {children && <div className="mt-10 sm:mt-12">{children}</div>}
      </div>
    </section>
  )
}
