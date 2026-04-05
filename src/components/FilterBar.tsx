import React from 'react';

interface FilterBarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  resultsCount: number;
  sortBy: string;
  onSortChange: (sort: string) => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
  // New filter props
  projectSearch: string;
  onProjectSearchChange: (value: string) => void;
  propertyType: string;
  onPropertyTypeChange: (value: string) => void;
  minSpace: string;
  onMinSpaceChange: (value: string) => void;
  maxSpace: string;
  onMaxSpaceChange: (value: string) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  activeFilter,
  onFilterChange,
  resultsCount,
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange,
  // New filters
  projectSearch,
  onProjectSearchChange,
  propertyType,
  onPropertyTypeChange,
  minSpace,
  onMinSpaceChange,
  maxSpace,
  onMaxSpaceChange,
}) => {
  const filters = [
    { id: 'all', label: 'All Properties' },
    { id: 'For Sale', label: 'For Sale' },
    { id: 'For Rent', label: 'For Rent' },
    { id: 'For Investment', label: 'Investment' },
    { id: 'Luxury', label: 'Luxury' },
  ];

  const propertyTypes = [
    { value: '', label: 'All Types' },
    { value: 'studio', label: 'Studio' },
    { value: 'f1', label: 'F1' },
    { value: 'f2', label: 'F2' },
    { value: 'f3', label: 'F3' },
    { value: 'f4', label: 'F4' },
    { value: 'f5+', label: 'F5+' },
    { value: 'garage', label: 'Garage' },
  ];

  return (
    <div className="sticky top-20 z-10 bg-white border-b border-[rgb(199,199,199)] py-4">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-20">
        {/* Top Row: View Toggle, Results Count, Sort */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
          {/* Left: View Toggle + Results Count */}
          <div className="flex items-center gap-4">
            {/* View Toggle */}
            <div className="flex items-center bg-[rgb(243,243,243)] rounded-full p-1">
              <button
                onClick={() => onViewModeChange('grid')}
                className={`p-2 rounded-full transition-colors ${
                  viewMode === 'grid' ? 'bg-white shadow-sm' : ''
                }`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
              </button>
              <button
                onClick={() => onViewModeChange('list')}
                className={`p-2 rounded-full transition-colors ${
                  viewMode === 'list' ? 'bg-white shadow-sm' : ''
                }`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>

            {/* Results Count */}
            <span
              className="text-[14px] text-[rgb(136,136,136)] font-light"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              Showing {resultsCount} properties
            </span>
          </div>

          {/* Right: Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="px-4 py-2 bg-[rgb(243,243,243)] rounded-full text-[14px] font-light outline-none cursor-pointer"
            style={{ fontFamily: 'Geist, sans-serif' }}
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
        </div>

        {/* Search and Filter Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 mb-4">
          {/* Project Search */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[rgb(136,136,136)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Search by project name..."
                value={projectSearch}
                onChange={(e) => onProjectSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-[rgb(243,243,243)] rounded-full text-[14px] font-light outline-none"
                style={{ fontFamily: 'Geist, sans-serif' }}
              />
            </div>
          </div>

          {/* Property Type Dropdown */}
          <select
            value={propertyType}
            onChange={(e) => onPropertyTypeChange(e.target.value)}
            className="w-full lg:w-auto px-4 py-2 bg-[rgb(243,243,243)] rounded-full text-[14px] font-light outline-none cursor-pointer"
            style={{ fontFamily: 'Geist, sans-serif' }}
          >
            {propertyTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>

          {/* Space Range (m²) */}
          <div className="flex items-center gap-2 w-full lg:w-auto">
            <input
              type="number"
              placeholder="Min m²"
              value={minSpace}
              onChange={(e) => onMinSpaceChange(e.target.value)}
              className="w-24 px-3 py-2 bg-[rgb(243,243,243)] rounded-full text-[14px] font-light outline-none"
              style={{ fontFamily: 'Geist, sans-serif' }}
            />
            <span className="text-[rgb(136,136,136)]">-</span>
            <input
              type="number"
              placeholder="Max m²"
              value={maxSpace}
              onChange={(e) => onMaxSpaceChange(e.target.value)}
              className="w-24 px-3 py-2 bg-[rgb(243,243,243)] rounded-full text-[14px] font-light outline-none"
              style={{ fontFamily: 'Geist, sans-serif' }}
            />
            <span className="text-[14px] text-[rgb(136,136,136)] font-light">m²</span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => onFilterChange(filter.id)}
              className={`px-4 py-2 rounded-full text-[14px] font-light whitespace-nowrap transition-colors ${
                activeFilter === filter.id
                  ? 'bg-black text-white'
                  : 'bg-[rgb(243,243,243)] text-[rgb(44,44,44)] hover:bg-[rgb(230,230,230)]'
              }`}
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
