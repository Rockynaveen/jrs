import { Metadata } from 'next'
import LifeSkillsPage from '@/views/LifeSkillsPage'

export const metadata: Metadata = {
  title: 'Create Life Skills & Student Discussions | JRS International School, Hyderabad',
  description:
    'Explore student discussions, debates, and life skills sessions at JRS International School. Watch students deliberate on technology, critical thinking, ethics, and communication.',
}

export default function Page() {
  return <LifeSkillsPage />
}
