import Link from 'next/link'
import { Users, Maximize, BedDouble, ArrowRight } from 'lucide-react'
import { rooms } from '@/lib/data'
import { SectionHeading } from './section-heading'

export function RoomsSection() {
  return (
    <section id="habitaciones" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Habitaciones &amp; Suites"
          title="Espacios pensados para tu descanso"
          description="Cada habitación combina diseño, confort y vistas excepcionales para una estancia inolvidable."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {rooms.map((room) => (
            <article
              key={room.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={room.image || '/placeholder.svg'}
                  alt={room.name}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
                  Desde ${room.price.toLocaleString('es-ES')} / noche
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-heading text-xl font-semibold text-foreground">{room.name}</h3>
                <p className="mt-1 text-sm text-accent">{room.tagline}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {room.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Maximize className="size-4 text-accent" aria-hidden="true" />
                    {room.size}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Users className="size-4 text-accent" aria-hidden="true" />
                    {room.guests} huéspedes
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <BedDouble className="size-4 text-accent" aria-hidden="true" />
                    {room.beds}
                  </span>
                </div>
                <Link
                  href={`/habitaciones/${room.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-accent"
                >
                  Ver detalles
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
