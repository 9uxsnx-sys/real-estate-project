import React, { useState, useRef, useEffect } from 'react';

interface FilterBarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  resultsCount: number;
  sortBy: string;
  onSortChange: (sort: string) => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
  projectSearch: string;
  onProjectSearchChange: (value: string) => void;
  propertyType: string;
  onPropertyTypeChange: (value: string) => void;
  minSpace: string;
  onMinSpaceChange: (value: string) => void;
  maxSpace: string;
  onMaxSpaceChange: (value: string) => void;
}

// Custom Dropdown Component
interface DropdownOption {
  value: string;
  label: string;
}

const CustomDropdown: React.FC<{
  value: string;
  options: DropdownOption[];
  onChange: (value: string) => void;
  placeholder?: string;
}> = ({ value, options, onChange, placeholder = 'Select...' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedLabel = options.find((opt) => opt.value === value)?.label || placeholder;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full lg:w-auto px-4 py-2 bg-[rgb(243,243,243)] rounded-full text-[14px] font-light outline-none cursor-pointer flex items-center justify-between gap-2 hover:bg-[rgb(230,230,230)] transition-colors"
        style={{ fontFamily: 'Geist, sans-serif' }}
      >
        <span>{selectedLabel}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-full min-w-[180px] bg-white rounded-2xl shadow-lg border border-[rgb(230,230,230)] overflow-hidden z-50">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-3 text-left text-[14px] font-light transition-colors flex items-center justify-between ${
                value === option.value
                  ? 'bg-[rgb(243,243,243)] text-[rgb(44,44,44)]'
                  : 'text-[rgb(136,136,136)] hover:bg-[rgb(250,250,250)]'
              }`}
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              <span>{option.label}</span>
              {value === option.value && (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgb(102,252,117)"
                  strokeWidth="2"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export const FilterBar: React.FC<FilterBarProps> = ({
  activeFilter,
  onFilterChange,
  resultsCount,
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange,
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

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest' },
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
    <div className="bg-white border-b border-[rgb(199,199,199)] py-4">
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
          <CustomDropdown
            value={sortBy}
            options={sortOptions}
            onChange={onSortChange}
          />
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
          <CustomDropdown
            value={propertyType}
            options={propertyTypes}
            onChange={onPropertyTypeChange}
          />

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
