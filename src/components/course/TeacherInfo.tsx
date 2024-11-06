import EditButton from './EditButton';

interface TeacherInfoProps {
  profilePicture: string;
  fullName: string;
  email: string;
  department: string;
  specialization: string;
  onEdit: (section: string) => void;
}

const TeacherInfo: React.FC<TeacherInfoProps> = ({ profilePicture, fullName, email, department, specialization, onEdit }) => (
  <article className="bg-gray-800 bg-opacity-70 p-4 md:p-6 rounded-xl shadow-lg relative border border-gray-700 hover:shadow-xl transition duration-200">
    <h2 className="text-lg md:text-xl font-medium text-blue-400 mb-3 md:mb-4">Instructor</h2>
    <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
      <img
        src={profilePicture}
        alt="Teacher Profile"
        className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-blue-500"
      />
      <div className="text-center md:text-left">
        <h3 className="text-base md:text-lg font-semibold text-gray-100">{fullName}</h3>
        <p className="text-gray-300 text-sm md:text-base">{email}</p>
        <p className="text-gray-400 text-xs md:text-sm mt-1">{department} - {specialization}</p>
      </div>
    </div>
    <EditButton onClick={() => onEdit('Teacher')} />
  </article>
);

export default TeacherInfo;
