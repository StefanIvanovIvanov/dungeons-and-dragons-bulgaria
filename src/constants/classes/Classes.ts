import { SidebarModel, SidebarItem } from "../../models/Sidebar";

export const classes: string[] = [
  "Barbarian",
  "Bard",
  "Cleric",
  "Druid",
  "Fighter",
  "Monk",
  "Paladin",
  "Ranger",
  "Rogue",
  "Sorcerer",
  "Warlock",
  "Wizard",
  "Artificer",
  "Blood Hunter",
];

const classesSidebarItems: SidebarItem[] = [
  {
    path: "/barbarian",
    name: "Barbarian",
  },
  {
    path: "/bard",
    name: "Bard",
  },
  {
    path: "/cleric",
    name: "Cleric",
  },
  {
    path: "/druid",
    name: "Druid",
  },
  {
    path: "/fighter",
    name: "Fighter",
  },
  {
    path: "/monk",
    name: "Monk",
  },
  {
    path: "/paladin",
    name: "Paladin",
  },
  {
    path: "/ranger",
    name: "Ranger",
  },
  {
    path: "/rogue",
    name: "Rogue",
  },
  {
    path: "/sorcerer",
    name: "Sorcerer",
  },
  {
    path: "/warlock",
    name: "Warlock",
  },
  {
    path: "/wizard",
    name: "Wizard",
  },
  {
    path: "/artificer",
    name: "Artificer",
  },
  {
    path: "/blood-hunter",
    name: "Blood Hunter",
  },
];

export const classesSidebar: SidebarModel = {
  basepath: "/classes",
  items: classesSidebarItems,
};
