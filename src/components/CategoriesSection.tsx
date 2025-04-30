'use client';

import CategoryCard from './CategoryCard';
import { inspirationCategories } from '@/data/dummy-data';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function CategoriesSection() {
  const router = useRouter();

  useEffect(() => {
    console.log(inspirationCategories);
    console.log("inspirationCategories");
  }, []);

  return (
    <section className="py-1 mb-2">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-heading">
            Popular <span className="text-[hsl(var(--brand-red))]">Inspiration</span> Categories
          </h2>
        </div>

        {/* Unified grid for all categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {inspirationCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => router.push(`/inspiration/${category.id}`)}
              className="block cursor-pointer"
            >
              <CategoryCard
                id={category.id}
                title={category.title}
                description={category.description}
                icon={category.icon}
                imageUrl={category.image}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => router.push('/inspiration')}
            className="btn-primary inline-flex items-center gap-2"
          >
            Explore all inspiration
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}