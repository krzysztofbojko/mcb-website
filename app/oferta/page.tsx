import { clusters } from '@/lib/data';
import ServiceCard from '@/components/ServiceCard';

export default function Oferta() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Oferta i Usługi
          </h1>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Kompleksowe usługi badawczo-rozwojowe dla przemysłu i nauki.
          </p>
        </div>

        <div className="space-y-24">
          {clusters.map((cluster) => (
            <section key={cluster.id} id={cluster.id} className="scroll-mt-24">
              <div className="border-l-4 border-uksw-blue pl-6 mb-8">
                <h2 className="text-3xl font-bold text-gray-900">{cluster.title}</h2>
                <p className="mt-2 text-lg text-gray-600">{cluster.description}</p>
              </div>
              
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                {cluster.services.map((service) => (
                  <ServiceCard 
                    key={service.id}
                    title={service.title}
                    offer={service.offer}
                    infrastructure={service.infrastructure}
                    contact={service.contact}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
