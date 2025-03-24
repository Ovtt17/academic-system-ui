import AssignmentResponse, {AssignmentStatus} from '../../types/assignment';
import {FC} from "react";
import {useNavigate} from "react-router-dom";
import EditButton from "./EditButton.tsx";

interface AssignmentsProps {
  assignments: AssignmentResponse[];
}

const AssignmentList: FC<AssignmentsProps> = ({assignments}) => {
  const navigate = useNavigate();

  const handleEditAssignment = (id: number) => {
    navigate(`/assignments/${id}`);
  }

  return (
    <div
      className="bg-gray-800 bg-opacity-70 p-6 rounded-xl shadow-lg relative border border-gray-700 hover:shadow-xl transition duration-200">
      <h2 className="text-xl font-medium text-blue-400 mb-4">Assignments</h2>
      <div className="space-y-4">
        {assignments.map((assignment) => (
          <div
            key={assignment.id}
            className={`p-4 rounded-lg ${assignment.status === AssignmentStatus.OPEN ? 'bg-green-700 bg-opacity-80' : 'bg-red-700 bg-opacity-80'}`}
          >
            <div className='flex flex-col gap-4 relative'>
              <div>
                <h3 className="text-lg font-semibold">{assignment.title}</h3>
                <EditButton onClick={() => handleEditAssignment(assignment.id!)} />
              </div>
              <div className='flex flex-col gap-4'>
                <div>
                  <p className="text-gray-300">{assignment.description}</p>
                  <p className="text-sm text-gray-100">Due: {new Date(assignment.dueDate).toLocaleDateString()}</p>
                </div>
                <div className="text-right">
                  <span className="block text-gray-100">Submissions: {assignment.totalSubmissions}</span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold 
                    ${assignment.status === AssignmentStatus.OPEN ? 'bg-green-500' : 'bg-red-500'}`}>
                    {assignment.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default AssignmentList;
