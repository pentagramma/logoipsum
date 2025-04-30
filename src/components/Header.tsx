'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Logo from '../../public/images/Logo.png';
import type { StaticImageData } from 'next/image';

const logoImage: StaticImageData = Logo;

export default function Header() {
  const router = useRouter();

  return (
    <header className="h-[52px] mt-[80px] border-gray-100">
      <div className="flex justify-between items-center max-w-[1170px] mx-auto">
        <div
          onClick={() => router.push('/')}
          className="flex items-center cursor-pointer"
        >
          <Image src={logoImage} alt="Logo" width={262.6} height={52} />
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <div
            onClick={() => router.push('/')}
            className="text-[hsl(var(--text-dark))] hover:text-[hsl(var(--brand-red))] transition-colors cursor-pointer"
          >
            Home
          </div>
          <div
            onClick={() => router.push('/inspiration')}
            className="text-[hsl(var(--text-dark))] hover:text-[hsl(var(--brand-red))] transition-colors cursor-pointer"
          >
            Inspiration
          </div>
          <button
            onClick={() => router.push('/subscribe')}
            className="bg-[hsl(var(--brand-red))] text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
          >
            Subscribe
          </button>
        </nav>
        <button className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </header>
  );
}