import { Metadata } from 'next'
import FacilitiesPage from '@/views/FacilitiesPage'

export const metadata: Metadata = {
  title: 'State-of-the-Art Facilities | JRS International School, Hyderabad',
  description:
    'Explore the world-class facilities at JRS International School, Narapally, Hyderabad. Athletics track, meditation hall, spacious playgrounds, secure CCTV campus, modern labs, GPS transport, and more.',
}

export default function Page() {
  return <FacilitiesPage />
}
