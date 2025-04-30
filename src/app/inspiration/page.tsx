'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { designInspirations } from '@/data/dummy-data';
import FilterSidebar from '@/components/FilterSidebar';
import NewsletterSubscribe from '@/components/NewsletterSubscribe';

export default function InspirationPage() {
  const router = useRouter();
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({
    categories: [],
    stack: [],
    style: [],
    color: [],
    niche: [],
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false); // State for mobile filter toggle

  useEffect(() => {
    console.log('Router mounted:', router);
  }, [router]);

  const handleFilterChange = (category: string, value: string) => {
    setSelectedFilters((prev) => {
      const current = prev[category] || [];
      if (current.includes(value)) {
        return { ...prev, [category]: current.filter((item) => item !== value) };
      }
      return { ...prev, [category]: [...current, value] };
    });
  };

  const filteredInspirations = designInspirations.filter((inspiration) => {
    if (Object.values(selectedFilters).every((filters) => filters.length === 0)) {
      return true;
    }
    const matchesCategory =
      selectedFilters.categories.length === 0 || selectedFilters.categories.includes(inspiration.category);
    const matchesStack =
      selectedFilters.stack.length === 0 || selectedFilters.stack.includes(inspiration.stack.toLowerCase());
    const matchesStyle =
      selectedFilters.style.length === 0 ||
      selectedFilters.style.includes(inspiration.style.toLowerCase().replace(' ', '-'));
    const matchesNiche =
      selectedFilters.niche.length === 0 || selectedFilters.niche.includes(inspiration.niche.toLowerCase());
    const matchesColor =
      selectedFilters.color.length === 0 ||
      inspiration.colorScheme.some((color) => selectedFilters.color.includes(color.toLowerCase()));
    return matchesCategory && matchesStack && matchesStyle && matchesNiche && matchesColor;
  });

  const handleCardClick = (id: string) => {
    console.log('Navigating to:', `/inspiration/design/${id}`, 'Router ready:', router);
    router.push(`/inspiration/design/${id}`);
  };

  const toggleFilterSidebar = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="py-4 sm:py-6 mt-16 sm:mt-20 min-h-screen">
      <div className="container-custom px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 relative">
          {/* Desktop Filter Sidebar */}
          <div className="hidden lg:block w-[220px] flex-shrink-0">
            <div className="sticky top-20">
              <FilterSidebar selectedFilters={selectedFilters} onFilterChange={handleFilterChange} />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-10">
              <div className="flex-1">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[hsl(var(--text-dark))] mb-4 sm:mb-6">
                  Top <span className="text-[hsl(var(--brand-red))]">SaaS Web Design</span> <br /> Ideas to Inspire You
                </h1>
                <p className="text-[hsl(var(--text-light))] text-base sm:text-lg lg:text-xl leading-relaxed">
                  Explore an expertly crafted showcase of top-tier SaaS landing pages from across the web. <br className="hidden sm:block" />
                  Effortlessly discover design inspiration tailored to your needs using our intuitive{' '}
                  <button
                    onClick={toggleFilterSidebar}
                    className="text-[hsl(var(--brand-red))] underline lg:hidden inline"
                  >
                    filters
                  </button>
                  <span className="hidden lg:inline text-[hsl(var(--brand-red))] underline">filters</span>.
                </p>
              </div>
              <div className="mt-6 sm:mt-0 sm:w-[280px] lg:w-[300px] sm:ml-4">
                <NewsletterSubscribe />
              </div>
            </div>

            {/* Mobile Filter Sidebar (Collapsible) */}
            <div className={`lg:hidden mb-6 transition-all duration-300 ${isFilterOpen ? 'block' : 'hidden'}`}>
              <FilterSidebar selectedFilters={selectedFilters} onFilterChange={handleFilterChange} />
              <button
                onClick={toggleFilterSidebar}
                className="mt-4 w-full btn-primary text-center"
              >
                Apply Filters
              </button>
            </div>

            {/* Inspiration Grid */}
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6 bg-opacity-65">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {filteredInspirations.map((inspiration) => (
                  <div
                    key={inspiration.id}
                    className="relative w-full h-[399px] sm:w-[275px] sm:h-[399px] cursor-pointer mx-auto"
                    onClick={() => handleCardClick(inspiration.id)}
                  >
                    <Image
                      src={inspiration.image}
                      alt={inspiration.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-lg"
                    />
                  </div>
                ))}
              </div>
              {filteredInspirations.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-base sm:text-lg text-[hsl(var(--text-light))]">
                    No inspirations match your selected filters.
                  </p>
                  <button
                    onClick={() =>
                      setSelectedFilters({
                        categories: [],
                        stack: [],
                        style: [],
                        color: [],
                        niche: [],
                      })
                    }
                    className="mt-4 btn-primary"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
              <div className="mt-8 text-center">
                <button className="inline-flex items-center text-[hsl(var(--brand-red))] font-medium text-sm">
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="mr-1"
                  >
                    <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.2" />
                    <path
                      d="M12 4V12L15 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}