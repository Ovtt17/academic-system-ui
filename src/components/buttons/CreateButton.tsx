import { FC } from 'react';
import { Link } from 'react-router-dom';

interface CreateButtonProps {
  redirectPath: string;
}

const CreateButton: FC<CreateButtonProps> = ({ redirectPath }) => {
  return (
    <Link to={redirectPath}>
    <button
      className='create-button bg-create-button shadow-lg shadow-create-button border-none rounded-full cursor-pointer text-4xl font-bold text-[#FAFAFA] h-[64px] w-[64px] z-10'>
      <span>+</span>
    </button>
    </Link>
  );
}

export default CreateButton;