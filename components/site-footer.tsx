import Link from 'next/link'
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { navLinks } from '@/lib/data'

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="font-heading text-2xl font-semibold">Costa Serena</span>
            <p className="mt-1 text-xs uppercase tracking-[0.3em] text-primary-foreground/70">
              Resort &amp; Spa
            </p>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">
              Un refugio de lujo frente al mar donde cada detalle está pensado para crear recuerdos
              inolvidables.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { Icon: FaInstagram , label: 'Instagram' },
                { Icon: FaFacebookF , label: 'Facebook' },
                { Icon: FaTwitter , label: 'Twitter' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold">Navegación</h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-primary-foreground/80">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold">Información</h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-primary-foreground/80">
              <li>
                <Link href="/aviso-de-privacidad" className="transition-colors hover:text-accent">
                  Aviso de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/#restaurantes" className="transition-colors hover:text-accent">
                  Restaurantes &amp; Bares
                </Link>
              </li>
              <li>
                <Link href="/#actividades" className="transition-colors hover:text-accent">
                  Actividades
                </Link>
              </li>
              <li>
                <Link href="/#reservar" className="transition-colors hover:text-accent">
                  Reservar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold">Contacto</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                Av. del Mar 123, 03001 Costa Serena, España
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-accent" />
                <a href="tel:+34900000000" className="hover:text-accent">
                  +34 900 000 000
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0 text-accent" />
                <a href="mailto:reservas@costaserena.com" className="hover:text-accent">
                  reservas@costaserena.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-primary-foreground/15 pt-6 text-sm text-primary-foreground/70 md:flex-row">
          <p>© {new Date().getFullYear()} Hotel Costa Serena. Todos los derechos reservados.</p>
          <Link href="/aviso-de-privacidad" className="hover:text-accent">
            Aviso de Privacidad
          </Link>
        </div>
      </div>
    </footer>
  )
}
