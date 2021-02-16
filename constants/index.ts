import { ThemeOptions } from "@material-ui/core";

export const theme: ThemeOptions = {
	palette: {
		mode: "dark",
		primary: {
			main: "#00bcd4",
		},
		secondary: {
			main: "#00bcd4",
		},
		background: {
			default: "#241b2f",
			paper: "#2a2139",
		},
	},
};

export const ROUTES_TAB_MAP: Record<number, { label: string; route: string }> = {
	0: { label: "Feed", route: "/" },
	1: { label: "Statistics", route: "/statistics" },
	2: { label: "Chat", route: "/chat" },
};

export const PAGES_WITH_ACTION_LAYOUT = ["/", "/statistics", "/chat"];
