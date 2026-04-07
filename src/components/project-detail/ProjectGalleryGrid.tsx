import * as React from 'react';

interface ProjectGalleryGridProps {
  images: string[];
  layout?: 'grid-2' | 'grid-3' | 'featured' | 'masonry';
  className?: string;
}

export const ProjectGalleryGrid = ({
  images,
  layout = 'featured',
  className = '',
}: ProjectGalleryGridProps) => {
  // Ensure we have images to display
  const displayImages = images.length > 0 ? images : [''];

  const renderGrid = () => {
    switch (layout) {
      case 'grid-2':
        return (
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${className}`}>
            {displayImages.slice(0, 4).map((image, index) => (
              <div key={index} className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        );

      case 'grid-3':
        return (
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${className}`}>
            {displayImages.slice(0, 6).map((image, index) => (
              <div key={index} className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        );

      case 'featured':
        const [mainImage, ...sideImages] = displayImages;
        return (
          <div className={`grid grid-cols-1 md:grid-cols-[2fr_1fr] md:grid-rows-2 gap-4 ${className}`}>
            {/* Main Large Image */}
            <div className="md:col-span-1 md:row-span-2 aspect-[16/10] overflow-hidden rounded-2xl">
              <img
                src={mainImage}
                alt="Featured image"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Side Images */}
            {sideImages.slice(0, 2).map((image, index) => (
              <div key={index} className="aspect-[16/10] overflow-hidden rounded-2xl">
                <img
                  src={image}
                  alt={`Gallery image ${index + 2}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        );

      case 'masonry':
        return (
          <div className={`columns-1 md:columns-2 gap-4 space-y-4 ${className}`}>
            {displayImages.map((image, index) => (
              <div key={index} className="break-inside-avoid overflow-hidden rounded-2xl">
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return renderGrid();
};

export default ProjectGalleryGrid;
