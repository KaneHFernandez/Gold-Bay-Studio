import Link from 'next/link'
import { posts } from '../../Data/posts'
import CardBasic from '../Card/CardBasic'
import './BlogSection.css'

/**
 * BlogSection
 * Figma: Blog Section — Card/Basic grid
 *
 * Renders all posts from data/posts.js as a CardBasic grid.
 * Each card links to /blog/[slug].
 * To add a post: edit data/posts.js — no code changes needed here.
 */
export default function BlogSection({
  sectionLabel = 'From The Blog',
  heading,
  limit,
  excludeSlug,
  random = false,
  h1 = false,
  className = '',
}) {
let displayPosts = [...posts]
  .reverse()
  .filter((post) => (excludeSlug ? post.slug !== excludeSlug : true))
  if (random) {
    displayPosts = [...displayPosts].sort(() => Math.random() - 0.5)
  }

  displayPosts = limit ? displayPosts.slice(0, limit) : displayPosts

  const Heading = h1 ? 'h1' : 'h2'
  // ...rest stays the same
  return (
    <section className={['blog-section', className].filter(Boolean).join(' ')}>
      {(sectionLabel || heading) && (
        <div className="blog-section__header">
          {/* {sectionLabel && <p className="blog-section__eyebrow">{sectionLabel}</p>} */}
          {heading && <Heading className="blog-section__heading">{heading}</Heading>}
        </div>
      )}

      <div className="blog-section__grid">
        {displayPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="blog-section__card-link"
          >
            <CardBasic
              imageSrc={post.coverImage}
              imageAlt={post.coverImageAlt || post.title}
              imageRatio="16:9"
              eyebrow={post.eyebrow}
              heading={post.title}
              paragraph={post.excerpt}
              layout="default"
              showEyebrow={!!post.eyebrow}
              showHeading={true}
              showParagraph={!!post.excerpt}
              showDoubleCta={false}
              className="blog-section__card"
            />
          </Link>
        ))}
      </div>
    </section>
  )
}
