import React, { useState, useRef, useEffect } from 'react';
import { properties } from '../../data/properties';

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  sortBy: string;
  onSortChange: (value: string) => void;
  propertyType: string;
  onPropertyTypeChange: (value: string) => void;
  selectedProject: string;
  onProjectChange: (value: string) => void;
  minSpace: string;
  onMinSpaceChange: (value: string) => void;
  maxSpace: string;
  onMaxSpaceChange: (value: string) => void;
  resultsCount: number;
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
  width?: string;
}> = ({ value, options, onChange, placeholder = 'Select...', width = 'w-auto' }) => {
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
    <div ref={dropdownRef} className={`relative ${width}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2.5 bg-[rgb(243,243,243)] rounded-full text-[14px] font-light outline-none cursor-pointer flex items-center justify-between gap-2 hover:bg-[rgb(230,230,230)] transition-colors whitespace-nowrap"
        style={{ fontFamily: 'Geist, sans-serif' }}
      >
        <span className="truncate">{selectedLabel}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-full min-w-[180px] bg-white rounded-2xl shadow-lg border border-[rgb(230,230,230)] overflow-hidden z-50 max-h-[300px] overflow-y-auto">
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
              <span className="truncate">{option.label}</span>
              {value === option.value && (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgb(102,252,117)"
                  strokeWidth="2"
                  className="flex-shrink-0 ml-2"
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

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  propertyType,
  onPropertyTypeChange,
  selectedProject,
  onProjectChange,
  minSpace,
  onMinSpaceChange,
  maxSpace,
  onMaxSpaceChange,
  resultsCount,
}) => {
  // Get unique projects from properties data
  const projectOptions = React.useMemo(() => {
    const uniqueProjects = [...new Set(properties.map((p) => p.projectName))];
    return [
      { value: '', label: 'All Projects' },
      ...uniqueProjects.map((name) => ({ value: name, label: name })),
    ];
  }, []);

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
    <section className="bg-white border-b border-[rgb(199,199,199)] py-6 md:py-10">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-20">
        {/* Header */}
        <div className="mb-4 md:mb-6">
          <h1
            className="text-[22px] sm:text-[28px] md:text-[36px] font-semibold text-[rgb(44,44,44)] uppercase mb-1 md:mb-2"
            style={{ fontFamily: 'Geist, sans-serif' }}
          >
            Properties <span className="text-[rgb(102,252,117)]">Listing</span>
          </h1>
          <p
            className="text-[13px] md:text-[16px] text-[rgb(136,136,136)] font-light max-w-[600px]"
            style={{ fontFamily: 'Geist, sans-serif' }}
          >
            Browse and filter through our exclusive collection of premium real estate
          </p>
        </div>

        {/* Unified Search & Filter Bar */}
        <div className="bg-[rgb(250,250,250)] rounded-2xl md:rounded-3xl p-3 md:p-5">
          
          {/* Mobile Layout */}
          <div className="flex flex-col gap-3 md:hidden">
            {/* Row 1: Search */}
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[rgb(136,136,136)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <input
                type="text"
                placeholder="Search by location..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white rounded-full text-[14px] font-light outline-none border border-[rgb(230,230,230)] focus:border-[rgb(199,199,199)] transition-colors"
                style={{ fontFamily: 'Geist, sans-serif' }}
              />
            </div>

            {/* Row 2: Sort + Type */}
            <div className="grid grid-cols-2 gap-2">
              <CustomDropdown
                value={sortBy}
                options={sortOptions}
                onChange={onSortChange}
                width="w-full"
              />
              <CustomDropdown
                value={propertyType}
                options={propertyTypes}
                onChange={onPropertyTypeChange}
                width="w-full"
              />
            </div>

            {/* Row 4: Project + Space */}
            <div className="grid grid-cols-2 gap-2">
              <CustomDropdown
                value={selectedProject}
                options={projectOptions}
                onChange={onProjectChange}
                placeholder="All Projects"
                width="w-full"
              />
              <div className="flex items-center gap-2 bg-white rounded-full px-3 py-2.5 border border-[rgb(230,230,230)]">
                <input
                  type="number"
                  placeholder="Min"
                  value={minSpace}
                  onChange={(e) => onMinSpaceChange(e.target.value)}
                  className="w-full text-[14px] font-light outline-none bg-transparent text-center"
                  style={{ fontFamily: 'Geist, sans-serif' }}
                />
                <span className="text-[rgb(136,136,136)] text-[12px]">-</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={maxSpace}
                  onChange={(e) => onMaxSpaceChange(e.target.value)}
                  className="w-full text-[14px] font-light outline-none bg-transparent text-center"
                  style={{ fontFamily: 'Geist, sans-serif' }}
                />
                <span className="text-[12px] text-[rgb(136,136,136)] font-light">m²</span>
              </div>
            </div>
          </div>

          {/* Tablet Layout: 3 Rows */}
          <div className="hidden md:flex lg:hidden flex-col gap-3">
            {/* Row 1: Search Bar */}
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[rgb(136,136,136)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <input
                type="text"
                placeholder="Search by location..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white rounded-full text-[15px] font-light outline-none border border-[rgb(230,230,230)] focus:border-[rgb(199,199,199)] transition-colors"
                style={{ fontFamily: 'Geist, sans-serif' }}
              />
            </div>

            {/* Row 2: Sort + Property Type + Project (3 equal columns) */}
            <div className="grid grid-cols-3 gap-3">
              <CustomDropdown
                value={sortBy}
                options={sortOptions}
                onChange={onSortChange}
                width="w-full"
              />
              <CustomDropdown
                value={propertyType}
                options={propertyTypes}
                onChange={onPropertyTypeChange}
                width="w-full"
              />
              <CustomDropdown
                value={selectedProject}
                options={projectOptions}
                onChange={onProjectChange}
                placeholder="All Projects"
                width="w-full"
              />
            </div>

            {/* Row 3: Space Range */}
            <div className="flex items-center gap-3">
              <input
                type="number"
                placeholder="Min m²"
                value={minSpace}
                onChange={(e) => onMinSpaceChange(e.target.value)}
                className="w-28 px-4 py-2.5 bg-[rgb(243,243,243)] rounded-full text-[14px] font-light outline-none border border-transparent hover:border-[rgb(199,199,199)] transition-colors"
                style={{ fontFamily: 'Geist, sans-serif' }}
              />
              <span className="text-[rgb(136,136,136)] font-light">-</span>
              <input
                type="number"
                placeholder="Max m²"
                value={maxSpace}
                onChange={(e) => onMaxSpaceChange(e.target.value)}
                className="w-28 px-4 py-2.5 bg-[rgb(243,243,243)] rounded-full text-[14px] font-light outline-none border border-transparent hover:border-[rgb(199,199,199)] transition-colors"
                style={{ fontFamily: 'Geist, sans-serif' }}
              />
            </div>
          </div>

          {/* Desktop Layout: Single Row */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Location Search */}
            <div className="relative flex-1">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[rgb(136,136,136)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <input
                type="text"
                placeholder="Search by location..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-[rgb(243,243,243)] rounded-full text-[14px] font-light outline-none hover:bg-[rgb(230,230,230)] transition-colors"
                style={{ fontFamily: 'Geist, sans-serif' }}
              />
            </div>

            {/* Filters */}
            <CustomDropdown
              value={sortBy}
              options={sortOptions}
              onChange={onSortChange}
              width="w-[140px]"
            />
            <CustomDropdown
              value={propertyType}
              options={propertyTypes}
              onChange={onPropertyTypeChange}
              width="w-[140px]"
            />
            <CustomDropdown
              value={selectedProject}
              options={projectOptions}
              onChange={onProjectChange}
              placeholder="All Projects"
              width="w-[160px]"
            />

            {/* Space Range */}
            <div className="flex items-center gap-2">
              <input
                type="number"
                placeholder="Min m²"
                value={minSpace}
                onChange={(e) => onMinSpaceChange(e.target.value)}
                className="w-24 px-3 py-2 bg-[rgb(243,243,243)] rounded-full text-[14px] font-light outline-none hover:bg-[rgb(230,230,230)] transition-colors"
                style={{ fontFamily: 'Geist, sans-serif' }}
              />
              <span className="text-[rgb(136,136,136)]">-</span>
              <input
                type="number"
                placeholder="Max m²"
                value={maxSpace}
                onChange={(e) => onMaxSpaceChange(e.target.value)}
                className="w-24 px-3 py-2 bg-[rgb(243,243,243)] rounded-full text-[14px] font-light outline-none hover:bg-[rgb(230,230,230)] transition-colors"
                style={{ fontFamily: 'Geist, sans-serif' }}
              />
            </div>

            {/* Results Count */}
            <span
              className="ml-auto text-[14px] text-[rgb(136,136,136)] font-light whitespace-nowrap"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              {resultsCount} properties
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
