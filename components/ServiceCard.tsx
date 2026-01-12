interface ServiceCardProps {
  title: string;
  offer: string[];
  infrastructure: string[];
  contact: string;
}

const ServiceCard = ({ title, offer, infrastructure, contact }: ServiceCardProps) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-bold text-gray-900 mb-4 border-b pb-2 border-gray-100">
          {title}
        </h3>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-uksw-blue uppercase tracking-wider mb-2">Oferta</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
            {offer.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {infrastructure.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Infrastruktura</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
              {infrastructure.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-500">
            <span className="font-semibold text-gray-700">Kontakt:</span> {contact}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
