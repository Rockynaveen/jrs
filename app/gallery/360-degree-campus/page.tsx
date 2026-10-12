import { Metadata } from 'next'
import Campus360Page from '@/views/Campus360Page'

export const metadata: Metadata = {
  title: '360 Degree Campus | JRS International School, Hyderabad',
  description:
    'Explore our vibrant campus through 360° views. Interactive panoramic perspectives of JRS International School entrance, classrooms, amphitheatre, sports grounds, and facilities.',
}

export default function Page() {
  return <Campus360Page />
}
