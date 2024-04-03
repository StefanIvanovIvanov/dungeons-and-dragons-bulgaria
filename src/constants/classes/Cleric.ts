import { ClassTableData } from "../../models/TableData";

export const cleric: ClassTableData[] = [
  {
    level: 1,
    proficiencyBonus: "+2",
    features: "Spellcasting, Divine Domain",
    cantripsKnown: 3,
    spellSlots: [2, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 2,
    proficiencyBonus: "+2",
    features: "Channel Divinity (1/rest), Divine Domain Feature",
    cantripsKnown: 3,
    spellSlots: [3, 2, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    level: 3,
    proficiencyBonus: "+2",
    features: "-",
    cantripsKnown: 3,
    spellSlots: [4, 3, 2, 0, 0, 0, 0, 0, 0],
  },
];
