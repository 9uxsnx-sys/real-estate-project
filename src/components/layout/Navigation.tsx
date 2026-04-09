import React, { useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const { lang } = useParams<{ lang: string }>();
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const currentLang = lang || 'en';
  const navRef = useRef<HTMLElement>(null);

  // Smart navigation - hide on scroll down, show on scroll up
  useEffect(() => {
    if (!navRef.current) return;

    const nav = navRef.current;
    let lastScroll = 0;

    const scrollTrigger = ScrollTrigger.create({
      start: 'top top',
      end: 'max',
      onUpdate: (self) => {
        const currentScroll = self.scroll();
        if (currentScroll > lastScroll && currentScroll > 100) {
          gsap.to(nav, { y: -100, duration: 0.3, ease: 'power2.inOut' });
        } else {
          gsap.to(nav, { y: 0, duration: 0.3, ease: 'power2.inOut' });
        }
        lastScroll = currentScroll;
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return (
    <nav ref={navRef} className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-white">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href={`/${currentLang}`}
            onClick={(e) => {
              e.preventDefault();
              navigate(`/${currentLang}`);
            }}
            className="flex items-center gap-2"
          >
            <img
              src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F8f47f6f46f13b18c94590c08695180a388e97844.png%3Fwidth=300&amp;height=209?generation=1775379090743841&amp;alt=media"
              alt="VistaHaven"
              className="w-10 h-10 object-contain"
            />
            <span
              className="font-semibold text-[20px] uppercase text-[rgb(44,44,44)]"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              VistaHaven
            </span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href={`/${currentLang}`}
              onClick={(e) => {
                e.preventDefault();
                navigate(`/${currentLang}`);
              }}
              className="text-[14px] font-light text-[rgb(44,44,44)] hover:text-[rgb(136,136,136)] transition-colors"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              {t('nav.properties')}
            </a>
            <a
              href={`/${currentLang}/projects`}
              onClick={(e) => {
                e.preventDefault();
                navigate(`/${currentLang}/projects`);
              }}
              className="text-[14px] font-light text-[rgb(44,44,44)] hover:text-[rgb(136,136,136)] transition-colors"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              {t('nav.projects')}
            </a>
            <a
              href="#contact"
              className="text-[14px] font-light text-[rgb(44,44,44)] hover:text-[rgb(136,136,136)] transition-colors"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              {t('nav.contact')}
            </a>
          </div>

          {/* Language Switcher - Desktop */}
          <div className="hidden md:flex items-center">
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white border-t border-[rgb(230,230,230)] py-4 px-4 md:hidden">
              <a
                href={`/${currentLang}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/${currentLang}`);
                  setMobileMenuOpen(false);
                }}
                className="block py-3 text-[16px] font-light text-[rgb(44,44,44)]"
                style={{ fontFamily: 'Geist, sans-serif' }}
              >
                {t('nav.properties')}
              </a>
              <a
                href={`/${currentLang}/projects`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/${currentLang}/projects`);
                  setMobileMenuOpen(false);
                }}
                className="block py-3 text-[16px] font-light text-[rgb(44,44,44)]"
                style={{ fontFamily: 'Geist, sans-serif' }}
              >
                {t('nav.projects')}
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-[16px] font-light text-[rgb(44,44,44)]"
                style={{ fontFamily: 'Geist, sans-serif' }}
              >
                {t('nav.contactMobile')}
              </a>
              {/* Language Switcher - Mobile */}
              <div className="py-3 border-t border-[rgb(230,230,230)] mt-3">
                <LanguageSwitcher />
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
