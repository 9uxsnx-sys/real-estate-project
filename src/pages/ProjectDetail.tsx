import React from 'react';
import { useParams } from 'react-router-dom';
import { properties } from '../data/properties';

export const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  
  // Find project details from properties data
  const projectProperties = properties.filter(
    (p) => p.projectName.toLowerCase().replace(/\s+/g, '-') === projectId
  );
  
  const projectName = projectProperties[0]?.projectName || 'Project Not Found';
  const projectLocation = projectProperties[0]?.location || '';

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header */}
      <section className="py-10 md:py-12 border-b border-[rgb(230,230,230)]">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-4 md:px-8 lg:px-20">
          <h1 
            className="text-[24px] md:text-[32px] font-semibold text-[rgb(44,44,44)]"
            style={{ fontFamily: 'Geist, sans-serif' }}
          >
            {projectName}
          </h1>
          <p 
            className="text-[14px] md:text-[16px] text-[rgb(136,136,136)] font-light mt-2"
            style={{ fontFamily: 'Geist, sans-serif' }}
          >
            {projectLocation}
          </p>
        </div>
      </section>

      {/* Placeholder Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-4 md:px-8 lg:px-20">
          <div className="text-center">
            <div className="w-16 h-16 bg-[rgb(243,243,243)] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="rgb(136,136,136)" 
                strokeWidth="1.5"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <h2 
              className="text-[18px] md:text-[20px] font-medium text-[rgb(44,44,44)] mb-3"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              Project Detail Page
            </h2>
            <p 
              className="text-[14px] text-[rgb(136,136,136)] font-light max-w-md mx-auto"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              This page will showcase the {projectName} development with full details, 
              gallery, amenities, and available units. Coming soon.
            </p>
            
            {projectProperties.length > 0 && (
              <div className="mt-8">
                <p 
                  className="text-[14px] text-[rgb(136,136,136)] font-light"
                  style={{ fontFamily: 'Geist, sans-serif' }}
                >
                  {projectProperties.length} properties available in this project
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
