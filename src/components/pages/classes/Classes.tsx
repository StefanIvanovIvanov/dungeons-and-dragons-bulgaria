import React, { useState, useEffect } from 'react';
import ClassesSidebar from './ClassesSidebar';
import TopNavigation from '../../menu/TopNavigator';

const Classes: React.FC = () => {
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
                        <ClassesSidebar isSidebarToggled={isSidebarToggled} />
                        {/* Page content wrapper*/}
                        <div id="page-content-wrapper">
                            <TopNavigation toggleSidebar={toggleSidebar} />
                            {/* Page content*/}
                            <div className="container-fluid">
                                <h1 className="mt-4">Dungeons & Dragons Bulgaria</h1>
                                <p>Classes</p>                             
                            {/* Classes*/}
                            <h1>Cleric</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <table className="table table-striped">
                    <thead>
                        <tr className="Table _idGenTableRowColumn-3">
                        <th className="Table Table-Header CellOverride-1" rowSpan={2}>
                        <p className="Table-Styles_Header--for-Table-Cell-Style- ParaOverride-3">Level</p>
                        </th>
                        <th className="Table Table-Header CellOverride-1 _idGenCellOverride-1" rowSpan={2}>
                        <p className="Table-Styles_Header--for-Table-Cell-Style- ParaOverride-3">Proficiency</p>
                        <p className="Table-Styles_Header--for-Table-Cell-Style- ParaOverride-3">Bonus</p>
                        </th>
                        <th className="Table Table-Header CellOverride-1 _idGenCellOverride-1" rowSpan={2}>
                        <p className="Table-Styles_Header--for-Table-Cell-Style-">Features</p>
                        </th>
                        <th className="Table Table-Header CellOverride-1 _idGenCellOverride-1" rowSpan={2}>
                        <p className="Table-Styles_Header--for-Table-Cell-Style- ParaOverride-3">Cantrips<br />Known</p>
                        </th>
                        <th className="Table Table-Header CellOverride-1 _idGenCellOverride-1" colSpan={9}>
                        <p className="Table-Styles_Header--for-Table-Cell-Style- ParaOverride-3">—Spell Slots per Spell Level—</p>
                        </th>
                        </tr>
                        <tr>
                        <th className="spell-level-column">
                        <p>1st</p>
                        </th>
                        <th className="spell-level-column">
                        <p>2nd</p>
                        </th>
                        <th className="spell-level-column">
                        <p>3rd</p>
                        </th>
                        <th className="spell-level-column">
                        <p>4th</p>
                        </th>
                        <th className="spell-level-column">
                        <p>5th</p>
                        </th>
                        <th className="spell-level-column">
                        <p>6th</p>
                        </th>
                        <th className="spell-level-column">
                        <p>7th</p>
                        </th>
                        <th className="spell-level-column">
                        <p>8th</p>
                        </th>
                        <th className="spell-level-column">
                        <p>9th</p>
                        </th>
                        </tr>
                        </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>+2</td>
                        <td>Spellcasting, Divine Domain</td>
                        <td>3</td>
                        <td>2</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>+2</td>
                        <td>Channel Divinity (1/rest), Divine Domain Feature</td>
                        <td>3</td>
                        <td>3</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>+2</td>
                        <td>-</td>
                        <td>3</td>
                        <td>4</td>
                        <td>2</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                      </tr>
                    </tbody>
                </table>
                            <h2>Class Features</h2>
                            <p>You gain the following class features</p>
                            <h4>Hit points</h4>
                            <p>Hit Dice: 1d8 per cleric level</p>
                            {/* Other class features */}
                        </div>
                    </div>
                    </div>
                </body>
            </html>
        </>
    );
}

export default Classes;
