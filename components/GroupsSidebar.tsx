import Image from "next/image";
import { FC } from "react";
import { useState } from "@hookstate/core";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { experimentalStyled } from "@material-ui/core/styles";
import ChevronLeft from "@material-ui/icons/ChevronLeft";

import { MOCK_GROUPS } from "../mocks/MOCK_GROUPS";
import { ui } from "../state";
import { imageLoader } from "../utils";

const StyledDrawer = experimentalStyled(Drawer)({
	minWidth: "300px",
	".MuiPaper-root": {
		minWidth: "300px",
	},
});

const GroupsSidebar: FC = () => {
	const uiState = useState(ui);
	const isOpen = uiState.isGroupsSidebarOpen.get();
	const setIsOpen = (v: boolean) => uiState.isGroupsSidebarOpen.set(v);

	return (
		<StyledDrawer open={isOpen} onClose={() => setIsOpen(false)}>
			<Box sx={{ paddingLeft: "16px" }}>
				<IconButton color="inherit" aria-label="Close Drawer" onClick={() => setIsOpen(false)}>
					<ChevronLeft />
				</IconButton>
			</Box>
			<List>
				{MOCK_GROUPS.map(({ id, followers, isFollowed, name, imageUrl }) => (
					<ListItem button aria-label={`Pick Group ${name}`} key={name}>
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

export default GroupsSidebar;
