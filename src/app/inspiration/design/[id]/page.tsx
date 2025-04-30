'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { designInspirations } from '@/data/dummy-data';
import Image from 'next/image';
import { use } from 'react';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function DesignDetailPage({ params }: PageProps) {
  const { id } = use(params);
  const inspiration = designInspirations.find((item) => item.id === id);
  const router = useRouter();

  const [pageViews, setPageViews] = useState(0);
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');

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
    .slice(0, 12);

  return (
    <div className="py-10 bg-gray-50 bg-opacity-70">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* View Switcher */}
        <div className="flex justify-end items-center mb-4">
          <button
            className={`px-4 py-2 text-sm font-medium border rounded-l-md ${
              viewMode === 'desktop' ? 'bg-red-500 text-white' : 'bg-white text-gray-700'
            }`}
            onClick={() => setViewMode('desktop')}
          >
            Desktop
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium border-t border-b border-r rounded-r-md ${
              viewMode === 'mobile' ? 'bg-red-500 text-white' : 'bg-white text-gray-700'
            }`}
            onClick={() => setViewMode('mobile')}
          >
            Mobile
          </button>
        </div>

        {/* Breadcrumb */}
        <div className="mb-8 flex items-center text-xs font-medium text-gray-500 space-x-2">
            <button onClick={() => router.push('/')} className="hover:text-red-500 transition-colors">Home</button>
            <span>/</span>
            <button onClick={() => router.push('/inspiration')} className="hover:text-red-500 transition-colors">Inspiration</button>
            <span>/</span>
            <button onClick={() => router.push(`/inspiration/${inspiration.category}`)} className="hover:text-red-500 transition-colors">
              Landing Page
            </button>
            <span>/</span>
            <span className="text-red-500">{inspiration.id}</span>
          </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Content */}
          <div className="lg:w-1/2 flex flex-col">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 shadow-sm border border-red-300">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {inspiration.id.toUpperCase()}
            </div>

            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{inspiration.title}</h1>
            <p className="text-gray-600 mb-6 text-base leading-relaxed">{inspiration.description}</p>

            <div className="mb-8 space-y-6">
         {/* Visit Website Button */}
          <button
          onClick={() => router.push('https://example.com')}
          className="inline-flex items-center px-6 py-3 bg-red-500 text-white rounded-lg text-sm font-semibold hover:bg-red-600 transition-colors space-x-2"
        >
          <span>Visit Website</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>


            {/* Info Grid */}
            <div className="border border-orange-500 rounded-xl overflow-hidden">
              <div className="grid grid-cols-3 divide-x divide-orange-500 text-center text-sm">
                <div className="py-4 px-2">
                  <p className="text-gray-500 font-semibold uppercase text-xs mb-1">Page Type</p>
                  <p className="text-gray-800 font-medium capitalize">{inspiration.category}</p>
                </div>
                <div className="py-4 px-2">
                  <p className="text-gray-500 font-semibold uppercase text-xs mb-1">Niche</p>
                  <p className="text-gray-800 font-medium">{inspiration.niche}</p>
                </div>
                <div className="py-4 px-2">
                  <p className="text-gray-500 font-semibold uppercase text-xs mb-1">Stack</p>
                  <p className="text-gray-800 font-medium">{inspiration.stack}</p>
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Right Content - Responsive Image */}
          <div className="lg:w-1/2">
            <div
              className={`border border-gray-200 rounded-xl overflow-hidden bg-gray-100 mb-8 ${
                viewMode === 'mobile' ? 'aspect-[9/16] max-w-xs mx-auto' : ''
              }`}
            >
              <Image
                src={inspiration.image}
                alt={`${inspiration.title} - ${viewMode} view`}
                width={viewMode === 'mobile' ? 360 : 1389}
                height={viewMode === 'mobile' ? 640 : 665}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
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
            </div>
          </div>
        </div>

        {/* Related Inspirations */}
        {relatedInspirations.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">More Landing Pages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedInspirations.map((item) => (
                <div key={item.id} className="w-full h-[586px] relative">
                  <Image
                    src={item.image}
                    alt={`${item.title} - Related view`}
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
