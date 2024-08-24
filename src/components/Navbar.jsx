import { Icons } from "../icons/icons"
import { OpenSidebar } from "./SidebarCard/OpenSidebar"
import { useState } from "react"
export const Navbar = () => {
    const [collapsed , setCollapsed] = useState(false)
    return(
        <div className="flex flex-0 w-full justify-between px-4 ">
            <div>
                <div onClick={() => setCollapsed(!collapsed)}>
                    <Icons input={"Menu"} />
                </div>
                {collapsed && <OpenSidebar/>}
            </div>

            <div className="flex flex-0 h-10 pt-2">
                <input placeholder="Search" className=" bg-myblack-300 w-80 border-r-2 border-l-2 border-t-2 border-b-2 border-slate-50 rounded-l-2xl px-2"/>
                <button className="bg-mygrey-500 w-12 flex items-center justify-center border-r-2 border-t-2 border-b-2 border-slate-50 rounded-r-2xl"><Icons input={"Search"} /></button>
            </div>

            <div className="flex">
                <Icons input ={'Your channel'} value={false} />
                <Icons input ={"Notification"} value={false}/>
                <Icons input = {"User"}  value={false}/>
            </div>
        </div>
    )
}
