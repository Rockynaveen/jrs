'use client'

import React, { useState } from 'react'
import PageHero from '@/components/common/PageHero'

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
      />
    </>
  )
}
