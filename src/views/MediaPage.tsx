'use client'

import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import Link from 'next/link'
import {
  Calendar,
  ArrowRight,
  X,
  Newspaper,
  ZoomIn,
  Sparkles,
} from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import PageHero from '@/components/common/PageHero'
import Footer from '@/components/layout/Footer'

export interface MediaArticle {
  id: string
  category: 'SCHOOL EVENT' | 'SPORTS' | 'ACTIVITIES' | 'EDUCATION' | 'CELEBRATION' | 'ACHIEVEMENT'
  badgeColor?: string
  title: string
  titleEn?: string
  date: string
  excerpt: string
  fullContent?: string
  image: string
  publication?: string
}

const FEATURED_ARTICLES: MediaArticle[] = [
  {
    id: 'featured-1',
    category: 'ACHIEVEMENT',
    title: 'విద్యార్థుల నైపుణ్యతను గుర్తించి ప్రోత్సహించాలి - సినీ హీరో, డైరెక్టర్ విశ్వక్ సేన్',
    titleEn: '"Identify and Encourage Students\' Innate Talents" — Actor & Director Vishwak Sen at JRS Annual Day',
    date: '15 FEB 2023',
    excerpt:
      'విద్యార్థులలో దాగి ఉన్న కళా నైపుణ్యాలను గుర్తించి ఆ దిశగా ప్రోత్సాహకాలు అందించినపుడే ఉన్నత స్థానాలలో రాణించగలరని ప్రముఖ సినీ హీరో, డైరెక్టర్ విశ్వక్ సేన్ అన్నారు. కొర్రెముల పరిధిలోని జేఆర్ఎస్ ఇంటర్నేషనల్ పాఠశాల వార్షికోత్సవానికి ముఖ్య అతిథిగా హాజరై ప్రసంగించారు.',
    fullContent:
      'ఘట్‌కేసర్ మండలం కొర్రెముల పరిధిలోని జేఆర్ఎస్ ఇంటర్నేషనల్ పాఠశాల వార్షికోత్సవం కార్యక్రమానికి ముఖ్య అతిథిగా ప్రముఖ నటుడు, డైరెక్టర్ విశ్వక్ సేన్, సినీ గాయకుడు పృథ్వీచంద్ర, పర్వతారోహకురాలు అన్విత రెడ్డి పాల్గొన్నారు. విద్యార్థులను అన్ని రంగాలలో నైపుణ్యతను పెంపొందించే విధంగా యాజమాన్యం చేస్తున్న కృషి అభినందనీయమని తెలిపారు. ప్రిన్సిపాల్ జగదీశ్వరి నటరాజ్ చేతుల మీదుగా విశ్వక్ సేన్‌కు మెమెంటో అందజేశారు.',
    image: '/images/featured-news.png',
    publication: 'మన తెలంగాణ (Mana Telangana) • Hyderabad Main, Page 6',
  },
  {
    id: 'featured-2',
    category: 'SCHOOL EVENT',
    title: 'విద్యార్థుల నైపుణ్యతను గుర్తించి ప్రోత్సహించాలి - ప్రముఖ డైరెక్టర్ విశ్వక్ సేన్',
    titleEn: '"Identify and Encourage Student Talents" — Director Vishwak Sen at JRS International School',
    date: '14 FEB 2023',
    excerpt:
      'విద్యార్థులలో దాగి ఉన్న కళానైపుణ్యాలను గుర్తించి ఆ దిశగా ప్రోత్సాహకాలు అందించినపుడే ఉన్నత స్థానాలలో రాణించగలరని ప్రముఖ నటుడు, ప్రొడ్యూసర్ విశ్వక్ సేన్ అన్నారు. వార్షికోత్సవంలో విద్యార్థుల సాంస్కృతిక ప్రదర్శనలు ఆకట్టుకున్నాయి.',
    fullContent:
      'ఘట్‌కేసర్ మండలం కొర్రెముల పరిధిలోని జేఆర్ఎస్ ఇంటర్నేషనల్ పాఠశాల వార్షికోత్సవం కార్యక్రమానికి ముఖ్య అతిథిగా ప్రముఖ నటుడు, ప్రొడ్యూసర్ విశ్వక్ సేన్, సినీ గాయకుడు పృథ్వీచంద్ర, పర్వతారోహకురాలు అన్విత రెడ్డి పాల్గొన్నారు. ప్రిన్సిపాల్ జగదీశ్వరి నటరాజ్ చేతుల మీదుగా విశ్వక్ సేన్‌కు మెమెంటో అందజేశారు.',
    image: '/images/news-surya-clipping.png',
    publication: 'సూర్య (Surya Daily) • Ghatkesar',
  },
  {
    id: 'featured-3',
    category: 'CELEBRATION',
    title: 'పాఠశాలలో సాంస్కృతిక కార్యక్రమాలు - గణతంత్ర దినోత్సవ వేడుకలు',
    titleEn: 'Patriotic Celebrations & Cultural Performances on Republic Day',
    date: '28 JAN 2023',
    excerpt:
      'నారపల్లిలోని జేఆర్ఎస్ ఇంటర్నేషనల్ స్కూల్‌లో గణతంత్ర దినోత్సవ వేడుకలు ఘనంగా జరిగాయి. విద్యార్థులచే నిర్వహించిన దేశభక్తితో కూడిన సాంస్కృతిక జానపద నృత్య ప్రదర్శనలు చూపురులను ఆకట్టుకున్నాయి.',
    fullContent:
      'పోచారం మున్సిపల్ నారపల్లిలోని జేఆర్ఎస్ ఇంటర్నేషనల్ స్కూల్‌లో గణతంత్ర దినోత్సవ వేడుకలు గురువారం ఘనంగా జరిగాయి. పలు సాంస్కృతిక నృత్య ప్రదర్శనల్లో విజేతలుగా నిలిచిన విద్యార్థులకు ప్రిన్సిపాల్ జగదీశ్వరి నటరాజ్ చేతుల మీదుగా బహుమతులు అందజేశారు.',
    image: '/images/news-vaartha-clipping.png',
    publication: 'వార్త (Vaartha Daily) • Ghatkesar',
  },
]

const MEDIA_ARTICLES: MediaArticle[] = [
  {
    id: 'media-1',
    category: 'SCHOOL EVENT',
    title: 'విద్యార్థుల నైపుణ్యతను గుర్తించి ప్రోత్సహించాలి - ప్రముఖ డైరెక్టర్ విశ్వక్ సేన్',
    titleEn: '"Identify and Encourage Student Talents" — Director Vishwak Sen at JRS International School',
    date: '14 FEB 2023',
    excerpt:
      'విద్యార్థులలో దాగి ఉన్న కళానైపుణ్యాలను గుర్తించి ఆ దిశగా ప్రోత్సాహకాలు అందించినపుడే ఉన్నత స్థానాలలో రాణించగలరని ప్రముఖ నటుడు, ప్రొడ్యూసర్ విశ్వక్ సేన్ అన్నారు. వార్షికోత్సవంలో విద్యార్థుల సాంస్కృతిక ప్రదర్శనలు ఆకట్టుకున్నాయి.',
    fullContent:
      'ఘట్‌కేసర్ మండలం కొర్రెముల పరిధిలోని జేఆర్ఎస్ ఇంటర్నేషనల్ పాఠశాల వార్షికోత్సవం కార్యక్రమానికి ముఖ్య అతిథిగా ప్రముఖ నటుడు, ప్రొడ్యూసర్ విశ్వక్ సేన్, సినీ గాయకుడు పృథ్వీచంద్ర, పర్వతారోహకురాలు అన్విత రెడ్డి పాల్గొన్నారు. ప్రిన్సిపాల్ జగదీశ్వరి నటరాజ్ చేతుల మీదుగా విశ్వక్ సేన్‌కు మెమెంటో అందజేశారు.',
    image: '/images/news-surya-clipping.png',
    publication: 'సూర్య (Surya Daily) • Ghatkesar',
  },
  {
    id: 'media-2',
    category: 'SCHOOL EVENT',
    title: 'పాఠశాలలో సాంస్కృతిక కార్యక్రమాలు - గణతంత్ర దినోత్సవ వేడుకలు',
    titleEn: 'Patriotic Celebrations & Cultural Performances on Republic Day',
    date: '28 JAN 2023',
    excerpt:
      'నారపల్లిలోని జేఆర్ఎస్ ఇంటర్నేషనల్ స్కూల్‌లో గణతంత్ర దినోత్సవ వేడుకలు ఘనంగా జరిగాయి. విద్యార్థులచే నిర్వహించిన దేశభక్తితో కూడిన సాంస్కృతిక జానపద నృత్య ప్రదర్శనలు చూపురులను ఆకట్టుకున్నాయి.',
    fullContent:
      'పోచారం మున్సిపల్ నారపల్లిలోని జేఆర్ఎస్ ఇంటర్నేషనల్ స్కూల్‌లో గణతంత్ర దినోత్సవ వేడుకలు గురువారం ఘనంగా జరిగాయి. పలు సాంస్కృతిక నృత్య ప్రదర్శనల్లో విజేతలుగా నిలిచిన విద్యార్థులకు ప్రిన్సిపాల్ జగదీశ్వరి నటరాజ్ చేతుల మీదుగా బహుమతులు అందజేశారు.',
    image: '/images/news-vaartha-clipping.png',
    publication: 'వార్త (Vaartha Daily) • Ghatkesar',
  },
  {
    id: 'media-3',
    category: 'SCHOOL EVENT',
    title: 'నారపల్లి జేఆర్ఎస్ ఇంటర్నేషనల్ పాఠశాలలో సాంస్కృతిక ప్రదర్శనలు',
    titleEn: 'Vibrant Cultural Celebrations & 74th Republic Day at JRS International School',
    date: '28 JAN 2023',
    excerpt:
      'ఘట్‌కేసర్, పోచారం మున్సిపల్ నారపల్లిలోని జేఆర్ఎస్ ఇంటర్నేషనల్ పాఠశాలలో 74వ గణతంత్ర దినోత్సవం సందర్భంగా విద్యార్థుల సాంస్కృతిక ప్రదర్శనలు కన్నుల పండువగా జరిగాయి.',
    fullContent:
      'పోచారం మున్సిపల్ నారపల్లిలోని జేఆర్ఎస్ ఇంటర్నేషనల్ పాఠశాలలో 74వ గణతంత్ర దినోత్సవం సందర్భంగా విద్యార్థుల సాంస్కృతిక ప్రదర్శనలు కన్నుల పండువగా జరిగాయి. విద్యార్థులు వివిధ రాష్ట్రాల వస్త్ర వేషధారణలతో అలరించారు. దేశభక్తి గీతాలపై నృత్యాలు నిర్వహించారు. ఈ కార్యక్రమంలో ప్రిన్సిపాల్ జగదీశ్వరి నటరాజ్, ఉపాధ్యాయులు, విద్యార్థులు పాల్గొన్నారు.',
    image: '/images/news-andhraprabha-clipping.png',
    publication: 'ఆంధ్రప్రభ (Andhra Prabha) • Rangareddy',
  },
  {
    id: 'media-4',
    category: 'EDUCATION',
    title: 'విద్యార్థులు రాజ్యాంగ స్ఫూర్తిని పెంపొందించుకోవాలి - ప్రిన్సిపల్ జగదీశ్వరి నటరాజ్',
    titleEn: '"Students Should Uphold the Spirit of the Constitution" — Principal Jagadeeshwari Nataraj',
    date: '28 JAN 2023',
    excerpt:
      'విద్యార్థులు రాజ్యాంగ స్ఫూర్తితో గణతంత్ర దినోత్సవం వేడుకలు జరుపుకోవడం హర్షణీయమని జేఆర్ఎస్ ఇంటర్నేషనల్ పాఠశాల ప్రిన్సిపల్ జగదీశ్వరి నటరాజ్ అన్నారు. స్వాతంత్య్ర సమరయోధుల వేషధారణలో విద్యార్థులు అలరించారు.',
    fullContent:
      'ఘట్‌కేసర్ మండలం కొర్రెముల పరిధిలోని జేఆర్ఎస్ ఇంటర్నేషనల్ స్కూల్‌లో గణతంత్ర దినోత్సవం వేడుకలు ఘనంగా జరిగాయి. దేశ సంస్కృతి సాంప్రదాయాలు ఉట్టిపడే విధంగా విద్యార్థులు సాంస్కృతిక కార్యక్రమాలు నిర్వహించారు.',
    image: '/images/news-manatelangana-republic-day.png',
    publication: 'మన తెలంగాణ (Mana Telangana) • Medchal',
  },
]

export default function MediaPage() {
  const [selectedArticle, setSelectedArticle] = useState<MediaArticle | null>(null)

  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    })
  }, [])

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedArticle(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-[#f59e0b] selection:text-slate-900">
      {/* 1. Navbar with active state 'media' */}
      <Navbar activePage="media" />

      <main className="flex-1">
        {/* 2. Hero Section (70vh as configured in PageHero) */}
        <PageHero
          breadcrumb="News & Media"
          title="News &"
          titleHighlight="Media"
          subtitle="JRS INTERNATIONAL SCHOOL"
          description="Explore our latest newspaper features, media coverage, achievements, and vibrant happenings from JRS International School, Hyderabad."
          imageSrc="/images/campus-building.jpg"
          imageAlt="JRS International School News & Media"
          primaryButton={{
            text: 'Latest Updates',
            href: '#achievements',
          }}
          secondaryButton={{
            text: 'Campus Gallery',
            href: '/gallery',
          }}
        />

        {/* 3. Section 1: Our Achievements in the News (Featured Section) */}
        <section
          id="achievements"
          className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#f8fafc] via-white to-[#f8fafc] overflow-hidden"
        >
          {/* Subtle Newspaper Watermark Background Texture */}
          <div
            aria-hidden="true"
            className="absolute -top-10 -right-10 select-none pointer-events-none opacity-[0.04] text-[180px] sm:text-[240px] md:text-[320px] font-black tracking-widest text-slate-900 leading-none font-serif z-0"
          >
            NEWS
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="mb-10 sm:mb-14" data-aos="fade-up">
              <span className="inline-block text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#d97706] mb-2">
                LATEST UPDATES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#031c3f] tracking-tight">
                Our Achievements <span className="text-[#013aa3]">in the News</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
                Explore the latest news, achievements, events and special moments from JRS International School.
              </p>
            </div>

            {/* Featured Article Cards Grid (3 cards per row, extensible for more in future) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {FEATURED_ARTICLES.map((article, index) => (
                <div
                  key={article.id}
                  className="bg-white rounded-3xl border-2 border-[#013aa3]/25 hover:border-[#013aa3] shadow-lg hover:shadow-2xl shadow-[#013aa3]/10 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 flex flex-col group cursor-pointer"
                  data-aos="fade-up"
                  data-aos-delay={(index + 1) * 100}
                  onClick={() => setSelectedArticle(article)}
                >
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100 flex items-center justify-center">
                    {/* Full Featured Clipping Image */}
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.currentTarget
                        target.src = '/images/annual-day.jpg'
                      }}
                    />

                    {/* Featured News Yellow Badge */}
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] sm:text-[11px] font-bold tracking-wider uppercase bg-[#f59e0b] text-slate-950 shadow-md">
                        <Sparkles className="w-3 h-3 fill-slate-950" />
                        FEATURED NEWS
                      </span>
                    </div>

                    {/* Subtle Hover Zoom Overlay */}
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <div className="bg-white/95 backdrop-blur-sm text-[#031c3f] font-semibold text-xs sm:text-sm px-4 py-2 rounded-full shadow-xl flex items-center gap-2">
                        <ZoomIn className="w-4 h-4 text-[#f59e0b]" />
                        <span>Click to View Full Size</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Info Footer */}
                  <div className="p-5 sm:p-6 flex flex-col flex-1 bg-white border-t border-slate-100">
                    <div className="flex items-center justify-between gap-2 text-xs text-slate-500 mb-2">
                      <span className="font-semibold text-[#013aa3] flex items-center gap-1 truncate">
                        <Newspaper className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{article.publication?.split('•')[0] || 'Press Coverage'}</span>
                      </span>
                      <span className="shrink-0">{article.date}</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#013aa3] transition-colors line-clamp-2 leading-snug mb-2">
                      {article.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed flex-1">
                      {article.titleEn || article.excerpt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Section 2: Latest News Grid (Image Format Designed with "View" CTA) */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Row */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
              <div data-aos="fade-right">
                <span className="inline-block text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#d97706] mb-2">
                  FROM OUR CAMPUS
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#031c3f] tracking-tight">
                  Latest <span className="text-[#013aa3]">News</span>
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Catch up on the latest campus stories, events, achievements and press coverage.
                </p>
              </div>

              {/* View All Button */}
              <div data-aos="fade-left">
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-[#013aa3] border border-[#013aa3]/30 hover:bg-[#013aa3] hover:text-white transition-all duration-200"
                >
                  <span>View All Media</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* 4 Cards Grid (4 Columns on xl, 2 on md/lg, 1 on Mobile) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-7">
              {MEDIA_ARTICLES.map((article, index) => (
                <article
                  key={article.id}
                  data-aos="fade-up"
                  data-aos-delay={(index % 4) * 100}
                  className="bg-white rounded-2xl border-2 border-[#013aa3]/35 hover:border-[#013aa3] shadow-md hover:shadow-2xl hover:shadow-[#013aa3]/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedArticle(article)}
                >
                  {/* Card Image Container (Aspect Ratio & Clean Full Image View) */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <img
                      src={article.image}
                      alt={article.title}
                      className={`w-full h-full object-cover ${
                        article.id === 'media-1'
                          ? 'object-top'
                          : article.id === 'media-2'
                          ? 'object-[center_68%]'
                          : article.id === 'media-4'
                          ? 'object-[center_38%]'
                          : 'object-center'
                      } group-hover:scale-105 transition-transform duration-500`}
                      onError={(e) => {
                        const target = e.currentTarget
                        target.src = '/images/campus-building.jpg'
                      }}
                    />

                    {/* Subtle Hover Overlay */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Hover Zoom Icon Indicator */}
                    <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                    <div>
                      {/* Telugu Headline */}
                      <h3 className="font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-[#013aa3] transition-colors leading-snug line-clamp-2">
                        {article.title}
                      </h3>

                      {/* Date Row with Calendar Icon */}
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold my-2.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{article.date}</span>
                      </div>

                      {/* Excerpt */}
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed line-clamp-3 mb-4">
                        {article.excerpt}
                      </p>
                    </div>

                    {/* View CTA Button - strictly "View ->" as requested instead of "Read More" */}
                    <div className="pt-3 border-t border-[#013aa3]/15 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedArticle(article)
                        }}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-[#013aa3] group-hover:text-[#e31e24] transition-colors cursor-pointer"
                      >
                        <span>View</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </button>

                      <span className="text-[11px] font-medium text-slate-400">
                        {article.publication}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Section 3: Bottom Banner (Stay Connected With JRS News & Updates) */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="relative overflow-hidden bg-gradient-to-r from-[#011a42] via-[#022868] to-[#011a42] rounded-3xl p-8 sm:p-10 lg:p-12 text-white shadow-xl shadow-blue-950/20"
              data-aos="zoom-in"
            >
              {/* Decorative Subtle Background Curves */}
              <div
                aria-hidden="true"
                className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"
              />
              <div
                aria-hidden="true"
                className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none"
              />

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                {/* Left Side: Icon & Headline */}
                <div className="flex items-center gap-5 sm:gap-6 text-center lg:text-left">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center shrink-0 shadow-inner">
                    <Newspaper className="w-8 h-8 sm:w-10 sm:h-10 text-[#f59e0b]" />
                  </div>
                  <div>
                    <span className="inline-block text-[11px] sm:text-xs font-black tracking-widest text-[#f59e0b] uppercase mb-1">
                      NEWS
                    </span>
                    <p className="text-sm sm:text-base text-slate-300 font-normal">
                      Stay Connected With
                    </p>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
                      JRS News & Updates
                    </h3>
                  </div>
                </div>

                {/* Right Side: Two CTA Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
                  {/* View Gallery Yellow Button */}
                  <Link
                    href="/gallery"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-extrabold text-slate-950 bg-[#f59e0b] hover:bg-[#e08e00] active:scale-95 transition-all duration-200 shadow-lg shadow-amber-500/20 text-center"
                  >
                    <span>View Gallery</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  {/* School Events Blue Outline Button */}
                  <Link
                    href="/beyond"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm active:scale-95 transition-all duration-200 text-center"
                  >
                    <span>School Events</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 6. Pure Magnified Image Lightbox (No Redundant Text) */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedArticle(null)}
        >
          {/* Close Button in Top-Right */}
          <button
            type="button"
            onClick={() => setSelectedArticle(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all duration-200 cursor-pointer backdrop-blur-md shadow-2xl border border-white/20"
            aria-label="Close"
          >
            <X className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Magnified Image Container - Clean Image Only */}
          <div
            className="relative max-w-5xl w-full max-h-[92vh] flex items-center justify-center p-2 select-none"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="animate-fade-open flex items-center justify-center">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="max-h-[90vh] max-w-full w-auto h-auto object-contain rounded-2xl shadow-2xl ring-1 ring-white/15"
              />
            </div>
          </div>
        </div>
      )}

      {/* 7. Footer */}
      <Footer />
    </div>
  )
}
