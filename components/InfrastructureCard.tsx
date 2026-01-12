interface InfrastructureCardProps {
    name: string;
    description?: string;
}

const InfrastructureCard = ({ name, description }: InfrastructureCardProps) => {
    return (
        <div className="bg-white p-4 rounded shadow-sm border-l-4 border-uksw-blue">
            <h4 className="text-md font-bold text-gray-900">{name}</h4>
             {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}
        </div>
    );
};

export default InfrastructureCard;
