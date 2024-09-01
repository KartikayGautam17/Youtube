import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Navbar } from "./components/Navbar";

function App() {
  const [darkmode, setDarkmode] = useState(true);
  console.log(darkmode);
  return (
    <div
      className={
        darkmode
          ? "bg-myblack-500 min h-screen text-white overflow-y-auto no-scrollbar relative"
          : "bg-white-500 text-black-500"
      }
    >
      <Navbar />
      {/* <button onClick={()=> setDarkmode(!darkmode)} className="bg-white"> sad </button > */}
    </div>
  );
}

export default App;
