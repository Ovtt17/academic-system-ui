import { FC } from 'react';
import { TopStudent } from '../../types/dashboardData';

interface TopStudentsProps {
  students: TopStudent[];
}

const TopStudents: FC<TopStudentsProps> = ({ students }) => {
  return (
    <div className="bg-card p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Alumnos con Mejor Promedio</h2>
      <ul className="text-gray-300 space-y-3">
        {students
          .sort((a, b) => b.average - a.average)
          .slice(0, 10)
          .map((student) => (
            <li key={student.id} className="bg-gray-700 rounded-md p-2 hover:bg-gray-600 transition-colors duration-300">
              <strong>{student.name}</strong> - Promedio: {student.average}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default TopStudents;