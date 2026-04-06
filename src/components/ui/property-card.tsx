import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Bed, Bath, Maximize } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Interface for component props for type safety and reusability
interface PropertyCardProps {
  images: string[];
  price: string;
  title: string;
  location: string;
  beds: number;
  baths: number;
  space: number;
  propertyType: string;
  isNew?: boolean;
  className?: string;
  onClick?: () => void;
}

export const PropertyCard = ({
  images,
  price,
  title,
  location,
  beds,
  baths,
  space,
  propertyType,
  isNew = false,
  className,
  onClick,
}: PropertyCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Carousel image change handler
  const changeImage = (newDirection: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) return images.length - 1;
      if (nextIndex >= images.length) return 0;
      return nextIndex;
    });
  };

  // Animation variants for the carousel
  const carouselVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  // Animation variants for staggering content
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      variants={contentVariants}
      whileHover={{ 
        scale: 1.02, 
        boxShadow: '0px 10px 30px -5px rgba(0, 0, 0, 0.1)',
        transition: { type: 'spring', stiffness: 300, damping: 20 }
      }}
      onClick={onClick}
      className={cn(
        'w-full overflow-hidden rounded-2xl border border-[rgb(230,230,230)] bg-white cursor-pointer',
        className
      )}
    >
      {/* Image Carousel Section */}
      <div className="relative group h-48">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={title}
            custom={direction}
            variants={carouselVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute h-full w-full object-cover"
          />
        </AnimatePresence>
        
        {/* Carousel Navigation */}
        <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full bg-black/30 hover:bg-black/50 text-white h-8 w-8" 
            onClick={(e) => changeImage(-1, e)}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full bg-black/30 hover:bg-black/50 text-white h-8 w-8" 
            onClick={(e) => changeImage(1, e)}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-[10px]">
            {propertyType}
          </Badge>
          {isNew && (
            <Badge variant="secondary" className="bg-black text-white text-[10px]">
              New
            </Badge>
          )}
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(index);
              }}
              className={cn(
                'h-1.5 w-1.5 rounded-full transition-all',
                currentIndex === index ? 'w-4 bg-white' : 'bg-white/50'
              )}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content Section */}
      <motion.div variants={contentVariants} className="p-4 space-y-3">
        {/* Price - Prominent */}
        <motion.div variants={itemVariants}>
          <h3 
            className="text-[18px] font-semibold text-[rgb(44,44,44)]"
            style={{ fontFamily: 'Geist, sans-serif' }}
          >
            {price}
          </h3>
        </motion.div>

        {/* Title & Location */}
        <motion.div variants={itemVariants}>
          <p 
            className="text-[14px] font-medium text-[rgb(44,44,44)] line-clamp-1"
            style={{ fontFamily: 'Geist, sans-serif' }}
          >
            {title}
          </p>
          <p 
            className="text-[12px] text-[rgb(136,136,136)] font-light"
            style={{ fontFamily: 'Geist, sans-serif' }}
          >
            {location}
          </p>
        </motion.div>

        {/* Specs - Bed, Bath, Space */}
        <motion.div 
          variants={itemVariants} 
          className="flex items-center gap-3 pt-2 border-t border-[rgb(230,230,230)]"
        >
          <div className="flex items-center gap-1 text-[rgb(136,136,136)]">
            <Bed size={14} strokeWidth={1.5} />
            <span className="text-[12px]" style={{ fontFamily: 'Geist, sans-serif' }}>
              {beds}
            </span>
          </div>
          <div className="flex items-center gap-1 text-[rgb(136,136,136)]">
            <Bath size={14} strokeWidth={1.5} />
            <span className="text-[12px]" style={{ fontFamily: 'Geist, sans-serif' }}>
              {baths}
            </span>
          </div>
          <div className="flex items-center gap-1 text-[rgb(136,136,136)]">
            <Maximize size={14} strokeWidth={1.5} />
            <span className="text-[12px]" style={{ fontFamily: 'Geist, sans-serif' }}>
              {space} sqft
            </span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PropertyCard;
