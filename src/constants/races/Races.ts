import { SidebarItem, SidebarModel } from "../../models/Sidebar";

export const races: string[] = [
  "Dragonborn",
  "Dwarf",
  "Elf",
  "Gnome",
  "Half-elf",
  "Hafling",
  "Half-Orc",
  "Human",
  "Tiefling",
];

const racesSidebarItems: SidebarItem[] = [
  {
    path: "/dragonborn",
    name: "Dragonborn",
  },
  {
    path: "/dwarf",
    name: "Dwarf",
  },
  {
    path: "/elf",
    name: "Elf",
  },
  {
    path: "/gnome",
    name: "Gnome",
  },
  {
    path: "/half-elf",
    name: "Half-Elf",
  },
  {
    path: "/hafling",
    name: "Hafling",
  },
  {
    path: "/half-orc",
    name: "Half-Orc",
  },
  {
    path: "/human",
    name: "Human",
  },
  {
    path: "/tiefling",
    name: "Tiefling",
  },
];

export const racesSidebar: SidebarModel = {
  basepath: "/races",
  items: racesSidebarItems,
};
