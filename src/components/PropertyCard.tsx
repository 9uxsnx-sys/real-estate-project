import React from 'react';
import { Property, formatPrice } from '../data/properties';

interface PropertyCardProps {
  property: Property;
  onClick?: (id: string) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(property.id);
    }
  };

  const getCategoryColor = (category: Property['category']) => {
    switch (category) {
      case 'For Investment':
        return 'bg-[rgb(102,252,117)] text-[rgb(44,44,44)]';
      case 'Luxury':
        return 'bg-[rgb(44,44,44)] text-white';
      case 'For Rent':
        return 'bg-[rgb(136,136,136)] text-white';
      case 'For Sale':
      default:
        return 'bg-white text-[rgb(44,44,44)]';
    }
  };

  return (
    <div
      onClick={handleClick}
      className="group cursor-pointer bg-white rounded-4xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-4xl">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Category Tag */}
        <div className={`absolute top-4 left-4 px-4 py-2 rounded-full ${getCategoryColor(property.category)}`}>
          <span className="font-light text-sm" style={{ fontFamily: 'Geist, sans-serif' }}>
            {property.category}
          </span>
        </div>
        {/* Featured Badge */}
        {property.featured && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 rounded-full">
            <span className="text-xs font-semibold text-[rgb(44,44,44)]" style={{ fontFamily: 'Geist, sans-serif' }}>
              Featured
            </span>
          </div>
        )}
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
            {property.beds} Beds
          </span>
          <span className="text-[rgb(199,199,199)]">•</span>
          <span className="font-light" style={{ fontFamily: 'Geist, sans-serif' }}>
            {property.baths} Baths
          </span>
          <span className="text-[rgb(199,199,199)]">•</span>
          <span className="font-light" style={{ fontFamily: 'Geist, sans-serif' }}>
            {property.sqft.toLocaleString()} sq.ft
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
};
