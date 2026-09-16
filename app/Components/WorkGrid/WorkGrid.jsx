import Link from 'next/link'
import { work } from '../../Data/work'
import './WorkGrid.css'

/**
 * WorkGrid
 * Figma: WORK (2803:746)
 *
 * Rows follow the Figma rhythm and repeat: 2 → 3 → 3.
 * Widths are flex ratios taken from the Figma frame (1248px content width),
 * so the grid stays proportional at any screen size.
 * A row with only one project shows that image at its original aspect ratio.
 * As soon as a second project lands in the row, it snaps back to the pattern.
 * Each tile links to /work/[slug]. To add a project, edit Data/work.js.
 */
const ROW_PATTERN = [
  [612, 612],
  [192, 606, 402],
  [606, 324, 270],
]

function toRows(items) {
  const rows = []
  let i = 0
  let p = 0
  while (i < items.length) {
    const widths = ROW_PATTERN[p % ROW_PATTERN.length]
    rows.push(items.slice(i, i + widths.length).map((item, j) => ({ item, grow: widths[j] })))
    i += widths.length
    p += 1
  }
  return rows
}

export default function WorkGrid({ className = '' }) {
  const rows = toRows(work)

  return (
    <section className={['work-grid', className].filter(Boolean).join(' ')}>
      <h1 className="work-grid__sr">Work</h1>
      {rows.map((row, r) => (
        <div
          key={r}
          className={row.length === 1 ? 'work-grid__row work-grid__row--single' : 'work-grid__row'}
        >
          {row.map(({ item, grow }) => (
            <Link
              key={item.slug}
              href={`/work/${item.slug}`}
              className="work-grid__tile"
              style={{ flexGrow: grow }}
              aria-label={item.title}
            >
              <img
                src={item.thumbnail}
                alt={item.thumbnailAlt || item.title}
                className="work-grid__img"
                loading={r === 0 ? 'eager' : 'lazy'}
              />
            </Link>
          ))}
        </div>
      ))}
    </section>
  )
}
