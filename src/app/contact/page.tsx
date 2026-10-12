import { Metadata } from 'next'
import ContactPage from '@/views/ContactPage'

export const metadata: Metadata = {
  title: 'Contact Us | JRS International School, Narapally, Hyderabad',
  description:
    'Contact JRS International School, Narapally, Near Uppal Depot, Hyderabad. Phone: +91 91009 55555, +91 91009 66666. View interactive campus location map, admissions office hours, and send an online enquiry.',
}

export default function Page() {
  return <ContactPage />
}
