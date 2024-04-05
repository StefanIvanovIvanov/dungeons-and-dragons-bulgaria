import React from "react";
import { Link } from "react-router-dom";

const ClassesListingCards: React.FC = () => {
  return (
    <>
      <div className="grid text-center">
        <div className="row">
          <div className="col-12 col-md-4">
            <Link to="/classes/barbarian" className="d-block">
              <img
                src={require("../../../assets/images/classes/barbarian.jpg")}
                alt="Barbarian"
              />
              <h2>Barbarian</h2>
            </Link>
          </div>
          <div className="col-12 col-md-4">
            <Link to="/classes/bard" className="d-block">
              <img
                src={require("../../../assets/images/classes/bard.jpg")}
                alt="Bard"
              />
              <h2>Bard</h2>
            </Link>
          </div>
          <div className="col-12 col-md-4">
            <Link to="/classes/cleric" className="d-block">
              <img
                src={require("../../../assets/images/classes/cleric.jpg")}
                alt="Cleric"
              />
              <h2>Cleric</h2>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4">
            <Link to="/classes/druid" className="d-block">
              <img
                src={require("../../../assets/images/classes/druid.jpg")}
                alt="Druid"
              />
              <h2>Druid</h2>
            </Link>
          </div>
          <div className="col-12 col-md-4">
            <Link to="/classes/fighter" className="d-block">
              <img
                src={require("../../../assets/images/classes/fighter.jpg")}
                alt="Fighter"
              />
              <h2>Fighter</h2>
            </Link>
          </div>
          <div className="col-12 col-md-4">
            <Link to="/classes/monk" className="d-block">
              <img
                src={require("../../../assets/images/classes/monk.jpg")}
                alt="Monk"
              />
              <h2>Monk</h2>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4">
            <Link to="/classes/paladin" className="d-block">
              <img
                src={require("../../../assets/images/classes/paladin.jpg")}
                alt="Paladin"
              />
              <h2>Paladin</h2>
            </Link>
          </div>
          <div className="col-12 col-md-4">
            <Link to="/classes/ranger" className="d-block">
              <img
                src={require("../../../assets/images/classes/ranger.jpg")}
                alt="Ranger"
              />
              <h2>Ranger</h2>
            </Link>
          </div>
          <div className="col-12 col-md-4">
            <Link to="/classes/rogue" className="d-block">
              <img
                src={require("../../../assets/images/classes/rogue.jpg")}
                alt="Rogue"
              />
              <h2>Rogue</h2>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4">
            <Link to="/classes/sorcerer" className="d-block">
              <img
                src={require("../../../assets/images/classes/sorcerer.jpg")}
                alt="Sorcerer"
              />
              <h2>Sorcerer</h2>
            </Link>
          </div>
          <div className="col-12 col-md-4">
            <Link to="/classes/warlock" className="d-block">
              <img
                src={require("../../../assets/images/classes/warlock.jpg")}
                alt="Warlock"
              />
              <h2>Warlock</h2>
            </Link>
          </div>
          <div className="col-12 col-md-4">
            <Link to="/classes/wizard" className="d-block">
              <img
                src={require("../../../assets/images/classes/wizard.jpg")}
                alt="Wizard"
              />
              <h2>Wizard</h2>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4">
            <Link to="/classes/artificer" className="d-block">
              <img
                src={require("../../../assets/images/classes/artificer.jpg")}
                alt="Artificer"
              />
              <h2>Artificer</h2>
            </Link>
          </div>
          <div className="col-12 col-md-4">
            <Link to="/classes/blood-hunter" className="d-block">
              <img
                src={require("../../../assets/images/classes/blood-hunter.jpg")}
                alt="Blood Hunter"
              />
              <h2>Blood Hunter</h2>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassesListingCards;
