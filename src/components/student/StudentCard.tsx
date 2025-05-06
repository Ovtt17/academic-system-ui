import { FC } from 'react';
import Student from '../../types/student';
import dayjs from 'dayjs';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';

interface StudentCardProps {
  student: Student;
}

const StudentCard: FC<StudentCardProps> = ({ student }) => {
  const formattedDateOfBirth = dayjs(student.dateOfBirth).format('MM/DD/YYYY');

  return (
    <div className="bg-gray-900 hover:ring-2 ring-indigo-500 transition rounded-2xl p-6 shadow-lg w-full max-w-sm space-y-4 text-white">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">
            {student.firstName} {student.lastName}
          </h3>
          <p className="text-sm text-gray-400 capitalize">{student.gender.toLowerCase()}</p>
        </div>
        <div className="rounded-full bg-indigo-600 text-white px-3 py-1 text-xs font-medium">
          ID: {student.id}
        </div>
      </div>

      {/* Contact Info */}
      <div className="space-y-2 text-sm">
        <p className="flex items-center gap-2 text-gray-300">
          <Mail size={16} className="text-indigo-400" /> {student.email}
        </p>
        <p className="flex items-center gap-2 text-gray-300">
          <Phone size={16} className="text-indigo-400" /> {student.phone || 'Not specified'}
        </p>
        <p className="flex items-center gap-2 text-gray-300">
          <MapPin size={16} className="text-indigo-400" /> {student.address}
        </p>
        {student.dateOfBirth && (
          <p className="flex items-center gap-2 text-gray-300">
            <Calendar size={16} className="text-indigo-400" /> {formattedDateOfBirth}
          </p>
        )}
      </div>
    </div>
  );
};

export default StudentCard;