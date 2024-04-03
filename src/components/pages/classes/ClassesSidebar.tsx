import React from "react";
import Sidebar from "../../navigation/Sidebar";
import { classesSidebar } from "../../../constants/classes/Classes";

interface ClassesSidebarProps {
  isSidebarToggled: boolean;
}

const ClassesSidebar: React.FC<ClassesSidebarProps> = ({
  isSidebarToggled,
}) => {
  return (
    <div>
      <Sidebar
        isSidebarToggled={isSidebarToggled}
        properties={classesSidebar}
      />
    </div>
  );
};

export default ClassesSidebar;
