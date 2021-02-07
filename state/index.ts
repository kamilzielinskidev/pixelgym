import { createState } from "@hookstate/core";

export const ui = createState({ isGroupsSidebarOpen: false });
export const view = createState({ currentTab: 0 });
