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

      {/* Content - 65% width */}
      <div className="p-3 sm:p-4 md:p-5 flex-1 flex flex-col justify-center min-w-0">
        {/* Property Name - Truncate */}
        <h3
          className="font-semibold text-[15px] sm:text-[18px] md:text-[20px] text-[rgb(44,44,44)] mb-1 truncate"
          style={{ fontFamily: 'Geist, sans-serif' }}
        >
          {property.name}
        </h3>

        {/* Project Name */}
        <p
          className="text-[12px] sm:text-[13px] md:text-[14px] text-[rgb(136,136,136)] font-light mb-1 truncate"
          style={{ fontFamily: 'Geist, sans-serif' }}
        >
          {property.projectName}
        </p>

        {/* Specs Row */}
        <div className="flex items-center gap-x-2 sm:gap-x-3 text-[rgb(136,136,136)] text-[11px] sm:text-[12px] md:text-[14px] mb-2">
          <span className="font-light" style={{ fontFamily: 'Geist, sans-serif' }}>
            {getPropertyTypeLabel(property.propertyType)}
          </span>
          <span className="text-[rgb(199,199,199)]">•</span>
          <span className="font-light" style={{ fontFamily: 'Geist, sans-serif' }}>
            {property.spaceSqm}m²
          </span>
          <span className="text-[rgb(199,199,199)] hidden sm:inline">•</span>
          <span className="font-light hidden sm:inline" style={{ fontFamily: 'Geist, sans-serif' }}>
            {property.beds} Beds
          </span>
        </div>

        {/* Price and Button Row - Push to bottom */}
        <div className="flex items-center justify-between mt-auto">
          <span
            className="font-semibold text-[15px] sm:text-[16px] md:text-[20px] text-[rgb(44,44,44)]"
            style={{ fontFamily: 'Geist, sans-serif' }}
          >
            {formatPrice(property.price)}
          </span>
          
          <span
            className="text-[12px] sm:text-[13px] md:text-[14px] font-light text-[rgb(136,136,136)] group-hover:text-[rgb(44,44,44)] transition-colors"
            style={{ fontFamily: 'Geist, sans-serif' }}
          >
            View →
          </span>
        </div>
      </div>
    </div>
  );
};
