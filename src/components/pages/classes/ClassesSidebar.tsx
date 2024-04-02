import React from 'react';
import Sidebar from "../../menu/Sidebar";

interface ClassesSidebarProps {
    isSidebarToggled: boolean;
}

const ClassesSidebar: React.FC<ClassesSidebarProps> = ({ isSidebarToggled }) => {
    const properties: string[] = ['Bard', 'Cleric', 'Druid'];

    return (
        <Sidebar isSidebarToggled={isSidebarToggled} properties={properties}/>
    );
}

export default ClassesSidebar;
