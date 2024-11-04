import { FC } from 'react';

interface CourseCardProps {
  id: number;
  name: string;
  description: string;
}

const CourseCard: FC<CourseCardProps> = ({ id, name, description }) => {
  return (
    <div key={id} className="bg-card rounded-lg p-4 flex items-center justify-center text-center hover:bg-gray-600 transition-colors duration-300 cursor-pointer">
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
}

export default CourseCard;