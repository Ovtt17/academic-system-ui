import { useLocation } from 'react-router-dom';
import { DayOfWeek } from '../../types/courseSchedule';
import { AssignmentStatus } from '../../types/assignment';
import Course from '../../types/course';

const CourseDetails = () => {
  const location = useLocation();
  const course: Course = location.state?.course;

  return (
    <section className="p-8 bg-gray-900 min-h-screen text-gray-200">
      <div className="max-w-4xl mx-auto space-y-6">

        {/* Course Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-card p-6 rounded-lg shadow-lg">
          <div>
            <h1 className="text-3xl font-semibold text-blue-400">{course.name}</h1>
            <p className="text-gray-400">{course.description}</p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="px-4 py-2 bg-gray-700 text-sm rounded-md">
              Section: {course.section}
            </span>
            <span className="ml-3 px-4 py-2 bg-gray-700 text-sm rounded-md">
              Semester: {course.semester}
            </span>
          </div>
        </div>

        {/* Teacher Information */}
        <div className="bg-card p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-medium text-blue-400 mb-4">Instructor</h2>
          <div className="flex items-center space-x-4">
            <img
              src={course.teacher.profilePicture || '/default-profile.png'}
              alt="Teacher Profile"
              className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-100">
                {course.teacher.fullName}
              </h3>
              <p className="text-gray-400">{course.teacher.email}</p>
              <p className="text-gray-500">
                {course.teacher.departament} - {course.teacher.specialization}
              </p>
            </div>
          </div>
        </div>

        {/* Schedules */}
        <div className="bg-card p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-medium text-blue-400 mb-4">Schedule</h2>
          <ul className="space-y-2">
            {course.schedules.map((schedule) => (
              <li key={schedule.id} className="flex justify-between items-center text-gray-300">
                <span>{DayOfWeek[schedule.day]}</span>
                <span>{schedule.startTime} - {schedule.endTime}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Assignments */}
        {course.assignments && (
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-medium text-blue-400 mb-4">Assignments</h2>
            <div className="space-y-4">
              {course.assignments.map((assignment) => (
                <div
                  key={assignment.id}
                  className={`p-4 rounded-lg flex justify-between items-center 
                    ${assignment.status === AssignmentStatus.OPEN ? 'bg-green-700' : 'bg-red-700'}`}
                >
                  <div>
                    <h3 className="text-lg font-semibold">{assignment.title}</h3>
                    <p className="text-gray-400">{assignment.description}</p>
                    <p className="text-sm text-gray-300">
                      Due: {new Date(assignment.dueDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="block text-gray-100">Submissions: {assignment.totalSubmissions}</span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold
                        ${assignment.status === AssignmentStatus.OPEN ? 'bg-green-500' : 'bg-red-500'}`}
                    >
                      {assignment.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Total Students */}
        <div className="bg-card p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-medium text-blue-400">Total Students Enrolled</h2>
          <p className="text-3xl font-semibold text-gray-100 mt-2">{course.totalStudents}</p>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;