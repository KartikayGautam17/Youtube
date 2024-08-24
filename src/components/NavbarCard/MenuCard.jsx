import { Icons } from "../../icons/icons"
import {useState} from 'react'
import { OpenSidebar } from "../SidebarCard/OpenSidebar"
export const MenuCard = () =>{
    const [collapsed , setCollapsed] = useState(false)
    return (
        <div>
                <div onClick={() => setCollapsed(!collapsed)}>
                    <Icons input={"Menu"} />
                </div>
                {collapsed && <OpenSidebar/>}
            </div>
    )
}
