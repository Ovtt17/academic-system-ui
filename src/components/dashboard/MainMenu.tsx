import { mainMenuItems } from "../../data/mainMenuItems";
import MenuCard from "./MenuCard";

const MainMenu = () => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-md font-semibold">Main Menu</h3>
      {mainMenuItems.map((item, index) => (
        <MenuCard
          item={item}
          key={index}
        />
      ))}
    </div>
  );
}

export default MainMenu;