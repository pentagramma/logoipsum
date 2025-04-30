'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import Logo from '../../public/images/Logo.png';
import type { StaticImageData } from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const logoImage: StaticImageData = Logo;

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Animation variants for the side menu
  const menuVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
    closed: {
      x: '100%',
      opacity: 0,
      transition: { duration: 0.3, ease: 'easeIn' },
    },
  };

  // Animation variants for the overlay
  const overlayVariants = {
    open: { opacity: 0.6, transition: { duration: 0.3 } },
    closed: { opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <header className="h-[52px] mt-[80px] border-gray-100 relative">
      <div className="flex justify-between items-center max-w-[1170px] mx-auto px-4">
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
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center justify-center p-2 rounded-md hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-[hsl(var(--text-dark))]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Side Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black z-40"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={closeMenu}
            />

            {/* Side Menu */}
            <motion.div
              className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 flex flex-col pt-16 px-6"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <button
                onClick={closeMenu}
                className="absolute top-4 right-4 p-2 rounded-md hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-[hsl(var(--text-dark))]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <nav className="flex flex-col space-y-6">
                <div
                  onClick={() => {
                    router.push('/');
                    closeMenu();
                  }}
                  className="text-[hsl(var(--text-dark))] text-lg font-medium hover:text-[hsl(var(--brand-red))] transition-colors cursor-pointer"
                >
                  Home
                </div>
                <div
                  onClick={() => {
                    router.push('/inspiration');
                    closeMenu();
                  }}
                  className="text-[hsl(var(--text-dark))] text-lg font-medium hover:text-[hsl(var(--brand-red))] transition-colors cursor-pointer"
                >
                  Inspiration
                </div>
                <button
                  onClick={() => {
                    router.push('/subscribe');
                    closeMenu();
                  }}
                  className="bg-[hsl(var(--brand-red))] text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity text-lg font-medium text-left"
                >
                  Subscribe
                </button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}