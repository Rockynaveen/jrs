'use client'

import React, { useState, useRef, useEffect } from 'react'
import {
  GraduationCap,
  Sparkles,
  Award,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  AlertCircle,
  RotateCcw,
  ArrowRight,
  ShieldCheck,
  Clock,
  Calendar,
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Button } from '@/components/ui/button'

interface AdmissionsCTAProps {
  variant?: 'dark' | 'white'
}

export default function AdmissionsCTA({ variant = 'dark' }: AdmissionsCTAProps) {
  const isWhite = variant === 'white'
  const [step, setStep] = useState<1 | 2>(1)
  const [submitted, setSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  // Form state
  const [formData, setFormData] = useState({
    academicYear: '2027-2028',
    branch: 'JRS INTERNATIONAL SCHOOL',
    admissionType: 'DAY SCHOLAR',
    countryCode: '91',
    parentMobile: '',
    studentDob: '',
    grade: '',
    // Step 2 details
    studentName: '',
    parentName: '',
    emailAddress: '',
  })

  // Handle Step 1 ("Get" button)
  const handleGetDetails = (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg('')

    if (!formData.parentMobile.trim()) {
      setErrorMsg('Please enter parent mobile number.')
      return
    }
    if (formData.parentMobile.trim().length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.')
      return
    }
    if (!formData.studentDob) {
      setErrorMsg('Please select student date of birth.')
      return
    }
    if (!formData.grade || formData.grade === '-SELECT CLASS-') {
      setErrorMsg('Please select class / grade.')
      return
    }

    setStep(2)
  }

  // Handle Step 2 Final Submission
  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg('')

    if (!formData.studentName.trim() || !formData.parentName.trim()) {
      setErrorMsg('Please enter student name and parent name.')
      return
    }
    setSubmitted(true)
  }

  const resetForm = () => {
    setSubmitted(false)
    setStep(1)
    setErrorMsg('')
    setDobSelectedYear(null)
    setDobSelectedMonth(null)
    setDobSelectedDay(null)
    setFormData({
      academicYear: '2027-2028',
      branch: 'JRS INTERNATIONAL SCHOOL',
      admissionType: 'DAY SCHOLAR',
      countryCode: '91',
      parentMobile: '',
      studentDob: '',
      grade: '',
      studentName: '',
      parentName: '',
      emailAddress: '',
    })
  }

  // Custom DOB Picker State
  const [dobPickerOpen, setDobPickerOpen] = useState(false)
  const [dobPickerView, setDobPickerView] = useState<'year' | 'month' | 'day'>('year')
  const [dobSelectedYear, setDobSelectedYear] = useState<number | null>(null)
  const [dobSelectedMonth, setDobSelectedMonth] = useState<number | null>(null) // 1 - 12
  const [dobSelectedDay, setDobSelectedDay] = useState<number | null>(null)
  const [dobYearPage, setDobYearPage] = useState(2002)
  const dobPickerRef = useRef<HTMLDivElement>(null)

  const monthsList = [
    { num: 1, name: 'Jan', full: 'January' },
    { num: 2, name: 'Feb', full: 'February' },
    { num: 3, name: 'Mar', full: 'March' },
    { num: 4, name: 'Apr', full: 'April' },
    { num: 5, name: 'May', full: 'May' },
    { num: 6, name: 'Jun', full: 'June' },
    { num: 7, name: 'Jul', full: 'July' },
    { num: 8, name: 'Aug', full: 'August' },
    { num: 9, name: 'Sep', full: 'September' },
    { num: 10, name: 'Oct', full: 'October' },
    { num: 11, name: 'Nov', full: 'November' },
    { num: 12, name: 'Dec', full: 'December' },
  ]

  // 24 years starting from dobYearPage (e.g. 2002 to 2025)
  const yearsList = Array.from({ length: 24 }, (_, i) => dobYearPage + i)

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month, 0).getDate()
  }

  const getFirstDayOffset = (year: number, month: number) => {
    return new Date(year, month - 1, 1).getDay()
  }

  const openDobPicker = () => {
    if (formData.studentDob) {
      const parts = formData.studentDob.split('-')
      if (parts.length === 3) {
        const y = parseInt(parts[0], 10)
        const m = parseInt(parts[1], 10)
        const d = parseInt(parts[2], 10)
        setDobSelectedYear(y)
        setDobSelectedMonth(m)
        setDobSelectedDay(d)
        if (y < dobYearPage || y >= dobYearPage + 24) {
          setDobYearPage(Math.floor((y - 2002) / 12) * 12 + 2002)
        }
      }
    }
    setDobPickerView('year')
    setDobPickerOpen(true)
  }

  const handleSelectYear = (yr: number) => {
    setDobSelectedYear(yr)
    setDobPickerView('month')
  }

  const handleSelectMonth = (m: number) => {
    setDobSelectedMonth(m)
    setDobPickerView('day')
  }

  const handleSelectDay = (d: number) => {
    if (!dobSelectedYear || !dobSelectedMonth) return
    setDobSelectedDay(d)
    const yStr = dobSelectedYear.toString()
    const mStr = String(dobSelectedMonth).padStart(2, '0')
    const dStr = String(d).padStart(2, '0')
    const formatted = `${yStr}-${mStr}-${dStr}`
    setFormData((prev) => ({ ...prev, studentDob: formatted }))
    setErrorMsg('')
    setDobPickerOpen(false)
  }

  const formatDobDisplay = (isoStr: string) => {
    if (!isoStr) return ''
    const parts = isoStr.split('-')
    if (parts.length === 3) {
      const [y, m, d] = parts
      const mIdx = parseInt(m, 10) - 1
      const mName = monthsList[mIdx]?.name || m
      return `${d} ${mName} ${y}`
    }
    return isoStr
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dobPickerRef.current && !dobPickerRef.current.contains(e.target as Node)) {
        setDobPickerOpen(false)
      }
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDobPickerOpen(false)
      }
    }

    if (dobPickerOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [dobPickerOpen])

  const inputClass = isWhite
    ? 'h-10 text-xs bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 rounded-lg focus:bg-white focus:border-[#e31e24]'
    : 'h-10 text-xs bg-white/10 border-white/20 text-white placeholder-slate-400 rounded-lg focus:border-amber-400'

  const selectClass = isWhite
    ? 'h-10 text-xs bg-slate-50 border-slate-200 text-slate-900 rounded-lg focus:bg-white focus:border-[#e31e24]'
    : 'h-10 text-xs bg-white/10 border-white/20 text-white rounded-lg focus:border-amber-400'

  const optionClass = isWhite ? 'bg-white text-slate-900' : 'bg-[#031127] text-white'
  const labelClass = `text-xs font-semibold ${isWhite ? 'text-[#111]' : 'text-slate-200'}`

  return (
    <section
      id="contact"
      className={`relative ${isWhite ? 'bg-white text-slate-800' : 'bg-[#030d1d] text-white'
        } py-[50px] overflow-x-clip scroll-mt-24`}
    >
      <span id="enquire" className="absolute -top-24" />
      <span id="admissions" className="absolute -top-24" />
      <span id="enquiry-form" className="absolute -top-24" />
      <span id="enquiry" className="absolute -top-24" />
      <span id="enquire-now" className="absolute -top-24" />

      {/* Campus Background Image with Dark Black Overlay (only in dark mode) */}
      {!isWhite && (
        <div className="absolute inset-0 z-0">
          <img
            src="/images/contact-bg.jpg"
            alt="JRS International School Campus"
            className="w-full h-full object-cover object-[center_35%]"
          />
          {/* Dark black/navy overlay matching Stats section */}
          <div className="absolute inset-0 bg-[#031127]/80 backdrop-blur-[1px]" />
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* Left Column: Heading, Info, Highlights */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5" data-aos="fade-right">
            <div>
              <div
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2.5 ${isWhite
                  ? 'text-[#e31e24] bg-red-50 border border-red-200/80'
                  : 'text-amber-300 bg-amber-400/10 border border-amber-400/20'
                  }`}
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Narapally, Hyderabad</span>
              </div>
              <h2
                className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight ${isWhite ? 'text-[#031c3f]' : 'text-white'
                  }`}
              >
                Admission Open for <br />
                <span className={isWhite ? 'text-[#e31e24]' : 'text-[#facc15]'}>2027 – 2028</span>
              </h2>
              <p
                className={`text-sm sm:text-[15px] mt-2.5 max-w-xl leading-relaxed ${isWhite ? 'text-[#111]' : 'text-slate-200'
                  }`}
              >
                Give your child the right foundation for a brighter future. Apply early for personalized guidance, campus tour, and direct interaction with academic mentors.
              </p>
            </div>

            {/* Quick Contact Chips */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div
                className={`inline-flex items-center gap-1.5 ${isWhite
                  ? 'bg-slate-50 border border-slate-200 text-[#111]'
                  : 'bg-white/10 backdrop-blur-md border border-white/20 text-slate-100'
                  } px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] transition-colors`}
              >
                <Phone className={`w-3.5 h-3.5 mr-0.5 ${isWhite ? 'text-[#e31e24]' : 'text-[#facc15]'}`} />
                <a href="tel:+919281409672" className="font-medium hover:text-[#e31e24] transition-colors">+91 92814 09672</a>
                <span>,</span>
                <a href="tel:+919281409675" className="font-medium hover:text-[#e31e24] transition-colors">+91 92814 09675</a>
              </div>
              <a
                href="mailto:jrsinternationalschool6@gmail.com"
                className={`inline-flex items-center gap-2 ${isWhite
                  ? 'bg-slate-50 hover:bg-slate-100 border border-slate-200 text-[#111]'
                  : 'bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-slate-100'
                  } px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] transition-colors`}
              >
                <Mail className={`w-3.5 h-3.5 ${isWhite ? 'text-[#e31e24]' : 'text-[#facc15]'}`} />
                <span className="font-medium">Jrsinternationalschool6@gmail.com</span>
              </a>
            </div>

            {/* 3 Feature Badges on Left Side */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 pt-2 sm:pt-3 w-full max-w-2xl">
              <div
                className={`flex items-center gap-3 sm:gap-3.5 p-3.5 sm:px-4 sm:py-3.5 rounded-xl sm:rounded-2xl ${isWhite
                  ? 'bg-slate-50 hover:bg-slate-100 border border-slate-200 shadow-xs'
                  : 'bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 backdrop-blur-md shadow-lg'
                  } transition-all duration-300 group`}
              >
                <div
                  className={`shrink-0 ${isWhite ? 'text-[#031c3f]' : 'text-[#facc15]'
                    } group-hover:scale-110 transition-transform`}
                >
                  <GraduationCap className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
                </div>
                <div className="min-w-0">
                  <h4
                    className={`text-[11px] sm:text-xs font-normal tracking-wide leading-snug whitespace-nowrap ${isWhite ? 'text-[#031c3f]' : 'text-white'
                      }`}
                  >
                    CBSE Curriculum
                  </h4>
                  <p
                    className={`text-[10px] sm:text-[11px] font-light tracking-wide leading-snug mt-0.5 whitespace-nowrap ${isWhite ? 'text-slate-500' : 'text-slate-300'
                      }`}
                  >
                    National standards
                  </p>
                </div>
              </div>

              <div
                className={`flex items-center gap-3 sm:gap-3.5 p-3.5 sm:px-4 sm:py-3.5 rounded-xl sm:rounded-2xl ${isWhite
                  ? 'bg-slate-50 hover:bg-slate-100 border border-slate-200 shadow-xs'
                  : 'bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 backdrop-blur-md shadow-lg'
                  } transition-all duration-300 group`}
              >
                <div
                  className={`shrink-0 ${isWhite ? 'text-[#031c3f]' : 'text-[#facc15]'
                    } group-hover:scale-110 transition-transform`}
                >
                  <Sparkles className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
                </div>
                <div className="min-w-0">
                  <h4
                    className={`text-[11px] sm:text-xs font-normal tracking-wide leading-snug whitespace-nowrap ${isWhite ? 'text-[#031c3f]' : 'text-white'
                      }`}
                  >
                    Holistic Growth
                  </h4>
                  <p
                    className={`text-[10px] sm:text-[11px] font-light tracking-wide leading-snug mt-0.5 whitespace-nowrap ${isWhite ? 'text-slate-500' : 'text-slate-300'
                      }`}
                  >
                    Arts, sports & STEM
                  </p>
                </div>
              </div>

              <div
                className={`flex items-center gap-3 sm:gap-3.5 p-3.5 sm:px-4 sm:py-3.5 rounded-xl sm:rounded-2xl ${isWhite
                  ? 'bg-slate-50 hover:bg-slate-100 border border-slate-200 shadow-xs'
                  : 'bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 backdrop-blur-md shadow-lg'
                  } transition-all duration-300 group`}
              >
                <div
                  className={`shrink-0 ${isWhite ? 'text-[#031c3f]' : 'text-[#facc15]'
                    } group-hover:scale-110 transition-transform`}
                >
                  <Award className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
                </div>
                <div className="min-w-0">
                  <h4
                    className={`text-[11px] sm:text-xs font-normal tracking-wide leading-snug whitespace-nowrap ${isWhite ? 'text-[#031c3f]' : 'text-white'
                      }`}
                  >
                    Top Faculty
                  </h4>
                  <p
                    className={`text-[10px] sm:text-[11px] font-light tracking-wide leading-snug mt-0.5 whitespace-nowrap ${isWhite ? 'text-slate-500' : 'text-slate-300'
                      }`}
                  >
                    Caring mentorship
                  </p>
                </div>
              </div>
            </div>

            {/* Micro reassurance line */}
            <div
              className={`flex items-center gap-5 pt-0.5 text-xs sm:text-[13px] ${isWhite ? 'text-slate-500' : 'text-slate-300'
                }`}
            >
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                100% Confidential
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className={`w-3.5 h-3.5 ${isWhite ? 'text-amber-500' : 'text-amber-300'}`} />
                Quick 24-hr Response
              </span>
            </div>
          </div>

          {/* Right Column: Enquiry Form Container */}
          <div className="lg:col-span-6" data-aos="fade-left">
            <Card
              className={`${isWhite
                ? 'bg-white border border-slate-200/90 shadow-xl text-slate-900'
                : 'bg-white/[0.08] hover:bg-white/[0.12] backdrop-blur-md border border-white/20 shadow-2xl text-white'
                } rounded-2xl p-5 sm:p-6 transition-all duration-300`}
            >
              <CardContent className="p-0">

                {/* Form Title */}
                <div
                  className={`mb-3.5 pb-2.5 border-b ${isWhite ? 'border-slate-100' : 'border-white/15'
                    }`}
                >
                  <h3
                    className={`text-lg sm:text-xl font-bold tracking-tight ${isWhite ? 'text-[#031c3f]' : 'text-white'
                      }`}
                  >
                    Enquiry Form
                  </h3>
                  <p
                    className={`text-[13px] mt-1 ${isWhite ? 'text-slate-500' : 'text-slate-200'
                      }`}
                  >
                    Fill in the details below to enquire for admissions.
                  </p>
                </div>

                {submitted ? (
                  /* Success View */
                  <div className="py-8 text-center space-y-3">
                    <div className={`w-14 h-14 rounded-full ${isWhite ? 'bg-emerald-50 border border-emerald-200 text-emerald-600' : 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-400'} mx-auto flex items-center justify-center`}>
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className={`text-xl font-bold ${isWhite ? 'text-[#031c3f]' : 'text-white'}`}>
                      Enquiry Submitted!
                    </h4>
                    <p className={`text-xs sm:text-sm ${isWhite ? 'text-[#111]' : 'text-slate-200'} leading-relaxed max-w-xs mx-auto`}>
                      Thank you for your interest. Our HR team will contact you at{' '}
                      <span className={`font-semibold ${isWhite ? 'text-slate-900' : 'text-white'}`}>
                        +{formData.countryCode} {formData.parentMobile}
                      </span>{' '}
                      shortly.
                    </p>

                    <div className={`${isWhite ? 'bg-slate-50 border border-slate-200 text-[#111]' : 'bg-white/10 border border-white/20 text-slate-200'} rounded-xl p-3 text-left text-xs space-y-1.5 mt-3`}>
                      <div className="flex justify-between">
                        <span className={isWhite ? 'text-slate-500' : 'text-slate-300'}>Academic Year:</span>
                        <span className={`font-semibold ${isWhite ? 'text-slate-900' : 'text-white'}`}>{formData.academicYear}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className={isWhite ? 'text-slate-500' : 'text-slate-300'}>Class:</span>
                        <span className={`font-semibold ${isWhite ? 'text-slate-900' : 'text-white'}`}>{formData.grade}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className={isWhite ? 'text-slate-500' : 'text-slate-300'}>Student:</span>
                        <span className={`font-semibold ${isWhite ? 'text-slate-900' : 'text-white'}`}>{formData.studentName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className={isWhite ? 'text-slate-500' : 'text-slate-300'}>Admission Type:</span>
                        <span className={`font-semibold ${isWhite ? 'text-slate-900' : 'text-white'}`}>{formData.admissionType}</span>
                      </div>
                    </div>

                    <div className="pt-3">
                      <Button
                        type="button"
                        onClick={resetForm}
                        variant="outline"
                        className={`rounded-full inline-flex items-center gap-2 text-xs ${isWhite ? 'bg-slate-100 border-slate-200 text-[#111] hover:bg-slate-200' : 'bg-white/10 border-white/20 text-white hover:bg-white/20'}`}
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        Submit Another Enquiry
                      </Button>
                    </div>
                  </div>
                ) : step === 1 ? (
                  /* Step 1: 2 Fields per Row Grid Layout */
                  <form onSubmit={handleGetDetails} className="space-y-4">
                    {errorMsg && (
                      <div className={`p-2.5 ${isWhite ? 'bg-red-50 border border-red-200 text-red-700' : 'bg-red-500/20 border border-red-500/40 text-red-200'} text-xs rounded-lg flex items-center gap-2`}>
                        <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Row 1 - Field 1: Academic Year */}
                      <div className="space-y-1">
                        <Label htmlFor="academicYear" className={labelClass}>
                          Academic Year
                        </Label>
                        <Select
                          id="academicYear"
                          value={formData.academicYear}
                          onChange={(e) =>
                            setFormData({ ...formData, academicYear: e.target.value })
                          }
                          className={selectClass}
                        >
                          <option value="2027-2028" className={optionClass}>2027-2028</option>
                          <option value="2028-2029" className={optionClass}>2028-2029</option>
                        </Select>
                      </div>

                      {/* Row 1 - Field 2: Branch */}
                      <div className="space-y-1">
                        <Label htmlFor="branch" className={labelClass}>
                          Branch
                        </Label>
                        <Select
                          id="branch"
                          value={formData.branch}
                          onChange={(e) =>
                            setFormData({ ...formData, branch: e.target.value })
                          }
                          className={selectClass}
                        >
                          <option value="JRS INTERNATIONAL SCHOOL" className={optionClass}>
                            JRS INTERNATIONAL SCHOOL
                          </option>
                        </Select>
                      </div>

                      {/* Row 2 - Field 3: Admission Type */}
                      <div className="space-y-1">
                        <Label htmlFor="admissionType" className={labelClass}>
                          Admission Type
                        </Label>
                        <Select
                          id="admissionType"
                          value={formData.admissionType}
                          onChange={(e) =>
                            setFormData({ ...formData, admissionType: e.target.value })
                          }
                          className={selectClass}
                        >
                          <option value="DAY SCHOLAR" className={optionClass}>DAY SCHOLAR</option>
                          <option value="DAY BOARDING" className={optionClass}>DAY BOARDING</option>
                          <option value="RESIDENTIAL" className={optionClass}>RESIDENTIAL</option>
                        </Select>
                      </div>

                      {/* Row 2 - Field 4: Grade */}
                      <div className="space-y-1">
                        <Label htmlFor="grade" className={labelClass}>
                          Grade
                        </Label>
                        <Select
                          id="grade"
                          value={formData.grade}
                          onChange={(e) =>
                            setFormData({ ...formData, grade: e.target.value })
                          }
                          className={selectClass}
                          required
                        >
                          <option value="" className={optionClass}>-SELECT CLASS-</option>
                          <option value="Nursery" className={optionClass}>Nursery</option>
                          <option value="PP1" className={optionClass}>PP1</option>
                          <option value="PP2" className={optionClass}>PP2</option>
                          <option value="Class 1" className={optionClass}>Class 1</option>
                          <option value="Class 2" className={optionClass}>Class 2</option>
                          <option value="Class 3" className={optionClass}>Class 3</option>
                          <option value="Class 4" className={optionClass}>Class 4</option>
                          <option value="Class 5" className={optionClass}>Class 5</option>
                          <option value="Class 6" className={optionClass}>Class 6</option>
                          <option value="Class 7" className={optionClass}>Class 7</option>
                          <option value="Class 8" className={optionClass}>Class 8</option>
                          <option value="Class 9" className={optionClass}>Class 9</option>
                          <option value="Class 10" className={optionClass}>Class 10</option>
                          <option value="Class 11" className={optionClass}>Class 11</option>
                          <option value="Class 12" className={optionClass}>Class 12</option>
                        </Select>
                      </div>

                      {/* Row 3 - Field 5: Parent Mobile No (with Country Code) */}
                      <div className="space-y-1">
                        <Label htmlFor="parentMobile" className={labelClass}>
                          Parent Mobile No
                        </Label>
                        <div className="flex gap-1.5">
                          <div className="w-20 shrink-0">
                            <Select
                              id="countryCode"
                              value={formData.countryCode}
                              onChange={(e) =>
                                setFormData({ ...formData, countryCode: e.target.value })
                              }
                              className={`px-2 ${selectClass}`}
                            >
                              <option value="91" className={optionClass}>+91</option>
                              <option value="1" className={optionClass}>+1</option>
                              <option value="44" className={optionClass}>+44</option>
                              <option value="971" className={optionClass}>+971</option>
                              <option value="966" className={optionClass}>+966</option>
                            </Select>
                          </div>
                          <Input
                            id="parentMobile"
                            type="tel"
                            inputMode="numeric"
                            maxLength={10}
                            placeholder="Mobile No"
                            value={formData.parentMobile}
                            onChange={(e) => {
                              const val = e.target.value.replace(/\D/g, '')
                              setFormData({ ...formData, parentMobile: val })
                            }}
                            className={`flex-1 ${inputClass}`}
                            required
                          />
                        </div>
                      </div>

                      {/* Row 3 - Field 6: Student DOB with Custom Grid Picker */}
                      <div className="space-y-1 relative" ref={dobPickerRef}>
                        <Label htmlFor="studentDobTrigger" className={labelClass}>
                          Student DOB
                        </Label>
                        <button
                          id="studentDobTrigger"
                          type="button"
                          onClick={openDobPicker}
                          className={`w-full flex items-center justify-between text-left px-3 cursor-pointer ${inputClass}`}
                        >
                          <span className={formData.studentDob ? (isWhite ? 'text-slate-900 font-medium' : 'text-white font-medium') : 'text-slate-400'}>
                            {formatDobDisplay(formData.studentDob) || 'DD / MM / YYYY'}
                          </span>
                          <Calendar className={`w-4 h-4 shrink-0 ${isWhite ? 'text-[#013aa3]' : 'text-amber-400'}`} />
                        </button>
                        <input type="hidden" name="studentDob" value={formData.studentDob} />

                        {/* Interactive Grid Popover - Opens ABOVE field so it never extends below footer */}
                        {dobPickerOpen && (
                          <div
                            className={`absolute right-0 bottom-full mb-2 z-50 w-full sm:w-[310px] p-3 rounded-2xl shadow-2xl border transition-all animate-scale-up ${isWhite
                                ? 'bg-white border-slate-200 text-slate-900 shadow-slate-900/15'
                                : 'bg-[#041633] border-white/20 text-white shadow-black/70'
                              }`}
                          >
                            {/* Breadcrumb Header */}
                            <div className="flex items-center justify-between gap-1 pb-2 mb-2 border-b border-white/10 border-slate-200/80">
                              <div className="flex items-center gap-1 text-xs">
                                <button
                                  type="button"
                                  onClick={() => setDobPickerView('year')}
                                  className={`px-2 py-0.5 rounded-md font-bold text-xs transition-colors cursor-pointer ${dobPickerView === 'year'
                                      ? isWhite
                                        ? 'bg-[#013aa3] text-white shadow-xs'
                                        : 'bg-amber-400 text-slate-950 shadow-xs'
                                      : dobSelectedYear
                                        ? isWhite
                                          ? 'bg-slate-100 text-[#013aa3] hover:bg-slate-200'
                                          : 'bg-white/10 text-amber-300 hover:bg-white/20'
                                        : 'text-slate-400'
                                    }`}
                                >
                                  {dobSelectedYear || 'Year'}
                                </button>
                                <span className="text-slate-400 text-[10px]">/</span>
                                <button
                                  type="button"
                                  disabled={!dobSelectedYear}
                                  onClick={() => setDobPickerView('month')}
                                  className={`px-2 py-0.5 rounded-md font-bold text-xs transition-colors cursor-pointer ${dobPickerView === 'month'
                                      ? isWhite
                                        ? 'bg-[#013aa3] text-white shadow-xs'
                                        : 'bg-amber-400 text-slate-950 shadow-xs'
                                      : dobSelectedMonth
                                        ? isWhite
                                          ? 'bg-slate-100 text-[#013aa3] hover:bg-slate-200'
                                          : 'bg-white/10 text-amber-300 hover:bg-white/20'
                                        : 'text-slate-400 opacity-50 cursor-not-allowed'
                                    }`}
                                >
                                  {dobSelectedMonth ? monthsList[dobSelectedMonth - 1]?.name : 'Month'}
                                </button>
                                <span className="text-slate-400 text-[10px]">/</span>
                                <button
                                  type="button"
                                  disabled={!dobSelectedYear || !dobSelectedMonth}
                                  onClick={() => setDobPickerView('day')}
                                  className={`px-2 py-0.5 rounded-md font-bold text-xs transition-colors cursor-pointer ${dobPickerView === 'day'
                                      ? isWhite
                                        ? 'bg-[#013aa3] text-white shadow-xs'
                                        : 'bg-amber-400 text-slate-950 shadow-xs'
                                      : dobSelectedDay
                                        ? isWhite
                                          ? 'bg-slate-100 text-[#013aa3] hover:bg-slate-200'
                                          : 'bg-white/10 text-amber-300 hover:bg-white/20'
                                        : 'text-slate-400 opacity-50 cursor-not-allowed'
                                    }`}
                                >
                                  {dobSelectedDay || 'Day'}
                                </button>
                              </div>

                              <button
                                type="button"
                                onClick={() => setDobPickerOpen(false)}
                                className="p-1 rounded-md text-slate-400 hover:text-white hover:text-slate-700 transition-colors cursor-pointer"
                                aria-label="Close"
                              >
                                <X className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            {/* View 1: 3-Column Year Grid (2002 2003 2004 / 2005 ...) */}
                            {dobPickerView === 'year' && (
                              <div>
                                <div className="flex items-center justify-between mb-1.5 px-0.5 text-xs">
                                  <button
                                    type="button"
                                    onClick={() => setDobYearPage((prev) => Math.max(1990, prev - 12))}
                                    className={`p-1 rounded flex items-center gap-0.5 text-[11px] font-semibold cursor-pointer ${isWhite ? 'hover:bg-slate-100 text-slate-600' : 'hover:bg-white/10 text-slate-300'
                                      }`}
                                  >
                                    <ChevronLeft className="w-3 h-3" />
                                    <span>Older</span>
                                  </button>
                                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                                    Select Year
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() => setDobYearPage((prev) => Math.min(2010, prev + 12))}
                                    className={`p-1 rounded flex items-center gap-0.5 text-[11px] font-semibold cursor-pointer ${isWhite ? 'hover:bg-slate-100 text-slate-600' : 'hover:bg-white/10 text-slate-300'
                                      }`}
                                  >
                                    <span>Newer</span>
                                    <ChevronRight className="w-3 h-3" />
                                  </button>
                                </div>

                                <div className="grid grid-cols-3 gap-1.5 max-h-[190px] overflow-y-auto pr-1">
                                  {yearsList.map((yr) => {
                                    const isSelected = dobSelectedYear === yr
                                    return (
                                      <button
                                        key={yr}
                                        type="button"
                                        onClick={() => handleSelectYear(yr)}
                                        className={`py-1.5 px-1 text-xs font-bold rounded-lg text-center transition-all cursor-pointer ${isSelected
                                            ? isWhite
                                              ? 'bg-[#013aa3] text-white shadow-xs'
                                              : 'bg-amber-400 text-slate-950 shadow-xs'
                                            : isWhite
                                              ? 'bg-slate-50 hover:bg-[#013aa3]/10 text-slate-800 hover:text-[#013aa3] border border-slate-200'
                                              : 'bg-white/5 hover:bg-white/15 text-slate-200 hover:text-white border border-white/10'
                                          }`}
                                      >
                                        {yr}
                                      </button>
                                    )
                                  })}
                                </div>
                              </div>
                            )}

                            {/* View 2: Month Grid */}
                            {dobPickerView === 'month' && (
                              <div>
                                <div className="flex items-center justify-between mb-1.5 px-0.5">
                                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                                    Month • {dobSelectedYear}
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() => setDobPickerView('year')}
                                    className={`text-[11px] font-semibold underline cursor-pointer ${isWhite ? 'text-[#013aa3]' : 'text-amber-400'
                                      }`}
                                  >
                                    Change Year
                                  </button>
                                </div>

                                <div className="grid grid-cols-3 gap-1.5">
                                  {monthsList.map((m) => {
                                    const isSelected = dobSelectedMonth === m.num
                                    return (
                                      <button
                                        key={m.num}
                                        type="button"
                                        onClick={() => handleSelectMonth(m.num)}
                                        className={`py-2 px-1 text-xs font-bold rounded-lg text-center transition-all cursor-pointer ${isSelected
                                            ? isWhite
                                              ? 'bg-[#013aa3] text-white shadow-xs'
                                              : 'bg-amber-400 text-slate-950 shadow-xs'
                                            : isWhite
                                              ? 'bg-slate-50 hover:bg-[#013aa3]/10 text-slate-800 hover:text-[#013aa3] border border-slate-200'
                                              : 'bg-white/5 hover:bg-white/15 text-slate-200 hover:text-white border border-white/10'
                                          }`}
                                      >
                                        {m.name}
                                      </button>
                                    )
                                  })}
                                </div>
                              </div>
                            )}

                            {/* View 3: Day Grid */}
                            {dobPickerView === 'day' && dobSelectedYear && dobSelectedMonth && (
                              <div>
                                <div className="flex items-center justify-between mb-1.5 px-0.5">
                                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                                    Day • {monthsList[dobSelectedMonth - 1]?.name} {dobSelectedYear}
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() => setDobPickerView('month')}
                                    className={`text-[11px] font-semibold underline cursor-pointer ${isWhite ? 'text-[#013aa3]' : 'text-amber-400'
                                      }`}
                                  >
                                    Change Month
                                  </button>
                                </div>

                                <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-slate-400 mb-1">
                                  <span>Su</span>
                                  <span>Mo</span>
                                  <span>Tu</span>
                                  <span>We</span>
                                  <span>Th</span>
                                  <span>Fr</span>
                                  <span>Sa</span>
                                </div>

                                <div className="grid grid-cols-7 gap-1">
                                  {Array.from({ length: getFirstDayOffset(dobSelectedYear, dobSelectedMonth) }).map(
                                    (_, i) => (
                                      <div key={`offset-${i}`} className="h-7 w-7" />
                                    )
                                  )}

                                  {Array.from({
                                    length: getDaysInMonth(dobSelectedYear, dobSelectedMonth),
                                  }).map((_, i) => {
                                    const dayNum = i + 1
                                    const isSelected = dobSelectedDay === dayNum
                                    return (
                                      <button
                                        key={dayNum}
                                        type="button"
                                        onClick={() => handleSelectDay(dayNum)}
                                        className={`h-7 w-7 mx-auto text-xs font-bold rounded-lg flex items-center justify-center transition-all cursor-pointer ${isSelected
                                            ? isWhite
                                              ? 'bg-[#013aa3] text-white shadow-xs'
                                              : 'bg-amber-400 text-slate-950 shadow-xs'
                                            : isWhite
                                              ? 'hover:bg-[#013aa3]/10 text-slate-800 hover:text-[#013aa3]'
                                              : 'hover:bg-white/15 text-slate-200 hover:text-white'
                                          }`}
                                      >
                                        {dayNum}
                                      </button>
                                    )
                                  })}
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Row 4 - Premium Enquiry Action Button */}
                      <div className="sm:col-span-2 pt-2 flex justify-end">
                        <Button
                          type="submit"
                          className={`w-full sm:w-auto h-10 px-7 ${isWhite
                            ? 'bg-[#e31e24] hover:bg-[#c9181e] text-white shadow-red-600/20'
                            : 'bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 shadow-amber-500/20'
                            } font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2 group`}
                        >
                          <span>Enquire Now</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </form>
                ) : (
                  /* Step 2: Student & Parent Details */
                  <form onSubmit={handleFinalSubmit} className="space-y-3.5">
                    {errorMsg && (
                      <div className={`p-2.5 ${isWhite ? 'bg-red-50 border border-red-200 text-red-700' : 'bg-red-500/20 border border-red-500/40 text-red-200'} text-xs rounded-lg flex items-center gap-2`}>
                        <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    {/* Summary Pill */}
                    <div className={`${isWhite ? 'bg-slate-50 border border-slate-200 text-[#111]' : 'bg-white/10 border border-white/20 text-slate-200'} rounded-lg p-2.5 flex items-center justify-between text-xs`}>
                      <div className="text-xs space-y-0.5">
                        <div>
                          <strong>Class:</strong> {formData.grade} • <strong>Year:</strong> {formData.academicYear}
                        </div>
                        <div>
                          <strong>Mobile:</strong> +{formData.countryCode} {formData.parentMobile}
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className={`text-xs font-semibold ${isWhite ? 'text-[#e31e24]' : 'text-amber-400'} hover:underline shrink-0 ml-2`}
                      >
                        Edit
                      </button>
                    </div>

                    {/* Student Full Name */}
                    <div className="space-y-1">
                      <Label htmlFor="studentName" className={labelClass}>
                        Student Full Name *
                      </Label>
                      <Input
                        id="studentName"
                        type="text"
                        placeholder="Enter student full name"
                        value={formData.studentName}
                        onChange={(e) =>
                          setFormData({ ...formData, studentName: e.target.value })
                        }
                        className={inputClass}
                        required
                      />
                    </div>

                    {/* Parent / Guardian Name */}
                    <div className="space-y-1">
                      <Label htmlFor="parentName" className={labelClass}>
                        Parent / Guardian Name *
                      </Label>
                      <Input
                        id="parentName"
                        type="text"
                        placeholder="Enter parent name"
                        value={formData.parentName}
                        onChange={(e) =>
                          setFormData({ ...formData, parentName: e.target.value })
                        }
                        className={inputClass}
                        required
                      />
                    </div>

                    {/* Email Address */}
                    <div className="space-y-1">
                      <Label htmlFor="emailAddress" className={labelClass}>
                        Email Address (Optional)
                      </Label>
                      <Input
                        id="emailAddress"
                        type="email"
                        placeholder="parent@example.com"
                        value={formData.emailAddress}
                        onChange={(e) =>
                          setFormData({ ...formData, emailAddress: e.target.value })
                        }
                        className={inputClass}
                      />
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center justify-between gap-3 pt-2">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setStep(1)}
                        className={`h-10 text-xs px-4 ${isWhite ? 'bg-slate-100 border-slate-200 text-[#111] hover:bg-slate-200' : 'bg-white/10 border-white/20 text-white hover:bg-white/20'} rounded-xl`}
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        className={`h-10 px-6 ${isWhite
                          ? 'bg-[#e31e24] hover:bg-[#c9181e] text-white shadow-red-600/20'
                          : 'bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 shadow-amber-500/20'
                          } font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2 group`}
                      >
                        <span>Submit Enquiry</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  )
}

