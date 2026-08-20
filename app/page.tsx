import {
  ArrowRight,
  Check,
  ChevronRight,
  CircleCheck,
  Clock3,
  Instagram,
  MapPin,
  MessageCircle,
  PackageCheck,
  PartyPopper,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  UsersRound
} from 'lucide-react';

const ASSET_BASE = 'https://picsum.photos';
const WHATSAPP = 'https://wa.me/2349114367588';
const wa = (message: string) => `${WHATSAPP}?text=${encodeURIComponent(message)}`;

const products = [
  {
    name: 'Classic Chin Chin',
    tag: 'Bestseller',
    image: `${ASSET_BASE}/seed/classic-chinchin/800/800`,
    description: 'The timeless, lightly sweetened crunch. Our original recipe, fried to golden perfection.',
    prices: [['500g', '₦3,500'], ['1kg', '₦6,000']],
    message: 'Hi! I want the Classic Chin Chin pack. Can I place an order?'
  },
  {
    name: 'Spicy Chin Chin',
    tag: 'Hot pick',
    image: `${ASSET_BASE}/seed/spicy-chinchin/800/800`,
    description: 'A bold kick of chili and spices for snackers who love heat with their crunch.',
    prices: [['500g', '₦4,000'], ['1kg', '₦7,000']],
    message: 'Hi! I want the Spicy Chin Chin pack. Can I place an order?'
  },
  {
    name: 'Coconut Chin Chin',
    tag: '',
    image: `${ASSET_BASE}/seed/coconut-chinchin/800/800`,
    description: 'Made with real coconut flakes for a fragrant, tropical twist on the classic.',
    prices: [['500g', '₦4,500'], ['1kg', '₦7,500']],
    message: 'Hi! I want the Coconut Chin Chin pack. Can I place an order?'
  }
];

const benefits = [
  [Sparkles, 'Fresh Ingredients', 'No preservatives, only real flour, sugar, eggs, milk, and spices.'],
  [ShieldCheck, 'Hygienic Packaging', 'Sealed in food-grade pouches to keep your chin chin crisp and clean.'],
  [Truck, 'Same-Day Delivery', 'Order early and get your batch delivered within Lagos the same day.'],
  [PartyPopper, 'Bulk & Party Orders', 'Custom packs and branded labels for weddings, birthdays, and corporate gifts.']
] as const;

const steps = [
  ['01', 'Pick Your Flavor', 'Choose Classic, Spicy, or Coconut — and the size you want.'],
  ['02', 'Message Us on WhatsApp', 'Tap any Order button. Your message is pre-filled with your choice.'],
  ['03', 'Get It Delivered', 'Confirm your address, pay, and receive fresh chin chin at your door.']
];

const reviews = [
  ['A', 'Amina O.', 'Lekki, Lagos', 'The Spicy Chin Chin is addictive! Crunchy, fresh, and the delivery was super fast.'],
  ['E', 'Emeka N.', 'Yaba, Lagos', 'I ordered 5kg for my sister\'s birthday party. Everyone loved it. Will definitely order again.'],
  ['T', 'Tolu K.', 'Ikeja, Lagos', 'Premium packaging and a really tasty snack. The Coconut flavor is my favorite.']
];

function WhatsAppIcon({ size = 17 }: { size?: number }) {
  return <MessageCircle size={size} strokeWidth={2.5} aria-hidden="true" />;
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur-md">
        <div className="container-site flex h-[61px] items-center justify-between">
          <a href="#top" className="flex items-center gap-2 text-sm font-extrabold text-cocoa" aria-label="Rodam Treats home">
            <span className="grid h-8 w-8 place-items-center rounded-xl border border-[#e2c57f] bg-cream text-lg">♧</span>
            <span>Rodam Treats</span>
          </a>
          <a className="wa-button px-4 py-2.5 text-xs sm:text-sm" href={wa("Hi! I'd like to order chin chin.")}>
            <WhatsAppIcon size={16} /> Order Now
          </a>
        </div>
      </header>

      <section id="top" className="relative px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:px-8">
        <div className="container-site grid items-center gap-12 lg:grid-cols-[0.96fr_1.04fr] lg:gap-16">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#f6e8c8] px-3 py-1.5 text-xs font-semibold text-cocoa">
              <Star size={13} fill="currentColor" className="text-[#ae771f]" /> Freshly baked in Lagos, delivered fresh
            </div>
            <h1 className="max-w-xl text-5xl font-black leading-[1.03] tracking-[-0.045em] text-cocoa sm:text-6xl lg:text-[4.2rem]">Freshly Baked Chin Chin, Delivered to Your Door</h1>
            <p className="body-copy mt-6 max-w-lg text-base sm:text-lg">Crunchy, golden, and irresistibly tasty. Made with real ingredients and zero shortcuts — the perfect snack for every craving, party, or gift.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="wa-button" href={wa("Hi! I'd like to order chin chin.")}><WhatsAppIcon /> Order on WhatsApp</a>
              <a className="outline-button" href="#products">See flavors <ArrowRight size={16} /></a>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-muted">
              <span className="inline-flex items-center gap-1.5"><Clock3 size={14} className="text-[#ae771f]" /> Same-day delivery</span>
              <span className="inline-flex items-center gap-1.5"><ShieldCheck size={14} className="text-[#ae771f]" /> Hygienic packaging</span>
              <span className="inline-flex items-center gap-1.5"><UsersRound size={14} className="text-[#ae771f]" /> Bulk orders welcome</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-[#f5e7c8]/60 blur-2xl" />
            <img src={`${ASSET_BASE}/seed/chinchin-hero/1000/1000`} alt="Freshly baked golden Nigerian chin chin in a bowl" className="relative aspect-square w-full rounded-3xl object-cover shadow-cocoa" />
          </div>
        </div>
      </section>

      <section id="products" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center"><p className="eyebrow">Our Menu</p><h2 className="section-title">Pick Your Perfect Crunch</h2><p className="body-copy mt-3">Choose a flavor and size, then tap “Order this” to send your request on WhatsApp.</p></div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {products.map((product) => <article key={product.name} className="group overflow-hidden rounded-3xl border border-border/70 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-cocoa">
              <div className="relative aspect-[1.15/1] overflow-hidden bg-cream"><img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />{product.tag && <span className="absolute left-4 top-4 rounded-full bg-[#d49a2e] px-3 py-1 text-[11px] font-bold text-white">{product.tag}</span>}</div>
              <div className="p-5"><h3 className="text-xl font-extrabold text-cocoa">{product.name}</h3><p className="body-copy mt-2 text-sm">{product.description}</p><div className="mt-5 grid grid-cols-2 gap-2 rounded-2xl bg-cream p-3">{product.prices.map(([size, price]) => <div key={size}><div className="text-xs font-semibold text-muted">{size}</div><div className="mt-0.5 font-extrabold text-cocoa">{price}</div></div>)}</div><a className="mt-4 flex w-full items-center justify-center gap-2 rounded-full border border-[#d8b76c] px-4 py-3 text-sm font-bold text-cocoa transition hover:bg-cream" href={wa(product.message)}>Order this on WhatsApp <ChevronRight size={16} /></a></div>
            </article>)}
          </div>
          <div className="mt-8 text-center"><a className="outline-button" href={wa("Hi! I'd like to order a mix of chin chin flavors. Please send me the available options.")}>Order a custom mix on WhatsApp <ArrowRight size={16} /></a></div>
        </div>
      </section>

      <section id="why-us" className="bg-cream px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="container-site"><div className="mx-auto max-w-2xl text-center"><p className="eyebrow">Why Us</p><h2 className="section-title">Made With Love, Packed With Care</h2><p className="body-copy mt-3">We combine family recipes with clean, modern standards so every bite is safe and satisfying.</p></div><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{benefits.map(([Icon, title, copy]) => <div key={title} className="rounded-3xl border border-[#e9d9b2] bg-background p-5"><div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#f6e8c8] text-[#ae771f]"><Icon size={21} /></div><h3 className="mt-5 font-extrabold text-cocoa">{title}</h3><p className="body-copy mt-2 text-sm">{copy}</p></div>)}</div></div>
      </section>

      <section id="how-it-works" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8"><div className="container-site"><div className="mx-auto max-w-2xl text-center"><p className="eyebrow">How It Works</p><h2 className="section-title">Your Chin Chin in 3 Easy Steps</h2></div><div className="mt-10 grid gap-8 md:grid-cols-3">{steps.map(([number, title, copy]) => <div key={number} className="relative text-center md:text-left"><div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-cocoa text-lg font-black text-[#f8df9f] md:mx-0">{number}</div><h3 className="mt-5 text-xl font-extrabold text-cocoa">{title}</h3><p className="body-copy mt-2 max-w-xs md:max-w-none">{copy}</p></div>)}</div><div className="mt-10 text-center"><a className="wa-button" href={wa("Hi! I'm ready to order chin chin. Can you help me choose a flavor?")}><WhatsAppIcon /> Start your order on WhatsApp</a></div></div></section>

      <section id="reviews" className="bg-cream px-4 py-16 sm:px-6 sm:py-20 lg:px-8"><div className="container-site"><div className="mx-auto max-w-2xl text-center"><p className="eyebrow">Loved by Snackers</p><h2 className="section-title">What Our Customers Say</h2></div><div className="mt-10 grid gap-5 md:grid-cols-3">{reviews.map(([initial, name, location, quote]) => <figure key={name} className="rounded-3xl border border-[#e9d9b2] bg-background p-6"><div className="flex gap-1 text-[#d49a2e]">{[1,2,3,4,5].map((n) => <Star key={n} size={15} fill="currentColor" />)}</div><blockquote className="mt-5 text-[15px] font-medium leading-7 text-cocoa">“{quote}”</blockquote><figcaption className="mt-6 flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full bg-cocoa text-sm font-black text-[#f8df9f]">{initial}</span><span><strong className="block text-sm text-cocoa">{name}</strong><span className="text-xs text-muted">{location}</span></span></figcaption></figure>)}</div></div></section>

      <footer className="border-t border-cocoa/20 bg-cocoa px-4 py-12 text-cream sm:px-6 lg:px-8"><div className="container-site grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]"><div><h3 className="text-xl font-extrabold">Rodam Treats</h3><p className="mt-3 max-w-xs text-sm leading-6 text-cream/70">Freshly baked Nigerian chin chin, made to order and delivered with care.</p><a className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#f8df9f]" href="https://instagram.com/rodamtreats" target="_blank" rel="noreferrer"><Instagram size={16} /> @rodamtreats</a></div><div><h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#f8df9f]">Contact & Delivery</h4><p className="mt-4 flex items-start gap-2 text-sm leading-6 text-cream/70"><MapPin size={16} className="mt-1 shrink-0" /> Based in Lagos, Nigeria. Delivery available across Lagos.</p><p className="mt-2 text-sm text-cream/70">+234 911 436 7588</p><a className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#f8df9f]" href={wa("Hi! I'd like to order chin chin.")}><WhatsAppIcon size={16} /> WhatsApp us</a></div><div><h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#f8df9f]">Quick Links</h4><nav className="mt-4 grid gap-3 text-sm text-cream/70"><a className="hover:text-white" href="#products">Our Flavors</a><a className="hover:text-white" href="#why-us">Why Choose Us</a><a className="hover:text-white" href="#how-it-works">How It Works</a><a className="hover:text-white" href="#reviews">Reviews</a></nav></div></div><div className="container-site mt-10 border-t border-white/10 pt-5 text-xs text-cream/50">© 2026 Rodam Treats. All rights reserved. Made with love in Lagos.</div></footer>

      <a href={wa("Hi! I'd like to order chin chin.")} className="fixed bottom-5 right-5 z-30 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-xl shadow-whatsapp/30 transition hover:scale-105" aria-label="Order chin chin on WhatsApp"><WhatsAppIcon size={24} /></a>
    </main>
  );
}