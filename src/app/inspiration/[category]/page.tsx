import Link from 'next/link';
import { inspirationCategories } from '@/data/dummy-data';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return inspirationCategories.map((category) => ({
    category: category.id,
  }));
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = inspirationCategories.find((c) => c.id === params.category);

  if (!category) {
    notFound();
  }

  return (
    <div className="py-12">
      <div className="container-custom">
        <div className="mb-8">
          <Link href="/inspiration" className="text-[hsl(var(--brand-red))] flex items-center gap-2">
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
              className="rotate-180"
            >
              <path d="m9 18 6-6-6-6"/>
            </svg>
            Back to categories
          </Link>
        </div>

        <div className="mb-12">
          {/* <div className="text-4xl mb-4">{category.icon}</div> */}
          <h1 className="section-heading mb-4">{category.title}</h1>
          <p className="section-subheading">{category.description}</p>
        </div>

        <div className="bg-gray-100 p-12 rounded-lg text-center">
          <p className="text-lg text-[hsl(var(--text-light))]">
            More detailed inspirations will be added soon.
          </p>
          <Link href="/inspiration" className="btn-primary mt-4 inline-block">
            Go back to inspiration categories
          </Link>
        </div>
      </div>
    </div>
  );
}
