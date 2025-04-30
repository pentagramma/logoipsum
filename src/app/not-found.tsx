'use client';

import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1),_rgba(0,0,0,0.05))] opacity-50 -z-10" />

      {/* Main Content */}
      <div className="text-center px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <h1 className="text-7xl sm:text-9xl font-extrabold text-gray-900 tracking-tight">
          404
        </h1>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-800">
          Oops! Page Not Found
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
          It looks like this page got lost in the creative process. Let’s get you back to exploring stunning designs and inspiration.
        </p>

        {/* Call to Action */}
        <div className="mt-10">
          <button
            onClick={() => router.push('/')}
            className="inline-flex items-center px-6 py-3 bg-[hsl(var(--brand-red))] text-white rounded-lg text-base font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-sm"
          >
            Back to Home
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12h18m-7 7l7-7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="mt-12 flex justify-center">
        <svg
          className="w-32 h-32 sm:w-40 sm:h-40 text-gray-200"
          fill="none"
          viewBox="0 0 120 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="4" opacity="0.3" />
          <path
            d="M60 20v80M20 60h80"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.5"
          />
        </svg>
      </div>
    </div>
  );
}