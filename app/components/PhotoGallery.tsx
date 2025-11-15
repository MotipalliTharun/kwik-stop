'use client'

import Image from 'next/image'
import { useState } from 'react'

interface Photo {
  url: string
  alt: string
  title: string
  description: string
  fallback?: string
}

interface PhotoGalleryProps {
  photos: Photo[]
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }))
  }

  const getImageSrc = (photo: Photo, index: number) => {
    // If image failed to load, use fallback
    if (imageErrors[index] && photo.fallback) {
      return photo.fallback
    }
    return photo.url
  }

  return (
    <div className="photo-gallery">
      {photos.map((photo, index) => {
        const imageSrc = getImageSrc(photo, index)
        const isLocalImage = photo.url.startsWith('/')
        const hasError = imageErrors[index] || false
        
        return (
          <div key={index} className="photo-item">
            {isLocalImage ? (
              // Use Next.js Image for local images (better optimization)
              <Image
                src={imageSrc}
                alt={photo.alt}
                width={600}
                height={400}
                className="photo-image"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                loading="lazy"
                onError={() => handleImageError(index)}
                unoptimized={false}
              />
            ) : (
              // Use regular img tag for external URLs
              <img
                src={imageSrc}
                alt={photo.alt}
                className="photo-image"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                loading="lazy"
                onError={() => handleImageError(index)}
              />
            )}
            <div className="photo-overlay">
              <p style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                {photo.title}
              </p>
              <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>{photo.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

