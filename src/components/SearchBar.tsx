import React from 'react';

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-[800px] mx-auto">
      <div className="flex items-center gap-3 p-2 bg-white rounded-full shadow-lg">
        {/* Location Input */}
        <div className="flex-1 flex items-center gap-3 px-4">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgb(136,136,136)"
            strokeWidth="2"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <input
            type="text"
            placeholder="Search by location..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full py-3 text-[16px] text-[rgb(44,44,44)] placeholder:text-[rgb(136,136,136)] outline-none"
            style={{ fontFamily: 'Geist, sans-serif' }}
          />
        </div>

        {/* Divider */}
        <div className="w-px h-10 bg-[rgb(199,199,199)]" />

        {/* Property Type Dropdown */}
        <select
          className="px-4 py-3 text-[16px] text-[rgb(44,44,44)] outline-none bg-transparent cursor-pointer"
          style={{ fontFamily: 'Geist, sans-serif' }}
        >
          <option value="">Property Type</option>
          <option value="sale">For Sale</option>
          <option value="rent">For Rent</option>
          <option value="investment">For Investment</option>
          <option value="luxury">Luxury</option>
        </select>

        {/* Search Button */}
        <button
          type="submit"
          className="px-6 py-3 bg-black text-white rounded-full font-light text-[16px] transition-colors hover:bg-[rgb(44,44,44)]"
          style={{ fontFamily: 'Geist, sans-serif' }}
        >
          Search
        </button>
      </div>
    </form>
  );
};
