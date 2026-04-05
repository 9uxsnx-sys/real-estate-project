import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-white">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
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

          {/* Contact Button - Desktop */}
          <a
            href="#contact"
            className="hidden md:flex items-center gap-3 px-6 py-3 bg-black text-white rounded-full"
            style={{ fontFamily: 'Geist, sans-serif' }}
          >
            <span className="w-2 h-2 bg-[rgb(102,252,117)] rounded-full" />
            <span className="font-light">Contact Us Now</span>
          </a>
        </div>
      </div>
    </nav>
  );
};
