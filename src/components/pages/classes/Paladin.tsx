import React, { useState } from "react";
import ClassesSidebar from "./ClassesSidebar";
import TopNavigation from "../../navigation/TopNavigator";
import ClassTable from "../../../factories/ClassTable/ClassTable";
import { paladin } from "../../../constants/classes/Paladin";

const Paladin: React.FC = () => {
  const [isSidebarToggled, setSidebarToggled] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarToggled(!isSidebarToggled);
  };

  return (
    <>
      <div className={`d-flex`} id="wrapper">
        <ClassesSidebar isSidebarToggled={isSidebarToggled} />
        <div id="page-content-wrapper">
          <TopNavigation
            toggleSidebar={toggleSidebar}
            isToggleButtonVisible={true}
          />
          <div className="container-fluid">
            <h1 className="mt-4">Dungeons & Dragons Bulgaria</h1>
            <p>Classes</p>
            <h1>Paladin</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <ClassTable tableData={paladin} />
            <h2>Class Features</h2>
            <p>You gain the following class features</p>
            <h4>Hit points</h4>
            <p>Hit Dice: 1d8 per cleric level</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Paladin;
