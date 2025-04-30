// components/CategoriesSection.jsx
'use client';

import CategoryCard from './CategoryCard';
import { inspirationCategories } from '@/data/dummy-data';
import Link from 'next/link';
import { useEffect } from 'react';

export default function CategoriesSection() {
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
            <Link href={`/inspiration/${category.id}`} key={category.id} className="block">
              <CategoryCard
                id={category.id}
                title={category.title}
                description={category.description}
                icon={category.icon}
                imageUrl={category.image}
              />
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/inspiration" className="btn-primary inline-flex items-center gap-2">
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
          </Link>
        </div>
      </div>
    </section>
  );
}