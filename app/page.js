import AboutSection from './Components/AboutSection/AboutSection'
import TextImageBlockSection from './Components/TextImageBlockSection/TextImageBlockSection'
import BlogSection from './Components/BlogSection/BlogSection'
import PageWrapper from './Components/PageWrapper'
import Services from './Components/Services/Services'
import './styles.css';


export const metadata = {
  title: 'Gold Bay — Premium Automotive Brand Studio',
  description:
    'Gold Bay builds brands the premium automotive world actually respects. Strategy, identity, and positioning for supercar clubs, luxury dealerships, track day operators, and niche manufacturers.',
  openGraph: {
    title: 'Gold Bay — Premium Automotive Brand Studio',
    description:
      'Brand development built exclusively for the premium automotive world.',
    url: 'https://goldbay.studio',
  },
}



// Then use: <HeroSection>...</HeroSection>

export default function Home() {


  return (
    <PageWrapper theme="night">
        {/* <div className="dark" style={{ backgroundColor: 'var(--surface-default)', minHeight: '100vh' }}> */}

    <main>

      <h1 className="sr-only">Gold Bay — Premium Automotive Brand Studio</h1>

      {/* ── 1. Text block — 96px L/R, 48px T/B, paragraph centered ── */}
      <div className="hero-section">
        <p style={{
          color: 'var(--text-paragraph)',
          maxWidth: '720px',
          textAlign: 'center',
          margin: 0,
        }}>
          A brand development studio built for the premium automotive world. We build brands people follow, respect, and trust the moment they encounter them. Years inside this industry mean we already know what works, what doesn't, and how to get there without the guesswork.
        </p>
      </div>

      {/* ── 2. Full-width video ── */}
      <div style={{ width: '100%', lineHeight: 0 }}>
        <video
          src="/Gold Bay Personality Reel.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>

      {/* ── 3. About Section ── */}
      <AboutSection
        leftImageSrc="/Ferrari 812 Competizione Aperta.jpg"
        leftImageAlt="Supercar on track"
        rightImageSrc='/Pagani Zonda 760 "Unica" Roadster.jpg'
        rightImageAlt="Driving experience event"
        imageRatio="1:1"
        heading="WHERE AUTOMOTIVE OBSESSION MEETS BRAND STRATEGY"
        // paragraph="We're not a generic web agency. Every client we work with operates in the
        // luxury automotive space — and we build sites that actually reflect that.
        // Strategy-first. Proof behind every decision. Hands-off for you."
        cta={{ label: 'Hear the story', href: '/about' }}
      />

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
      <Services
  heading="OUR CRAFT"
  imageSrc="/1954–1955 Ferrari 750 Monza Spider.jpg"
  services={[
  { title: 'BRAND DEVELOPMENT', description: 'Everything your brand needs, built from the strategy up. Positioning that earns credibility, design that holds its standard, and a brand that performs where it counts, not just one that looks the part.', href: '#', imageSrc: '/Chevron B16.jpg' },
  { title: 'WEB DESIGN',     description: 'The site your clients land on, shaped by the brand foundation already in place. Premium, clear, and made to convert the inquiries that matter most.', href: '#', imageSrc: '/Koenigsegg Jesko Attack, finished in full Koenigsegg Naked Carbon (KNC).jpg' },
  { title: 'GRAPHIC DESIGN', description: 'The logo, wordmark, and marks that make a brand instantly recognizable, built so every piece looks like it belongs to the same premium brand, wherever it shows up.', href: '#', imageSrc: '/Mcalren F1 close-front-duo.jpg' },
]}
/>

      {/* ── 5. Blog Section ── */}
      <BlogSection
        sectionLabel="From The Blog"
        heading="SUPERCAR DEEP DIVE"
        limit={1}
      />

    </main>
    </PageWrapper>
    /* </div> */
  )
}
