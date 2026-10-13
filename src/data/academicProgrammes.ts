export type ProgrammeIconName = 'baby' | 'users' | 'sparkles' | 'heart'

export interface AcademicProgrammeItem {
  slug: string
  title: string
  titleHighlight?: string
  heroTitle: string
  heroHighlight: string
  ageBadge: string
  description: string
  fullDetails: string[]
  highlights: string[]
  image: string
  iconName: ProgrammeIconName
  iconBg: string
}

export const earlyYearsProgrammes: AcademicProgrammeItem[] = [
  {
    slug: 'pre-primary-programme',
    title: 'Pre-primary Programme',
    heroTitle: 'Pre-primary',
    heroHighlight: 'Programme',
    ageBadge: 'Early Years',
    description:
      'We have adopted the inquiry and self-research-based Pre-primary program of international quality for the first few and most critical learning years of your child.',
    fullDetails: [
      'We have adopted the inquiry and self-research-based Pre-primary program of international quality for the first few and most critical learning years of your child.',
      'Your child no longer needs to mug up lessons. He/she will know exactly how to apply the knowledge that’s gathered each day.',
    ],
    highlights: [
      'Inquiry and self-research based international methodology',
      'Practical application of concepts with zero rote learning',
      'Sensory-rich exploration and joyful classroom activities',
      'Individual nurturing attention for foundational growth',
    ],
    image: '/images/pre-primary-learning.jpg',
    iconName: 'baby',
    iconBg: 'bg-[#063ca3] text-white',
  },
  {
    slug: 'young-buddies',
    title: 'Young Buddies',
    heroTitle: 'Young',
    heroHighlight: 'Buddies',
    ageBadge: 'Age 2.5 to 3.5 years',
    description:
      'We provide experienced and trained staff to help toddlers develop key learning skills through sensory-based learning, healthy habits, and sports activities.',
    fullDetails: [
      'We provide experienced and trained staff to help toddlers develop key learning skills. Sensory-based learning, healthy eating habits, play-based thinking skills, and sports activities are based on this program.',
      'This program boasts about training children to be independent in terms of speech therapy, potty training, self-learning skills, social skills, and self-management. Montessori methods are adopted in teaching.',
    ],
    highlights: [
      'Montessori methods adopted in teaching',
      'Independence in speech therapy, potty training & self-management',
      'Sensory-based learning & healthy eating habits',
      'Play-based thinking skills & active sports activities',
      'Experienced and specially trained early years staff',
    ],
    image: '/images/young-buddies.jpg',
    iconName: 'users',
    iconBg: 'bg-[#063ca3] text-white',
  },
  {
    slug: 'butterflies-programme',
    title: 'Butterflies Programme',
    heroTitle: 'Butterflies',
    heroHighlight: 'Programme',
    ageBadge: 'Age 3.5 to 4.5 years',
    description:
      'At this age, children are more willing to learn, share and explore through languages, writing skills, memory-building, and story studios.',
    fullDetails: [
      'At this age, children are more willing to learn, share and explore. Our staff is trained to teach children different languages, and writing skills and engage them in memory-building activities.',
      'Through singing, sports, dancing, and story studios children are encouraged to build their extra-curricular activities. Montessori methods are adopted in teaching.',
    ],
    highlights: [
      'Montessori methods adopted in teaching',
      'Different languages, writing skills & memory-building',
      'Story studios, singing, sports, and dancing',
      'Co-curricular and extra-curricular talent building',
      'Encouraging sharing, active learning, and exploration',
    ],
    image: '/images/butterflies-programme.jpg',
    iconName: 'sparkles',
    iconBg: 'bg-[#063ca3] text-white',
  },
  {
    slug: 'honey-bees-programme',
    title: 'Honey Bees Programme',
    heroTitle: 'Honey Bees',
    heroHighlight: 'Programme',
    ageBadge: 'Age 4.5 to 5.5 years',
    description:
      'Just like the hardworking honeybee, children build overall skills through hands-on learning, field trips, reading, writing, and early Math and Science.',
    fullDetails: [
      'Just like the hardworking honeybee, the children are taught to work towards building their overall skills. Hands-on learning experience, field trips, writing abilities, reading capabilities and Math and Science concepts will be taught.',
      'This program aims at preparing the students for primary school learning challenges. Montessori methods are adopted in teaching.',
    ],
    highlights: [
      'Montessori methods adopted in teaching',
      'Hands-on learning experience & educational field trips',
      'Writing abilities & reading capabilities development',
      'Foundational Math and Science conceptual mastery',
      'Comprehensive preparation for primary school challenges',
    ],
    image: '/images/middle-school-students.jpg',
    iconName: 'heart',
    iconBg: 'bg-[#063ca3] text-white',
  },
]

export function getProgrammeBySlug(slug: string): AcademicProgrammeItem | undefined {
  const normalized = slug.toLowerCase().trim()
  return (
    earlyYearsProgrammes.find(
      (p) =>
        p.slug === normalized ||
        p.slug.replace('-programme', '') === normalized ||
        p.title.toLowerCase().replace(/\s+/g, '-') === normalized
    ) || earlyYearsProgrammes[0]
  )
}
