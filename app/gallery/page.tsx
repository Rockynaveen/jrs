import { Metadata } from 'next'
import GalleryPage from '@/views/GalleryPage'

export const metadata: Metadata = {
  title: 'Campus & Event Photo Gallery | JRS International School, Hyderabad',
  description:
    'Browse our visual gallery showcasing campus life, sports events, laboratories, classrooms, and cultural celebrations at JRS International School, Hyderabad.',
}

export default function Page() {
  return <GalleryPage />
}
