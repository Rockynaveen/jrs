'use client'

import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import PageHero from '@/components/common/PageHero'
import Footer from '@/components/layout/Footer'
import {
  Send,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  Building,
  Navigation,
} from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    grade: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 650,
      once: true,
    })
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 800)
  }



  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-700 antialiased selection:bg-red-500 selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar activePage="contact" />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <PageHero
          breadcrumb="Contact Us"
          title="Get in"
          titleHighlight="Touch"
          subtitle="We're Here to Help You and Your Child."
          description="Have questions about admissions, CBSE curriculum, campus tours, or school transport? Reach out to our admissions team or visit our Narapally campus."
          imageSrc="/images/campus-building.jpg"
          imageAlt="JRS International School Campus Building"
          primaryButton={{
            text: 'Send a Message',
            href: '#contact-form',
          }}
          secondaryButton={{
            text: 'View Campus Map',
            href: '#campus-map',
          }}
        />



        {/* 4. Form & Map Section */}
        <section id="contact-form" className="py-10 sm:py-16 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              
              {/* Left Column: Contact Form (5 cols) */}
              <div className="lg:col-span-5" data-aos="fade-right">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge
                        variant="secondary"
                        className="bg-red-50 text-red-600 border border-red-100 font-bold uppercase tracking-wider text-xs px-2.5 py-1"
                      >
                        <MessageSquare className="w-3.5 h-3.5 mr-1" />
                        Online Inquiry
                      </Badge>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#031c3f] tracking-tight">
                      Send Us a Message
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-[15px] mt-1 leading-relaxed">
                      Fill in your details and our admissions counselor will get back to you within 24 hours.
                    </p>
                  </div>
                    {submitted ? (
                      <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-fade-in">
                        <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                        <h3 className="text-lg font-bold text-emerald-900">
                          Message Received!
                        </h3>
                        <p className="text-sm text-emerald-700">
                          Thank you for contacting JRS International School. Our team will reach out to you shortly.
                        </p>
                        <Button
                          variant="ghost"
                          onClick={() => {
                            setSubmitted(false)
                            setFormData({
                              parentName: '',
                              phone: '',
                              email: '',
                              grade: '',
                              message: '',
                            })
                          }}
                          className="text-xs font-bold text-emerald-800 underline hover:text-emerald-950 pt-2"
                        >
                          Send another message
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-1.5">
                          <Label
                            htmlFor="parentName"
                            className="text-xs sm:text-[13px] font-bold text-slate-700 uppercase tracking-wider"
                          >
                            Parent / Guardian Name *
                          </Label>
                          <Input
                            id="parentName"
                            type="text"
                            required
                            placeholder="e.g. Ramesh Reddy"
                            value={formData.parentName}
                            onChange={(e) =>
                              setFormData({ ...formData, parentName: e.target.value })
                            }
                            className="rounded-xl border-slate-200 focus-visible:ring-red-400 focus-visible:border-red-400"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <Label
                              htmlFor="phone"
                              className="text-xs sm:text-[13px] font-bold text-slate-700 uppercase tracking-wider"
                            >
                              Phone Number *
                            </Label>
                            <Input
                              id="phone"
                              type="tel"
                              required
                              placeholder="+91 98765 43210"
                              value={formData.phone}
                              onChange={(e) =>
                                setFormData({ ...formData, phone: e.target.value })
                              }
                              className="rounded-xl border-slate-200 focus-visible:ring-red-400 focus-visible:border-red-400"
                            />
                          </div>

                          <div className="space-y-1.5">
                            <Label
                              htmlFor="grade"
                              className="text-xs sm:text-[13px] font-bold text-slate-700 uppercase tracking-wider"
                            >
                              Grade of Child
                            </Label>
                            <Select
                              id="grade"
                              value={formData.grade}
                              onChange={(e) =>
                                setFormData({ ...formData, grade: e.target.value })
                              }
                              className="rounded-xl border-slate-200 focus-visible:ring-red-400 focus-visible:border-red-400"
                            >
                              <option value="">Select Grade</option>
                              <option value="Nursery / Pre-KG">Nursery / Pre-KG</option>
                              <option value="LKG">LKG</option>
                              <option value="UKG">UKG</option>
                              <option value="Grade 1 to 5">Grade 1 to 5 (Primary)</option>
                              <option value="Grade 6 to 8">Grade 6 to 8 (Middle)</option>
                              <option value="Grade 9 to 10">Grade 9 to 10 (Secondary)</option>
                              <option value="Grade 11 to 12">Grade 11 to 12 (Senior)</option>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <Label
                            htmlFor="email"
                            className="text-xs sm:text-[13px] font-bold text-slate-700 uppercase tracking-wider"
                          >
                            Email Address
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="e.g. name@example.com"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            className="rounded-xl border-slate-200 focus-visible:ring-red-400 focus-visible:border-red-400"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <Label
                            htmlFor="message"
                            className="text-xs sm:text-[13px] font-bold text-slate-700 uppercase tracking-wider"
                          >
                            Your Query or Message *
                          </Label>
                          <Textarea
                            id="message"
                            required
                            rows={3}
                            placeholder="Tell us what you'd like to know about JRS..."
                            value={formData.message}
                            onChange={(e) =>
                              setFormData({ ...formData, message: e.target.value })
                            }
                            className="rounded-xl border-slate-200 focus-visible:ring-red-400 focus-visible:border-red-400 min-h-[90px]"
                          />
                        </div>

                        <Button
                          type="submit"
                          variant="red"
                          size="lg"
                          disabled={isSubmitting}
                          className="w-full rounded-full shadow-md shadow-red-500/20 text-sm sm:text-base font-semibold"
                        >
                          {isSubmitting ? (
                            <span>Sending message...</span>
                          ) : (
                            <>
                              <span>Submit Inquiry</span>
                              <Send className="w-4 h-4 ml-1" />
                            </>
                          )}
                        </Button>
                      </form>
                    )}
                </div>
              </div>

              {/* Right Column: Interactive Map & Location Guidance (7 cols) */}
              <div id="campus-map" className="lg:col-span-7 space-y-6" data-aos="fade-left">
                {/* Map Card */}
                <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md overflow-hidden flex flex-col">
                  {/* Map Header */}
                  <div className="p-5 sm:p-6 bg-gradient-to-r from-[#031c3f] to-[#0a2559] text-white flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                        <Navigation className="w-5 h-5 text-[#f59e0b]" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold">
                          JRS International School Campus
                        </h3>
                        <p className="text-xs text-slate-200">
                          Narapally, Near Uppal Depot, Hyderabad
                        </p>
                      </div>
                    </div>

                    <a
                      href="https://maps.google.com/?q=JRS+International+School+Narapally+Hyderabad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-[#031c3f] bg-white hover:bg-slate-100 transition-colors shadow-sm"
                    >
                      <span>Get Directions</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Google Maps iFrame */}
                  <div className="w-full h-[400px] sm:h-[480px] bg-slate-100 relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.007807061472!2d78.64582367390636!3d17.406331902261698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99d739fb75a1%3A0xb3a2624674fea4ab!2sJRS%20International%20School%20-%20Narapally%2C%20Hyderabad!5e1!3m2!1sen!2sin!4v1790770247998!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      title="JRS International School Campus Location - Narapally, Hyderabad"
                      className="w-full h-full"
                    />
                  </div>

                  {/* Directions Footer Tip */}
                  <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100 flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <Building className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="font-semibold text-slate-900">Landmark:</strong> Conveniently accessible from the Hyderabad-Warangal Highway (NH 163), close to Uppal Depot and major residential zones of East Hyderabad.
                    </span>
                  </div>
                </div>

                {/* Official Social Media Channels */}
                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-[#031c3f]">Connect on Social Media</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Stay updated with everyday student activities, news & campus life</p>
                  </div>
                  <div className="flex items-center gap-2.5 shrink-0">
                    <a
                      href="https://www.facebook.com/AtJRSSchool/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-[#1877f2] text-slate-700 hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/jrs_international_school/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] text-slate-700 hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a
                      href="https://x.com/AtJRSSchool"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="X (Twitter)"
                      className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-black text-slate-700 hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UCep-jmPHdWe-dCOYkAOCL1Q"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                      className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-[#ff0000] text-slate-700 hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 5. Footer */}
      <Footer />
    </div>
  )
}
