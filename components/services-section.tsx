import {
  Waves,
  Sparkles,
  UtensilsCrossed,
  Dumbbell,
  Wifi,
  Car,
  Baby,
  ConciergeBell,
  type LucideIcon,
} from 'lucide-react'
import { services } from '@/lib/data'
import { SectionHeading } from './section-heading'

const iconMap: Record<string, LucideIcon> = {
  Waves,
  Sparkles,
  UtensilsCrossed,
  Dumbbell,
  Wifi,
  Car,
  Baby,
  ConciergeBell,
}

export function ServicesSection() {
  return (
    <section id="servicios" className="bg-secondary/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Nuestros Servicios"
          title="Todo lo que necesitas para una estancia perfecta"
          description="Servicios de primer nivel pensados para que tu única preocupación sea disfrutar."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Sparkles
            return (
              <div
                key={service.title}
                className="group flex flex-col items-start rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-md md:p-6"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
