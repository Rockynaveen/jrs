import { Metadata } from 'next'
import ChairmanPage from '@/views/ChairmanPage'

export const metadata: Metadata = {
  title: 'Chairman of JRS | JRS International School, Hyderabad',
  description:
    "Read the message from the Chairman of JRS International School, Hyderabad. Learn about our founding leadership's vision for academic excellence, character development, and holistic learning.",
}

export default function Page() {
  return <ChairmanPage />
}
