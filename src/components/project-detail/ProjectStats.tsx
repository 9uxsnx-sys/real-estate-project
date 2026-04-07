import * as React from 'react';
import { Home, DollarSign, Maximize, BedDouble } from 'lucide-react';

interface ProjectStatsProps {
  totalUnits: number;
  priceRange: { min: number; max: number };
  avgSqft: number;
  avgBeds: number;
  avgBaths: number;
  availableTypes: string[];
}

export const ProjectStats = ({
  totalUnits,
  priceRange,
  avgSqft,
  avgBeds,
  avgBaths,
  availableTypes,
}: ProjectStatsProps) => {
  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `$${(price / 1000000).toFixed(1)}M`;
    }
    return `$${(price / 1000).toFixed(0)}K`;
  };

  const stats = [
    { icon: Home, label: 'Total Units', value: totalUnits.toString() },
    { icon: DollarSign, label: 'Price Range', value: `${formatPrice(priceRange.min)} - ${formatPrice(priceRange.max)}` },
    { icon: Maximize, label: 'Avg Size', value: `${avgSqft.toLocaleString()} sqft` },
    { icon: BedDouble, label: 'Avg Beds/Baths', value: `${avgBeds.toFixed(0)} / ${avgBaths.toFixed(0)}` },
  ];

  return (
    <div className="py-8 border-y border-[rgb(230,230,230)]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-start gap-3">
            <stat.icon size={20} strokeWidth={1.5} className="text-[rgb(136,136,136)] mt-0.5" />
            <div>
              <p className="text-[24px] font-light text-[rgb(44,44,44)]" style={{ fontFamily: 'Geist, sans-serif' }}>
                {stat.value}
              </p>
              <p className="text-[12px] text-[rgb(136,136,136)] uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Available Types */}
      <div className="mt-6 pt-6 border-t border-[rgb(230,230,230)]">
        <p className="text-[12px] text-[rgb(136,136,136)] uppercase tracking-wider mb-3">Available Types</p>
        <div className="flex flex-wrap gap-2">
          {availableTypes.map((type, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-[rgb(248,248,248)] rounded-full text-[12px] text-[rgb(80,80,80)] font-light"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectStats;
