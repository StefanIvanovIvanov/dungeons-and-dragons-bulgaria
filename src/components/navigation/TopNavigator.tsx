import React from "react";
import { Link } from "react-router-dom";

interface TopNavigationProps {
  toggleSidebar: () => void;
  isToggleButtonVisible?: boolean;
}

const TopNavigation: React.FC<TopNavigationProps> = ({
  toggleSidebar,
  isToggleButtonVisible,
}) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div className="container-fluid">
          {isToggleButtonVisible && (
            <button
              className="btn btn-primary"
              id="sidebarToggle"
              onClick={toggleSidebar}
            >
              Toggle Menu
            </button>
          )}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/learn-to-play">
                  Learn to play
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/races">
                  Races
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/classes">
                  Classes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/items">
                  Items
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/spells">
                  Spells
                </Link>
              </li>
              <li className="nav-item dropdown">
                {/* <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#!">Action</a>
                                    <a className="dropdown-item" href="#!">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#!">Something else here</a>
                                </div> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopNavigation;
