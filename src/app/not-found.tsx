'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="py-16 md:py-24">
      <div className="container-custom text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-[hsl(var(--brand-red))]">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[hsl(var(--text-dark))] mt-4">Page not found</h2>
        <p className="text-[hsl(var(--text-light))] mt-4 max-w-lg mx-auto">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className="btn-primary mt-8 inline-block">
          Go back home
        </Link>
      </div>
    </div>
  );
}
