import React from 'react';
import { PropertyCard } from '../components/PropertyCard';
import { HeroSection } from '../components/HeroSection';
import { FilterBar } from '../components/FilterBar';
import { properties, Property } from '../data/properties';

interface HomeProps {
  onPropertyClick?: (id: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onPropertyClick }) => {
  const [activeFilter, setActiveFilter] = React.useState('all');
  const [sortBy, setSortBy] = React.useState('featured');
  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [visibleCount, setVisibleCount] = React.useState(6);

  // Filter and sort properties
  const filteredProperties = React.useMemo(() => {
    let result = [...properties];

    // Filter by category
    if (activeFilter !== 'all') {
      result = result.filter((p) => p.category === activeFilter);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.location.toLowerCase().includes(query)
      );
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.reverse();
        break;
      case 'featured':
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return result;
  }, [activeFilter, sortBy, searchQuery]);

  const visibleProperties = filteredProperties.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProperties.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, filteredProperties.length));
  };

  const handlePropertyClick = (id: string) => {
    if (onPropertyClick) {
      onPropertyClick(id);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection onSearch={setSearchQuery} />

      {/* Filter Bar */}
      <FilterBar
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        resultsCount={filteredProperties.length}
        sortBy={sortBy}
        onSortChange={setSortBy}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />

      {/* Properties Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-20">
          {/* Section Title */}
          <div className="mb-8">
            <h2
              className="text-[24px] sm:text-[32px] font-semibold uppercase text-[rgb(44,44,44)] mb-2"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              Featured Properties
            </h2>
            <p
              className="text-[16px] text-[rgb(136,136,136)] font-light"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              Hand-picked luxury homes in the most sought-after locations
            </p>
          </div>

          {/* Grid */}
          <div
            className={`grid gap-6 ${
              viewMode === 'grid'
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                : 'grid-cols-1'
            }`}
          >
            {visibleProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onClick={handlePropertyClick}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredProperties.length === 0 && (
            <div className="text-center py-16">
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(199,199,199)"
                strokeWidth="1.5"
                className="mx-auto mb-4"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <p
                className="text-[18px] text-[rgb(44,44,44)] font-light mb-2"
                style={{ fontFamily: 'Geist, sans-serif' }}
              >
                No properties found
              </p>
              <p
                className="text-[14px] text-[rgb(136,136,136)] font-light"
                style={{ fontFamily: 'Geist, sans-serif' }}
              >
                Try adjusting your filters or search query
              </p>
            </div>
          )}

          {/* Load More Button */}
          {hasMore && (
            <div className="text-center mt-12">
              <button
                onClick={handleLoadMore}
                className="px-8 py-4 bg-black text-white rounded-full font-light text-[16px] transition-colors hover:bg-[rgb(44,44,44)]"
                style={{ fontFamily: 'Geist, sans-serif' }}
              >
                Load More Properties
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
