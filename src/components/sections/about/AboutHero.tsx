'use client'

import React, { useState } from 'react'
import PageHero from '@/components/common/PageHero'
import AboutStats from './AboutStats'

export default function AboutHero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  return (
    <>
      <PageHero
        breadcrumb="About JRS"
        title="About"
        titleHighlight="JRS"
        subtitle="Learning Today. Leading Tomorrow."
        description="At JRS International School, we are dedicated to providing a transformative educational experience that nurtures academic excellence, character development, and global readiness."
        imageSrc="/images/campus-building.jpg"
        imageAlt="JRS International School Campus"
        primaryButton={{
          text: 'Our Story',
          href: '#our-story',
        }}
        secondaryButton={{
          text: 'Watch Campus Video',
          href: '#campus-video',
          onClick: () => setIsVideoModalOpen(true),
          icon: 'play',
        }}
        className="!-mt-16 sm:!-mt-20 md:!-mt-[122px] !pt-16 sm:!pt-20 md:!pt-[122px] !h-[100vh] !min-h-[100vh] !h-[100dvh] !min-h-[100dvh]"
      >
        <AboutStats />
      </PageHero>
    </>
  )
}
