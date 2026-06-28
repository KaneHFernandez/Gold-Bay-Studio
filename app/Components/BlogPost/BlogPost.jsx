import Image from '../Imagery/Image'
import './BlogPost.css'

/**
 * BlogPost
 * Renders a full blog post from a post object (from data/posts.js).
 *
 * Content block types supported:
 *   { type: 'heading',   text: '...' }
 *   { type: 'paragraph', text: '...' }
 *   { type: 'image',     src: '...', alt: '...' }
 *   { type: 'quote',     text: '...' }
 *
 * Usage with Next.js App Router:
 *   // app/blog/[slug]/page.jsx
 *   import { getPostBySlug } from '../../../data/posts'
 *   import BlogPost from '../../../Components/BlogPost/BlogPost'
 *
 *   export default function BlogPage({ params }) {
 *     const post = getPostBySlug(params.slug)
 *     if (!post) return <div>Post not found</div>
 *     return <BlogPost post={post} />
 *   }
 */
export default function BlogPost({ post, className = '' }) {
  if (!post) return null

  return (
    <article className={['blog-post', className].filter(Boolean).join(' ')}>

      {/* Hero */}
      <header className="blog-post__header">
        {post.eyebrow && (
          <p className="eyebrow">{post.eyebrow}</p>
        )}
        {post.date && (
          <p className="blog-post__date">
            {new Date(post.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </p>
        )}
        <h1 className="blog-post__title">{post.title}</h1>
        {post.excerpt && (
          <p className="blog-post__excerpt">{post.excerpt}</p>
        )}
      </header>

      {/* Cover image */}
      {post.coverImage && (
        <div className="blog-post__cover">
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt || post.title}
            ratio="16:9"
          />
        </div>
      )}

      {/* Content blocks */}
      <div className="blog-post__body">
        {post.content?.map((block, i) => {
          if (block.type === 'heading') {
            return (
              <h2 key={i} className="blog-post__block-heading">
                {block.text}
              </h2>
            )
          }

          if (block.type === 'paragraph') {
            return (
              <p key={i} className="blog-post__block-paragraph">
                {block.text}
              </p>
            )
          }

          if (block.type === 'image') {
            return (
              <figure key={i} className="blog-post__block-image">
                <Image
                  src={block.src}
                  alt={block.alt || ''}
                  ratio={block.ratio || '16:9'}
                />
                {block.caption && (
                  <figcaption className="blog-post__block-caption">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            )
          }

          if (block.type === 'quote') {
            return (
              <blockquote key={i} className="blog-post__block-quote">
                {block.text}
              </blockquote>
            )
          }

          return null
        })}
      </div>
    </article>
  )
}
