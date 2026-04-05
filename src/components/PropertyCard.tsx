import React from 'react';
import { Property, formatPrice, getPropertyTypeLabel } from '../data/properties';

interface PropertyCardProps {
  property: Property;
  onClick?: (id: string) => void;
  viewMode?: 'grid' | 'list';
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, onClick, viewMode = 'grid' }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(property.id);
    }
  };

  // Grid View (Vertical Card)
  if (viewMode === 'grid') {
    return (
      <div
        onClick={handleClick}
        className="group cursor-pointer bg-white rounded-4xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full flex flex-col"
        style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}
      >
        {/* Image Container - NO TAGS */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-t-4xl flex-shrink-0">
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          {/* Property Name */}
          <h3
            className="font-semibold text-[20px] text-[rgb(44,44,44)] mb-2 line-clamp-1"
            style={{ fontFamily: 'Geist, sans-serif' }}
          >
            {property.name}
          </h3>

          {/* Project Name */}
          <p
            className="text-[14px] text-[rgb(136,136,136)] font-light mb-2 line-clamp-1"
            style={{ fontFamily: 'Geist, sans-serif' }}
          >
            {property.projectName}
          </p>

          {/* Location */}
          <div className="flex items-center gap-1 mb-3">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgb(44,44,44)"
              strokeWidth="2"
              className="flex-shrink-0"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span
              className="text-[14px] text-[rgb(44,44,44)] font-light line-clamp-1"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              {property.location}
            </span>
          </div>

          {/* Specs */}
          <div className="flex items-center gap-3 text-[rgb(136,136,136)] text-[14px] mb-4">
            <span className="font-light" style={{ fontFamily: 'Geist, sans-serif' }}>
              {getPropertyTypeLabel(property.propertyType)}
            </span>
            <span className="text-[rgb(199,199,199)]">•</span>
            <span className="font-light" style={{ fontFamily: 'Geist, sans-serif' }}>
              {property.spaceSqm} m²
            </span>
            <span className="text-[rgb(199,199,199)]">•</span>
            <span className="font-light" style={{ fontFamily: 'Geist, sans-serif' }}>
              {property.beds} Beds
            </span>
            <span className="text-[rgb(199,199,199)]">•</span>
            <span className="font-light" style={{ fontFamily: 'Geist, sans-serif' }}>
              {property.baths} Baths
            </span>
          </div>

          {/* Price and Button Row - Push to bottom */}
          <div className="flex items-center justify-between mt-auto">
            <span
              className="font-semibold text-[18px] text-[rgb(44,44,44)]"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              {formatPrice(property.price)}
            </span>
            
            {/* View Details Button - appears on hover */}
            <span
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[14px] font-light text-[rgb(136,136,136)]"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              View Details →
            </span>
          </div>
        </div>
      </div>
    );
  }

  // List View (Horizontal Card - FIXED HEIGHT)
  return (
    <div
      onClick={handleClick}
      className="group cursor-pointer bg-white rounded-4xl overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-row h-[170px] sm:h-[160px] md:h-[180px]"
      style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}
    >
      {/* Image Container - Mobile takes more space */}
      <div className="relative w-[45%] sm:w-[35%] h-full overflow-hidden flex-shrink-0">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-l-4xl"
        />
      </div>

      {/* Content - Adaptive padding and spacing */}
      <div className="p-3 sm:p-4 md:p-5 flex-1 flex flex-col min-w-0 justify-between">
        
        {/* Top Section - Property Info */}
        <div className="min-w-0">
          {/* Property Name - Most important, always visible */}
          <h3
            className="font-semibold text-[13px] sm:text-[15px] md:text-[20px] text-[rgb(44,44,44)] leading-snug truncate"
            style={{ fontFamily: 'Geist, sans-serif' }}
          >
            {property.name}
          </h3>

          {/* Project Name - Hidden on very small screens */}
          <p
            className="text-[11px] sm:text-[12px] md:text-[14px] text-[rgb(136,136,136)] font-light mt-0.5 sm:mt-1 truncate hidden sm:block"
            style={{ fontFamily: 'Geist, sans-serif' }}
          >
            {property.projectName}
          </p>

          {/* Specs Row - Compact on mobile */}
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 text-[rgb(136,136,136)] text-[10px] sm:text-[12px] md:text-[14px] mt-1 sm:mt-2">
            <span 
              className="font-light bg-[rgb(243,243,243)] px-1.5 py-0.5 rounded sm:bg-transparent sm:px-0 sm:py-0 whitespace-nowrap"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              {getPropertyTypeLabel(property.propertyType)}
            </span>
            <span className="text-[rgb(199,199,199)] hidden sm:inline">•</span>
            <span className="font-light whitespace-nowrap" style={{ fontFamily: 'Geist, sans-serif' }}>
              {property.spaceSqm}m²
            </span>
            <span className="text-[rgb(199,199,199)] hidden md:inline">•</span>
            <span className="font-light hidden md:inline whitespace-nowrap" style={{ fontFamily: 'Geist, sans-serif' }}>
              {property.beds} Beds
            </span>
          </div>
        </div>

        {/* Bottom Section - Price and Action */}
        <div className="flex items-end justify-between mt-1 sm:mt-2">
          <span
            className="font-semibold text-[14px] sm:text-[16px] md:text-[20px] text-[rgb(44,44,44)] truncate pr-2"
            style={{ fontFamily: 'Geist, sans-serif' }}
          >
            {formatPrice(property.price)}
          </span>
          
          <span
            className="text-[11px] sm:text-[13px] md:text-[14px] font-light text-[rgb(136,136,136)] group-hover:text-[rgb(44,44,44)] transition-colors whitespace-nowrap flex-shrink-0 bg-[rgb(243,243,243)] sm:bg-transparent px-2 py-1 sm:px-0 sm:py-0 rounded-full"
            style={{ fontFamily: 'Geist, sans-serif' }}
          >
            <span className="hidden sm:inline">View →</span>
            <span className="sm:hidden">→</span>
          </span>
        </div>
      </div>
    </div>
  );
};
