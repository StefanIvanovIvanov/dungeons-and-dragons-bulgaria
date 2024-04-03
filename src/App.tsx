import Home from "./components/pages/home/Home";
import ClassesMain from "./components/pages/classes/ClassesMain";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RacesMain from "./components/pages/races/RacesMain";
import LearnToPlay from "./components/pages/learn-to-play/LearnToPlay";
import Items from "./components/pages/Items/Items";
import Spells from "./components/pages/spells/Spells";
import Head from "./components/pages/home/Head";
import Cleric from "./components/pages/classes/Cleric";
import Barbarian from "./components/pages/classes/Barbarian";
import Bard from "./components/pages/classes/Bard";
import Druid from "./components/pages/classes/Druid";
import Fighter from "./components/pages/classes/Fighter";
import Monk from "./components/pages/classes/Monk";
import Paladin from "./components/pages/classes/Paladin";
import Ranger from "./components/pages/classes/Ranger";
import Rogue from "./components/pages/classes/Rogue";
import Sorcerer from "./components/pages/classes/Sorcerer";
import Warlock from "./components/pages/classes/Warlock";
import Wizard from "./components/pages/classes/Wizard";
import Artificer from "./components/pages/classes/Artificer";
import BloodHunter from "./components/pages/classes/BloodHunter";
import NotFound from "./components/navigation/NotFound";
import Dragonborn from "./components/pages/races/Dragonborn";
import Dwarf from "./components/pages/races/Dwarf";
import Elf from "./components/pages/races/Elf";
import Gnome from "./components/pages/races/Gnome";
import Hafling from "./components/pages/races/Hafling";
import Human from "./components/pages/races/Human";
import Tiefling from "./components/pages/races/Tiefling";
import HalfElf from "./components/pages/races/HalfElf";
import HalfOrc from "./components/pages/races/HalfOrc";

function App() {
  return (
    <div className="App">
      <Head />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn-to-play" element={<LearnToPlay />} />
          <Route path="/races" element={<RacesMain />} />
          <Route path="/races/dragonborn" element={<Dragonborn />} />
          <Route path="/races/dwarf" element={<Dwarf />} />
          <Route path="/races/elf" element={<Elf />} />
          <Route path="/races/gnome" element={<Gnome />} />
          <Route path="/races/half-elf" element={<HalfElf />} />
          <Route path="/races/hafling" element={<Hafling />} />
          <Route path="/races/half-orc" element={<HalfOrc />} />
          <Route path="/races/human" element={<Human />} />
          <Route path="/races/tiefling" element={<Tiefling />} />
          <Route path="/classes" element={<ClassesMain />} />
          <Route path="/classes/barbarian" element={<Barbarian />} />
          <Route path="/classes/bard" element={<Bard />} />
          <Route path="/classes/cleric" element={<Cleric />} />
          <Route path="/classes/druid" element={<Druid />} />
          <Route path="/classes/fighter" element={<Fighter />} />
          <Route path="/classes/monk" element={<Monk />} />
          <Route path="/classes/paladin" element={<Paladin />} />
          <Route path="/classes/ranger" element={<Ranger />} />
          <Route path="/classes/rogue" element={<Rogue />} />
          <Route path="/classes/sorcerer" element={<Sorcerer />} />
          <Route path="/classes/warlock" element={<Warlock />} />
          <Route path="/classes/wizard" element={<Wizard />} />
          <Route path="/classes/artificer" element={<Artificer />} />
          <Route path="/classes/blood-hunter" element={<BloodHunter />} />
          <Route path="/items" element={<Items />} />
          <Route path="/spells" element={<Spells />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
