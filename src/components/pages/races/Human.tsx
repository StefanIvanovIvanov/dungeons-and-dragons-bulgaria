import React, { useState } from "react";
import TopNavigation from "../../navigation/TopNavigator";
import RacesSidebar from "./RacesSidebar";

const Human: React.FC = () => {
  const [isSidebarToggled, setSidebarToggled] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarToggled(!isSidebarToggled);
  };

  return (
    <>
      <div className={`d-flex`} id="wrapper">
        <RacesSidebar isSidebarToggled={isSidebarToggled} />
        <div id="page-content-wrapper">
          <TopNavigation
            toggleSidebar={toggleSidebar}
            isToggleButtonVisible={true}
          />
          <div className="container-fluid">
            <h1 className="mt-4">Dungeons & Dragons Bulgaria</h1>
            <p>Races</p>
            <h1 id="dwarf">Human</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h2>Traits</h2>
            <h4>Ability Score Increase</h4>
            <p>Your Constitution score increases by 2.</p>
            <h4>Speed</h4>
            <p>
              Your base walking speed is 25 feet. Your speed is not reduced by
              wearing heavy armor.
            </p>

            <h1 id="elf">Elf</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h2>Traits</h2>
            <h4>Ability Score Increase</h4>
            <p>Your Dexterity score increases by 2.</p>
            <h4>Speed</h4>
            <p>Your base walking speed is 30 feet.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Human;
