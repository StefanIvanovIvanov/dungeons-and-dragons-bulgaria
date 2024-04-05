import React, { useState } from "react";
import TopNavigation from "../../navigation/TopNavigator";
import ItemsTable from "../../../factories/ItemsTable/ItemsTable";
import WeaponsTable from "../../../factories/WeaponsTable/WeaponsTable";
import {
  simpleMeleeWeaponsData,
  simpleRangedWeaponsData,
  martialMeleeWeaponsData,
  martialRangedWeaponsData,
} from "../../../constants/items/Weapons";

const Items: React.FC = () => {
  const [isSidebarToggled, setSidebarToggled] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarToggled(!isSidebarToggled);
  };

  return (
    <>
      <div className={`d-flex`} id="wrapper">
        <div id="page-content-wrapper">
          <TopNavigation toggleSidebar={toggleSidebar} />
          <div className="container-fluid">
            <h1 className="mt-4">Dungeons & Dragons Bulgaria</h1>
            <p>Items</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h1>Weapons</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h2>Simple Melee Weapons</h2>
            <WeaponsTable weaponsData={simpleMeleeWeaponsData} />
            <h2>Simple Ranged Weapons</h2>
            <WeaponsTable weaponsData={simpleRangedWeaponsData} />
            <h2>Martial Melee Weapons</h2>
            <WeaponsTable weaponsData={martialMeleeWeaponsData} />
            <h2>Martial Ranged Weapons</h2>
            <WeaponsTable weaponsData={martialRangedWeaponsData} />

            <h1>Items</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <ItemsTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default Items;
