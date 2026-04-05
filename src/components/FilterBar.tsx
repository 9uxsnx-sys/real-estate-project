import React from 'react';

interface FilterBarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  resultsCount: number;
  sortBy: string;
  onSortChange: (sort: string) => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  activeFilter,
  onFilterChange,
  resultsCount,
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange,
}) => {
  const filters = [
    { id: 'all', label: 'All Properties' },
    { id: 'For Sale', label: 'For Sale' },
    { id: 'For Rent', label: 'For Rent' },
    { id: 'For Investment', label: 'Investment' },
    { id: 'Luxury', label: 'Luxury' },
  ];

  return (
    <div className="sticky top-20 z-10 bg-white border-b border-[rgb(199,199,199)] py-4">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
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

        {/* Center: Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
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
    </div>
  );
};
