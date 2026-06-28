import Image from '../Imagery/Image'
import Button from '../Button/Button'
import './TextImageBlock.css'

/**
 * TextImageBlock
 * Figma: Text-Image-Block (ID: 5102:1301) — Base-Content page
 *
 * Image fills the block. Heading always visible, centered over image.
 * Paragraph + CTA fade in on hover. Overlay: 25% default → 50% on hover.
 */
export default function TextImageBlock({
  imageSrc,
  imageAlt = '',
  imageRatio = '1:1',
  heading,
  paragraph,
  cta,
  showButton = true,
  className = '',
}) {
  return (
    <div className={['text-image-block', className].filter(Boolean).join(' ')}>

      {/* Background image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        ratio={imageRatio}
        className="text-image-block__image"
      />

      {/* Black overlay — 25% default, 50% on hover (via CSS) */}
      <div className="text-image-block__overlay" />

      {/* Content — always centered over image */}
      <div className="text-image-block__content">
        {heading && (
          <h3 className="text-image-block__heading">{heading}</h3>
        )}
        {paragraph && (
          <p className="text-image-block__paragraph">{paragraph}</p>
        )}
        {showButton && cta && (
          <div className="text-image-block__cta">
            <Button variant="link" href={cta.href} onClick={cta.onClick}>
              {cta.label}
            </Button>
          </div>
        )}
      </div>

    </div>
  )
}
