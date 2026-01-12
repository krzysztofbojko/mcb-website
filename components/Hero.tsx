import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
        {/* Abstract background pattern */}
      <div className="absolute inset-0 opacity-20">
         <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800" />
          <svg className="absolute left-full transform -translate-x-1/2 -translate-y-1/2 z-0" width="404" height="784" fill="none" viewBox="0 0 404 784">
            <defs>
              <pattern id="56409614-3d62-4985-9a10-7ca758a8f4f0" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)" />
          </svg>
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          <span className="block">Science to Business</span>
          <span className="block text-uksw-blue">Nowatorski ekosystem transferu technologii</span>
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Multidyscyplinarne Centrum Badawcze UKSW to ośrodek łączący naukę z biznesem.
          Tworzymy nowatorskie technologie dla gospodarki, przemysłu i ochrony środowiska.
        </p>
        <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
          <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
            <Link href="/oferta" className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-uksw-blue hover:bg-uksw-blue-hover md:py-4 md:text-lg md:px-10 transition-colors">
              Zobacz Ofertę
            </Link>
            <Link href="/kontakt" className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-uksw-blue bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-colors">
              Skontaktuj się
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
