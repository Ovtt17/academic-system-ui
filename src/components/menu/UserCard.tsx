import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useAuth } from '../../context/AuthContext';

const UserCard = () => {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <Disclosure>
      {({ open }) => (
        <div className="relative flex flex-col bg-card rounded-lg p-2 items-center">
          <div className="flex items-center w-full">
            <img
              className="w-16 h-16 rounded-md"
              src={user?.profilePicture || `https://ui-avatars.com/api/?name=${user.fullName}`}
              alt="profile picture"
              onError={(e) => { e.currentTarget.src = `https://ui-avatars.com/api/?name=${user.fullName}`; }}
            />
            <div className="p-2 flex-grow">
              <h3 className="text-md font-semibold">{user.fullName}</h3>
              <p className="text-sm text-gray-500">Profesor</p>
            </div>
            <DisclosureButton className="p-2">
              <ChevronDownIcon className={`h-6 w-6 transform ${open ? 'rotate-180' : ''}`} />
            </DisclosureButton>
          </div>
          <DisclosurePanel className="w-full mt-5 rounded-md shadow-lg z-10">
            <button className="w-full px-4 py-2 text-center bg-red-600 hover:bg-red-500 rounded-md">
              Cerrar sesión
            </button>
          </DisclosurePanel>
        </div>
      )}
    </Disclosure>
  );
}

export default UserCard;