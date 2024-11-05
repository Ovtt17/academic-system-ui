import { FC } from 'react';
import Student from '../../types/student';
import dayjs from 'dayjs';

interface StudentCardProps {
  student: Student;
}

const StudentCard: FC<StudentCardProps> = ({ student }) => {
  const formattedDateOfBirth = dayjs(student.dateOfBirth).format('MM/DD/YYYY');

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-sm cursor-pointer">
      <h3 className="text-2xl font-semibold text-gray-100 mb-2">
        {student.firstName} {student.lastName}
      </h3>
      <p className="text-gray-400 mb-4">Email: {student.email}</p>
      <p className="text-gray-400 mb-4">Phone: {student.phone}</p>
      <p className="text-gray-400 mb-4">Address: {student.address}</p>
      <p className="text-gray-400 mb-4">Gender: {student.gender === 'MALE' ? 'Male' : 'Female'}</p>
      {student.dateOfBirth && (
        <p className="text-gray-400">Date of Birth: {formattedDateOfBirth}</p>
      )}
    </div>
  );
}

export default StudentCard;
