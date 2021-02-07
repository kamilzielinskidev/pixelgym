import { FC } from "react";

import { useState } from "@hookstate/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { view } from "../state";
import { Tab, Tabs } from "@material-ui/core";

export const Topbar: FC = () => {
	const viewState = useState(view);
	const currentView = viewState.currentTab.get();

	return (
		<AppBar sx={{ position: "relative", backgroundColor: "#2a2139" }}>
			<Toolbar>
				<Tabs
					textColor="primary"
					value={currentView}
					onChange={(ev, v) => viewState.currentTab.set(v)}
					variant="scrollable"
					scrollButtons="auto"
				>
					<Tab label="Feed" />
					<Tab label="Statistics" />
					<Tab label="Chat" />
				</Tabs>
			</Toolbar>
		</AppBar>
	);
};
