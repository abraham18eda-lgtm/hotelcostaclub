import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Users, Maximize, BedDouble, Check } from 'lucide-react'
import { rooms } from '@/lib/data'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { MobileBottomBar } from '@/components/mobile-bottom-bar'

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const room = rooms.find((r) => r.slug === slug)
  if (!room) return { title: 'Habitación no encontrada' }
  return {
    title: room.name,
    description: room.description,
    alternates: { canonical: `/habitaciones/${room.slug}` },
    openGraph: {
      title: `${room.name} | Hotel Costa Serena`,
      description: room.description,
      images: [{ url: room.image, width: 1200, height: 900, alt: room.name }],
    },
  }
}

export default async function RoomDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const room = rooms.find((r) => r.slug === slug)
  if (!room) notFound()

  return (
    <>
      <SiteHeader />
      <main className="pb-20 lg:pb-0">
        {/* Hero */}
        <div className="relative h-[60svh] min-h-[420px] w-full">
          <img
            src={room.image || '/placeholder.svg'}
            alt={room.name}
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-5xl px-4 pb-10 md:px-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              {room.tagline}
            </p>
            <h1 className="mt-2 font-heading text-4xl font-semibold text-white md:text-5xl">
              {room.name}
            </h1>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-16">
          <Link
            href="/#habitaciones"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft className="size-4" />
            Volver a habitaciones
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-4 border-b border-border pb-6">
                <span className="inline-flex items-center gap-2 text-sm text-foreground">
                  <Maximize className="size-5 text-accent" /> {room.size}
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-foreground">
                  <Users className="size-5 text-accent" /> {room.guests} huéspedes
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-foreground">
                  <BedDouble className="size-5 text-accent" /> {room.beds}
                </span>
              </div>

              <p className="mt-6 leading-relaxed text-muted-foreground">{room.longDescription}</p>

              <h2 className="mt-10 font-heading text-2xl font-semibold text-foreground">
                Comodidades
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {room.amenities.map((a) => (
                  <li key={a} className="flex items-center gap-2.5 text-sm text-foreground">
                    <Check className="size-4 shrink-0 text-accent" />
                    {a}
                  </li>
                ))}
              </ul>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {room.gallery.map((src) => (
                  <img
                    key={src}
                    src={src || '/placeholder.svg'}
                    alt={`${room.name} - galería`}
                    className="aspect-square w-full rounded-xl object-cover"
                  />
                ))}
              </div>
            </div>

            {/* Booking card */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 rounded-2xl border border-border bg-card p-6 shadow-sm">
                <p className="text-sm text-muted-foreground">Desde</p>
                <p className="font-heading text-3xl font-semibold text-foreground">
                  ${room.price.toLocaleString('es-ES')}
                  <span className="text-base font-normal text-muted-foreground"> / noche</span>
                </p>
                <Link
                  href="/#reservar"
                  className="mt-5 block rounded-full bg-accent px-6 py-3 text-center text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
                >
                  Reservar ahora
                </Link>
                <Link
                  href="/#contacto"
                  className="mt-3 block rounded-full border border-border px-6 py-3 text-center text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  Consultar disponibilidad
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <SiteFooter />
      <MobileBottomBar />
    </>
  )
}
