'use client'

import { useEffect, useRef } from 'react'
import CardBasic from '../Card/CardBasic'
import './ProcessTimeline.css'

/**
 * ProcessTimeline
 * Figma: Process page — alternating image/text steps
 *
 * Scroll animations:
 *   — Line grows from top as you scroll through the section
 *   — Each dot pops in when it reaches the viewport center
 *
 * Uses CardBasic:
 *   even steps → layout="horizontal-left"  (image left, content right)
 *   odd steps  → layout="horizontal-right" (content left, image right)
 *
 * Step shape: { title, paragraph, imageSrc?, imageAlt? }
 */
export default function ProcessTimeline({ steps = [], className = '' }) {
  const lineRef = useRef(null)
  const timelineRef = useRef(null)

  useEffect(() => {
    const line = lineRef.current
    const timeline = timelineRef.current
    if (!line || !timeline) return

    const dots = [...timeline.querySelectorAll('.process-step__dot')]

    // --- Dot observer: fires when dot enters the middle 10% of the viewport ---
    const dotObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible')
        })
      },
      { rootMargin: '-45% 0px -45% 0px' }
    )
    dots.forEach((dot) => dotObserver.observe(dot))

    // --- Line scroll animation ---
    // Starts when the first dot reaches the viewport center.
    // Ends when the last dot reaches the viewport center.
    const onScroll = () => {
      if (dots.length < 2) return
      const center = window.innerHeight / 2

      const firstRect = dots[0].getBoundingClientRect()
      const lastRect = dots[dots.length - 1].getBoundingClientRect()

      const firstDotCenter = firstRect.top + firstRect.height / 2
      const lastDotCenter = lastRect.top + lastRect.height / 2

      // 0 when first dot is at center, 1 when last dot is at center
      const progress = Math.min(
        1,
        Math.max(0, (center - firstDotCenter) / (lastDotCenter - firstDotCenter))
      )

      line.style.transform = `translateX(-50%) scaleY(${progress})`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      dotObserver.disconnect()
    }
  }, [])

  return (
    <section
      ref={timelineRef}
      className={['process-timeline', className].filter(Boolean).join(' ')}
    >
      <div ref={lineRef} className="process-timeline__line" aria-hidden="true" />

      {steps.map((step, i) => {
        const layout = i % 2 === 0 ? 'horizontal-left' : 'horizontal-right'

        return (
          <div key={step.title} id={step.title.toLowerCase().replace(/\s+/g, '-')} className="process-step">
            <CardBasic
              layout={layout}
              imageSrc={step.imageSrc}
              imageAlt={step.imageAlt || step.title}
              imageRatio="4:3"
              heading={step.title}
              paragraph={step.paragraph}
              showEyebrow={false}
              showDoubleCta={false}
              className="process-step__card"
            />
            <div className="process-step__dot" aria-hidden="true" />
          </div>
        )
      })}
    </section>
  )
}
