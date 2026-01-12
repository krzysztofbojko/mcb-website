interface ExpertCardProps {
  name: string;
  role: string;
  email: string;
}

const ExpertCard = ({ name, role, email }: ExpertCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow border border-gray-100 flex flex-col items-center text-center">
      <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center mb-4 text-2xl font-bold text-gray-500">
        {name.split(' ').map(n => n[0]).join('').substring(0, 2)}
      </div>
      <h3 className="text-lg font-bold text-gray-900">{name}</h3>
      <p className="text-sm text-uksw-blue font-medium mb-2">{role}</p>
      <a href={`mailto:${email}`} className="text-sm text-gray-500 hover:text-uksw-blue transition-colors">
        {email}
      </a>
    </div>
  );
};

export default ExpertCard;
