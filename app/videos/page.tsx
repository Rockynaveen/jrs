import { Metadata } from 'next'
import LifeSkillsPage from '@/views/LifeSkillsPage'

export const metadata: Metadata = {
  title: 'Videos & Student Discussions | JRS International School, Hyderabad',
  description:
    'Watch student discussions, debates, and video sessions from JRS International School, Hyderabad.',
}

export default function Page() {
  return <LifeSkillsPage />
}
