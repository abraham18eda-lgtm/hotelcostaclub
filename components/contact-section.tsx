'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Send, Check } from 'lucide-react'

export function ContactSection() {
  const [sent, setSent] = useState(false)
  const [subscribed, setSubscribed] = useState(false)

  return (
    <section id="contacto" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact form */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Contacto
            </span>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-foreground md:text-4xl">
              Hablemos de tu próxima estancia
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              ¿Tienes alguna pregunta o petición especial? Escríbenos y nuestro equipo te
              atenderá encantado.
            </p>

            {sent ? (
              <div className="mt-8 flex items-center gap-3 rounded-2xl border border-accent/40 bg-accent/10 p-5">
                <span className="flex size-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Check className="size-5" />
                </span>
                <p className="text-sm font-medium text-foreground">
                  ¡Mensaje enviado! Te responderemos lo antes posible.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSent(true)
                }}
                className="mt-8 grid gap-4 sm:grid-cols-2"
              >
                <input
                  type="text"
                  required
                  placeholder="Nombre"
                  aria-label="Nombre"
                  className="rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
                />
                <input
                  type="email"
                  required
                  placeholder="Email"
                  aria-label="Email"
                  className="rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
                />
                <input
                  type="tel"
                  placeholder="Teléfono"
                  aria-label="Teléfono"
                  className="rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 sm:col-span-2"
                />
                <textarea
                  required
                  rows={4}
                  placeholder="Tu mensaje"
                  aria-label="Mensaje"
                  className="resize-none rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 sm:col-span-2"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] sm:col-span-2 sm:w-fit"
                >
                  <Send className="size-4" />
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>

          {/* Info + newsletter + location */}
          <div className="flex flex-col gap-6">
            <div className="grid gap-4 rounded-2xl border border-border bg-card p-6">
              <a href="tel:+34900000000" className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Phone className="size-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-foreground">Teléfono</span>
                  <span className="text-sm text-muted-foreground">+34 900 000 000</span>
                </span>
              </a>
              <a href="mailto:reservas@costaserena.com" className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Mail className="size-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-foreground">Email</span>
                  <span className="text-sm text-muted-foreground">reservas@costaserena.com</span>
                </span>
              </a>
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <MapPin className="size-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-foreground">Dirección</span>
                  <span className="text-sm text-muted-foreground">
                    Av. del Mar 123, 03001 Costa Serena, España
                  </span>
                </span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="rounded-2xl bg-secondary p-6">
              <h3 className="font-heading text-xl font-semibold text-foreground">
                Suscríbete a nuestro boletín
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Recibe ofertas exclusivas y novedades directamente en tu correo.
              </p>
              {subscribed ? (
                <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  <Check className="size-4" /> ¡Gracias por suscribirte!
                </p>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSubscribed(true)
                  }}
                  className="mt-4 flex flex-col gap-3 sm:flex-row"
                >
                  <input
                    type="email"
                    required
                    placeholder="Tu email"
                    aria-label="Email para boletín"
                    className="flex-1 rounded-full border border-input bg-card px-4 py-3 text-sm text-foreground outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
                  >
                    Suscribirme
                  </button>
                </form>
              )}
            </div>

            {/* Location map */}
            <div className="overflow-hidden rounded-2xl border border-border" id="ubicacion">
              <iframe
                title="Ubicación de Hotel Costa Serena"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.5%2C38.3%2C-0.4%2C38.4&layer=mapnik&marker=38.35%2C-0.45"
                className="h-56 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
