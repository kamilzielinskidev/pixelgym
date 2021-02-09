import { FC } from "react";

import { useState } from "@hookstate/core";
import { IconButton, Slide, Tab, Tabs, useScrollTrigger } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Menu } from "@material-ui/icons";

import { ui, view } from "../state";

export const Topbar: FC = () => {
	const viewState = useState(view);
	const uiState = useState(ui);
	const trigger = useScrollTrigger();

	const setIsOpen = (v: boolean) => uiState.isGroupsSidebarOpen.set(v);

	const currentView = viewState.currentTab.get();

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			<AppBar sx={{ backgroundColor: "#2a2139" }}>
				<Toolbar variant="dense">
					<IconButton onClick={() => setIsOpen(true)}>
						<Menu />
					</IconButton>
					<Tabs
						textColor="primary"
						indicatorColor="primary"
						value={currentView}
						onChange={(ev, v) => viewState.currentTab.set(v)}
						variant="scrollable"
					>
						<Tab label="Feed" />
						<Tab label="Statistics" />
						<Tab label="Chat" />
					</Tabs>
				</Toolbar>
			</AppBar>
		</Slide>
	);
};
