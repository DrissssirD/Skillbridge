import { ReactComponent as HomeIcon } from "./homeIcon.svg";
import { ReactComponent as MessagesIcon } from "./MessageIcon.svg";
import { ReactComponent as AppIcon } from "./applicationIcon.svg";
import { ReactComponent as FindIcon } from "./FindIcon.svg";
import { ReactComponent as ProfileIcon } from "./ProfileIcon.svg";

import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "./Frame 3.svg";

export function SideBar() {
  const sidebarLinks = [
    { path: "/Dashboard/Home", label: "Dashboard", Icon: HomeIcon },
    { path: "/Dashboard/Messages", label: "Messages", Icon: MessagesIcon },
    { path: "/Dashboard/My-application", label: "My Application", Icon: AppIcon },
    { path: "/Dashboard/Find-job", label: "Find Job", Icon: FindIcon },
    { path: "/Dashboard/Profile", label: "Profile", Icon: ProfileIcon },
  ];

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    if (location.pathname !== path) { // Only navigate if not already on the target path
      navigate(path);
    }
  };

  return (
    <div className="sm:w-[272px] bg-[#F9FAFC] h-screen">
      <div className="flex flex-row gap-2 pt-8 px-6">
        <img src={logo} alt="Logo" />
        <h1 className="font-bold">Skilled Workers</h1>
      </div>
      <div className="mt-6">
        <nav>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {sidebarLinks.map((link, index) => (
              <li key={index} className="my-2 flex flex-row h-[48px] gap-3">
                <div
                  className={`${
                    location.pathname === link.path
                      ? "bg-[#4640DE] w-1 h-full mr-2"
                      : "bg-transparent w-1 h-full"
                  }`}
                ></div>
                
                <div
                  onClick={() => handleNavigation(link.path)}
                  className={`p-2 rounded-lg transition-all duration-300 flex items-center gap-3 w-[240px] cursor-pointer ${
                    location.pathname === link.path
                      ? "bg-[#CCCCF5] text-[#4640DE] font-semibold"
                      : "text-[#333]"
                  }`}
                >
                  <link.Icon
                    style={{
                      color: location.pathname === link.path ? "#4640DE" : "#7C8493",
                      width: "24px",
                      height: "24px",
                    }}
                  />
                  <h4 className="text-base font-medium">{link.label}</h4>
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <hr className="w-full border-[#4640DE] border-1 my-8"></hr>
    </div>
  );
}
