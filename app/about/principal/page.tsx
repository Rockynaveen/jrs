import { Metadata } from 'next'
import PrincipalPage from '@/views/PrincipalPage'

export const metadata: Metadata = {
  title: "Principal's Message | JRS International School, Hyderabad",
  description:
    'Read the inspiring message from Mrs. Marlene Mannas, Principal of JRS International School, Hyderabad. Committed to empowering minds, enriching lives, and nurturing future-ready global leaders.',
}

export default function Page() {
  return <PrincipalPage />
}
