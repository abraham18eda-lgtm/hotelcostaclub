export type Room = {
  slug: string
  name: string
  tagline: string
  description: string
  longDescription: string
  price: number
  size: string
  guests: number
  beds: string
  image: string
  amenities: string[]
  gallery: string[]
}

export const rooms: Room[] = [
  {
    slug: 'habitacion-deluxe',
    name: 'Habitación Deluxe',
    tagline: 'Confort frente al jardín',
    description:
      'Espacios luminosos con detalles cálidos y vistas al jardín tropical, ideales para una estancia serena.',
    longDescription:
      'Nuestra Habitación Deluxe combina el confort moderno con un diseño cálido inspirado en la costa. Disfruta de una cama king-size con ropa de cama premium, una zona de descanso junto a la ventana y amenidades pensadas para que tu estancia sea inolvidable.',
    price: 1890,
    size: '32 m²',
    guests: 2,
    beds: '1 cama King',
    image: '/images/room-deluxe.png',
    amenities: [
      'Wi-Fi de alta velocidad',
      'Aire acondicionado',
      'Smart TV 50"',
      'Minibar',
      'Caja fuerte',
      'Amenities premium',
    ],
    gallery: ['/images/room-deluxe.png', '/images/gallery-3.png', '/images/activity-pool.png'],
  },
  {
    slug: 'junior-suite',
    name: 'Junior Suite',
    tagline: 'Más espacio para relajarte',
    description:
      'Una suite acogedora con sala de estar independiente y un ambiente elegante bañado de luz natural.',
    longDescription:
      'La Junior Suite ofrece un amplio espacio con sala de estar independiente, perfecta para quienes buscan más comodidad. Su decoración contemporánea en tonos arena crea un ambiente relajante con todas las comodidades de lujo.',
    price: 2650,
    size: '48 m²',
    guests: 3,
    beds: '1 cama King + sofá cama',
    image: '/images/room-junior.png',
    amenities: [
      'Wi-Fi de alta velocidad',
      'Sala de estar',
      'Smart TV 55"',
      'Cafetera Nespresso',
      'Bata y pantuflas',
      'Servicio a la habitación 24h',
    ],
    gallery: ['/images/room-junior.png', '/images/gallery-2.png', '/images/dining-restaurant.png'],
  },
  {
    slug: 'suite-presidencial',
    name: 'Suite Presidencial',
    tagline: 'Lujo con vistas al mar',
    description:
      'La máxima expresión de exclusividad: terraza privada, vistas panorámicas al mar y atención personalizada.',
    longDescription:
      'Nuestra Suite Presidencial es la joya del hotel. Con vistas panorámicas al mar, terraza privada, amplio salón y dormitorio principal de ensueño, ofrece una experiencia de lujo sin igual, complementada con servicio de mayordomo personalizado.',
    price: 5400,
    size: '95 m²',
    guests: 4,
    beds: '1 cama King + 1 Queen',
    image: '/images/room-suite.png',
    amenities: [
      'Terraza privada con jacuzzi',
      'Mayordomo personal',
      'Vistas panorámicas al mar',
      'Salón independiente',
      'Bar premium incluido',
      'Check-in privado',
    ],
    gallery: ['/images/room-suite.png', '/images/hero-2.png', '/images/gallery-1.png'],
  },
  {
    slug: 'habitacion-familiar',
    name: 'Habitación Familiar',
    tagline: 'Pensada para los tuyos',
    description:
      'Amplia y luminosa, diseñada para que toda la familia disfrute de unas vacaciones perfectas.',
    longDescription:
      'La Habitación Familiar está diseñada para el disfrute de toda la familia, con espacio generoso, dos camas confortables y un ambiente cálido y acogedor. Cerca de la piscina y de las actividades para niños.',
    price: 3100,
    size: '56 m²',
    guests: 4,
    beds: '2 camas Queen',
    image: '/images/room-family.png',
    amenities: [
      'Wi-Fi de alta velocidad',
      'Espacio para niños',
      'Smart TV 55"',
      'Minibar familiar',
      'Cuna disponible',
      'Acceso directo a piscina',
    ],
    gallery: ['/images/room-family.png', '/images/activity-pool.png', '/images/gallery-1.png'],
  },
]

export type Promotion = {
  slug: string
  title: string
  badge: string
  description: string
  longDescription: string
  discount: string
  image: string
  includes: string[]
}

export const promotions: Promotion[] = [
  {
    slug: 'escapada-romantica',
    title: 'Escapada Romántica',
    badge: 'Parejas',
    description: 'Dos noches de ensueño con cena privada y spa para dos.',
    longDescription:
      'Sorprende a esa persona especial con una escapada romántica inolvidable. Incluye dos noches en suite con vistas al mar, cena privada a la luz de las velas, botella de champán de bienvenida y un ritual de spa en pareja.',
    discount: '-25%',
    image: '/images/promo-romance.png',
    includes: [
      '2 noches en suite con vistas al mar',
      'Cena romántica privada',
      'Champán de bienvenida',
      'Ritual de spa en pareja',
      'Late check-out',
    ],
  },
  {
    slug: 'verano-en-familia',
    title: 'Verano en Familia',
    badge: 'Familias',
    description: 'Niños gratis y actividades incluidas durante toda tu estancia.',
    longDescription:
      'El plan perfecto para disfrutar en familia. Los niños se alojan gratis y disfrutan de un completo programa de actividades, club infantil y acceso a todas las piscinas del resort.',
    discount: 'Niños gratis',
    image: '/images/promo-family.png',
    includes: [
      'Hasta 2 niños gratis',
      'Club infantil con monitores',
      'Actividades diarias',
      'Desayuno buffet incluido',
      'Acceso a todas las piscinas',
    ],
  },
  {
    slug: 'bienestar-total',
    title: 'Bienestar Total',
    badge: 'Wellness',
    description: 'Retiro de relajación con circuito de spa y clases de yoga.',
    longDescription:
      'Reconecta con tu bienestar en un retiro pensado para tu equilibrio. Incluye circuito de spa diario, masajes, clases de yoga al amanecer y un menú saludable diseñado por nuestro chef.',
    discount: '-30%',
    image: '/images/promo-wellness.png',
    includes: [
      'Circuito de spa diario',
      'Masaje relajante 50 min',
      'Clases de yoga al amanecer',
      'Menú detox del chef',
      'Acceso a zona wellness',
    ],
  },
]

export const services = [
  {
    icon: 'Waves',
    title: 'Piscinas Infinity',
    description: 'Varias piscinas frente al mar con zonas de relax y servicio de bar.',
  },
  {
    icon: 'Sparkles',
    title: 'Spa & Wellness',
    description: 'Circuito termal, masajes y tratamientos para tu bienestar total.',
  },
  {
    icon: 'UtensilsCrossed',
    title: 'Gastronomía',
    description: 'Restaurantes de autor y bares con cocina local e internacional.',
  },
  {
    icon: 'Dumbbell',
    title: 'Gimnasio 24h',
    description: 'Centro fitness equipado con vistas al mar, abierto todo el día.',
  },
  {
    icon: 'Wifi',
    title: 'Wi-Fi Premium',
    description: 'Conexión de alta velocidad gratuita en todo el resort.',
  },
  {
    icon: 'Car',
    title: 'Traslados',
    description: 'Servicio de transfer al aeropuerto y parking privado disponible.',
  },
  {
    icon: 'Baby',
    title: 'Club Infantil',
    description: 'Actividades supervisadas para que los más pequeños disfruten.',
  },
  {
    icon: 'ConciergeBell',
    title: 'Concierge 24/7',
    description: 'Atención personalizada para organizar cada detalle de tu estancia.',
  },
]

export const activities = [
  {
    title: 'Spa & Bienestar',
    description: 'Déjate llevar por nuestros rituales de relajación y circuito termal.',
    image: '/images/activity-spa.png',
  },
  {
    title: 'Deportes Acuáticos',
    description: 'Snorkel, paddle surf y excursiones en velero por la costa.',
    image: '/images/activity-excursion.png',
  },
  {
    title: 'Piscinas & Sol',
    description: 'Relájate en nuestras piscinas infinity frente al mar.',
    image: '/images/activity-pool.png',
  },
]

export const dining = [
  {
    name: 'Restaurante Marea',
    type: 'Cocina de autor',
    description:
      'Nuestro restaurante insignia ofrece una experiencia gastronómica frente al mar, con productos locales y una cuidada selección de vinos.',
    image: '/images/dining-restaurant.png',
    hours: '19:00 - 23:30',
  },
  {
    name: 'Sunset Bar',
    type: 'Coctelería rooftop',
    description:
      'Disfruta de cócteles de autor mientras contemplas el atardecer desde nuestra terraza panorámica en la azotea.',
    image: '/images/dining-bar.png',
    hours: '17:00 - 01:00',
  },
]

export const gallery = [
  { src: '/images/gallery-1.png', alt: 'Vista aérea del resort y la playa' },
  { src: '/images/hero-1.png', alt: 'Piscina infinity al atardecer' },
  { src: '/images/gallery-2.png', alt: 'Cena romántica en la playa' },
  { src: '/images/gallery-3.png', alt: 'Elegante lobby del hotel' },
  { src: '/images/room-suite.png', alt: 'Suite presidencial con vistas al mar' },
  { src: '/images/gallery-4.png', alt: 'Jardines tropicales del resort' },
  { src: '/images/activity-spa.png', alt: 'Sala de spa y bienestar' },
  { src: '/images/dining-bar.png', alt: 'Bar rooftop al atardecer' },
]

export const navLinks = [
  { label: 'Inicio', href: '/#inicio' },
  { label: 'Habitaciones', href: '/#habitaciones' },
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Promociones', href: '/#promociones' },
  { label: 'Galería', href: '/#galeria' },
  { label: 'Contacto', href: '/#contacto' },
]
