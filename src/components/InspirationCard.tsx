import Link from 'next/link';
import type { DesignInspiration } from '@/data/dummy-data';

interface InspirationCardProps {
  inspiration: DesignInspiration;
}

export default function InspirationCard({ inspiration }: InspirationCardProps) {
  return (
    <Link
      href={`/inspiration/design/${inspiration.id}`}
      className="block group"
    >
      <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="aspect-video w-full relative bg-gray-100 overflow-hidden">
          <div className="h-full w-full flex items-center justify-center text-gray-400">
            {inspiration.title}
          </div>

          {/* Views indicator */}
          <div className="absolute bottom-2 left-2 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3 h-3 mr-1 text-[hsl(var(--brand-red))]"
            >
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            {inspiration.pageViews}
          </div>
        </div>

        <div className="p-3">
          <h3 className="font-medium text-[hsl(var(--text-dark))] line-clamp-1 group-hover:text-[hsl(var(--brand-red))] transition-colors text-sm">
            {inspiration.title}
          </h3>
          <p className="text-xs text-[hsl(var(--text-light))] mt-1 line-clamp-2">
            {inspiration.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
