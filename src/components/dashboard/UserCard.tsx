import { ChevronDownIcon } from "@heroicons/react/24/solid";

const UserCard = () => {
  return (
    <div className="flex bg-card rounded-lg p-2 items-center">
      <img
        className="w-16 h-16 rounded-md"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbISPlbu2bk8HyJqM1QQ4XiUMRUfj_WpRRGA&s"
        alt="profile picture"
      />
      <div className="p-2 flex-grow">
        <h3 className="text-md font-semibold">John Doe</h3>
        <p className="text-sm text-gray-500">Profesor</p>
      </div>
      <button className="p-2">
        <ChevronDownIcon className="h-6 w-6" />
      </button>
    </div>
  );
}

export default UserCard;