import { Metadata } from 'next'
import AcademicsPage from '@/views/AcademicsPage'

export const metadata: Metadata = {
  title: 'Academics | JRS International School, Hyderabad',
  description:
    'Explore academic programmes at JRS International School, Narapally, Hyderabad. Pre-primary, primary, middle and secondary stages under CBSE curriculum.',
}

export default function Page() {
  return <AcademicsPage />
}
