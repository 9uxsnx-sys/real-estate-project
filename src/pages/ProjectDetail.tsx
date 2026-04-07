import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  PropertyGallery,
  PropertySpecs,
  PropertyFeatures,
  PropertyLocation,
} from '../components/property-detail';
import { ProjectSection, ProjectSectionData, ProjectContactSidebar } from '../components/project-detail';
import { PropertyCard } from '@/components/ui/property-card';
import { properties } from '../data/properties';
import { PropertyDetail as PropertyDetailType } from '../types';
import { formatPrice } from '../utils';

// Extended property data with detail fields
const getPropertyWithDetails = (id: string): PropertyDetailType | null => {
  const property = properties.find((p) => p.id === id);
  if (!property) return null;

  // Add detail fields to the property
  return {
    ...property,
    description: `Introducing ${property.name}, a striking ${property.beds}-bedroom residence designed for both luxury living and smart investment. Located in the prestigious neighborhood of ${property.location}, this ${property.spaceSqm} m² home features bold modern architecture, open-plan interiors, and refined finishes. With ${property.baths} bathrooms, spacious living areas, and curated landscaping, it's a statement of comfort, style, and long-term value.`,
    features: [
      { name: '1', feature_name: `${property.beds} Bedrooms & ${property.baths} Bathrooms`, icon: 'home' },
      { name: '2', feature_name: 'Bold Contemporary Design', icon: 'home' },
      { name: '3', feature_name: 'Professionally Landscaped Garden', icon: 'tree' },
      { name: '4', feature_name: 'Spacious Driveway & Garage', icon: 'car' },
      { name: '5', feature_name: 'Investment-Ready Property', icon: 'trending-up' },
    ],
    gallery: [
      property.image,
      property.image,
      property.image,
      property.image,
      property.image,
    ],
    propertyCode: `VH-${property.id.toUpperCase().padStart(3, '0')}`,
    whatsappNumber: '1234567890',
    map_location: {
      lat: 34.100222,
      lng: -118.450709,
      address: property.location,
    },
  };
};

export const ProjectDetail: React.FC = () => {
  const navigate = useNavigate();
  const { projectId } = useParams<{ projectId: string }>();

  // Find all properties in this project by project name (URL param is kebab-case)
  const projectProperties = properties.filter(
    (p) => p.projectName.toLowerCase().replace(/\s+/g, '-') === projectId
  );

  // Get first property to display (Property Detail layout expects a single property)
  // In a real app, you might aggregate data from all properties
  const property = projectProperties.length > 0 
    ? getPropertyWithDetails(projectProperties[0].id)
    : null;

  if (!property) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-20 py-12 text-center">
          <h1
            className="text-2xl font-semibold text-[rgb(44,44,44)] mb-4"
            style={{ fontFamily: 'Geist, sans-serif' }}
          >
            Project Not Found
          </h1>
          <button
            onClick={() => navigate('/projects')}
            className="px-6 py-3 bg-black text-white rounded-full hover:bg-[rgb(44,44,44)] transition-colors"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  // Sample custom sections - deployable by owner
  const projectImages = [property.image, property.image, property.image, property.image];
  
  const customSections: ProjectSectionData[] = [
    {
      id: 'studio',
      title: 'Studio Units',
      images: projectImages.slice(0, 4),
      description: 'Our studio apartments feature open floor plans with floor-to-ceiling windows, modern kitchenettes, and stunning city views. Perfect for young professionals or as investment properties.',
      features: [
        'Open floor plan design',
        'Floor-to-ceiling windows',
        'Modern kitchenette',
        'City skyline views',
        'Smart home integration',
      ],
    },
    {
      id: 'f1',
      title: 'First Floor - F1',
      images: projectImages.slice(0, 4),
      description: 'The ground floor features an elegant grand lobby with 24/7 concierge service, package room, and direct access to all building amenities.',
      features: [
        'Grand lobby entrance',
        '24/7 concierge desk',
        'Secure package room',
        'Co-working lounge',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-20 py-6 md:py-10">
        {/* Back Button */}
        <button
          onClick={() => navigate('/projects')}
          className="flex items-center gap-2 text-[rgb(44,44,44)] hover:text-black transition-colors mb-6"
          style={{ fontFamily: 'Geist, sans-serif' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </button>

        {/* Gallery - Full Width */}
        <PropertyGallery images={property.gallery || [property.image]} propertyName={property.name} />

        {/* Title Only */}
        <div className="mt-6 mb-4">
          <h1
            className="text-[28px] md:text-[36px] lg:text-[40px] font-semibold text-[rgb(44,44,44)]"
            style={{ fontFamily: 'Geist, sans-serif' }}
          >
            {property.projectName}
          </h1>
        </div>

        {/* Two Column Section: Content Left, Sidebar Right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_340px] gap-8 lg:gap-12 mt-6">
          {/* Content - Left */}
          <div className="order-1">
            {/* Description */}
            <div className="py-6 border-b border-[rgb(230,230,230)]">
              <h3
                className="text-[20px] md:text-[24px] font-semibold text-[rgb(44,44,44)] mb-4"
                style={{ fontFamily: 'Geist, sans-serif' }}
              >
                Overview
              </h3>
              <p
                className="text-[14px] md:text-[16px] text-[rgb(44,44,44)] font-light leading-relaxed"
                style={{ fontFamily: 'Geist, sans-serif' }}
              >
                {property.description}
              </p>
            </div>

            {/* Features */}
            <PropertyFeatures features={property.features} />

            {/* Custom Sections - Deployable by Owner */}
            {customSections.map((section, index) => (
              <ProjectSection key={section.id} {...section} index={index} />
            ))}

            {/* Location */}
            <PropertyLocation
              address={property.map_location?.address}
              lat={property.map_location?.lat}
              lng={property.map_location?.lng}
            />

            {/* Properties in This Project */}
            <div className="py-6 border-t border-b border-[rgb(230,230,230)]">
              {/* Section Header with Title and See More */}
              <div className="flex items-center justify-between mb-6">
                <h3
                  className="text-[20px] md:text-[24px] font-semibold text-[rgb(44,44,44)]"
                  style={{ fontFamily: 'Geist, sans-serif' }}
                >
                  Properties in This Project
                </h3>
                
                {projectProperties.length >= 1 && (
                  <button
                    onClick={() => navigate(`/?project=${encodeURIComponent(property.projectName)}`)}
                    className="flex items-center gap-1 text-[14px] font-light text-[rgb(44,44,44)] hover:text-black transition-colors"
                    style={{ fontFamily: 'Geist, sans-serif' }}
                  >
                    See More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                )}
              </div>
              
              {/* Properties Grid - Show up to 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projectProperties.slice(0, 3).map((projProperty) => (
                  <PropertyCard
                    key={projProperty.id}
                    images={[projProperty.image]}
                    price={formatPrice(projProperty.price)}
                    title={projProperty.name}
                    location={`${projProperty.projectName}, ${projProperty.location}`}
                    beds={projProperty.beds}
                    baths={projProperty.baths}
                    space={projProperty.sqft}
                    propertyType={projProperty.propertyType}
                    isNew={projProperty.featured}
                    onClick={() => navigate(`/property/${projProperty.id}`)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Right */}
          <div className="order-2">
            <ProjectContactSidebar
              property={property}
              whatsappNumber={property.whatsappNumber}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
