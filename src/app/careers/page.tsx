import { Metadata } from 'next'
import CareersPage from '@/views/CareersPage'

export const metadata: Metadata = {
  title: 'Careers @ JRS | JRS International School, Hyderabad',
  description:
    'Join our passionate educator community at JRS International School, Hyderabad. Explore career opportunities, teaching roles, and professional development programs.',
}

export default function Page() {
  return <CareersPage />
}
