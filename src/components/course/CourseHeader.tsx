import EditButton from './EditButton';

interface CourseHeaderProps {
  name: string;
  description: string;
  section: string;
  semester: string;
  onEdit: (section: string) => void;
}

const CourseHeader: React.FC<CourseHeaderProps> = ({ name, description, section, semester, onEdit }) => (
  <article className="flex flex-col gap-4 justify-between items-start bg-gray-800 bg-opacity-70 p-6 rounded-xl shadow-lg relative border border-gray-700 hover:shadow-xl transition duration-200">
    <div className="flex-1">
      <h1 className="text-2xl md:text-3xl font-bold text-blue-300">{name}</h1>
      <p className="text-gray-300 mt-1 md:mt-2 text-sm md:text-base">{description}</p>
    </div>
    <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
      <span className="px-3 md:px-4 py-1 md:py-2 bg-gray-700 bg-opacity-80 text-xs md:text-sm rounded-full font-medium text-gray-300 shadow-sm">
        Section: {section}
      </span>
      <span className="px-3 md:px-4 py-1 md:py-2 bg-gray-700 bg-opacity-80 text-xs md:text-sm rounded-full font-medium text-gray-300 shadow-sm">
        Semester: {semester}
      </span>
    </div>
    <EditButton onClick={() => onEdit('Course')} />
  </article>
);

export default CourseHeader;
