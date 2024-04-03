export interface SidebarModel {
  basepath: string;
  items: SidebarItem[];
}

export interface SidebarItem {
  path: string;
  name: string;
}
