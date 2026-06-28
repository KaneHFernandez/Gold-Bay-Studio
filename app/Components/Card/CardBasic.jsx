import Image from '../Imagery/Image'
import Button from '../Button/Button'
import './CardBasic.css'

/**
 * CardBasic
 * Figma: Card/Basic (ID: 1116:2761) — Base-Content page
 *
 * layout: 'default' | 'horizontal-left' | 'horizontal-right'
 * - default         → vertical stack, image on top, text centered
 * - horizontal-left  → image left, content right, text left-aligned
 * - horizontal-right → content left, image right, text right-aligned
 */
export default function CardBasic({
  // Image
  imageSrc,
  imageAlt = '',
  imageRatio = '1:1',
  // Content
  eyebrow,
  heading,
  paragraph,
  primaryCta,
  secondaryCta,
  // Layout variant
  layout = 'default',
  // Show/hide toggles (match Figma boolean props)
  showEyebrow = true,
  showHeading = true,
  showParagraph = true,
  showDoubleCta = true,
  className = '',
}) {
  const classes = ['card-basic', `card-basic--${layout}`, className]
    .filter(Boolean)
    .join(' ')

  const imageEl = (
    <Image
      src={imageSrc}
      alt={imageAlt}
      ratio={imageRatio}
      className="card-basic__image"
    />
  )

  const contentEl = (
    <div className="card-basic__content">
      {showEyebrow && eyebrow && (
        <p className="eyebrow">{eyebrow}</p>
      )}
      {showHeading && heading && (
        <h3 >{heading}</h3>
      )}
      {showParagraph && paragraph && (
        <p className="card-basic__paragraph">{paragraph}</p>
      )}
      {showDoubleCta && (primaryCta || secondaryCta) && (
        <div className="card-basic__cta-group">
          {primaryCta && (
            <Button
              variant="primary"
              href={primaryCta.href}
              onClick={primaryCta.onClick}
            >
              {primaryCta.label}
            </Button>
          )}
          {secondaryCta && (
            <Button
              variant="link"
              href={secondaryCta.href}
              onClick={secondaryCta.onClick}
            >
              {secondaryCta.label}
            </Button>
          )}
        </div>
      )}
    </div>
  )

  // Image is always first in the DOM so mobile stacking is always image → text.
  // horizontal-right flips the visual order via flex-direction: row-reverse in CSS.
  return (
    <div className={classes}>
      {imageEl}
      {contentEl}
    </div>
  )
}
