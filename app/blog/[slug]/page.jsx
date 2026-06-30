import { getPostBySlug, posts } from '../../Data/posts'
import BlogPost from '../../Components/BlogPost/BlogPost'
import BlogSection from '../../Components/BlogSection/BlogSection'

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt || `Read ${post.title} on the Gold Bay blog — brand strategy and insight for the premium automotive world.`,
    openGraph: {
      title: `${post.title} — Gold Bay`,
      description: post.excerpt || `Brand strategy and insight from Gold Bay Studio.`,
      url: `https://goldbay.studio/blog/${slug}`,
      images: post.coverImage ? [{ url: post.coverImage, alt: post.coverImageAlt || post.title }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} — Gold Bay`,
      description: post.excerpt || `Brand strategy and insight from Gold Bay Studio.`,
      images: post.coverImage ? [post.coverImage] : [],
    },
  }
}

export default async function BlogPage({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return <div>Post not found</div>

  return (
    <>
      <BlogPost post={post} />

      {/* <BlogSection
        sectionLabel="From The Blog"
        heading="MORE POSTS"
        limit={1}
      /> */}
    </>
  )
}
