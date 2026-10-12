import { Metadata } from 'next'
import SchoolManagementCommitteePage from '@/views/SchoolManagementCommitteePage'

export const metadata: Metadata = {
  title: 'School Management Committee (SMC) | JRS International School, Hyderabad',
  description:
    'Meet the members of the School Management Committee (SMC) at JRS International School, Hyderabad. Constituted under CBSE affiliation norms for institutional oversight and student welfare.',
}

export default function Page() {
  return <SchoolManagementCommitteePage />
}
