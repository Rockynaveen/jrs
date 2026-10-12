import { Metadata } from 'next'
import AdmissionsPage from '@/views/AdmissionsPage'

export const metadata: Metadata = {
  title: 'Admissions 2026-2027 | JRS International School, Hyderabad',
  description:
    'Admissions open for 2026-2027 at JRS International School, Narapally, Hyderabad. CBSE curriculum, simple admission process, transparent guidance, and world-class school environment.',
}

export default function Page() {
  return <AdmissionsPage />
}
