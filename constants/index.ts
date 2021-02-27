import { ThemeOptions } from "@material-ui/core";

export const theme: ThemeOptions = {
	palette: {
		primary: {
			main: "#111",
		},
		secondary: {
			main: "#222",
		},
		background: {
			default: "#f8f8f8",
			paper: "#fafafa",
		},
	},
};

export const ROUTES_TAB_MAP: Record<number, { label: string; route: string }> = {
	0: { label: "Feed", route: "/" },
	1: { label: "Statistics", route: "/statistics" },
	2: { label: "Chat", route: "/chat" },
};

export const PAGES_WITH_ACTION_LAYOUT = ["/", "/statistics", "/chat"];
