import React, { useState, useEffect } from 'react';
import TopNavigation from '../../menu/TopNavigator';
import RacesSidebar from './RacesSidebar';

const Races: React.FC = () => {
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
            <html lang="en">
                <head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta name="description" content="" />
                    <meta name="author" content="" />
                    <title>D&D-Bulgaria</title>
                    {/* Favicon*/}
                    <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
                    {/* Core theme CSS (includes Bootstrap)*/}
                    <link href="styles/styles.css" rel="stylesheet" />
                </head>
                <body>
                    <div className={`d-flex`} id="wrapper">
                        <RacesSidebar isSidebarToggled={isSidebarToggled} />
                        {/* Page content wrapper*/}
                        <div id="page-content-wrapper">
                            <TopNavigation toggleSidebar={toggleSidebar} />
                            {/* Page content*/}
                            <div className="container-fluid">
                                <h1 className="mt-4">Dungeons & Dragons Bulgaria</h1>
                                <p>Races</p>
                                <h1 id="dwarf">Dwarf</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <h2>Traits</h2>
                                <h4>Ability Score Increase</h4>
                                <p>Your Constitution score increases by 2.</p>
                                <h4>Speed</h4>
                                <p>Your base walking speed is 25 feet. Your speed is not reduced by wearing heavy armor.</p>
                                {/* etc. etc. etc. */}
                                <h1 id="elf">Elf</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <h2>Traits</h2>
                                <h4>Ability Score Increase</h4>
                                <p>Your Dexterity score increases by 2.</p>
                                <h4>Speed</h4>
                                <p>Your base walking speed is 30 feet.</p>
                                {/* etc. etc. etc. */}            
                        </div>
                    </div>
                    </div>
                </body>
            </html>
        </>
    );
}

export default Races;
