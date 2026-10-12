'use client'

import React from 'react'
import PageHero from '@/components/common/PageHero'

export default function AcademicsHero() {
  return (
    <PageHero
      breadcrumb="Academics"
      title="Academic"
      titleHighlight="Programmes"
      subtitle="Inspiring Curiosity. Building Futures."
      description="At JRS International School, our academic programmes are designed to nurture curiosity, creativity, critical thinking and a lifelong love for learning."
      imageSrc="/images/campus-building.jpg"
      imageAlt="JRS International School Campus"
      primaryButton={{
        text: 'Explore Programmes',
        href: '#programmes',
      }}
      secondaryButton={{
        text: 'Apply for Admission',
        href: '/admissions',
        icon: 'arrow',
      }}
    />
  )
}
