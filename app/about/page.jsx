import AboutSection from '../Components/AboutSection/AboutSection'
import TextImageBlockSection from '../Components/TextImageBlockSection/TextImageBlockSection'
import BlogSection from '../Components/BlogSection/BlogSection'
import Image from '../Components/Imagery/Image'
import CommunityGallery from '../Components/CommunityGallery/CommunityGallery'

export const metadata = {
  title: 'About',
  description:
    'Gold Bay is not a generalist agency that takes on automotive clients — we are an automotive studio. Learn the story behind the studio and why sector fluency changes everything.',
  openGraph: {
    title: 'About — Gold Bay',
    description:
      'The story behind Gold Bay — the only brand development studio built exclusively for the premium automotive world.',
    url: 'https://goldbay.studio/about',
  },
}


export default function AboutPage() {
const images = [
  { src: '/Mcalren F1 close-front-duo.jpg', href: 'https://www.instagram.com/q.martinez_' },
  { src: '/Pagani Zonda 760 "Unica" Roadster.jpg', href: 'https://quentin-martinez.com/work' },
  { src: '/Porsche 917.jpg', href: 'https://quentin-martinez.com/work' },
  { src: '/Mclaren F1 Lineup.jpg', href: 'https://quentin-martinez.com/work' },
  { src: '/Mclaren 720s.jpg', href: 'https://quentin-martinez.com/work' },
  { src: '/Koenigsegg Jesko Attack, finished in full Koenigsegg Naked Carbon (KNC).jpg', href: 'https://quentin-martinez.com/work' },
];
  return (
    <div className="light" style={{ backgroundColor: 'var(--surface-default)', minHeight: '100vh' }}>
    <main>

      {/* ── 1. Text block — 96px L/R, 48px T/B, paragraph centered ── */}
<div style={{
  padding: '48px 96px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '36px',
  alignItems: 'center',
  boxSizing: 'border-box',
  width: '100%',
  backgroundColor: 'var(--surface-default)',
}}>
        <h1 style={{ textAlign: 'center' }}>WHERE IT STARTED</h1>
        <p style={{
          fontFamily: "'Aeonik VF', sans-serif",
          fontWeight: 400,
          fontSize: '18px',
          lineHeight: 1.75,
          color: 'var(--text-paragraph)',
          maxWidth: '720px',
          textAlign: 'center',
          margin: 0,
        }}>
          What started as a kid with a camera became years of obsession, and a studio built for the world that obsession led to.
        </p>
      </div>

      {/* ── 2. Full-width image ── */}
      <div style={{ width: '100%', lineHeight: 0 }}>
        <Image
          src="/Mclaren F1 Lineup.jpg" alt="Driver portrait" ratio="16:9"
          style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
        />
               {/* <Image src="/Mcalren F1 close-front-duo.jpg" alt="Driver portrait" ratio="1:2" />
      </div> */}
      </div>

 

      {/* ── 4. Text Image Block Section ── */}
 <TextImageBlockSection
        sectionLabel="HOW WE WORK"
        items={[
          {
            imageSrc: "/Mclaren F1 Lineup close.jpg",
            imageAlt: 'Alignment session',
            imageRatio: '1:1',
            heading: 'ALIGNMENT',
            paragraph:
              ' A clear understanding of your business, your goals, and what the brand needs to achieve. This shapes everything that follows, so every move forward is deliberate and informed.',
            cta: { label: 'Learn more', href: '/process#alignment' },
            showButton: true,
          },
          {
            imageSrc: "/Ferrari Daytona Sp3 5.jpg",
            imageAlt: 'Discovery phase',
            imageRatio: '1:1',
            heading: 'DISCOVERY',
            paragraph:
              "An in-depth audit of how the business started, what's working, where it's headed, and the competitors around it. Every insight feeds the strategy, so nothing gets built on assumptions.",
            cta: { label: 'Learn more', href: '/process#discovery' },
            showButton: true,
          },
          {
            imageSrc: "/Koenigsegg Jesko Attack, finished in full Koenigsegg Naked Carbon (KNC).jpg",
            imageAlt: 'Foundation design',
            imageRatio: '1:1',
            heading: 'FOUNDATION',
            paragraph:
              'The strategic foundation that defines the brand, its positioning, mission, values, and DNA. A complete framework for how the brand thinks, speaks, and shows up, presented in person and built to give every future decision a clear direction.',
            cta: { label: 'Learn more', href: '/process#foundation' },
            showButton: true,
          },
          {
            imageSrc: "/Mcalren F1 close-front-duo.jpg",
            imageAlt: 'Site launch',
            imageRatio: '1:1',
            heading: 'TAKE IT LIVE',
            paragraph:
              'This is where it all comes together. Strategy, positioning, and direction become real, showing up the same everywhere your brand lives. It stops living on paper and starts performing in the world.',
            cta: { label: 'Learn more', href: '/process#take-it-live' },
            showButton: true,
          },
        ]}
      />
      {/* ── 5. Blog Section ── */}
    {/* <BlogSection
         sectionLabel="From The Blog"
         heading="SUPERCAR DEEP DIVE"
         limit={3}
       /> */}

<CommunityGallery images={images} heading="From the Community" />
    </main>
    </div>
  )
}
