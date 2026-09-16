import { notFound } from 'next/navigation'
import { work, getWork } from '../../Data/work'
import WorkDetail from '@/app/Components/WorkDetail/WorkDetail'

export function generateStaticParams() {
  return work.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const project = getWork(slug)
  if (!project) return {}
  const first = Array.isArray(project.description) ? project.description[0] : project.description
  return {
    title: `${project.title} | Gold Bay`,
    description: first,
    openGraph: { images: [project.thumbnail] },
  }
}

export default async function WorkProjectPage({ params }) {
  const { slug } = await params
  const project = getWork(slug)
  if (!project) notFound()

  return <WorkDetail project={project} />
}
