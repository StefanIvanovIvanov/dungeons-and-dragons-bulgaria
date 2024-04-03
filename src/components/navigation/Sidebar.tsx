import React from "react";
import { Link } from "react-router-dom";
import { SidebarModel } from "../../models/Sidebar";

interface SidebarProps {
  isSidebarToggled: boolean;
  properties: SidebarModel;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarToggled, properties }) => {
  return (
    <div className="border-end bg-white" id="sidebar-wrapper">
      <div className={`sidebar${isSidebarToggled ? "-toggled" : ""}`}>
        <div className="sidebar-heading border-bottom bg-light">
          D&D-Bulgaria
        </div>
        <div className="list-group list-group-flush">
          {properties.items.map((item) => (
            <Link
              key={item.path}
              to={`${properties.basepath}${item.path}`}
              className="list-group-item list-group-item-action list-group-item-light p-3"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
