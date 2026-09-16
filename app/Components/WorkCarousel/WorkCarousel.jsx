'use client'

import { useRef } from 'react'
import './WorkCarousel.css'

/**
 * WorkCarousel
 * Figma: WORK2 — black carousel (Frame 84)
 * Slides are 484.8 × 605.55 with a 36px gap.
 * Scrolls with trackpad / swipe, click-and-drag on desktop, and arrow keys.
 */
export default function WorkCarousel({ images = [] }) {
  const track = useRef(null)
  const drag = useRef({ down: false, startX: 0, scroll: 0 })

  if (!images.length) return null

  const onPointerDown = (e) => {
    if (e.pointerType !== 'mouse') return
    const el = track.current
    drag.current = { down: true, startX: e.clientX, scroll: el.scrollLeft }
    el.classList.add('is-dragging')
  }

  const onPointerMove = (e) => {
    const d = drag.current
    if (!d.down) return
    track.current.scrollLeft = d.scroll - (e.clientX - d.startX)
  }

  const endDrag = () => {
    drag.current.down = false
    track.current?.classList.remove('is-dragging')
  }

  const onKeyDown = (e) => {
    const slide = track.current.querySelector('.work-carousel__slide')
    const step = slide ? slide.offsetWidth + 36 : 520
    if (e.key === 'ArrowRight') track.current.scrollBy({ left: step, behavior: 'smooth' })
    if (e.key === 'ArrowLeft') track.current.scrollBy({ left: -step, behavior: 'smooth' })
  }

  return (
    <section className="work-carousel" aria-label="Project images">
      <div
        ref={track}
        className="work-carousel__track"
        tabIndex={0}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onKeyDown={onKeyDown}
      >
        {images.map((img, i) => (
          <figure className="work-carousel__slide" key={img.src + i}>
            <img
              src={img.src}
              alt={img.alt || ''}
              draggable={false}
              loading={i < 3 ? 'eager' : 'lazy'}
            />
          </figure>
        ))}
      </div>
    </section>
  )
}
