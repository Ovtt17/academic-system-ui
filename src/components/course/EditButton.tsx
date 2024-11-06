import { PencilIcon } from '@heroicons/react/24/solid';

interface EditButtonProps {
  onClick: () => void;
}

const EditButton: React.FC<EditButtonProps> = ({ onClick }) => (
  <button
    className="absolute top-2 md:top-4 right-2 md:right-4 text-gray-300 hover:text-blue-400 bg-transparent border border-gray-600 rounded-full p-2 transition duration-200 hover:bg-gray-800 focus:outline-none shadow-sm"
    onClick={onClick}
  >
    <PencilIcon className="h-5 w-5" />
  </button>
);

export default EditButton;
