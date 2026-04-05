import React from 'react';

interface HeroSectionProps {
  onSearch?: (query: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSearch }) => {
  const [query, setQuery] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <section className="bg-white border-b border-[rgb(199,199,199)] py-12">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-20">
        {/* Header */}
        <div className="mb-8">
          <h1
            className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold text-[rgb(44,44,44)] uppercase mb-2"
            style={{ fontFamily: 'Geist, sans-serif' }}
          >
            Properties <span className="text-[rgb(102,252,117)]">Listing</span>
          </h1>
          <p
            className="text-[16px] text-[rgb(136,136,136)] font-light max-w-[600px]"
            style={{ fontFamily: 'Geist, sans-serif' }}
          >
            Browse and filter through our exclusive collection of premium real estate properties
          </p>
        </div>

        {/* Location Search Bar */}
        <form onSubmit={handleSubmit} className="max-w-[600px]">
          <div className="flex items-center gap-3 p-2 bg-[rgb(243,243,243)] rounded-full">
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
                className="w-full py-3 text-[16px] text-[rgb(44,44,44)] placeholder:text-[rgb(136,136,136)] outline-none bg-transparent"
                style={{ fontFamily: 'Geist, sans-serif' }}
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-black text-white rounded-full font-light text-[16px] transition-colors hover:bg-[rgb(44,44,44)]"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
