import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="bg-red-50 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
          <div className="md:w-1/2 z-10">
            <h2 className="text-3xl font-bold text-[hsl(var(--text-dark))] mb-4">
              Ready to <span className="text-[hsl(var(--brand-red))]">Build Your SaaS</span> Without the Headaches?
            </h2>
            <p className="text-[hsl(var(--text-light))] mb-6">
              Join 2,000+ teams who design smarter and faster with our handpicked resources.
            </p>
            <Link href="/resources" className="btn-primary inline-block">
              Start Exploring Resources
            </Link>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 z-10">
            {/* Image will be added later */}
          </div>

          {/* Abstract background shapes */}
          <div className="absolute right-0 bottom-0 w-2/3 h-2/3 opacity-10 bg-pattern-light" />
        </div>
      </div>
    </section>
  );
}
