import { clusters } from '@/lib/data';
import InfrastructureCard from '@/components/InfrastructureCard';

export default function Infrastruktura() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Infrastruktura Badawcza
          </h1>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Nasze laboratoria wyposażone są w unikalny w skali kraju sprzęt badawczy.
          </p>
        </div>

        <div className="space-y-16">
          {clusters.map((cluster) => (
            <div key={cluster.id}>
               <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">
                  {cluster.title}
               </h2>
               <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                 {cluster.services.flatMap(service => 
                    service.infrastructure.map((item, idx) => ({ item, serviceTitle: service.title, id: `${service.id}-${idx}` }))
                 ).map(({ item, serviceTitle, id }) => (
                   <div key={id} className="h-full">
                       <InfrastructureCard 
                         name={item} 
                         description={`Obszar: ${serviceTitle}`}
                       />
                   </div>
                 ))}
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
