import { Metadata } from 'next'
import AboutPage from '@/views/AboutPage'

export const metadata: Metadata = {
  title: 'About Us | JRS International School, Hyderabad',
  description:
    'Learn about JRS International School, Narapally, Hyderabad. CBSE curriculum, world-class infrastructure, human values, and holistic development.',
}

export default function Page() {
  return <AboutPage />
}
