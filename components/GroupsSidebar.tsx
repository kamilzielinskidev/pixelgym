import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";
import { useState } from "@hookstate/core";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
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
	const router = useRouter();

	return (
		<StyledDrawer open={isOpen} onClose={() => setIsOpen(false)}>
			<Grid container direction="column" sx={{ height: "100%" }}>
				<div>
					<IconButton color="inherit" aria-label="Close Drawer" onClick={() => setIsOpen(false)}>
						<ChevronLeft />
					</IconButton>
				</div>
				<List sx={{ flexGrow: 1 }}>
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
				<Button variant="text" aria-label="Logout" onClick={() => router.push("api/auth/logout")}>
					logout
				</Button>
			</Grid>
		</StyledDrawer>
	);
};

export default GroupsSidebar;
