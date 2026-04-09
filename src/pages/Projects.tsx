import React, { useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProjectAlternatingSection } from '../components/project';
import { properties } from '../data/properties';

interface Project {
  id: string;
  name: string;
  location: string;
  image: string;
  propertyCount: number;
  priceRange: { min: number; max: number };
  types: string[];
}

export const Projects: React.FC = () => {
  const navigate = useNavigate();
  const { lang } = useParams<{ lang: string }>();
  const { t } = useTranslation();
  const currentLang = lang || 'en';
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // GSAP entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title entrance
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
        }
      );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  // Aggregate unique projects from properties data
  const getUniqueProjects = (): Project[] => {
    const projectMap = new Map<string, Project>();
    
    properties.forEach((prop) => {
      const projectId = prop.projectName.toLowerCase().replace(/\s+/g, '-');
      
      if (!projectMap.has(projectId)) {
        projectMap.set(projectId, {
          id: projectId,
          name: prop.projectName,
          location: prop.location,
          image: prop.image,
          propertyCount: 1,
          priceRange: { min: prop.price, max: prop.price },
          types: [prop.propertyType],
        });
      } else {
        const project = projectMap.get(projectId)!;
        project.propertyCount += 1;
        project.priceRange.min = Math.min(project.priceRange.min, prop.price);
        project.priceRange.max = Math.max(project.priceRange.max, prop.price);
        if (!project.types.includes(prop.propertyType)) {
          project.types.push(prop.propertyType);
        }
      }
    });
    
    return Array.from(projectMap.values());
  };

  const projects = getUniqueProjects();

  const handleProjectClick = (projectId: string) => {
    navigate(`/${currentLang}/projects/${projectId}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section ref={headerRef} className="py-16 md:py-20 lg:py-24 border-b border-[rgb(230,230,230)]">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-4 md:px-8 lg:px-20">
          <h1
            ref={titleRef}
            className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold text-[rgb(44,44,44)] leading-[1.2]"
            style={{ fontFamily: 'Geist, sans-serif' }}
          >
            {t('hero.ourProjects')}
          </h1>
        </div>
      </section>

      {/* Project Sections - Alternating layouts (60/40 split) */}
      {projects.slice(0, 3).map((project, index) => (
        <ProjectAlternatingSection
          key={project.id}
          project={project}
          index={index}
          onExplore={() => handleProjectClick(project.id)}
        />
      ))}

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[rgb(248,248,248)]">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-4 md:px-8 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-xl mx-auto"
          >
            <h3
              className="text-[24px] md:text-[28px] font-semibold text-[rgb(44,44,44)] mb-4"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              {t('project.readyToFind')}
            </h3>
            <p
              className="text-[14px] md:text-[16px] text-[rgb(136,136,136)] font-light mb-8"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              {t('project.browseDescription')}
            </p>
            <button
              onClick={() => navigate(`/${currentLang}`)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-light text-[14px] transition-colors hover:bg-[rgb(44,44,44)] group"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              {t('project.exploreProperties')} <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
