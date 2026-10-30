import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

interface MainLayoutProps {
  children: React.ReactNode
  activePage?:
    | 'home'
    | 'about'
    | 'chairman'
    | 'principal'
    | 'educational-society'
    | 'school-management-committee'
    | 'certificates'
    | 'academics'
    | 'admissions'
    | 'beyond'
    | 'facilities'
    | 'gallery'
    | 'media'
    | '360-degree-campus'
    | 'events'
    | 'contact'
    | 'careers'
}

export default function MainLayout({ children, activePage = 'home' }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111] antialiased w-full">
      <Navbar activePage={activePage} />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  )
}
