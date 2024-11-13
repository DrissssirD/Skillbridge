import React from "react";
import { SideBar } from "../../component/sidebar/sidebar";
import { Outlet } from "react-router-dom";




export function DashBoard(){
    return(
        <div className="flex flex-row">
            <div>
                <SideBar />
            </div>
            <Outlet />
        </div>
    )
}