import Assignment, { AssignmentStatus } from '../../types/assignment';
import EditButton from './EditButton';
import {FC} from "react";

interface AssignmentsProps {
  assignments: Assignment[];
  onEdit: (section: string) => void;
}

const AssignmentList: FC<AssignmentsProps> = ({ assignments, onEdit }) => (
  <div className="bg-gray-800 bg-opacity-70 p-6 rounded-xl shadow-lg relative border border-gray-700 hover:shadow-xl transition duration-200">
    <h2 className="text-xl font-medium text-blue-400 mb-4">Assignments</h2>
    <div className="space-y-4">
      {assignments.map((assignment) => (
        <div
          key={assignment.id}
          className={`p-4 rounded-lg flex justify-between items-center ${assignment.status === AssignmentStatus.OPEN ? 'bg-green-700 bg-opacity-80' : 'bg-red-700 bg-opacity-80'}`}
        >
          <div>
            <h3 className="text-lg font-semibold">{assignment.title}</h3>
            <p className="text-gray-300">{assignment.description}</p>
            <p className="text-sm text-gray-100">Due: {new Date(assignment.dueDate).toLocaleDateString()}</p>
          </div>
          <div className="text-right">
            <span className="block text-gray-100">Submissions: {assignment.totalSubmissions}</span>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${assignment.status === AssignmentStatus.OPEN ? 'bg-green-500' : 'bg-red-500'}`}>
              {assignment.status}
            </span>
          </div>
        </div>
      ))}
    </div>
    <EditButton onClick={() => onEdit('Assignments')} />
  </div>
);

export default AssignmentList;
