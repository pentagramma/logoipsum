'use client';

  import { useState, useEffect } from 'react';
  import { useRouter } from 'next/navigation'; // Use next/navigation for App Router
  import Link from 'next/link';
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
      if (router) { // Simplified check; router is always defined in next/navigation
        router.push(`/inspiration/design/${id}`);
      }
    };

    return (
      <div className="py-4 mt-20">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8 relative">
            <div className="hidden lg:block w-[220px]">
              <div className="sticky top-20">
                <FilterSidebar selectedFilters={selectedFilters} onFilterChange={handleFilterChange} />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row mb-10 items-center justify-between">
                <div className="flex-1 w-[1/2]">
                  <h1 className="text-5xl mb-10 font-bold text-[hsl(var(--text-dark))]">
                    Top{' '}
                    <span className="text-[hsl(var(--brand-red))]">SaaS Web Design</span>{' '}
                    <br />
                    Ideas to Inspire You
                  </h1>
                  <p className="text-[hsl(var(--text-light))] mt-2 text-xl">
                    Explore an expertly crafted showcase of top-tier<br /> SaaS landing pages from across the web.<br /> Effortlessly
                    discover design inspiration tailored <br />to your needs using our intuitive{' '}
                    <button className="text-[hsl(var(--brand-red))] underline">
                      filters
                    </button>
                    .
                  </p>
                </div>
                <div className="md:w-[300px] w-full md:ml-4">
                  <NewsletterSubscribe />
                </div>
              </div>
              <div className="lg:hidden mb-6">
                <FilterSidebar selectedFilters={selectedFilters} onFilterChange={handleFilterChange} />
              </div>
              <div className="bg-gray-50 rounded-lg p-6 bg-opacity-65">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filteredInspirations.map((inspiration) => (
                    <div
                      key={inspiration.id}
                      className="relative w-[275px] h-[399px] cursor-pointer"
                      onClick={() => handleCardClick(inspiration.id)}
                    >
                      <Image
                        src={inspiration.image}
                        alt={inspiration.title}
                        fill // Use 'fill' instead of layout="fill" for Next.js 13+
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                  ))}
                </div>
                {filteredInspirations.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-lg text-[hsl(var(--text-light))]">
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
                    Visit Loading more...
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }