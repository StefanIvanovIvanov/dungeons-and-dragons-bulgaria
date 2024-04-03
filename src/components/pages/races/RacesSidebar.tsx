import React from "react";
import Sidebar from "../../navigation/Sidebar";
import { racesSidebar } from "../../../constants/races/Races";

interface RacesSidebarProps {
  isSidebarToggled: boolean;
}

const RacesSidebar: React.FC<RacesSidebarProps> = ({ isSidebarToggled }) => {
  return (
    <Sidebar isSidebarToggled={isSidebarToggled} properties={racesSidebar} />
  );
};

export default RacesSidebar;
