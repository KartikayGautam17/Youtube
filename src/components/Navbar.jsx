import { Icons } from "../icons/icons";
import { MenuCard } from "./NavbarCard/MenuCard";
import { SearchBar } from "./NavbarCard/SearchBar";
export const Navbar = () => {
  return (
    <div className="flex w-full justify-between px-4 ">
      <MenuCard />

      <SearchBar />

      <div className="flex">
        <Icons input={"Your channel"} value={false} />
        <Icons input={"Notification"} value={false} />
        <Icons input={"User"} value={false} />
      </div>
    </div>
  );
};
