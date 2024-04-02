import React from 'react';

interface SidebarProps {
    isSidebarToggled: boolean;
    properties: string[];
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarToggled, properties }) => {
    return (
        <div className="border-end bg-white" id="sidebar-wrapper">
            <div className={`sidebar${isSidebarToggled ? '-toggled' : ''}`}>
                <div className="sidebar-heading border-bottom bg-light">D&D-Bulgaria</div>
                <div className="list-group list-group-flush">
                    {properties.map((item: string) => (
                        <a key={item} className="list-group-item list-group-item-action list-group-item-light p-3" href={`#${item}`}>{item}</a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
