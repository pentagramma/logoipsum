import { features } from '@/data/dummy-data';
import Image from "next/image";

export default function FeatureSection() {
  return (
    <section className="py-16 bg-gray-50 bg-opacity-70">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Why <span className="text-[hsl(var(--brand-red))]">Logoipsum Hub</span> is Your Best Choice
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white p-8 rounded-lg shadow-sm">
              <Image
                src={feature.icon}
                alt="Feature icon"
                width={40} // Adjust width as needed (equivalent to text-4xl size, ~3rem or 48px)
                height={40} // Adjust height as needed
                className="mb-4"
              />
              <h3 className="text-xl font-semibold text-[hsl(var(--text-dark))] mb-3">{feature.title}</h3>
              <p className="text-[hsl(var(--text-light))]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
