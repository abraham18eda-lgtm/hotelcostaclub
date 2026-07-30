import { SiteHeader } from '@/components/site-header'
import { HeroSlider } from '@/components/hero-slider'
import { RoomsSection } from '@/components/rooms-section'
import { ServicesSection } from '@/components/services-section'
import { PromotionsSection } from '@/components/promotions-section'
import { GallerySection } from '@/components/gallery-section'
import { DiningSection } from '@/components/dining-section'
import { ActivitiesSection } from '@/components/activities-section'
import { ReservationSection } from '@/components/reservation-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'
import { MobileBottomBar } from '@/components/mobile-bottom-bar'

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: 'Hotel Costa Serena',
    description:
      'Resort de lujo frente al mar con habitaciones elegantes, gastronomía de autor, spa y experiencias inolvidables.',
    starRating: { '@type': 'Rating', ratingValue: '5' },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. del Mar 123',
      postalCode: '03001',
      addressLocality: 'Costa Serena',
      addressCountry: 'ES',
    },
    telephone: '+52322000000',
    image: 'https://hotelcostaserena.com/images/og-image.png',
    url: 'https://hotelcostaserena.com',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main className="pb-20 lg:pb-0">
        <HeroSlider />
        {/* spacer for floating buttons overlap */}
        <div className="h-12 bg-background md:h-16" />
        <RoomsSection />
        <ServicesSection />
        <PromotionsSection />
        <GallerySection />
        <DiningSection />
        <ActivitiesSection />
        <ReservationSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <MobileBottomBar />
    </>
  )
}
