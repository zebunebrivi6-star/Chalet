import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  Copy,
  Globe,
  Home,
  Image,
  MapPin,
  Phone,
  UtensilsCrossed,
  X,
} from 'lucide-react';
import forestBackdrop from './assets/images/forest_cabin_backdrop_1794748670483.jpg';
import chaletAboutImg from './assets/images/chalet_about_real.png';
import {
  BUFFET_MENU_ITEMS,
  CONTACT_LINKS,
  FAQ_ITEMS,
  FEATURED_LOGO_URL,
  GALLERY_PHOTOS,
  SWEET_MENU_ITEMS,
  UI_COPY,
  type Language,
} from './content';

type NavKey = 'home' | 'about' | 'gallery' | 'menu' | 'faq' | 'contact';

const PHOTOS_PER_PAGE = 6;
const TOTAL_GALLERY_PAGES = Math.ceil(GALLERY_PHOTOS.length / PHOTOS_PER_PAGE);

function ChaletLogoIcon({ className }: { className?: string; strokeWidth?: number }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block chalet-b-icon-mask ${className ?? ''}`}
    />
  );
}

const NAV_ICONS: { id: NavKey; icon: React.ComponentType<{ className?: string; strokeWidth?: number }> }[] = [
  { id: 'home', icon: Home },
  { id: 'about', icon: ChaletLogoIcon },
  { id: 'gallery', icon: Image },
  { id: 'menu', icon: UtensilsCrossed },
  { id: 'faq', icon: CircleHelp },
  { id: 'contact', icon: Phone },
];

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
      <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
    </svg>
  );
}

const SOCIAL_ITEMS = [
  {
    id: 'facebook' as const,
    label: 'Facebook',
    href: CONTACT_LINKS.facebookHref,
    icon: FacebookIcon,
  },
  {
    id: 'instagram' as const,
    label: 'Instagram',
    href: CONTACT_LINKS.instagramHref,
    icon: InstagramIcon,
  },
  {
    id: 'tiktok' as const,
    label: 'TikTok',
    href: CONTACT_LINKS.tiktokHref,
    icon: TikTokIcon,
  },
  {
    id: 'whatsapp' as const,
    label: 'WhatsApp',
    href: CONTACT_LINKS.whatsappHref,
    icon: WhatsAppIcon,
  },
];

export default function App() {
  const [lang, setLang] = useState<Language>('ka');
  const [bgFailed, setBgFailed] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);
  const [chaletImgFailed, setChaletImgFailed] = useState(false);

  // Navigation & section scroll state
  const aboutSectionRef = useRef<HTMLElement | null>(null);
  const gallerySectionRef = useRef<HTMLElement | null>(null);
  const menuSectionRef = useRef<HTMLElement | null>(null);
  const faqSectionRef = useRef<HTMLElement | null>(null);
  const contactSectionRef = useRef<HTMLElement | null>(null);

  // Gallery state (6 photos per page + full lightbox across all 19 photos)
  const [galleryPage, setGalleryPage] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Full menu modal state
  const [openMenuModal, setOpenMenuModal] = useState<'buffet' | 'sweet' | null>(null);

  // Mobile-only expanded section modal state
  const [mobileModal, setMobileModal] = useState<'about' | 'gallery' | 'faq' | 'contact' | null>(
    null
  );

  // FAQ state (all collapsed by default until clicked)
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  // Contact copy feedback
  const [copiedPhone, setCopiedPhone] = useState(false);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const galleryPageStart = galleryPage * PHOTOS_PER_PAGE;
  const visibleGalleryPhotos = GALLERY_PHOTOS.slice(
    galleryPageStart,
    galleryPageStart + PHOTOS_PER_PAGE
  );

  const activeLightboxPhoto =
    lightboxIndex !== null ? (GALLERY_PHOTOS[lightboxIndex] ?? null) : null;

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % GALLERY_PHOTOS.length
        );
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  useEffect(() => {
    if (!openMenuModal && !mobileModal) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && lightboxIndex === null) {
        if (openMenuModal) setOpenMenuModal(null);
        else if (mobileModal) setMobileModal(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [openMenuModal, mobileModal, lightboxIndex]);

  useEffect(() => {
    const hasOpenOverlay = lightboxIndex !== null || openMenuModal !== null || mobileModal !== null;
    if (!hasOpenOverlay) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxIndex, openMenuModal, mobileModal]);

  const handleNavClick = (id: NavKey) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (id === 'about') {
      aboutSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else if (id === 'gallery') {
      gallerySectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (id === 'menu') {
      menuSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (id === 'faq') {
      faqSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (id === 'contact') {
      contactSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_LINKS.phoneDisplay);
      setCopiedPhone(true);
      window.setTimeout(() => setCopiedPhone(false), 2000);
    } catch {
      // Clipboard API unavailable in restricted context
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden flex flex-col items-center px-4 sm:px-6 pb-12">
      {/* Fixed Top-Right Language Switcher (Globe Icon Only, Zero Layout Shift) */}
      <button
        type="button"
        onClick={() => setLang((prev) => (prev === 'ka' ? 'en' : 'ka'))}
        aria-label={UI_COPY.languageToggleAria[lang]}
        title={UI_COPY.languageToggleAria[lang]}
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-40 glass-surface glass-surface-hover rounded-full w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center text-[#55b9b1] hover:!border-[#55b9b1]/80 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#55b9b1]"
      >
        <Globe className="w-[18px] h-[18px] sm:w-5 sm:h-5 shrink-0" strokeWidth={1.5} />
      </button>

      {/* Fixed Moody Misty Pine Forest Backdrop with Graceful Fallback */}
      <div
        className="fixed inset-0 -z-20 bg-gradient-to-br from-[#131d16] via-[#1c261c] to-[#0b100d]"
        aria-hidden="true"
      >
        {!bgFailed && (
          <img
            src={forestBackdrop}
            alt="Misty pine forest mountain slope with secluded dark timber cabin"
            referrerPolicy="no-referrer"
            onError={() => setBgFailed(true)}
            className="h-full w-full object-cover object-center scale-[1.01]"
          />
        )}
      </div>

      {/* Subtle Dark Atmospheric Gradient Scrim for Crisp White Text Legibility */}
      <div
        className="fixed inset-0 -z-10 bg-gradient-to-b from-black/45 via-black/25 to-black/65 pointer-events-none"
        aria-hidden="true"
      />

      {/* Hero Viewport Area: Logo Card + Circular Navigation Buttons */}
      <div className="w-full max-w-[680px] min-h-[88vh] flex flex-col items-center justify-center gap-6 sm:gap-7 py-10">
        {/* 1. Featured Logo Glass Card */}
        <section
          aria-label="Chalet Bulachauri"
          className="w-full max-w-[510px] glass-surface glass-surface-hover rounded-2xl p-5 sm:p-6 flex items-center justify-center"
        >
          {!logoFailed ? (
            <img
              src={FEATURED_LOGO_URL}
              alt="Chalet Bulachauri"
              referrerPolicy="no-referrer"
              onError={() => setLogoFailed(true)}
              className="w-full max-h-64 sm:max-h-72 object-contain rounded-xl"
            />
          ) : (
            <div className="w-full py-12 flex flex-col items-center justify-center text-center rounded-xl bg-white/5 border border-white/10">
              <span className="font-serif text-lg uppercase tracking-[0.28em] text-white/90">
                CHALET BULACHAURI
              </span>
              <span className="mt-1.5 text-xs font-light text-white/60">
                {UI_COPY.logoFallback[lang]}
              </span>
            </div>
          )}
        </section>

        {/* 2. Separate Circular Frosted-Glass Navigation Buttons */}
        <nav
          aria-label={UI_COPY.navAriaLabel[lang]}
          className="w-full grid grid-cols-3 sm:grid-cols-6 place-items-center gap-3 sm:gap-3.5"
        >
          {NAV_ICONS.map(({ id, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => handleNavClick(id)}
              className="group glass-surface glass-surface-hover rounded-full w-[88px] h-[88px] sm:w-[98px] sm:h-[98px] flex flex-col items-center justify-center gap-1.5 px-2 transition-all duration-200 hover:-translate-y-0.5 hover:!border-[#55b9b1]/80 hover:!bg-white/15 active:!border-[#55b9b1]/80 active:!bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#55b9b1] cursor-pointer"
            >
              <Icon
                className="w-5 h-5 sm:w-[22px] sm:h-[22px] shrink-0 text-white/95 transition-all duration-200 group-hover:scale-105 group-hover:text-[#55b9b1] group-active:text-[#55b9b1]"
                strokeWidth={1.25}
              />
              <span className="text-[10.5px] sm:text-[11.5px] font-light leading-tight text-center text-white/90 transition-colors duration-200 group-hover:text-white group-active:text-white">
                {UI_COPY.navLabels[id][lang]}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* 3. Larger About Us Chalet Glass Window */}
      <section
        id="about"
        ref={aboutSectionRef}
        aria-label={UI_COPY.about.heading[lang]}
        className="w-full max-w-[980px] glass-surface glass-surface-hover rounded-2xl overflow-hidden mt-4 mb-12"
      >
        {/* Desktop Layout (Unchanged) */}
        <div className="hidden md:grid md:grid-cols-2 items-stretch">
          {/* Left Half: Full-Bleed Chalet House Photograph */}
          <div className="relative min-h-[470px] w-full bg-[#131b16] border-r border-white/20">
            {!chaletImgFailed ? (
              <img
                src={chaletAboutImg}
                alt={UI_COPY.about.photoAlt[lang]}
                referrerPolicy="no-referrer"
                onError={() => setChaletImgFailed(true)}
                className="h-full w-full object-cover object-center"
              />
            ) : (
              <div className="h-full w-full flex flex-col items-center justify-center p-8 text-center text-white/70">
                <Home className="w-10 h-10 mb-3 text-[#55b9b1]" strokeWidth={1.2} />
                <span className="text-sm font-light">{UI_COPY.about.photoFallback[lang]}</span>
              </div>
            )}
          </div>

          {/* Right Half: About Us Heading & Chalet Information */}
          <div className="p-10 md:p-12 flex flex-col justify-center text-left">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-3xl font-medium tracking-tight text-white">
                {UI_COPY.about.heading[lang]}
              </h2>
              <ChaletLogoIcon className="w-9 h-9 text-white/95 shrink-0" />
            </div>

            <div className="mt-5 space-y-4 text-[15px] font-light leading-relaxed text-white/85">
              {UI_COPY.about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph[lang]}</p>
              ))}
            </div>

            <div className="mt-7 pt-5 border-t border-white/15">
              <p className="text-sm font-medium tracking-wide text-[#55b9b1]">
                {UI_COPY.about.tagline[lang]}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile-Only Compact Preview + Open Modal Button */}
        <div className="md:hidden">
          <div className="relative h-[210px] w-full bg-[#131b16] border-b border-white/15">
            {!chaletImgFailed ? (
              <img
                src={chaletAboutImg}
                alt={UI_COPY.about.photoAlt[lang]}
                referrerPolicy="no-referrer"
                onError={() => setChaletImgFailed(true)}
                className="h-full w-full object-cover object-[center_72%]"
              />
            ) : (
              <div className="h-full w-full flex flex-col items-center justify-center p-6 text-center text-white/70">
                <Home className="w-9 h-9 mb-2 text-[#55b9b1]" strokeWidth={1.2} />
                <span className="text-xs font-light">{UI_COPY.about.photoFallback[lang]}</span>
              </div>
            )}
          </div>

          <div className="p-5 text-left">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-medium tracking-tight text-white">
                {UI_COPY.about.heading[lang]}
              </h2>
              <ChaletLogoIcon className="w-8 h-8 text-white/95 shrink-0" />
            </div>

            <p className="mt-3 text-sm font-light leading-relaxed text-white/80 line-clamp-3">
              {UI_COPY.about.paragraphs[0][lang]}
            </p>

            <button
              type="button"
              onClick={() => setMobileModal('about')}
              className="mt-4 w-full rounded-xl bg-white/[0.08] border border-white/20 px-4 py-3 flex items-center justify-center gap-2 text-xs font-medium text-white/90 hover:text-[#55b9b1] hover:border-[#55b9b1]/70 hover:bg-white/[0.14] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#55b9b1]"
            >
              <span>{UI_COPY.mobileActions.readMore[lang]}</span>
              <ArrowUpRight className="w-4 h-4 shrink-0" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </section>

      {/* 4. Gallery Glass Window (Scroll Target for Gallery) */}
      <section
        id="gallery"
        ref={gallerySectionRef}
        aria-label={UI_COPY.gallery.heading[lang]}
        className="w-full max-w-[980px] glass-surface glass-surface-hover rounded-2xl p-5 sm:p-8 md:p-10 mb-14 scroll-mt-8"
      >
        <div className="flex items-center justify-between gap-4 pb-5 md:pb-6 border-b border-white/15">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
            {UI_COPY.gallery.heading[lang]}
          </h2>
          <ChaletLogoIcon className="w-8 h-8 sm:w-9 sm:h-9 text-white/95 shrink-0" />
        </div>

        {/* Desktop Gallery (Unchanged: 6 per page + pagination arrows) */}
        <div className="hidden md:block">
          <div className="mt-6 grid grid-cols-3 gap-4">
            {visibleGalleryPhotos.map((photo, index) => {
              const globalIndex = galleryPageStart + index;
              return (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => setLightboxIndex(globalIndex)}
                  aria-label={`${UI_COPY.gallery.openPrefix[lang]} ${globalIndex + 1}`}
                  className="group relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-white/20 bg-[#131b16] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#55b9b1] cursor-pointer"
                >
                  <img
                    src={photo.src}
                    alt={`${UI_COPY.gallery.photoAltPrefix[lang]} ${globalIndex + 1}`}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </button>
              );
            })}
          </div>

          {TOTAL_GALLERY_PAGES > 1 && (
            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() =>
                  setGalleryPage((prev) => (prev - 1 + TOTAL_GALLERY_PAGES) % TOTAL_GALLERY_PAGES)
                }
                aria-label={UI_COPY.gallery.prevPage[lang]}
                className="h-10 w-10 rounded-full bg-white/[0.08] border border-white/20 flex items-center justify-center text-white/90 hover:text-[#55b9b1] hover:border-[#55b9b1]/70 hover:bg-white/[0.14] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#55b9b1]"
              >
                <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: TOTAL_GALLERY_PAGES }).map((_, pageIdx) => {
                  const isCurrent = galleryPage === pageIdx;
                  return (
                    <button
                      key={pageIdx}
                      type="button"
                      onClick={() => setGalleryPage(pageIdx)}
                      aria-label={`${UI_COPY.gallery.pageAriaPrefix[lang]} ${pageIdx + 1}`}
                      aria-current={isCurrent ? 'page' : undefined}
                      className={`h-2 rounded-full transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#55b9b1] ${
                        isCurrent
                          ? 'w-6 bg-[#55b9b1]'
                          : 'w-2 bg-white/30 hover:bg-white/55'
                      }`}
                    />
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => setGalleryPage((prev) => (prev + 1) % TOTAL_GALLERY_PAGES)}
                aria-label={UI_COPY.gallery.nextPage[lang]}
                className="h-10 w-10 rounded-full bg-white/[0.08] border border-white/20 flex items-center justify-center text-white/90 hover:text-[#55b9b1] hover:border-[#55b9b1]/70 hover:bg-white/[0.14] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#55b9b1]"
              >
                <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>
          )}
        </div>

        {/* Mobile-Only Gallery: Only 2 Photos + Open Full Gallery Modal Button */}
        <div className="md:hidden">
          <div className="mt-5 grid grid-cols-2 gap-3">
            {GALLERY_PHOTOS.slice(0, 2).map((photo, index) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => setLightboxIndex(index)}
                aria-label={`${UI_COPY.gallery.openPrefix[lang]} ${index + 1}`}
                className="group relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-white/20 bg-[#131b16] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#55b9b1] cursor-pointer"
              >
                <img
                  src={photo.src}
                  alt={`${UI_COPY.gallery.photoAltPrefix[lang]} ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setMobileModal('gallery')}
            className="mt-4 w-full rounded-xl bg-white/[0.08] border border-white/20 px-4 py-3 flex items-center justify-center gap-2 text-xs font-medium text-white/90 hover:text-[#55b9b1] hover:border-[#55b9b1]/70 hover:bg-white/[0.14] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#55b9b1]"
          >
            <span>{UI_COPY.mobileActions.viewAllPhotos[lang]}</span>
            <ArrowUpRight className="w-4 h-4 shrink-0" strokeWidth={1.5} />
          </button>
        </div>
      </section>

      {/* 5. Menu Glass Window (Scroll Target for Menu) */}
      <section
        id="menu"
        ref={menuSectionRef}
        aria-label={UI_COPY.menu.heading[lang]}
        className="w-full max-w-[980px] glass-surface glass-surface-hover rounded-2xl p-5 sm:p-8 md:p-10 mb-14 scroll-mt-8"
      >
        <div className="flex items-center justify-between gap-4 pb-5 md:pb-6 border-b border-white/15">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
            {UI_COPY.menu.heading[lang]}
          </h2>
          <ChaletLogoIcon className="w-8 h-8 sm:w-9 sm:h-9 text-white/95 shrink-0" />
        </div>

        {/* Desktop Menu Layout (Unchanged: 5+5 preview items + modal buttons) */}
        <div className="hidden md:grid mt-7 md:grid-cols-2 gap-10">
          {/* Buffet / Fourchette Menu (First 5 Preview Items) */}
          <div className="pr-8 border-r border-white/15 flex flex-col">
            <div className="pb-3.5 border-b border-white/15">
              <h3 className="text-xl font-medium text-white">
                {UI_COPY.menu.buffetHeading[lang]}
              </h3>
            </div>

            <ul className="divide-y divide-white/10">
              {BUFFET_MENU_ITEMS.slice(0, 5).map((item) => (
                <li key={item.id} className="py-4">
                  <p className="text-[15px] font-medium text-white leading-snug">
                    {item.name[lang]}
                  </p>
                  <p className="mt-1 text-[13px] font-light text-white/70 leading-relaxed">
                    {item.description[lang]}
                  </p>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => setOpenMenuModal('buffet')}
              className="mt-4 w-full rounded-xl bg-white/[0.08] border border-white/20 px-4 py-3 flex items-center justify-center gap-2 text-sm font-medium text-white/90 hover:text-[#55b9b1] hover:border-[#55b9b1]/70 hover:bg-white/[0.14] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#55b9b1]"
            >
              <span>{UI_COPY.menu.viewFullMenu[lang]}</span>
              <ArrowUpRight className="w-4 h-4 shrink-0" strokeWidth={1.5} />
            </button>
          </div>

          {/* Sweet / Dessert Menu (First 5 Preview Items) */}
          <div className="flex flex-col">
            <div className="pb-3.5 border-b border-white/15">
              <h3 className="text-xl font-medium text-white">
                {UI_COPY.menu.sweetHeading[lang]}
              </h3>
            </div>

            <ul className="divide-y divide-white/10">
              {SWEET_MENU_ITEMS.slice(0, 5).map((item) => (
                <li key={item.id} className="py-4">
                  <p className="text-[15px] font-medium text-white leading-snug">
                    {item.name[lang]}
                  </p>
                  <p className="mt-1 text-[13px] font-light text-white/70 leading-relaxed">
                    {item.description[lang]}
                  </p>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => setOpenMenuModal('sweet')}
              className="mt-4 w-full rounded-xl bg-white/[0.08] border border-white/20 px-4 py-3 flex items-center justify-center gap-2 text-sm font-medium text-white/90 hover:text-[#55b9b1] hover:border-[#55b9b1]/70 hover:bg-white/[0.14] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#55b9b1]"
            >
              <span>{UI_COPY.menu.viewFullMenu[lang]}</span>
              <ArrowUpRight className="w-4 h-4 shrink-0" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Mobile-Only Compact Menu Preview + Modal Open Buttons */}
        <div className="md:hidden mt-5 space-y-5">
          <div className="rounded-xl bg-white/[0.05] border border-white/15 p-4">
            <h3 className="text-base font-medium text-white pb-2.5 border-b border-white/15">
              {UI_COPY.menu.buffetHeading[lang]}
            </h3>
            <ul className="divide-y divide-white/10">
              {BUFFET_MENU_ITEMS.slice(0, 2).map((item) => (
                <li key={item.id} className="py-2.5">
                  <p className="text-sm font-medium text-white leading-snug">{item.name[lang]}</p>
                  <p className="mt-0.5 text-xs font-light text-white/70 line-clamp-1">
                    {item.description[lang]}
                  </p>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => setOpenMenuModal('buffet')}
              className="mt-3 w-full rounded-xl bg-white/[0.08] border border-white/20 px-4 py-2.5 flex items-center justify-center gap-2 text-xs font-medium text-white/90 hover:text-[#55b9b1] hover:border-[#55b9b1]/70 transition-colors cursor-pointer"
            >
              <span>{UI_COPY.menu.viewFullMenu[lang]}</span>
              <ArrowUpRight className="w-4 h-4 shrink-0" strokeWidth={1.5} />
            </button>
          </div>

          <div className="rounded-xl bg-white/[0.05] border border-white/15 p-4">
            <h3 className="text-base font-medium text-white pb-2.5 border-b border-white/15">
              {UI_COPY.menu.sweetHeading[lang]}
            </h3>
            <ul className="divide-y divide-white/10">
              {SWEET_MENU_ITEMS.slice(0, 2).map((item) => (
                <li key={item.id} className="py-2.5">
                  <p className="text-sm font-medium text-white leading-snug">{item.name[lang]}</p>
                  <p className="mt-0.5 text-xs font-light text-white/70 line-clamp-1">
                    {item.description[lang]}
                  </p>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => setOpenMenuModal('sweet')}
              className="mt-3 w-full rounded-xl bg-white/[0.08] border border-white/20 px-4 py-2.5 flex items-center justify-center gap-2 text-xs font-medium text-white/90 hover:text-[#55b9b1] hover:border-[#55b9b1]/70 transition-colors cursor-pointer"
            >
              <span>{UI_COPY.menu.viewFullMenu[lang]}</span>
              <ArrowUpRight className="w-4 h-4 shrink-0" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </section>

      {/* 6. FAQ Glass Window (Scroll Target for FAQ) */}
      <section
        id="faq"
        ref={faqSectionRef}
        aria-label={UI_COPY.faq.heading[lang]}
        className="w-full max-w-[980px] glass-surface glass-surface-hover rounded-2xl p-5 sm:p-8 md:p-10 mb-14 scroll-mt-8"
      >
        <div className="flex items-center justify-between gap-4 pb-5 md:pb-6 border-b border-white/15">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
            {UI_COPY.faq.heading[lang]}
          </h2>
          <ChaletLogoIcon className="w-8 h-8 sm:w-9 sm:h-9 text-white/95 shrink-0" />
        </div>

        {/* Desktop FAQ (Unchanged: full 6-item accordion) */}
        <div className="hidden md:block divide-y divide-white/15">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openFaqId === item.id;
            return (
              <div key={item.id}>
                <button
                  type="button"
                  onClick={() => setOpenFaqId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  className="w-full py-5 flex items-center justify-between gap-4 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#55b9b1] rounded-lg"
                >
                  <span
                    className={`text-base font-medium leading-snug transition-colors ${
                      isOpen ? 'text-[#55b9b1]' : 'text-white hover:text-white/90'
                    }`}
                  >
                    {item.question[lang]}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#55b9b1]' : 'text-white/60'
                    }`}
                    strokeWidth={1.5}
                  />
                </button>
                {isOpen && (
                  <p className="pb-5 pr-8 text-sm font-light leading-relaxed text-white/80">
                    {item.answer[lang]}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile-Only Compact FAQ Preview + Open Modal Button */}
        <div className="md:hidden">
          <div className="divide-y divide-white/15">
            {FAQ_ITEMS.slice(0, 2).map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setOpenFaqId(item.id);
                  setMobileModal('faq');
                }}
                className="w-full py-3.5 flex items-center justify-between gap-3 text-left cursor-pointer"
              >
                <span className="text-sm font-medium text-white/95 leading-snug">
                  {item.question[lang]}
                </span>
                <ChevronRight className="w-4 h-4 text-[#55b9b1] shrink-0" strokeWidth={1.5} />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setMobileModal('faq')}
            className="mt-3 w-full rounded-xl bg-white/[0.08] border border-white/20 px-4 py-3 flex items-center justify-center gap-2 text-xs font-medium text-white/90 hover:text-[#55b9b1] hover:border-[#55b9b1]/70 hover:bg-white/[0.14] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#55b9b1]"
          >
            <span>{UI_COPY.mobileActions.viewAllFaq[lang]}</span>
            <ArrowUpRight className="w-4 h-4 shrink-0" strokeWidth={1.5} />
          </button>
        </div>
      </section>

      {/* 7. Contact Glass Window (Scroll Target for Contact) */}
      <section
        id="contact"
        ref={contactSectionRef}
        aria-label={UI_COPY.contact.heading[lang]}
        className="w-full max-w-[980px] glass-surface glass-surface-hover rounded-2xl p-5 sm:p-8 md:p-10 mb-14 scroll-mt-8"
      >
        <div className="flex items-center justify-between gap-4 pb-5 md:pb-6 border-b border-white/15">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
            {UI_COPY.contact.heading[lang]}
          </h2>
          <ChaletLogoIcon className="w-8 h-8 sm:w-9 sm:h-9 text-white/95 shrink-0" />
        </div>

        {/* Desktop Contact Layout (Unchanged) */}
        <div className="hidden md:grid mt-7 md:grid-cols-2 gap-10">
          {/* Left Column: Phone & Location */}
          <div className="flex flex-col justify-between gap-4 pr-8 border-r border-white/15">
            {/* Phone Number Row */}
            <div className="flex items-center justify-between gap-3 rounded-xl bg-white/[0.06] border border-white/15 px-4 py-4 transition-colors hover:border-[#55b9b1]/60 hover:bg-white/[0.1]">
              <a
                href={CONTACT_LINKS.phoneHref}
                className="flex items-center gap-3.5 min-w-0 flex-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#55b9b1] rounded-lg"
              >
                <span className="h-11 w-11 rounded-xl bg-[#55b9b1]/15 border border-[#55b9b1]/35 flex items-center justify-center text-[#55b9b1] shrink-0">
                  <Phone className="w-5 h-5" strokeWidth={1.5} />
                </span>
                <div className="min-w-0 font-contact-title">
                  <span className="block text-xs font-light text-white/65">
                    {UI_COPY.contact.phoneLabel[lang]}
                  </span>
                  <span className="mt-0.5 block text-lg font-medium text-white tabular-nums tracking-wide truncate">
                    {CONTACT_LINKS.phoneDisplay}
                  </span>
                </div>
              </a>

              <button
                type="button"
                onClick={handleCopyPhone}
                aria-label={UI_COPY.contact.copyPhoneAria[lang]}
                className="h-9 w-9 rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                {copiedPhone ? (
                  <Check className="w-4 h-4 text-[#55b9b1]" strokeWidth={1.8} />
                ) : (
                  <Copy className="w-4 h-4" strokeWidth={1.5} />
                )}
              </button>
            </div>

            {/* Location Link Row */}
            <a
              href={CONTACT_LINKS.locationHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 rounded-xl bg-white/[0.06] border border-white/15 px-4 py-4 transition-colors hover:border-[#55b9b1]/60 hover:bg-white/[0.1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#55b9b1]"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <span className="h-11 w-11 rounded-xl bg-[#55b9b1]/15 border border-[#55b9b1]/35 flex items-center justify-center text-[#55b9b1] shrink-0">
                  <MapPin className="w-5 h-5" strokeWidth={1.5} />
                </span>
                <div className="min-w-0 font-contact-title">
                  <span className="block text-xs font-light text-white/65">
                    {UI_COPY.contact.locationEyebrow[lang]}
                  </span>
                  <span className="mt-0.5 block text-base font-medium text-white truncate">
                    {UI_COPY.contact.locationTitle[lang]}
                  </span>
                  <span className="block text-xs font-light text-[#55b9b1]">
                    {UI_COPY.contact.locationAction[lang]}
                  </span>
                </div>
              </div>
              <ArrowUpRight
                className="w-4 h-4 text-white/60 group-hover:text-[#55b9b1] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                strokeWidth={1.5}
              />
            </a>
          </div>

          {/* Right Column: Social Networks (FB, Instagram, TikTok, WhatsApp) */}
          <div>
            <p className="text-xs font-light tracking-wide text-white/65 mb-3.5">
              {UI_COPY.contact.socialsLabel[lang]}
            </p>
            <div className="grid grid-cols-2 gap-3">
              {SOCIAL_ITEMS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group flex items-center justify-between gap-2.5 rounded-xl bg-white/[0.06] border border-white/15 px-4 py-3.5 transition-colors hover:border-[#55b9b1]/60 hover:bg-white/[0.1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#55b9b1]"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <Icon className="w-5 h-5 text-white/90 group-hover:text-[#55b9b1] transition-colors shrink-0" />
                      <div className="min-w-0 font-contact-title">
                        <span className="block text-sm font-medium text-white leading-tight truncate">
                          {social.label}
                        </span>
                        <span className="mt-0.5 block text-[11px] font-light text-white/60 truncate">
                          {UI_COPY.contact.socialHandles[social.id][lang]}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight
                      className="w-3.5 h-3.5 text-white/45 group-hover:text-[#55b9b1] transition-colors shrink-0"
                      strokeWidth={1.5}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile-Only Compact Contact Preview + Open Modal Button */}
        <div className="md:hidden mt-5 space-y-3.5">
          <a
            href={CONTACT_LINKS.phoneHref}
            className="flex items-center gap-3.5 rounded-xl bg-white/[0.06] border border-white/15 px-4 py-3.5"
          >
            <span className="h-10 w-10 rounded-xl bg-[#55b9b1]/15 border border-[#55b9b1]/35 flex items-center justify-center text-[#55b9b1] shrink-0">
              <Phone className="w-4 h-4" strokeWidth={1.5} />
            </span>
            <div className="min-w-0">
              <span className="block text-[11px] font-light text-white/65">
                {UI_COPY.contact.phoneLabel[lang]}
              </span>
              <span className="mt-0.5 block text-base font-medium text-white tabular-nums tracking-wide truncate">
                {CONTACT_LINKS.phoneDisplay}
              </span>
            </div>
          </a>

          <button
            type="button"
            onClick={() => setMobileModal('contact')}
            className="w-full rounded-xl bg-white/[0.08] border border-white/20 px-4 py-3 flex items-center justify-center gap-2 text-xs font-medium text-white/90 hover:text-[#55b9b1] hover:border-[#55b9b1]/70 hover:bg-white/[0.14] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#55b9b1]"
          >
            <span>{UI_COPY.mobileActions.viewAllContact[lang]}</span>
            <ArrowUpRight className="w-4 h-4 shrink-0" strokeWidth={1.5} />
          </button>
        </div>
      </section>

      {/* Subtle Footer Attribution */}
      <footer className="mt-auto text-center text-[11px] font-light tracking-[0.14em] text-white/50 uppercase">
        Chalet Bulachauri · Created By Circle
      </footer>

      {/* Frosted Glass Lightbox Viewer (Viewport-Safe on Mobile & Desktop) */}
      {activeLightboxPhoto && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${UI_COPY.gallery.photoAltPrefix[lang]} ${lightboxIndex + 1}`}
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[92vw] sm:max-w-xl max-h-[82dvh] glass-surface rounded-2xl overflow-hidden flex items-center justify-center"
          >
            <div className="relative aspect-[4/3] w-full max-h-[82dvh] bg-[#131b16]">
              <img
                src={activeLightboxPhoto.src}
                alt={`${UI_COPY.gallery.photoAltPrefix[lang]} ${lightboxIndex + 1}`}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />

              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                aria-label={UI_COPY.gallery.close[lang]}
                className="absolute top-3 right-3 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-black/55 backdrop-blur-md border border-white/25 flex items-center justify-center text-white hover:bg-black/75 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" strokeWidth={1.5} />
              </button>

              {GALLERY_PHOTOS.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIndex(
                        (lightboxIndex - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length
                      )
                    }
                    aria-label={UI_COPY.gallery.prev[lang]}
                    className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-black/55 backdrop-blur-md border border-white/25 flex items-center justify-center text-white hover:bg-black/75 transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setLightboxIndex((lightboxIndex + 1) % GALLERY_PHOTOS.length)}
                    aria-label={UI_COPY.gallery.next[lang]}
                    className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-black/55 backdrop-blur-md border border-white/25 flex items-center justify-center text-white hover:bg-black/75 transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Full Menu Frosted Glass Modal (Viewport-Safe on Mobile & Desktop) */}
      {openMenuModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={
            openMenuModal === 'buffet'
              ? UI_COPY.menu.buffetHeading[lang]
              : UI_COPY.menu.sweetHeading[lang]
          }
          onClick={() => setOpenMenuModal(null)}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[92vw] sm:max-w-xl max-h-[82dvh] glass-surface rounded-2xl overflow-hidden flex flex-col"
          >
            <div className="px-5 sm:px-6 py-4 sm:py-5 border-b border-white/15 flex items-center justify-between gap-4 shrink-0">
              <div className="flex items-center gap-3 min-w-0">
                <ChaletLogoIcon className="w-6 h-6 text-[#55b9b1] shrink-0" />
                <h3 className="text-base sm:text-xl font-medium text-white truncate">
                  {openMenuModal === 'buffet'
                    ? UI_COPY.menu.buffetHeading[lang]
                    : UI_COPY.menu.sweetHeading[lang]}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setOpenMenuModal(null)}
                aria-label={UI_COPY.menu.closeModal[lang]}
                className="h-9 w-9 rounded-full bg-white/[0.08] border border-white/20 flex items-center justify-center text-white hover:text-[#55b9b1] hover:border-[#55b9b1]/70 transition-colors shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#55b9b1]"
              >
                <X className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </div>

            <div className="overflow-y-auto glass-scroll px-5 sm:px-6 py-2">
              <ul className="divide-y divide-white/10">
                {(openMenuModal === 'buffet' ? BUFFET_MENU_ITEMS : SWEET_MENU_ITEMS).map(
                  (item) => (
                    <li key={item.id} className="py-3.5">
                      <p className="text-sm sm:text-[15px] font-medium text-white leading-snug">
                        {item.name[lang]}
                      </p>
                      <p className="mt-1 text-xs sm:text-[13px] font-light text-white/70 leading-relaxed">
                        {item.description[lang]}
                      </p>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Mobile-Only Expanded Section Modal (Viewport-Safe) */}
      {mobileModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={
            mobileModal === 'about'
              ? UI_COPY.about.heading[lang]
              : mobileModal === 'gallery'
                ? UI_COPY.gallery.heading[lang]
                : mobileModal === 'faq'
                  ? UI_COPY.faq.heading[lang]
                  : UI_COPY.contact.heading[lang]
          }
          onClick={() => setMobileModal(null)}
          className="md:hidden fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-3"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[92vw] max-h-[82dvh] glass-surface rounded-2xl overflow-hidden flex flex-col"
          >
            {/* Modal Header */}
            <div className="px-5 py-4 border-b border-white/15 flex items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-2.5 min-w-0">
                <ChaletLogoIcon className="w-6 h-6 text-[#55b9b1] shrink-0" />
                <h3 className="text-lg font-medium text-white truncate">
                  {mobileModal === 'about'
                    ? UI_COPY.about.heading[lang]
                    : mobileModal === 'gallery'
                      ? UI_COPY.gallery.heading[lang]
                      : mobileModal === 'faq'
                        ? UI_COPY.faq.heading[lang]
                        : UI_COPY.contact.heading[lang]}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setMobileModal(null)}
                aria-label={UI_COPY.mobileActions.close[lang]}
                className="h-9 w-9 rounded-full bg-white/[0.08] border border-white/20 flex items-center justify-center text-white hover:text-[#55b9b1] hover:border-[#55b9b1]/70 transition-colors shrink-0 cursor-pointer"
              >
                <X className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="overflow-y-auto glass-scroll p-5">
              {mobileModal === 'about' && (
                <div className="space-y-4 text-left">
                  <div className="aspect-[4/3] w-full rounded-xl overflow-hidden border border-white/15 bg-[#131b16]">
                    <img
                      src={chaletAboutImg}
                      alt={UI_COPY.about.photoAlt[lang]}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover object-[center_68%]"
                    />
                  </div>
                  <div className="space-y-3.5 text-sm font-light leading-relaxed text-white/85">
                    {UI_COPY.about.paragraphs.map((paragraph, index) => (
                      <p key={index}>{paragraph[lang]}</p>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-white/15">
                    <p className="text-xs font-medium tracking-wide text-[#55b9b1]">
                      {UI_COPY.about.tagline[lang]}
                    </p>
                  </div>
                </div>
              )}

              {mobileModal === 'gallery' && (
                <div className="grid grid-cols-2 gap-2.5">
                  {GALLERY_PHOTOS.map((photo, index) => (
                    <button
                      key={photo.id}
                      type="button"
                      onClick={() => setLightboxIndex(index)}
                      aria-label={`${UI_COPY.gallery.openPrefix[lang]} ${index + 1}`}
                      className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-white/20 bg-[#131b16] cursor-pointer"
                    >
                      <img
                        src={photo.src}
                        alt={`${UI_COPY.gallery.photoAltPrefix[lang]} ${index + 1}`}
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover object-center"
                      />
                    </button>
                  ))}
                </div>
              )}

              {mobileModal === 'faq' && (
                <div className="divide-y divide-white/15">
                  {FAQ_ITEMS.map((item) => {
                    const isOpen = openFaqId === item.id;
                    return (
                      <div key={item.id}>
                        <button
                          type="button"
                          onClick={() => setOpenFaqId(isOpen ? null : item.id)}
                          aria-expanded={isOpen}
                          className="w-full py-4 flex items-center justify-between gap-3 text-left cursor-pointer"
                        >
                          <span
                            className={`text-sm font-medium leading-snug transition-colors ${
                              isOpen ? 'text-[#55b9b1]' : 'text-white'
                            }`}
                          >
                            {item.question[lang]}
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                              isOpen ? 'rotate-180 text-[#55b9b1]' : 'text-white/60'
                            }`}
                            strokeWidth={1.5}
                          />
                        </button>
                        {isOpen && (
                          <p className="pb-4 text-xs font-light leading-relaxed text-white/80">
                            {item.answer[lang]}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {mobileModal === 'contact' && (
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between gap-3 rounded-xl bg-white/[0.06] border border-white/15 px-3.5 py-3.5">
                    <a
                      href={CONTACT_LINKS.phoneHref}
                      className="flex items-center gap-3 min-w-0 flex-1"
                    >
                      <span className="h-10 w-10 rounded-xl bg-[#55b9b1]/15 border border-[#55b9b1]/35 flex items-center justify-center text-[#55b9b1] shrink-0">
                        <Phone className="w-4 h-4" strokeWidth={1.5} />
                      </span>
                      <div className="min-w-0">
                        <span className="block text-[11px] font-light text-white/65">
                          {UI_COPY.contact.phoneLabel[lang]}
                        </span>
                        <span className="mt-0.5 block text-base font-medium text-white tabular-nums tracking-wide truncate">
                          {CONTACT_LINKS.phoneDisplay}
                        </span>
                      </div>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyPhone}
                      aria-label={UI_COPY.contact.copyPhoneAria[lang]}
                      className="h-9 w-9 rounded-lg flex items-center justify-center text-white/75 hover:text-white hover:bg-white/10 transition-colors shrink-0 cursor-pointer"
                    >
                      {copiedPhone ? (
                        <Check className="w-4 h-4 text-[#55b9b1]" strokeWidth={1.8} />
                      ) : (
                        <Copy className="w-4 h-4" strokeWidth={1.5} />
                      )}
                    </button>
                  </div>

                  <a
                    href={CONTACT_LINKS.locationHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 rounded-xl bg-white/[0.06] border border-white/15 px-3.5 py-3.5"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="h-10 w-10 rounded-xl bg-[#55b9b1]/15 border border-[#55b9b1]/35 flex items-center justify-center text-[#55b9b1] shrink-0">
                        <MapPin className="w-4 h-4" strokeWidth={1.5} />
                      </span>
                      <div className="min-w-0">
                        <span className="block text-[11px] font-light text-white/65">
                          {UI_COPY.contact.locationEyebrow[lang]}
                        </span>
                        <span className="mt-0.5 block text-sm font-medium text-white truncate">
                          {UI_COPY.contact.locationTitle[lang]}
                        </span>
                        <span className="block text-xs font-light text-[#55b9b1]">
                          {UI_COPY.contact.locationAction[lang]}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-white/60 shrink-0" strokeWidth={1.5} />
                  </a>

                  <div className="pt-1">
                    <p className="text-xs font-light tracking-wide text-white/65 mb-2.5">
                      {UI_COPY.contact.socialsLabel[lang]}
                    </p>
                    <div className="grid grid-cols-2 gap-2.5">
                      {SOCIAL_ITEMS.map((social) => {
                        const Icon = social.icon;
                        return (
                          <a
                            key={social.id}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className="flex items-center justify-between gap-2 rounded-xl bg-white/[0.06] border border-white/15 px-3 py-3"
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <Icon className="w-4 h-4 text-white/90 shrink-0" />
                              <div className="min-w-0">
                                <span className="block text-xs font-medium text-white leading-tight truncate">
                                  {social.label}
                                </span>
                                <span className="mt-0.5 block text-[10px] font-light text-white/60 truncate">
                                  {UI_COPY.contact.socialHandles[social.id][lang]}
                                </span>
                              </div>
                            </div>
                            <ArrowUpRight
                              className="w-3.5 h-3.5 text-white/45 shrink-0"
                              strokeWidth={1.5}
                            />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
