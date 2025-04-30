import { useState } from 'react';
import { filterCategories } from '@/data/dummy-data';

interface FilterSidebarProps {
  selectedFilters: Record<string, string[]>;
  onFilterChange: (category: string, value: string) => void;
}

type FilterOption = {
  id: string;
  label: string;
  count?: number;
  color?: string;
};

export default function FilterSidebar({ selectedFilters, onFilterChange }: FilterSidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    Categories: true,
    Stack: true,
    Style: true,
    Color: true,
    Niche: true,
  });

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <div className="w-full lg:max-w-[220px]">
      <div className="p-4 bg-white border border-gray-200 rounded-md">
        <h2 className="text-md font-medium mb-4 text-gray-600">Filter Resource</h2>

        {filterCategories.map((category) => (
          <div key={category.name} className="mb-4">
            <div
              className="flex justify-between items-center cursor-pointer py-2"
              onClick={() => toggleCategory(category.name)}
            >
              <h3 className="font-medium text-sm text-[hsl(var(--text-dark))]">{category.name}</h3>
              <span>
                {expandedCategories[category.name] ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-400"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-400"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                )}
              </span>
            </div>

            {expandedCategories[category.name] && (
              <div className="mt-1 space-y-2">
                {category.options.map((option: FilterOption) => (
                  <div key={option.id} className="flex items-center text-sm">
                    {category.name === "Color" && 'color' in option ? (
                      <span
                        className="w-4 h-4 rounded-full mr-2 inline-block border border-gray-200"
                        style={{ backgroundColor: option.color }}
                      />
                    ) : null}
                    <label className="flex items-center text-gray-600 cursor-pointer hover:text-[hsl(var(--brand-red))]">
                      <span>{option.label}</span>
                      {option.count !== undefined && (
                        <span className="ml-1 text-xs text-gray-400">({option.count})</span>
                      )}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
