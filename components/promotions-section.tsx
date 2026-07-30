'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { promotions } from '@/lib/data'
import { SectionHeading } from './section-heading'

export function PromotionsSection() {
  const scroller = useRef<HTMLDivElement>(null)

  const scrollBy = (dir: number) => {
    const el = scroller.current
    if (!el) return
    const amount = el.clientWidth * 0.85 * dir
    el.scrollBy({ left: amount, behavior: 'smooth' })
  }

  return (
    <section id="promociones" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Ofertas Exclusivas"
            title="Promociones que no querrás dejar pasar"
            description="Aprovecha nuestras ofertas especiales y vive una experiencia única al mejor precio."
            className="mx-0"
          />
          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              className="inline-flex size-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
              aria-label="Anterior promoción"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              className="inline-flex size-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
              aria-label="Siguiente promoción"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <div
          ref={scroller}
          className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4"
        >
          {promotions.map((promo) => (
            <article
              key={promo.slug}
              className="group relative w-[85%] shrink-0 snap-start overflow-hidden rounded-3xl sm:w-[60%] lg:w-[calc(33.333%-0.9rem)]"
            >
              <div className="relative aspect-[3/4] sm:aspect-[4/5]">
                <img
                  src={promo.image || '/placeholder.svg'}
                  alt={promo.title}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              </div>
              <span className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-sm font-bold text-accent-foreground">
                {promo.discount}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <span className="text-xs uppercase tracking-[0.2em] text-white/80">
                  {promo.badge}
                </span>
                <h3 className="mt-1 font-heading text-2xl font-semibold">{promo.title}</h3>
                <p className="mt-2 text-sm text-white/85">{promo.description}</p>
                <Link
                  href={`/promociones/${promo.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/25"
                >
                  Ver oferta
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
