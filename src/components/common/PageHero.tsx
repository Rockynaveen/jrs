'use client'

import React from 'react'
import Link from 'next/link'


export interface PageHeroButton {
  text: string
  href?: string
  onClick?: () => void
  icon?: 'arrow' | 'play' | 'phone'
}

export interface PageHeroProps {
  breadcrumb: string
  parentBreadcrumb?: {
    label: string
    href: string
  }
  title: string
  titleHighlight?: string
  subtitle?: string
  description?: string
  imageSrc?: string
  imageAlt?: string
  imagePosition?: string
  overlayType?: 'default' | 'logo-blue' | 'cinematic'
  showDecorativeSwoosh?: boolean
  primaryButton?: PageHeroButton
  secondaryButton?: PageHeroButton
  rightElement?: React.ReactNode
  titleClassName?: string
  titleStyle?: React.CSSProperties
  descriptionClassName?: string
  descriptionStyle?: React.CSSProperties
  className?: string
  children?: React.ReactNode
}

export default function PageHero({
  breadcrumb,
  parentBreadcrumb,
  title,
  titleHighlight,
  subtitle,
  description,
  imageSrc = '/images/campus-building.jpg',
  imageAlt = 'JRS International School Campus',
  imagePosition,
  overlayType = 'default',
  showDecorativeSwoosh = true,
  rightElement,
  className,
  titleClassName,
  titleStyle,
  descriptionClassName,
  descriptionStyle,
  children,
}: PageHeroProps) {
  return (
    <section className={`relative overflow-hidden bg-slate-950 text-white -mt-16 sm:-mt-20 md:-mt-[122px] pt-16 sm:pt-20 md:pt-[122px] h-[70vh] min-h-[70vh] h-[70dvh] min-h-[70dvh] flex flex-col ${children ? 'justify-between' : 'justify-center'} ${className || ''}`}>
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

        {/* Lite Black Overlay */}
        <div className="absolute inset-0 bg-black/45 md:bg-black/40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/35 pointer-events-none" />
      </div>

      {/* Decorative Red Curved Swoosh in Bottom-Right Corner (optional) */}
      {showDecorativeSwoosh && (
        <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 w-36 sm:w-56 md:w-80 h-36 sm:h-56 md:h-80 pointer-events-none z-10 overflow-hidden opacity-30 sm:opacity-75">
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
      )}

      {/* Hero Content Container */}
      <div
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center ${
          children
            ? 'pt-3 sm:pt-4 md:pt-6 pb-28 sm:pb-32 md:pb-[130px]'
            : 'pt-3 sm:pt-4 md:pt-6 pb-6 sm:pb-8 md:pb-10'
        }`}
      >
        {/* Center: Heading, Breadcrumb & Action Buttons */}
        <div className="my-auto text-center flex flex-col items-center justify-center max-w-4xl mx-auto w-full py-4 sm:py-6" data-aos="fade-up">
          {/* Main Title */}
          <h1
            style={titleStyle}
            className={`text-2xl sm:text-3xl md:text-[38px] md:leading-[48px] lg:text-[44px] lg:leading-[54px] xl:text-[46px] xl:leading-[56px] font-bold tracking-tight text-white break-words text-center mx-auto ${titleClassName || ''}`}
          >
            {title}{' '}
            {titleHighlight && (
              <span className="text-[#f59e0b] font-bold" style={{ lineHeight: 'inherit' }}>{titleHighlight}</span>
            )}
          </h1>

          {/* Breadcrumb Navigation - Below Heading */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center justify-center flex-wrap gap-2 text-xs sm:text-sm font-medium text-slate-300 mt-2.5 sm:mt-3.5"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            {parentBreadcrumb && (
              <>
                <span className="text-slate-400 font-normal">›</span>
                <Link href={parentBreadcrumb.href} className="hover:text-white transition-colors">
                  {parentBreadcrumb.label}
                </Link>
              </>
            )}
            <span className="text-slate-400 font-normal">›</span>
            <span className="text-[#f59e0b] font-semibold">{breadcrumb}</span>
          </nav>
        </div>

            {rightElement && (
              <div
                className="hidden lg:flex justify-end items-center"
                data-aos="fade-left"
              >
                {rightElement}
              </div>
            )}
      </div>

      {/* Hero Statistics Bar Slot: Layered inside relative hero section */}
      {children}
    </section>
  )
}
