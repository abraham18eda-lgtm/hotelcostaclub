'use client'

import { useState, useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { gallery } from '@/lib/data'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'

export function GallerySection() {
  const [active, setActive] = useState<number | null>(null)

  const close = useCallback(() => setActive(null), [])
  const show = useCallback(
    (dir: number) =>
      setActive((cur) => {
        if (cur === null) return cur
        return (cur + dir + gallery.length) % gallery.length
      }),
    [],
  )

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') show(1)
      if (e.key === 'ArrowLeft') show(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active, close, show])

  return (
    <section id="galeria" className="bg-secondary/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Galería"
          title="Un vistazo a tu próxima escapada"
          description="Descubre los rincones más especiales de Costa Serena. Haz clic en cualquier imagen para verla a pantalla completa."
        />

        <div className="mt-12 grid auto-rows-[160px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4">
          {gallery.map((item, i) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                'group relative overflow-hidden rounded-xl',
                (i === 0 || i === 5) && 'col-span-2 row-span-1 md:row-span-2',
              )}
              aria-label={`Ampliar imagen: ${item.alt}`}
            >
              <img
                src={item.src || '/placeholder.svg'}
                alt={item.alt}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-foreground/0 transition-colors group-hover:bg-foreground/20" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Imagen ampliada"
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Cerrar"
          >
            <X className="size-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              show(-1)
            }}
            className="absolute left-3 inline-flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:left-6"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="size-6" />
          </button>
          <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={gallery[active].src || '/placeholder.svg'}
              alt={gallery[active].alt}
              className="max-h-[82svh] w-auto rounded-lg object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-white/80">
              {gallery[active].alt}
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              show(1)
            }}
            className="absolute right-3 inline-flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-6"
            aria-label="Imagen siguiente"
          >
            <ChevronRight className="size-6" />
          </button>
        </div>
      ) : null}
    </section>
  )
}
