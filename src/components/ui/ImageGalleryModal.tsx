import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ImageGalleryModalProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

export const ImageGalleryModal: React.FC<ImageGalleryModalProps> = ({
  images,
  isOpen,
  onClose,
  initialIndex = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const initialPinchDistance = useRef<number | null>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  // Reset to initial index when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setScale(1);
      setTranslate({ x: 0, y: 0 });
    }
  }, [isOpen, initialIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setScale(1);
    setTranslate({ x: 0, y: 0 });
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setScale(1);
    setTranslate({ x: 0, y: 0 });
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setScale(1);
    setTranslate({ x: 0, y: 0 });
  };

  // Touch handlers for swipe and pinch
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      // Single touch - start of swipe
      touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    } else if (e.touches.length === 2) {
      // Pinch start - calculate initial distance
      const distance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      initialPinchDistance.current = distance;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    
    if (e.touches.length === 2 && initialPinchDistance.current) {
      // Pinch zoom
      const distance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const pinchScale = distance / initialPinchDistance.current;
      setScale(Math.min(Math.max(pinchScale, 1), 3)); // Limit zoom between 1x and 3x
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (e.touches.length === 0) {
      // All fingers lifted - reset pinch state
      initialPinchDistance.current = null;
      
      // Check if it was a swipe (single touch ended)
      if (touchStart.current) {
        const endX = e.changedTouches[0].clientX;
        const diffX = touchStart.current.x - endX;
        const minSwipeDistance = 50;

        if (Math.abs(diffX) > minSwipeDistance) {
          if (diffX > 0) {
            goToNext();
          } else {
            goToPrevious();
          }
        }
        touchStart.current = null;
      }
      
      // Reset zoom when fingers are released
      setScale(1);
      setTranslate({ x: 0, y: 0 });
    }
  };

  if (!isOpen || images.length === 0) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center touch-none"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-6 right-6 z-10 p-2 hover:opacity-70 transition-opacity"
        aria-label="Close gallery"
      >
        <X size={20} strokeWidth={1.5} className="text-white" />
      </button>

      {/* Left Arrow - Hidden on mobile */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goToPrevious();
        }}
        className="hidden md:block absolute left-6 z-10 p-2 hover:opacity-70 transition-opacity"
        aria-label="Previous image"
      >
        <ChevronLeft size={20} strokeWidth={1.5} className="text-white" />
      </button>

      {/* Image Container with touch handlers */}
      <div
        className="relative max-w-[90vw] max-h-[85vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img
          ref={imageRef}
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1} of ${images.length}`}
          className="max-w-[90vw] max-h-[85vh] object-contain transition-transform duration-200"
          style={{ 
            fontFamily: 'Geist, sans-serif',
            transform: `scale(${scale}) translate(${translate.x}px, ${translate.y}px)`,
            touchAction: 'none'
          }}
          draggable={false}
        />
      </div>

      {/* Right Arrow - Hidden on mobile */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goToNext();
        }}
        className="hidden md:block absolute right-6 z-10 p-2 hover:opacity-70 transition-opacity"
        aria-label="Next image"
      >
        <ChevronRight size={20} strokeWidth={1.5} className="text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-1.5">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              goToSlide(index);
            }}
            className="w-1.5 h-1.5 rounded-full transition-colors"
            style={{
              backgroundColor: index === currentIndex ? '#ffffff' : 'rgba(255, 255, 255, 0.4)',
            }}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Image Counter */}
      <div
        className="absolute bottom-6 right-6 text-white text-sm font-light"
        style={{ fontFamily: 'Geist, sans-serif' }}
      >
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default ImageGalleryModal;
