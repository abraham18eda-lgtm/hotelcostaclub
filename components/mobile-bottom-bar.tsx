'use client'

import Link from 'next/link'
import { Tag, Images, CalendarCheck } from 'lucide-react'

export function MobileBottomBar() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 lg:hidden"
      aria-label="Acciones rápidas"
    >
      <div className="relative mx-auto flex max-w-md items-end justify-between gap-2 border-t border-border bg-background/95 px-6 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur">
        <Link
          href="/#promociones"
          className="flex flex-1 flex-col items-center gap-1 py-1.5 text-muted-foreground transition-colors hover:text-accent"
        >
          <Tag className="size-5" aria-hidden="true" />
          <span className="text-[11px] font-medium">Promos</span>
        </Link>

        {/* Center reserve button */}
        <Link
          href="/#reservar"
          className="-mt-7 flex flex-col items-center"
          aria-label="Reservar hotel"
        >
          <span className="flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg ring-4 ring-background">
            <CalendarCheck className="size-6" aria-hidden="true" />
          </span>
          <span className="mt-1 text-[11px] font-semibold text-foreground">Reservar</span>
        </Link>

        <Link
          href="/#galeria"
          className="flex flex-1 flex-col items-center gap-1 py-1.5 text-muted-foreground transition-colors hover:text-accent"
        >
          <Images className="size-5" aria-hidden="true" />
          <span className="text-[11px] font-medium">Galería</span>
        </Link>
      </div>
    </nav>
  )
}
