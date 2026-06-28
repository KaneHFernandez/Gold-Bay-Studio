import PageWrapper from '../components/PageWrapper'
import ProcessTimeline from '../Components/ProcessTimeline/ProcessTimeline'
import './page.css'

export const metadata = {
  title: 'Process',
  description:
    'Every Gold Bay engagement starts with strategy — positioning, customer analysis, competitive landscape — before any creative moves forward. See how we build brands that perform.',
  openGraph: {
    title: 'Process — Gold Bay',
    description:
      'Strategy before ideas, every time. See how Gold Bay builds premium automotive brands from the ground up.',
    url: 'https://goldbay.studio/process',
  },
}

const STEPS = [
  {
    title: 'ALIGNMENT',
    paragraph:
      'Everything starts with a conversation. Before any pitch or proposal, the goal is to understand the business, the offer, the audience, and what the brand needs to achieve — because the work is only as good as how well it\'s understood. By the end, the project has a clear shape, with scope, timeline, and outcomes agreed in writing before anything moves forward.',
    imageSrc: "/Mclaren F1 Lineup close.jpg",
  },
  {
    title: 'DISCOVERY',
    paragraph:
      'This is where the real digging happens. An in-depth look at how the business started, what\'s working, what isn\'t, and where it\'s headed — alongside a close audit of the competitors around it. Every insight feeds directly into the strategy, so nothing gets built on assumptions, and the sharper the understanding here, the more accurate every decision that follows.',
    imageSrc: "/Ferrari Daytona Sp3 5.jpg",
  },
  {
    title: 'FOUNDATION',
    paragraph:
      'The strategic foundation that defines the brand — its positioning, mission, values, and DNA — each direction presented with the reasoning behind it. You see not just what\'s recommended but why, so the right path is chosen with clarity rather than under pressure.',
    imageSrc: "/Koenigsegg Jesko Attack, finished in full Koenigsegg Naked Carbon (KNC).jpg",
  },
  {
    title: 'TAKE IT LIVE',
    paragraph:
      'This is where it all comes together. The chosen direction becomes the real thing — the identity, the site, and every piece the business runs on — built out so the brand shows up the same everywhere it lives. It stops living on paper and starts performing in the world.',
     imageSrc: "/Mcalren F1 close-front-duo.jpg",
  },
]

export default function ProcessPage() {
  return (
    <PageWrapper theme="day" >

      {/* ── Hero heading ── */}
      <section className="process-hero">
        <div className="process-hero__inner">
          <h1 className="process-hero__heading">HOW WE WORK</h1>
          <p className="process-hero__paragraph">
            Every brand follows the same path, from the first conversation to the day it goes live. Each stage earns its place before the next begins, and you always know where things stand, what's coming, and why.
          </p>
        </div>
      </section>

      {/* ── Process timeline ── */}
<div style={{ padding: '0 96px' }}>
<ProcessTimeline steps={STEPS} />
      </div>
      <div style={{ padding: '48px 0' }}/>
      

    </PageWrapper>
  )
}
