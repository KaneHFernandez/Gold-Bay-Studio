import TextImageBlock from '../TextImageBlock/TextImageBlock'
import './TextImageBlockSection.css'

/**
 * TextImageBlockSection
 * Figma: Text-Image-Block Section (ID: 5102:1370) — Section-Content page
 *
 * Full-width section with an eyebrow label + 2-column grid of TextImageBlock cards.
 * Accepts 2 or 4 items (fills 1 or 2 rows). Dark mode via global.css tokens.
 */
export default function TextImageBlockSection({
  // Eyebrow label at the top (e.g. "OUR SERVICES")
  sectionLabel,
  // Array of card items — each matches TextImageBlock props
  items = [],
  className = '',
}) {
  return (
    <section className={['tib-section', className].filter(Boolean).join(' ')}>
      {sectionLabel && (
        <h2 className="tib-section__label">{sectionLabel}</h2>
      )}
      <div className="tib-section__grid">
        {items.map((item, i) => (
          <TextImageBlock
            key={i}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt || ''}
            imageRatio={item.imageRatio || '1:1'}
            heading={item.heading}
            paragraph={item.paragraph}
            cta={item.cta}
            showButton={item.showButton !== false}
            className="tib-section__card"
          />
        ))}
      </div>
    </section>
  )
}
