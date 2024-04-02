import React, { useEffect, useState } from 'react';
import TopNavigation from '../../menu/TopNavigator';

const Home: React.FC = () => {
    const [isSidebarToggled, setSidebarToggled] = useState<boolean>(false);

    useEffect(() => {
        const storedToggle = localStorage.getItem('sb|sidebar-toggle');
        if (storedToggle) {
            setSidebarToggled(JSON.parse(storedToggle));
        }
    }, []);

    const toggleSidebar = () => {
        setSidebarToggled(!isSidebarToggled);
        localStorage.setItem('sb|sidebar-toggle', JSON.stringify(!isSidebarToggled));
    };

    return (
        <>
        <TopNavigation toggleSidebar={toggleSidebar} isToggleButtonVisible={false} />
            <div className="container-fluid">
                <h1 className="mt-4">Dungeons & Dragons Bulgaria</h1>
                <p>Small introduction</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </>
    );
}

export default Home;
