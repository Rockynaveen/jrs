import { Metadata } from 'next'
import EducationalSocietyPage from '@/views/EducationalSocietyPage'

export const metadata: Metadata = {
  title: 'Educational Society — Managing Committee | JRS International School',
  description:
    'Meet the Managing Committee members of the Educational Society at JRS International School, Hyderabad. Guiding strategic vision, academic governance, and institutional excellence.',
}

export default function Page() {
  return <EducationalSocietyPage />
}
