'use client'

import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Plane, BedDouble } from 'lucide-react'
import { cn } from '@/lib/utils'

const slides = [
  {
    image: '/images/hero-1.png',
    title: 'Donde el mar se encuentra con el lujo',
    subtitle: 'Un refugio frente al océano diseñado para tus sentidos.',
  },
  {
    image: '/images/hero-2.png',
    title: 'Suites que abrazan el horizonte',
    subtitle: 'Despierta con vistas infinitas al Mediterráneo.',
  },
  {
    image: '/images/hero-3.png',
    title: 'Tu escapada perfecta comienza aquí',
    subtitle: 'Gastronomía, spa y experiencias inolvidables.',
  },
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), [])

  useEffect(() => {
    const id = setInterval(next, 6000)
    return () => clearInterval(id)
  }, [next])

  return (
    <section id="inicio" className="relative h-[92svh] min-h-[560px] w-full overflow-visible">
      {slides.map((slide, i) => (
        <div
          key={slide.image} 
          className={cn(
            'absolute inset-0 transition-opacity duration-1000',
            i === current ? 'opacity-100' : 'opacity-0',
          )}
          aria-hidden={i !== current}
        >
          <img
            src={slide.image || '/placeholder.svg'}
            alt={slide.title}
            className="size-full object-cover"
            fetchPriority={i === 0 ? 'high' : 'auto'}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <span className="mb-4 rounded-full border border-white/30 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-white/90 backdrop-blur-sm">
          Resort &amp; Spa 5 estrellas
        </span>
        <h1 className="max-w-3xl text-balance font-heading text-4xl font-semibold leading-tight text-white drop-shadow-md md:text-6xl">
          {slides[current].title}
        </h1>
        <p className="mt-4 max-w-xl text-pretty text-base text-white/90 md:text-lg">
          {slides[current].subtitle}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/#habitaciones"
            className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
          >
            Descubrir habitaciones
          </Link>
          <Link
            href="/#promociones"
            className="rounded-full border border-white/40 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            Ver promociones
          </Link>
        </div>
      </div>

      {/* Arrows */}
      <button
        type="button"
        onClick={prev}
        className="absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/15 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/30 md:block"
        aria-label="Anterior"
      >
        <ChevronLeft className="size-6" />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/15 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/30 md:block"
        aria-label="Siguiente"
      >
        <ChevronRight className="size-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-28 left-1/2 z-10 flex -translate-x-1/2 gap-2 md:bottom-24">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            className={cn(
              'h-1.5 rounded-full transition-all',
              i === current ? 'w-8 bg-accent' : 'w-2.5 bg-white/50',
            )}
            aria-label={`Ir a la diapositiva ${i + 1}`}
          />
        ))}
      </div>

      {/* Floating booking buttons */}
      <div className="absolute inset-x-0 bottom-0 z-20 translate-y-1/2 px-4">
        <div className="mx-auto grid max-w-2xl grid-cols-2 gap-3 md:gap-5">
          <Link
            href="/#reservar"
            className="group flex items-center justify-center gap-3 rounded-2xl bg-primary px-4 py-4 text-primary-foreground shadow-xl transition-transform hover:-translate-y-1 md:py-6"
          >
            <BedDouble className="size-6 shrink-0 transition-transform group-hover:scale-110" />
            <span className="text-left">
              <span className="block text-sm font-semibold md:text-base">Solo Hotel</span>
              <span className="hidden text-xs text-primary-foreground/80 md:block">
                Reserva tu habitación
              </span>
            </span>
          </Link>
          <Link
            href="/#reservar"
            className="group flex items-center justify-center gap-3 rounded-2xl bg-accent px-4 py-4 text-accent-foreground shadow-xl transition-transform hover:-translate-y-1 md:py-6"
          >
            <Plane className="size-6 shrink-0 transition-transform group-hover:scale-110" />
            <span className="text-left">
              <span className="block text-sm font-semibold md:text-base">Hotel + Vuelo</span>
              <span className="hidden text-xs text-accent-foreground/80 md:block">
                Paquete todo incluido
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
