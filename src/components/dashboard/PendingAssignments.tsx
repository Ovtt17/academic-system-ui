import { FC } from 'react';
import { PendingAssignment } from '../../types/dashboardData';

interface PendingAssignmentsProps {
  pendingAssignments: PendingAssignment[];
}

const PendingAssignments: FC<PendingAssignmentsProps> = ({ pendingAssignments }) => {
  return (
    <article className="bg-card p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Tareas Pendientes</h2>
      {pendingAssignments.length !== 0 ? (

        <ul className="text-gray-300 space-y-3">
          {pendingAssignments.map((assignment) => {
            const submissionPercentage = (assignment.submissions / assignment.totalStudents) * 100;
            return (
              <li key={assignment.id} className="bg-gray-700 rounded-md p-2 hover:bg-gray-600 transition-colors duration-300">
                <div className="flex justify-between items-center">
                  <div>
                    <strong>{assignment.title}</strong> - Vence el {assignment.dueDate}
                  </div>
                  <div className="text-sm text-gray-400">Entregas: {assignment.submissions}/{assignment.totalStudents}</div>
                </div>
                <div className="w-full bg-gray-600 rounded-full mt-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${submissionPercentage}%` }}
                  ></div>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className='text-gray-400'>No hay tareas pendientes</p>
      )}
    </article>
  );
}

export default PendingAssignments;