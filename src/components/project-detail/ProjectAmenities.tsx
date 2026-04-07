import * as React from 'react';
import { Waves, Dumbbell, Car, Trees, Shield, Sparkles } from 'lucide-react';

interface ProjectAmenitiesProps {
  amenities?: string[];
}

export const ProjectAmenities = ({ amenities }: ProjectAmenitiesProps) => {
  // Default amenities for luxury projects
  const defaultAmenities = [
    { name: 'Infinity Pool & Spa', icon: Waves },
    { name: 'State-of-the-Art Fitness Center', icon: Dumbbell },
    { name: 'Secure Underground Parking', icon: Car },
    { name: 'Private Gardens & Landscaping', icon: Trees },
    { name: '24/7 Security & Concierge', icon: Shield },
    { name: 'Premium Finishes Throughout', icon: Sparkles },
  ];

  const displayAmenities = amenities?.length
    ? amenities.map((name, i) => ({ name, icon: [Waves, Dumbbell, Car, Trees, Shield, Sparkles][i % 6] }))
    : defaultAmenities;

  return (
    <div className="py-6 border-b border-[rgb(230,230,230)]">
      <h3
        className="text-[20px] md:text-[24px] font-semibold text-[rgb(44,44,44)] mb-4"
        style={{ fontFamily: 'Geist, sans-serif' }}
      >
        Amenities
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {displayAmenities.map((amenity, index) => (
          <div key={index} className="flex items-center gap-3">
            <amenity.icon
              size={20}
              strokeWidth={1.5}
              className="text-[rgb(136,136,136)]"
            />
            <span
              className="text-[14px] md:text-[16px] text-[rgb(44,44,44)] font-light"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              {amenity.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectAmenities;
