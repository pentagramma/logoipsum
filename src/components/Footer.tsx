'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Logobnw from "../../public/images/logobnw.png";

export default function Footer() {
  const router = useRouter();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Inspiration", path: "/inspiration" },
    { label: "Templates", path: "/templates" },
    { label: "Component Library", path: "/component-library" },
  ];

  const pages = [
    { label: "Landing Page", path: "/landing-page" },
    { label: "Pricing Plan", path: "/pricing-plan" },
    { label: "About Page", path: "/about-page" },
    { label: "Login Page", path: "/login-page" },
    { label: "Signup Page", path: "/signup-page" },
    { label: "Not Found Page", path: "/not-found-page" },
  ];

  const stackLinks = [
    "Webflow",
    "Next.js",
    "Framer",
    "WordPress",
    "MERN",
  ];

  const footerLinks = [
    { label: "Privacy Policy", path: "#" },
    { label: "Submit", path: "#" },
    { label: "Contact Us", path: "#" },
  ];

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="mb-4">
              <Image src={Logobnw} alt="Logo" width={180} height={36} />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              <span className='font-semibold text-white'>Logoipsum</span> is a full-service tech partner delivering innovative software solutions, AI development, and scalable digital products for businesses.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-white mb-6 uppercase">Links</h3>
            <ul className="space-y-4">
              {navItems.map(({ label, path }) => (
                <li key={path}>
                  <span
                    onClick={() => router.push(path)}
                    className="cursor-pointer text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-bold text-white mb-6 uppercase">Pages</h3>
            <ul className="space-y-4">
              {pages.map(({ label, path }) => (
                <li key={path}>
                  <span
                    onClick={() => router.push(path)}
                    className="cursor-pointer text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stack */}
          <div>
            <h3 className="font-bold text-white mb-6 uppercase">Stack</h3>
            <ul className="space-y-4">
              {stackLinks.map((label) => (
                <li key={label}>
                  <span className="text-gray-400 text-sm">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-gray-800 pt-8">
          <div className="flex gap-6 mb-6 md:mb-0">
            {footerLinks.map(({ label, path }) => (
              <span
                key={label}
                onClick={() => router.push(path)}
                className="cursor-pointer text-sm text-gray-400 hover:text-white transition-colors"
              >
                {label}
              </span>
            ))}
          </div>

          <div className="flex justify-between w-full md:w-auto items-center">
            <p className="text-sm text-gray-400 mr-6 md:mr-16">
              Lorem ipsum dolor sit amet consectetur. Diam eget commodo enim nunc integer molestie amet mauris.
            </p>
            <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-colors text-sm font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
