import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BedDouble, Bath, Maximize } from 'lucide-react';
import type { Property } from '../../types';

interface AvailableUnitsProps {
  properties: Property[];
  onViewUnit: (propertyId: string) => void;
}

const formatPrice = (price: number) => {
  if (price >= 1000000) {
    return `$${(price / 1000000).toFixed(1)}M`;
  }
  return `$${(price / 1000).toFixed(0)}K`;
};

export const AvailableUnits = ({ properties, onViewUnit }: AvailableUnitsProps) => {
  return (
    <div className="py-6 border-b border-[rgb(230,230,230)]">
      <h3
        className="text-[20px] md:text-[24px] font-semibold text-[rgb(44,44,44)] mb-4"
        style={{ fontFamily: 'Geist, sans-serif' }}
      >
        Available Units
      </h3>
      <p className="text-[14px] text-[rgb(136,136,136)] font-light mb-6" style={{ fontFamily: 'Geist, sans-serif' }}>
        {properties.length} residences available in this development
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {properties.map((property, index) => (
          <motion.div
            key={property.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group border border-[rgb(230,230,230)] rounded-2xl overflow-hidden hover:border-[rgb(180,180,180)] transition-colors cursor-pointer"
            onClick={() => onViewUnit(property.id)}
          >
            {/* Image */}
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h4
                  className="text-[16px] font-medium text-[rgb(44,44,44)]"
                  style={{ fontFamily: 'Geist, sans-serif' }}
                >
                  {property.name}
                </h4>
                <span className="text-[14px] font-light text-[rgb(44,44,44)]" style={{ fontFamily: 'Geist, sans-serif' }}>
                  {formatPrice(property.price)}
                </span>
              </div>

              {/* Specs */}
              <div className="flex items-center gap-4 text-[12px] text-[rgb(136,136,136)] mb-3">
                <span className="flex items-center gap-1">
                  <BedDouble size={14} />
                  {property.beds} Beds
                </span>
                <span className="flex items-center gap-1">
                  <Bath size={14} />
                  {property.baths} Baths
                </span>
                <span className="flex items-center gap-1">
                  <Maximize size={14} />
                  {property.sqft.toLocaleString()} sqft
                </span>
              </div>

              {/* View Button */}
              <button className="inline-flex items-center gap-1 text-[12px] font-medium text-[rgb(44,44,44)] group/btn">
                View Unit
                <ArrowUpRight size={14} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AvailableUnits;
