import React, { FC } from "react";
import Image from "next/image";

import { useState } from "@hookstate/core";
import { Avatar, Box, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { experimentalStyled as styled, Theme } from "@material-ui/core/styles";
import { ChevronLeft, ChevronRight, Inbox, Mail } from "@material-ui/icons";

import { closedDrawerWidth, openedDrawerWidth } from "../constants";
import { ui } from "../state";
import { MOCK_GROUPS } from "../mocks/MOCK_GROUPS";
import { imageLoader } from "../utils";
import { CSSObject } from "@emotion/react";

const opening = (theme: Theme): CSSObject => ({
	width: openedDrawerWidth,
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
});

const closing = (theme: Theme): CSSObject => ({
	width: closedDrawerWidth,
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
});

const StyledDrawer = styled(Drawer)<{ open: boolean }>`
	${({ open, theme }) =>
		open
			? { ...opening(theme), "& .MuiDrawer-paper": { ...opening(theme) } }
			: { ...closing(theme), "& .MuiDrawer-paper": { ...closing(theme) } }}
	white-space: nowrap;
	& .MuiDrawer-paper {
		overflow: hidden;
	}
`;

export const GroupsSidebar: FC = () => {
	const uiState = useState(ui);
	const isOpen = uiState.isGroupsSidebarOpen.get();
	const setIsOpen = (v: boolean) => uiState.isGroupsSidebarOpen.set(v);

	return (
		<StyledDrawer variant="permanent" open={isOpen && true}>
			<Box sx={{ paddingLeft: "16px" }}>
				<IconButton color="inherit" aria-label="open drawer" onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? <ChevronLeft /> : <ChevronRight />}
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
