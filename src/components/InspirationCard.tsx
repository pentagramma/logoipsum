'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import type { DesignInspiration } from '@/data/dummy-data';

interface InspirationCardProps {
  inspiration: DesignInspiration;
}

export default function InspirationCard({ inspiration }: InspirationCardProps) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/inspiration/design/${inspiration.id}`)}
      className="block group cursor-pointer"
    >
      <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        {/* Image */}
        <div className="w-full h-[430px] relative">
          <Image
            src={inspiration.image}
            alt={`${inspiration.title} - Related view`}
            width={383}
            height={430}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 group-hover:text-red-500 transition-colors text-base">
            {inspiration.title}
          </h3>
          <p className="text-gray-600 text-sm mt-1 line-clamp-2">
            {inspiration.description}
          </p>
        </div>
      </div>
    </div>
  );
}