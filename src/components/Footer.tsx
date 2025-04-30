import Link from 'next/link';
import Image from 'next/image';
import Logobnw from "../../public/images/logobnw.png";

export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--footer-bg))] text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Image src={Logobnw} alt="Logo" width={262.6} height={52} />
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Logoipsum is a full-service tech partner specializing in innovative software solutions, AI development, and scalable digital products for businesses.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">LINKS</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/inspiration" className="text-gray-400 hover:text-white transition-colors">
                  Inspiration
                </Link>
              </li>
              <li>
                <Link href="/templates" className="text-gray-400 hover:text-white transition-colors">
                  Templates
                </Link>
              </li>
              <li>
                <Link href="/component-library" className="text-gray-400 hover:text-white transition-colors">
                  Component Library
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">PAGES</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/landing-page" className="text-gray-400 hover:text-white transition-colors">
                  Landing Page
                </Link>
              </li>
              <li>
                <Link href="/pricing-plan" className="text-gray-400 hover:text-white transition-colors">
                  Pricing Plan
                </Link>
              </li>
              <li>
                <Link href="/about-page" className="text-gray-400 hover:text-white transition-colors">
                  About Page
                </Link>
              </li>
              <li>
                <Link href="/login-page" className="text-gray-400 hover:text-white transition-colors">
                  Login Page
                </Link>
              </li>
              <li>
                <Link href="/signup-page" className="text-gray-400 hover:text-white transition-colors">
                  Signup Page
                </Link>
              </li>
              <li>
                <Link href="/not-found-page" className="text-gray-400 hover:text-white transition-colors">
                  Not Found Page
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">STACK</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Webflow
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Next.js
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Framer
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  WordPress
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  MERN
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            <span>Privacy Policy</span>
            <span className="mx-2">|</span>
            <span>Submit</span>
            <span className="mx-2">|</span>
            <span>Contact Us</span>
          </div>
          <div className="text-gray-400 text-sm">
            Lorem ipsum dolor sit amet consectetur. Diam eget commodo enim nunc integer nolestie amet mauris.
          </div>
        </div>
      </div>
    </footer>
  );
}