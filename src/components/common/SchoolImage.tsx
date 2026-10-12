'use client'

import React, { useState } from 'react'
import { Image as ImageIcon } from 'lucide-react'

interface SchoolImageProps {
  src: string
  alt: string
  className?: string
  fallbackText?: string
  fallbackBg?: string
  priority?: boolean
}

export default function SchoolImage({
  src,
  alt,
  className = '',
  fallbackText,
  fallbackBg = 'from-slate-100 to-slate-200',
}: SchoolImageProps) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div
        className={`relative overflow-hidden flex flex-col items-center justify-center p-4 bg-gradient-to-br ${fallbackBg} border border-dashed border-slate-300 text-slate-700 text-center select-none ${className}`}
        title={`Image source: ${src}`}
      >
        <div className="w-10 h-10 rounded-full bg-white/80 shadow-sm flex items-center justify-center mb-2 text-slate-700">
          <ImageIcon className="w-5 h-5" />
        </div>
        <p className="text-xs font-semibold text-slate-700 max-w-[90%] truncate">
          {alt || 'Photo Placeholder'}
        </p>
        <p className="text-[10px] text-slate-700 mt-0.5 max-w-[95%] truncate font-mono">
          {fallbackText || src}
        </p>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`object-cover ${className}`}
      onError={() => setError(true)}
      loading="lazy"
    />
  )
}
