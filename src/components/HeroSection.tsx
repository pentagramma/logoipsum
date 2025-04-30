'use client';

import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const router = useRouter();

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container-custom text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--text-dark))] mx-auto">
          Build Scalable SaaS Apps <span className="text-[hsl(var(--brand-red))]">10x Faster</span> – Without Reinventing the Wheel.
        </h1>
        <p className="text-[hsl(var(--text-light))] text-2xl mt-8 max-w-2xl mx-auto">
          Built for creators, by experts—explore proven resources from
        </p>
        <p className="text-[hsl(var(--text-light))] text-2xl max-w-2xl mx-auto">
          SaaS leaders who know what works.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 p-2">
          <button
            onClick={() => router.push('/resources')}
            className="btn-primary flex items-center justify-center gap-2"
          >
            Explore Free Resources
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
          <button
            onClick={() => router.push('/contact')}
            className="btn-secondary flex items-center justify-center"
          >
            Contact Our Experts
          </button>
        </div>
      </div>
      {/* Background pattern will be handled with CSS */}
      <div className="absolute inset-0 -z-10 bg-pattern-light opacity-10" />
    </section>
  );
}