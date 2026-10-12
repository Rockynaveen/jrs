import { Metadata } from 'next'
import CertificatesPage from '@/views/CertificatesPage'

export const metadata: Metadata = {
  title: 'Certificates & Mandatory Disclosure | JRS International School, Hyderabad',
  description:
    'View official statutory certificates and mandatory disclosures for JRS International School, Narapally, Hyderabad, including Health, Fire Safety, NOC, and Building Safety.',
}

export default function Page() {
  return <CertificatesPage />
}
