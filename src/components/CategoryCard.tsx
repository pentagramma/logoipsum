import Image from 'next/image';
import Link from 'next/link';

interface CategoryCardProps {
  id: string;
  title: string;
  description: string;
  icon: any; // Allow for both string emoji and imported icon components/images
  imageUrl?: any; // Allow for both string paths and imported StaticImageData
}

export default function CategoryCard({ id, title, description, icon, imageUrl }: CategoryCardProps) {
  // Check if icon is a string (emoji) or an imported component/image
  const isIconString = typeof icon === 'string';
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="p-6 flex flex-col justify-center items-center min-h-[200px]">
        {/* Render icon based on its type */}
        <div className="mb-4">
          {isIconString ? (
            // Render string emoji with proper sizing
            <div className="text-4xl">{icon}</div>
          ) : (
            // Render imported icon image with proper sizing
            <div className="w-10 h-10 relative">
              <Image
                src={icon}
                alt={`${title} icon`}
                fill
                sizes="40px"
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          )}
        </div>
        <h3 className="text-2xl font-semibold text-[hsl(var(--text-dark))] mb-2 text-center">{title}</h3>
        <p className="text-[hsl(var(--text-light))] text-lg text-center">{description}</p>
      </div>
     
      {/* Display preview image if available */}
      {imageUrl ? (
        <div className="h-48 w-full relative">
          <Image
            src={imageUrl}
            alt={`${title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
      ) : (
        <div className="h-48 w-full bg-gray-100 flex items-center justify-center text-gray-400">
          {title} Preview
        </div>
      )}
    </div>
  );
}