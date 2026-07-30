import { activities } from '@/lib/data'
import { SectionHeading } from './section-heading'

export function ActivitiesSection() {
  return (
    <section id="actividades" className="bg-secondary/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Experiencias"
          title="Actividades para todos los gustos"
          description="Desde momentos de relax absoluto hasta aventuras frente al mar, hay algo esperándote cada día."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {activities.map((activity) => (
            <article
              key={activity.title}
              className="group relative overflow-hidden rounded-3xl"
            >
              <div className="aspect-[3/4]">
                <img
                  src={activity.image || '/placeholder.svg'}
                  alt={activity.title}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <h3 className="font-heading text-2xl font-semibold">{activity.title}</h3>
                <p className="mt-2 text-sm text-white/85">{activity.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
