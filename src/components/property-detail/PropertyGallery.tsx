import React from 'react';

interface PropertyGalleryProps {
  images: string[];
  propertyName: string;
}

export const PropertyGallery: React.FC<PropertyGalleryProps> = ({ images, propertyName }) => {
  // Ensure we have at least 3 images (use duplicates if needed)
  const galleryImages = images.length >= 3 
    ? images.slice(0, 3) 
    : [...images, ...Array(3 - images.length).fill(images[0] || '')];

  const [mainImage, ...sideImages] = galleryImages;

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_0.5fr] md:grid-rows-2 gap-4 w-full">
      {/* Main Large Image - Spans 2 rows */}
      <div className="md:col-span-1 md:row-span-2 aspect-[16/10] overflow-hidden rounded-3xl">
        <img
          src={mainImage}
          alt={`${propertyName} - Main`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Side Images - 2 images stacked vertically, 1 per row */}
      {sideImages.slice(0, 2).map((image, index) => (
        <div 
          key={index} 
          className="aspect-[16/9] overflow-hidden rounded-3xl"
        >
          <img
            src={image}
            alt={`${propertyName} - ${index + 2}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      ))}
    </div>
  );
};
