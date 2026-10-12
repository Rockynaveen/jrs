import { Metadata } from 'next'
import BeyondClassroomPage from '@/views/BeyondClassroomPage'

export const metadata: Metadata = {
  title: 'Beyond Classroom — Co-Curricular Excellence | JRS International School, Hyderabad',
  description:
    'Discover sports, arts, performing arts, karate, yoga, music, skating, and holistic co-curricular excellence at JRS International School, Narapally, Hyderabad.',
}

export default function Page() {
  return <BeyondClassroomPage />
}
