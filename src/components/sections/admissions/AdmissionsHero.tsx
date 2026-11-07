'use client'

import React from 'react'
import PageHero from '@/components/common/PageHero'
import { Download, FileText } from 'lucide-react'

export default function AdmissionsHero() {
  return (
    <div className="relative">
      <PageHero
        breadcrumb="Admissions"
        title="Admissions at"
        titleHighlight="JRS"
        subtitle="Begin a Confident Learning Journey."
        description="Begin a confident learning journey with a strong academic foundation, values and a brighter future. Apply early for the academic year 2027 – 2028."
        imageSrc="/images/campus-building.jpg"
        imageAlt="JRS International School Campus"
      />

      {/* Floating Action Banner: Download School Brochure & Prospectus */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#013aa3]/10 text-[#013aa3] flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-[#031c3f]">
                Official School Brochure &amp; Foundation Guide
              </h3>
              <p className="text-xs text-slate-500">
                Download the complete guide covering CBSE curriculum, IIT/JEE-NEET foundation, labs &amp; admissions.
              </p>
            </div>
          </div>

          <a
            href="/documents/jrs-school-brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="JRS-International-School-Brochure.pdf"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#e31e24] hover:bg-[#c9181e] active:scale-95 transition-all shadow-md shadow-red-600/25 shrink-0"
          >
            <Download className="w-4 h-4" />
            <span>Download Brochure</span>
          </a>
        </div>
      </div>
    </div>
  )
}
