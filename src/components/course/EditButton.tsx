import { PencilIcon } from '@heroicons/react/24/solid';
import {FC} from "react";

interface EditButtonProps {
  onClick: () => void;
}

const EditButton: FC<EditButtonProps> = ({ onClick }) => (
  <button
    className="absolute top-2 right-2 text-gray-300 hover:text-blue-400 bg-transparent border border-gray-600 rounded-full p-2 transition duration-200 hover:bg-gray-800 focus:outline-none shadow-sm"
    onClick={onClick}
  >
    <PencilIcon className="h-5 w-5" />
  </button>
);

export default EditButton;
