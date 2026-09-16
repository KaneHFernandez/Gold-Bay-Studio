import WorkCarousel from '../WorkCarousel/WorkCarousel'
import './WorkDetail.css'

/**
 * WorkDetail
 * Figma: WORK2 (2803:1535) — text first, then the black carousel.
 */
export default function WorkDetail({ project }) {
  const paragraphs = Array.isArray(project.description)
    ? project.description
    : [project.description]

  return (
    <article className="work-detail">
      <header className="work-detail__text">
        <h1 className="work-detail__title">{project.title}</h1>
        {paragraphs.filter(Boolean).map((p, i) => (
          <p className="work-detail__body" key={i}>{p}</p>
        ))}
      </header>

      <WorkCarousel images={project.images} />
    </article>
  )
}
