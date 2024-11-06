import EditButton from './EditButton';

interface TotalStudentsProps {
  totalStudents: number;
  onEdit: (section: string) => void;
}

const TotalStudents: React.FC<TotalStudentsProps> = ({ totalStudents, onEdit }) => (
  <div className="bg-gray-800 bg-opacity-70 p-6 rounded-xl shadow-lg text-center relative border border-gray-700 hover:shadow-xl transition duration-200">
    <h2 className="text-xl font-medium text-blue-400">Total Students Enrolled</h2>
    <p className="text-3xl font-semibold text-gray-100 mt-2">{totalStudents}</p>
    <EditButton onClick={() => onEdit('Total Students')} />
  </div>
);

export default TotalStudents;
