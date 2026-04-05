import React from 'react';
import { SearchBar } from './SearchBar';

interface HeroSectionProps {
  onSearch?: (query: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSearch }) => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-[rgb(44,44,44)]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600"
          alt="Luxury home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 md:px-8 lg:px-20 text-center py-20">
        {/* Headline */}
        <h1
          className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-semibold text-white uppercase mb-4"
          style={{ fontFamily: 'Geist, sans-serif' }}
        >
          Discover Your
          <br />
          <span className="text-[rgb(102,252,117)]">Perfect Home</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-[16px] sm:text-[18px] text-white/80 font-light mb-8 max-w-[600px] mx-auto"
          style={{ fontFamily: 'Geist, sans-serif' }}
        >
          Explore our curated collection of luxury properties in Los Angeles most prestigious neighborhoods
        </p>

        {/* Search Bar */}
        <div className="mb-12">
          <SearchBar onSearch={onSearch} />
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          <div className="text-center">
            <p
              className="text-[28px] sm:text-[32px] font-semibold text-white"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              500+
            </p>
            <p
              className="text-[14px] text-white/60 font-light"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              Properties
            </p>
          </div>
          <div className="w-px h-12 bg-white/20 hidden md:block" />
          <div className="text-center">
            <p
              className="text-[28px] sm:text-[32px] font-semibold text-white"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              50+
            </p>
            <p
              className="text-[14px] text-white/60 font-light"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              Locations
            </p>
          </div>
          <div className="w-px h-12 bg-white/20 hidden md:block" />
          <div className="text-center">
            <p
              className="text-[28px] sm:text-[32px] font-semibold text-white"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              10k+
            </p>
            <p
              className="text-[14px] text-white/60 font-light"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              Happy Clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
