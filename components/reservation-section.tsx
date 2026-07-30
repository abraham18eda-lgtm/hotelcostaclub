'use client'

import { useState } from 'react'
import { CalendarCheck, Check } from 'lucide-react'
import { rooms } from '@/lib/data'

export function ReservationSection() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <section
      id="reservar"
      className="relative overflow-hidden bg-primary py-16 md:py-24"
    >
      <div className="absolute inset-0 opacity-20">
        <img
          src="/images/hero-1.png"
          alt=""
          aria-hidden="true"
          className="size-full object-cover"
        />
      </div>
      <div className="relative mx-auto max-w-5xl px-4 md:px-6">
        <div className="text-center text-primary-foreground">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Reserva
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold md:text-4xl">
            Comprueba disponibilidad
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-primary-foreground/80">
            Indícanos tus fechas y prepararemos la estancia perfecta para ti.
          </p>
        </div>

        <div className="mt-8 rounded-3xl bg-card p-5 shadow-2xl md:p-8">
          {sent ? (
            <div className="flex flex-col items-center gap-3 py-8 text-center">
              <span className="flex size-14 items-center justify-center rounded-full bg-accent/15 text-accent">
                <Check className="size-7" />
              </span>
              <h3 className="font-heading text-2xl font-semibold text-foreground">
                ¡Solicitud recibida!
              </h3>
              <p className="max-w-md text-muted-foreground">
                Gracias por tu interés. Nuestro equipo te contactará en breve para confirmar la
                disponibilidad de tu reserva.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-2 rounded-full border border-border px-5 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Hacer otra consulta
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="checkin" className="text-sm font-medium text-foreground">
                  Entrada
                </label>
                <input
                  id="checkin"
                  name="checkin"
                  type="date"
                  required
                  min={today}
                  className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="checkout" className="text-sm font-medium text-foreground">
                  Salida
                </label>
                <input
                  id="checkout"
                  name="checkout"
                  type="date"
                  required
                  min={today}
                  className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="guests" className="text-sm font-medium text-foreground">
                  Huéspedes
                </label>
                <select
                  id="guests"
                  name="guests"
                  className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
                >
                  <option>1 adulto</option>
                  <option>2 adultos</option>
                  <option>2 adultos + 1 niño</option>
                  <option>2 adultos + 2 niños</option>
                  <option>3 adultos</option>
                  <option>4 adultos</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="roomtype" className="text-sm font-medium text-foreground">
                  Habitación
                </label>
                <select
                  id="roomtype"
                  name="roomtype"
                  className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
                >
                  {rooms.map((room) => (
                    <option key={room.slug}>{room.name}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
                >
                  <CalendarCheck className="size-4" />
                  Reservar
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
