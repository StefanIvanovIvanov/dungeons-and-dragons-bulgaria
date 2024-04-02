import React from 'react';
import Sidebar from "../../menu/Sidebar";

interface RacesSidebarProps {
    isSidebarToggled: boolean;
}

const RacesSidebar: React.FC<RacesSidebarProps> = ({ isSidebarToggled }) => {
    const properties: string[] = ['Elf', 'Human', 'Dwarf'];

    return (
        <Sidebar isSidebarToggled={isSidebarToggled} properties={properties}/>
    );
}

export default RacesSidebar;
