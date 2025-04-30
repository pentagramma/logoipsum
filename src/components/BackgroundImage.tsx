import React from 'react';
import Image from 'next/image';
import left from '../../public/images/left.png'
import right from '../../public/images/right.png'

interface BackgroundImageProps {
  children: React.ReactNode;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ children }) => {
  return (
    <div className="relative w-full h-full">
      {/* Left background image fixed to top-left */}
      <div className="fixed top-0 left-0 w-150 h-150 -z-10">
        <Image
          src={left}
          alt="Left background decoration"
          width={550}
          height={550}
          priority
          className="object-contain opacity-100"
          quality={100}
        />
      </div>
      
      {/* Right background image fixed to top-right */}
      <div className="fixed top-0 right-0 w-150 h-150 z-[-10]">
        <Image
          src={right}
          alt="Right background decoration"
          width={550}
          height={550}
          priority
          className="object-contain opacity-100"
          quality={100}
        />
      </div>
      
      {/* Your actual content */}
      {children}
    </div>
  );
};

export default BackgroundImage;