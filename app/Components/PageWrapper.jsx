'use client'
import { useEffect } from 'react'

/**
 * PageWrapper
 * Applies a theme to <html> so the header (in the layout) inherits it.
 * Usage: wrap each page's content with <PageWrapper theme="night"> or "day"
 */
export default function PageWrapper({ theme = 'day', children, className = '' }) {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    return () => {
      document.documentElement.setAttribute('data-theme', 'day')
    }
  }, [theme])

  return (
    <div className={className}>
      {children}
    </div>
  )
}
