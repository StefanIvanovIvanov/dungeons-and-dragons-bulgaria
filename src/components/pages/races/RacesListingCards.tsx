import React from "react";
import { Link } from "react-router-dom";

const RacesListingCards: React.FC = () => {
  return (
    <>
      <div className="grid text-center">
        <div className="row">
          <div className="col-12 col-md-4">
            <Link to="/races/dragonborn" className="d-block">
              <img
                src={require("../../../assets/images/races/dragonborn.jpg")}
                alt="Dragonborn"
              />
              <h2>Dragonborn</h2>
            </Link>
          </div>
          <div className="col-12 col-md-4">
            <Link to="/races/dwarf" className="d-block">
              <img
                src={require("../../../assets/images/races/dwarf.jpg")}
                alt="Dwarf"
              />
              <h2>Dwarf</h2>
            </Link>
          </div>
          <div className="col-12 col-md-4">
            <Link to="/races/elf" className="d-block">
              <img
                src={require("../../../assets/images/races/elf.jpg")}
                alt="Elf"
              />
              <h2>Elf</h2>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4">
            <Link to="/races/gnome" className="d-block">
              <img
                src={require("../../../assets/images/races/gnome.jpg")}
                alt="Gnome"
              />
              <h2>Gnome</h2>
            </Link>
          </div>
          <div className="col-12 col-md-4">
            <Link to="/races/half-elf" className="d-block">
              <img
                src={require("../../../assets/images/races/half-elf.jpg")}
                alt="Half-Elf"
              />
              <h2>Half-Elf</h2>
            </Link>
          </div>
          <div className="col-12 col-md-4">
            <Link to="/races/hafling" className="d-block">
              <img
                src={require("../../../assets/images/races/hafling.jpg")}
                alt="Hafling"
              />
              <h2>Hafling</h2>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4">
            <Link to="/races/half-orc" className="d-block">
              <img
                src={require("../../../assets/images/races/half-orc.jpg")}
                alt="Half-Orc"
              />
              <h2>Half-Orc</h2>
            </Link>
          </div>
          <div className="col-12 col-md-4">
            <Link to="/races/human" className="d-block">
              <img
                src={require("../../../assets/images/races/human.jpg")}
                alt="Human"
              />
              <h2>Human</h2>
            </Link>
          </div>
          <div className="col-12 col-md-4">
            <Link to="/races/tiefling" className="d-block">
              <img
                src={require("../../../assets/images/races/tiefling.jpg")}
                alt="Tiefling"
              />
              <h2>Tiefling</h2>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RacesListingCards;
