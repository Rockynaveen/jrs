import { Metadata } from 'next'
import CertificatesPage from '@/views/CertificatesPage'

export const metadata: Metadata = {
  title: 'Mandatory Disclosure | JRS International School, Hyderabad',
  description:
    'Mandatory Public Disclosure in compliance with CBSE SARAS Appendix IX for JRS International School, Narapally, Hyderabad.',
}

export default function Page() {
  return <CertificatesPage />
}
