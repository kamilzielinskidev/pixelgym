import Image from "next/image";
import React, { FC } from "react";

import { useState } from "@hookstate/core";
import {
	Avatar,
	Box,
	Drawer,
	experimentalStyled,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";

import { MOCK_GROUPS } from "../mocks/MOCK_GROUPS";
import { ui } from "../state";
import { imageLoader } from "../utils";

const StyledDrawer = experimentalStyled(Drawer)({
	minWidth: "300px",
	".MuiPaper-root": {
		minWidth: "300px",
	},
});

export const GroupsSidebar: FC = () => {
	const uiState = useState(ui);
	const isOpen = uiState.isGroupsSidebarOpen.get();
	const setIsOpen = (v: boolean) => uiState.isGroupsSidebarOpen.set(v);

	return (
		<StyledDrawer open={isOpen} onClose={() => setIsOpen(false)}>
			<Box sx={{ paddingLeft: "16px" }}>
				<IconButton color="inherit" aria-label="open drawer" onClick={() => setIsOpen(false)}>
					<ChevronLeft />
				</IconButton>
			</Box>
			<List>
				{MOCK_GROUPS.map(({ id, followers, isFollowed, name, imageUrl }) => (
					<ListItem button key={name}>
						<ListItemIcon>
							<Avatar>
								<Image
									loader={imageLoader}
									layout="fixed"
									src={imageUrl}
									alt={`${imageUrl} group avatar`}
									width={40}
									height={40}
								/>
							</Avatar>
						</ListItemIcon>
						<ListItemText primary={name} />
					</ListItem>
				))}
			</List>
		</StyledDrawer>
	);
};
