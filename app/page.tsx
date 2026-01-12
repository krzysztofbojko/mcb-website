import Hero from '@/components/Hero';
import Link from 'next/link';
import { clusters } from '@/lib/data';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image Layer */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/images/tlo-glowna.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15 // Adjust opacity for "transparent" effect
        }}
      />

      {/* Content Layer */}
      <div className="relative z-10">
        <div className="bg-white/80 backdrop-blur-sm"> {/* Optional: slight overlay for text readability */}
          <Hero />
          
          {/* O nas w skrócie */}
          <section className="py-16 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                O nas
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                MCB UKSW to nowoczesny ośrodek badawczy łączący potencjał naukowy z potrzebami biznesu. 
                Dysponujemy infrastrukturą o wartości ponad 90 mln zł i współpracujemy z liderami przemysłu, takimi jak KGHM czy PGE.
              </p>
            </div>
          </section>

          {/* Szybki wybór obszaru */}
          <section className="py-16 bg-gray-50/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
                Nasze Obszary Działania
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {clusters.map((cluster) => (
                  <Link 
                    key={cluster.id} 
                    href={`/oferta#${cluster.id}`}
                    className="group bg-white/90 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 p-6 flex flex-col items-center text-center border border-gray-100 hover:border-uksw-blue"
                  >
                    <div className="h-12 w-12 bg-uksw-blue/10 text-uksw-blue rounded-full flex items-center justify-center mb-4 group-hover:bg-uksw-blue group-hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-uksw-blue transition-colors">
                      {cluster.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      {cluster.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>

           {/* Call to Action */}
           <section className="py-16 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-uksw-blue/95 rounded-2xl shadow-xl overflow-hidden">
                    <div className="px-6 py-12 md:p-12 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Masz pytania lub szukasz partnera do badań?</h2>
                        <p className="text-uksw-blue-light mb-8 max-w-2xl mx-auto">Skontaktuj się z naszym zespołem ekspertów i dowiedz się, jak możemy wesprzeć Twój biznes.</p>
                        <Link href="/kontakt" className="inline-block bg-white text-uksw-blue font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
                            Skontaktuj się z nami
                        </Link>
                    </div>
                </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}