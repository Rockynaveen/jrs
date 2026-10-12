import * as React from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      marquee: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        behavior?: string
        direction?: string
        scrollamount?: number | string
        scrolldelay?: number | string
        loop?: number | string
        bgcolor?: string
        height?: number | string
        width?: number | string
        onMouseEnter?: (e: any) => void
        onMouseLeave?: (e: any) => void
      }
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      marquee: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        behavior?: string
        direction?: string
        scrollamount?: number | string
        scrolldelay?: number | string
        loop?: number | string
        bgcolor?: string
        height?: number | string
        width?: number | string
        onMouseEnter?: (e: any) => void
        onMouseLeave?: (e: any) => void
      }
    }
  }
}
