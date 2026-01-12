import { generalInfo } from '@/lib/data';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start">
            <p className="text-center text-base text-gray-400">
              &copy; {new Date().getFullYear()} Multidyscyplinarne Centrum Badawcze UKSW. Wszelkie prawa zastrzeżone.
            </p>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <div className="text-center md:text-right text-gray-400 text-sm">
              <p>{generalInfo.address}</p>
              <p>Email: <a href={`mailto:${generalInfo.email}`} className="text-uksw-blue hover:text-white transition-colors">{generalInfo.email}</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
