import { FC } from 'react';
import AssignmentResponse from '../../types/assignment';
import { useNavigate } from 'react-router-dom';

interface AssignmentCardProps {
  assignment: AssignmentResponse;
  totalStudents: number;
}

const AssignmentCard: FC<AssignmentCardProps> = ({ assignment, totalStudents }) => {
  const navigate = useNavigate();
  const submissionPercentage = (assignment.totalSubmissions / totalStudents) * 100;
  const dueDate = new Date(assignment.dueDate);

  const handleAssignmentClick = () => {
    navigate(`/assignments/${assignment.id}`);
  }

  return (
    <div key={assignment.id} onClick={handleAssignmentClick} className="bg-gray-700 p-4 rounded-md cursor-pointer hover:bg-gray-800">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-gray-200">{assignment.title}</span>
        <span className="text-sm text-gray-400">Due: {dueDate.toLocaleDateString()}</span>
      </div>
      <div className="text-sm text-gray-300 mb-1">
        Entregas: {assignment.totalSubmissions}/{totalStudents}
      </div>
      <div className="w-full bg-gray-600 rounded-full h-2 overflow-hidden">
        <div
          className="bg-green-500 h-full rounded-full"
          style={{ width: `${submissionPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default AssignmentCard;