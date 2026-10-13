import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProgrammeDetailPage from '@/views/ProgrammeDetailPage'
import { earlyYearsProgrammes, getProgrammeBySlug } from '@/data/academicProgrammes'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return earlyYearsProgrammes.map((prog) => ({
    slug: prog.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const programme = getProgrammeBySlug(slug)

  if (!programme) {
    return {
      title: 'Academic Programme | JRS International School, Hyderabad',
    }
  }

  return {
    title: `${programme.title} | Academics | JRS International School, Hyderabad`,
    description: programme.description,
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const programme = getProgrammeBySlug(slug)

  if (!programme) {
    notFound()
  }

  return <ProgrammeDetailPage programme={programme} />
}
