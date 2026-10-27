import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import FacilityDetailPage from '@/views/FacilityDetailPage'
import { facilitiesList, getFacilityBySlug } from '@/data/facilitiesData'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return facilitiesList.map((facility) => ({
    slug: facility.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const facility = getFacilityBySlug(slug)

  if (!facility) {
    return {
      title: 'School Facility | JRS International School, Hyderabad',
    }
  }

  return {
    title: `${facility.title} | Infrastructure & Facilities | JRS International School, Hyderabad`,
    description: facility.overview,
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const facility = getFacilityBySlug(slug)

  if (!facility) {
    notFound()
  }

  return <FacilityDetailPage facility={facility} />
}
