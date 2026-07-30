'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'
import { navLinks } from '@/lib/data'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/80'
          : 'bg-gradient-to-b from-black/40 to-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-6">
        <Link
          href="/#inicio"
          className="flex flex-col leading-none"
          aria-label="Hotel Costa Serena, inicio"
        >
          <span
            className={cn(
              'font-heading text-lg font-semibold tracking-wide md:text-2xl',
              scrolled ? 'text-foreground' : 'text-white',
            )}
          >
            Hotel Costa Club
          </span>
          <span
            className={cn(
              'text-[10px] uppercase tracking-[0.3em] md:text-xs',
              scrolled ? 'text-muted-foreground' : 'text-white/80',
            )}
          >
            Punta Arena
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-accent',
                scrolled ? 'text-foreground' : 'text-white',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+34900000000"
            className={cn(
              'hidden items-center gap-2 text-sm font-medium md:flex',
              scrolled ? 'text-foreground' : 'text-white',
            )}
          >
            <Phone className="size-4" aria-hidden="true" />
            +52 322 000 000
          </a>
          <Link
            href="/#reservar"
            className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105 md:inline-block"
          >
            Reservar
          </Link>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className={cn(
              'inline-flex size-10 items-center justify-center rounded-full lg:hidden',
              scrolled ? 'text-foreground' : 'text-white',
            )}
            aria-label="Abrir menú"
          >
            <Menu className="size-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-foreground/60 backdrop-blur-sm transition-opacity lg:hidden',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      >
        <div
          className={cn(
            'absolute right-0 top-0 flex h-full w-[82%] max-w-xs flex-col bg-background p-6 shadow-2xl transition-transform duration-300',
            open ? 'translate-x-0' : 'translate-x-full',
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between">
            <span className="font-heading text-xl font-semibold">Costa Serena</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex size-10 items-center justify-center rounded-full text-foreground"
              aria-label="Cerrar menú"
            >
              <X className="size-6" />
            </button>
          </div>
          <nav className="mt-8 flex flex-col gap-1" aria-label="Navegación móvil">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 font-heading text-lg text-foreground transition-colors hover:bg-secondary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-3">
            <Link
              href="/#reservar"
              onClick={() => setOpen(false)}
              className="rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-accent-foreground"
            >
              Reservar ahora
            </Link>
            <a
              href="tel:+34900000000"
              className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground"
            >
              <Phone className="size-4" aria-hidden="true" />
              +52 322 000 000
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
