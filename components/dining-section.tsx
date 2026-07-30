import { Clock } from 'lucide-react'
import { dining } from '@/lib/data'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'

export function DiningSection() {
  return (
    <section id="restaurantes" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Restaurantes &amp; Bares"
          title="Una experiencia gastronómica memorable"
          description="Sabores que despiertan los sentidos, frente al mar y con la mejor selección de la cocina local e internacional."
        />

        <div className="mt-12 flex flex-col gap-8 md:gap-12">
          {dining.map((venue, i) => (
            <article
              key={venue.name}
              className={cn(
                'flex flex-col gap-6 overflow-hidden rounded-3xl border border-border bg-card md:flex-row md:items-stretch',
                i % 2 === 1 && 'md:flex-row-reverse',
              )}
            >
              <div className="md:w-1/2">
                <img
                  src={venue.image || '/placeholder.svg'}
                  alt={venue.name}
                  className="h-60 w-full object-cover md:h-full"
                />
              </div>
              <div className="flex flex-col justify-center p-6 md:w-1/2 md:p-10">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {venue.type}
                </span>
                <h3 className="mt-2 font-heading text-2xl font-semibold text-foreground md:text-3xl">
                  {venue.name}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{venue.description}</p>
                <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                  <Clock className="size-4 text-accent" aria-hidden="true" />
                  Horario: {venue.hours}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
