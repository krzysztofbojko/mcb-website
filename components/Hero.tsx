import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
        {/* Abstract background pattern - kept subtle but transparent */}
      <div className="absolute inset-0 opacity-10">
          <svg className="absolute left-full transform -translate-x-1/2 -translate-y-1/2 z-0" width="404" height="784" fill="none" viewBox="0 0 404 784">
            <defs>
              <pattern id="56409614-3d62-4985-9a10-7ca758a8f4f0" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" className="text-gray-900" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)" />
          </svg>
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl drop-shadow-lg">
          <span className="block">Multidyscyplinarne</span>
          <span className="block text-uksw-blue">Centrum Badawcze UKSW</span>
        </h1>
        <p className="mt-6 text-xl text-gray-800 max-w-3xl drop-shadow-sm font-bold bg-white/30 backdrop-blur-sm p-4 rounded-lg">
          Science to Business – Nowatorski ekosystem transferu technologii
        </p>
        <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
          <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
            <Link href="/oferta" className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-uksw-blue hover:bg-uksw-blue-hover md:py-4 md:text-lg md:px-10 transition-colors shadow-lg">
              Zobacz Ofertę
            </Link>
            <Link href="/kontakt" className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-uksw-blue bg-white/90 hover:bg-white md:py-4 md:text-lg md:px-10 transition-colors shadow-lg backdrop-blur-sm">
              Skontaktuj się
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
