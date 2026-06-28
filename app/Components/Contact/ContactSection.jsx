import Image from '../Imagery/Image'
import './ContactSection.css'

/**
 * ContactSection
 * Figma: Contact (ID: 5104:949) — Section-Content page
 *
 * Layout: two equal columns (content left, image right)
 * - Content: heading + paragraph at top, eyebrow + subheading at bottom
 * - Image: 4:5 ratio placeholder, swaps for real image when imageSrc is provided
 */
export default function ContactSection({
  heading,
  paragraph,
  eyebrow,
  subheading,
  imageSrc,
  imageAlt = '',
  className = '',
}) {
  return (
    <section className={['contact-section', className].filter(Boolean).join(' ')}>

      {/* ── Left: content ── */}
      <div className="contact-section__content">

        <div className="contact-section__heading-block">
          {heading && <h1 className="contact-section__heading">{heading}</h1>}
          {paragraph && <p className="contact-section__paragraph">{paragraph}</p>}
        </div>

        <div className="contact-section__sub-block">
          {eyebrow && <p className="eyebrow contact-section__eyebrow">{eyebrow}</p>}
         {subheading && (
  <h3 className="contact-section__subheading">
    <a href={`mailto:${subheading}`}>{subheading}</a>
  </h3>
)}
        </div>

      </div>

      {/* ── Right: image ── */}
      <div className="contact-section__image">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            ratio="4:5"
            className="contact-section__img"
          />
        ) : (
          <div className="contact-section__placeholder" aria-hidden="true" />
        )}
      </div>

    </section>
  )
}
