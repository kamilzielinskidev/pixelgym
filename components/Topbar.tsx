import { useRouter } from "next/router";
import { FC, SyntheticEvent, useEffect } from "react";
import { useState } from "@hookstate/core";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Menu from "@material-ui/icons/Menu";

import { ROUTES_TAB_MAP } from "../constants";
import { ui, view } from "../state";

const Topbar: FC = () => {
	const viewState = useState(view);
	const router = useRouter();
	const uiState = useState(ui);
	const trigger = useScrollTrigger();

	const setIsOpen = (v: boolean) => uiState.isGroupsSidebarOpen.set(v);

	const currentView = viewState.currentTab.get();

	useEffect(() => {
		const pathTabIndex = parseInt(
			Object.entries(ROUTES_TAB_MAP).find(([_, { route }]) => route === router.pathname)[0],
		);
		viewState.currentTab.set(pathTabIndex);
	}, []);

	const handleOnChange = (e: SyntheticEvent, v: number) => {
		viewState.currentTab.set(v);
		router.push(ROUTES_TAB_MAP[v].route);
	};

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			<AppBar sx={{ backgroundColor: "#2a2139" }}>
				<Toolbar variant="dense">
					<IconButton aria-label="Open Drawer" onClick={() => setIsOpen(true)}>
						<Menu />
					</IconButton>
					<Tabs
						textColor="primary"
						indicatorColor="primary"
						value={currentView}
						onChange={handleOnChange}
						variant="scrollable"
					>
						{Object.values(ROUTES_TAB_MAP).map(({ label }) => (
							<Tab key={label} label={label} />
						))}
					</Tabs>
				</Toolbar>
			</AppBar>
		</Slide>
	);
};

export default Topbar;
