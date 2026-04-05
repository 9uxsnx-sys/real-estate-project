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
        className="group cursor-pointer bg-white rounded-4xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}
      >
        {/* Image Container - NO TAGS */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-t-4xl">
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Property Name */}
          <h3
            className="font-semibold text-[20px] text-[rgb(44,44,44)] mb-2"
            style={{ fontFamily: 'Geist, sans-serif' }}
          >
            {property.name}
          </h3>

          {/* Project Name */}
          <p
            className="text-[14px] text-[rgb(136,136,136)] font-light mb-2"
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
              className="text-[14px] text-[rgb(44,44,44)] font-light"
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

          {/* Price and Button Row */}
          <div className="flex items-center justify-between">
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

  // List View (Horizontal Card - مستطيل)
  return (
    <div
      onClick={handleClick}
      className="group cursor-pointer bg-white rounded-4xl overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-row"
      style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}
    >
      {/* Image Container - Left Side (40%) - NO TAGS */}
      <div className="relative w-[40%] min-h-[200px] overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-l-4xl"
        />
      </div>

      {/* Content - Right Side (60%) */}
      <div className="p-5 flex-1 flex flex-col justify-center">
        {/* Property Name */}
        <h3
          className="font-semibold text-[22px] text-[rgb(44,44,44)] mb-2"
          style={{ fontFamily: 'Geist, sans-serif' }}
        >
          {property.name}
        </h3>

        {/* Project Name */}
        <p
          className="text-[15px] text-[rgb(136,136,136)] font-light mb-2"
          style={{ fontFamily: 'Geist, sans-serif' }}
        >
          {property.projectName}
        </p>

        {/* Location */}
        <div className="flex items-center gap-1 mb-3">
          <svg
            width="18"
            height="18"
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
            className="text-[15px] text-[rgb(44,44,44)] font-light"
            style={{ fontFamily: 'Geist, sans-serif' }}
          >
            {property.location}
          </span>
        </div>

        {/* Specs Row */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[rgb(136,136,136)] text-[14px] mb-4">
          <span className="font-light" style={{ fontFamily: 'Geist, sans-serif' }}>
            Type: <span className="text-[rgb(44,44,44)]">{getPropertyTypeLabel(property.propertyType)}</span>
          </span>
          <span className="text-[rgb(199,199,199)]">•</span>
          <span className="font-light" style={{ fontFamily: 'Geist, sans-serif' }}>
            Space: <span className="text-[rgb(44,44,44)]">{property.spaceSqm} m²</span>
          </span>
          <span className="text-[rgb(199,199,199)]">•</span>
          <span className="font-light" style={{ fontFamily: 'Geist, sans-serif' }}>
            Beds: <span className="text-[rgb(44,44,44)]">{property.beds}</span>
          </span>
          <span className="text-[rgb(199,199,199)]">•</span>
          <span className="font-light" style={{ fontFamily: 'Geist, sans-serif' }}>
            Baths: <span className="text-[rgb(44,44,44)]">{property.baths}</span>
          </span>
        </div>

        {/* Price and Button Row */}
        <div className="flex items-center justify-between mt-auto">
          <span
            className="font-semibold text-[22px] text-[rgb(44,44,44)]"
            style={{ fontFamily: 'Geist, sans-serif' }}
          >
            {formatPrice(property.price)}
          </span>
          
          {/* View Details Button */}
          <span
            className="text-[14px] font-light text-[rgb(136,136,136)] group-hover:text-[rgb(44,44,44)] transition-colors"
            style={{ fontFamily: 'Geist, sans-serif' }}
          >
            View Details →
          </span>
        </div>
      </div>
    </div>
  );
};
