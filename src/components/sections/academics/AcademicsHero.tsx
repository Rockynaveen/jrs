'use client'

import React from 'react'
import PageHero from '@/components/common/PageHero'

export default function AcademicsHero() {
  return (
    <PageHero
      breadcrumb="Academics"
      title="Academic"
      titleHighlight="Programmes"
      titleStyle={{ lineHeight: '52px' }}
      titleClassName="leading-[52px] sm:leading-[52px] lg:leading-[52px]"
      subtitle="Inspiring Curiosity. Building Futures."
      description="At JRS International School, our academic programmes are designed to nurture curiosity, creativity, critical thinking and a lifelong love for learning."
      descriptionStyle={{ lineHeight: '26px' }}
      descriptionClassName="leading-[26px] sm:leading-[26px]"
      imageSrc="/images/campus-building.jpg"
      imageAlt="JRS International School Campus"
    />
  )
}
