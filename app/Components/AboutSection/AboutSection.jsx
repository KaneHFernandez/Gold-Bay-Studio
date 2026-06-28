import Image from '../Imagery/Image'
import Button from '../Button/Button'
import './AboutSection.css'

/**
 * AboutSection
 * Figma: About Section (ID: 5102:1371) — Section-Content page
 *
 * 3-column layout: Image | Content | Image
 * Full-width section with 96px side padding, 48px top/bottom.
 * Content is centered between two flanking images.
 */
export default function AboutSection({
  // Left image
  leftImageSrc,
  leftImageAlt = '',
  // Right image
  rightImageSrc,
  rightImageAlt = '',
  // Image ratio (same for both)
  imageRatio = '1:1',
  // Content
  heading,
  paragraph,
  cta,
  className = '',
}) {
  return (
    <section className={['about-section', className].filter(Boolean).join(' ')}>
      <Image
        src={leftImageSrc}
        alt={leftImageAlt}
        ratio={imageRatio}
        className="about-section__image"
      />

      <div className="about-section__content">
        {heading && (
          <h2 className="about-section__heading">{heading}</h2>
        )}
        {paragraph && (
          <p className="about-section__paragraph">{paragraph}</p>
        )}
        {cta && (
          <Button variant="link" href={cta.href} onClick={cta.onClick}>
            {cta.label}
          </Button>
        )}
      </div>

      <Image
        src={rightImageSrc}
        alt={rightImageAlt}
        ratio={imageRatio}
        className="about-section__image about-section__image--right"
      />
    </section>
  )
}
