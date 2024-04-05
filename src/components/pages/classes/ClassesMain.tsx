import React, { useState } from "react";
import ClassesSidebar from "./ClassesSidebar";
import TopNavigation from "../../navigation/TopNavigator";
import { Link } from "react-router-dom";
import clericImage from "../../../assets/images/classes/cleric.jpg";
import ClassesListingCards from "./ClassesListingCards";

const ClassesMain: React.FC = () => {
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
            <h1>Classes</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <ClassesListingCards />
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassesMain;
