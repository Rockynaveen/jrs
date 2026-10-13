import { Metadata } from 'next'
import ProgrammeDetailPage from '@/views/ProgrammeDetailPage'
import { getProgrammeBySlug } from '@/data/academicProgrammes'

const programme = getProgrammeBySlug('honey-bees-programme')!

export const metadata: Metadata = {
  title: `${programme.title} | Academics | JRS International School, Hyderabad`,
  description: programme.description,
}

export default function Page() {
  return <ProgrammeDetailPage programme={programme} />
}
