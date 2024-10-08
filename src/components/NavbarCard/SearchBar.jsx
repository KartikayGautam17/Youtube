import { Icons } from "../../icons/icons";
export const SearchBar = () => {
  return (
    <div className="flex h-10 pt-2">
      <input
        placeholder="Search"
        className=" bg-myblack-300 w-80 border-r-2 border-l-2 border-t-2 border-b-2 border-slate-50 rounded-l-2xl px-2"
      />
      <button className="bg-mygrey-500 w-12 flex items-center justify-center border-r-2 border-t-2 border-b-2 border-slate-50 rounded-r-2xl">
        <Icons input={"Search"} />
      </button>
    </div>
  );
};
