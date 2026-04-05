import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { PropertiesListing } from './pages/PropertiesListing';

// Navigation Component
const Navigation: React.FC = () => {
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

// Property Detail Page (Simplified version of original)
const PropertyDetail: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-20 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-[rgb(44,44,44)] hover:text-black transition-colors"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Properties
            </button>
            <div className="flex items-center gap-2">
              <img
                src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F8f47f6f46f13b18c94590c08695180a388e97844.png%3Fwidth=300&amp;height=209?generation=1775379090743841&amp;alt=media"
                alt="VistaHaven"
                className="w-10 h-10 object-contain"
              />
              <span
                className="font-semibold text-[20px] uppercase"
                style={{ fontFamily: 'Geist, sans-serif' }}
              >
                VistaHaven
              </span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-20 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Property Detail</h1>
          <p className="text-gray-600 mb-4">Full property details would show here</p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-black text-white rounded-full"
          >
            Back to All Properties
          </button>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const navigate = useNavigate();

  const handlePropertyClick = (id: string) => {
    navigate(`/property/${id}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navigation />
              <PropertiesListing onPropertyClick={handlePropertyClick} />
            </>
          }
        />
        <Route path="/property/:id" element={<PropertyDetail />} />
      </Routes>
    </div>
  );
}
