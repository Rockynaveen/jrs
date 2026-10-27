'use client'

import React from 'react'
import PageHero from '@/components/common/PageHero'

export default function AdmissionsHero() {
  return (
    <PageHero
      breadcrumb="Admissions"
      title="Admissions at"
      titleHighlight="JRS"
      subtitle="Begin a Confident Learning Journey."
      description="Begin a confident learning journey with a strong academic foundation, values and a brighter future. Apply early for the academic year 2027 – 2028."
      imageSrc="/images/campus-building.jpg"
      imageAlt="JRS International School Campus"
      primaryButton={{
        text: 'Apply Now',
        href: '#enquiry-form',
      }}
    />
  )
}
