'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { designInspirations } from '@/data/dummy-data';
import Image from 'next/image';
import { use } from 'react';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function DesignDetailPage({ params }: PageProps) {
  // Unwrap the params Promise using React.use()
  const { id } = use(params);
  const inspiration = designInspirations.find((item) => item.id === id);

  const [pageViews, setPageViews] = useState(0);

  useEffect(() => {
    if (inspiration) {
      setPageViews(inspiration.pageViews + 1);
    }
  }, [inspiration]);

  if (!inspiration) {
    notFound();
  }

  const relatedInspirations = designInspirations
    .filter(
      (item) =>
        item.id !== id &&
        (item.category === inspiration.category || item.niche === inspiration.niche)
    )
    .slice(0, 12); // Get 12 items for 3 columns x 4 rows

  return (
    <div className="py-10 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center text-xs font-medium text-gray-500 space-x-2">
          <Link href="/" className="hover:text-red-500 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/inspiration" className="hover:text-red-500 transition-colors">
            Inspiration
          </Link>
          <span>/</span>
          <Link
            href={`/inspiration/${inspiration.category}`}
            className="hover:text-red-500 transition-colors"
          >
            Landing Page
          </Link>
          <span>/</span>
          <span className="text-red-500">{inspiration.id}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Content */}
          <div className="lg:w-1/2 flex flex-col">
            {/* Logo badge */}
            <div className="inline-flex bg-black text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
              {inspiration.id}
            </div>

            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
              {inspiration.title}
            </h1>

            <p className="text-gray-600 mb-6 text-base leading-relaxed">{inspiration.description}</p>

            {/* Visit Website Button */}
            <div className="mb-8">
              <Link
                href="#"
                className="inline-flex items-center px-6 py-3 bg-red-500 text-white rounded-lg text-sm font-semibold hover:bg-red-600 transition-colors space-x-2"
              >
                <span>Visit Website</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="lg:w-1/2">
            <div className="border border-gray-200 rounded-xl overflow-hidden bg-gray-100 mb-8">
              <Image
                src={inspiration.image}
                alt={`${inspiration.title} - Desktop view`}
                width={1389}
                height={665}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:w-1/3 lg:ml-auto">
          <div className="sticky top-24">
            <div className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="text-gray-500 text-xs font-semibold uppercase mb-1">Page Type</h3>
                  <p className="text-red-500 text-sm font-medium capitalize">{inspiration.category}</p>
                </div>
                <div>
                  <h3 className="text-gray-500 text-xs font-semibold uppercase mb-1">Stack</h3>
                  <p className="text-gray-800 text-sm">{inspiration.stack}</p>
                </div>
                <div>
                  <h3 className="text-gray-500 text-xs font-semibold uppercase mb-1">Niche</h3>
                  <p className="text-gray-800 text-sm">{inspiration.niche}</p>
                </div>
              </div>

              {/* Mobile screenshot */}
              <div className="mb-4">
                <div className="aspect-[9/16] max-h-[300px] w-full flex items-center justify-center text-gray-400 bg-gray-100 rounded-xl">
                  Mobile view
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related inspirations */}
        {relatedInspirations.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">More Landing Pages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedInspirations.map((inspiration) => (
                <div key={inspiration.id} className="w-full h-[586px] relative">
                  <Image
                    src={inspiration.image}
                    alt={`${inspiration.title} - Related view`}
                    width={383}
                    height={586}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}