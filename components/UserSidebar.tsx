import { FC } from "react";
import { useState } from "@hookstate/core";

import { ui } from "../state";
import { Sidebar } from "./Sidebar";

export const UserSidebar: FC = () => {
	const uiState = useState(ui);
	return (
		<Sidebar
			direction="right"
			isOpen={uiState.isUserSidebarOpen.get()}
			close={() => uiState.isUserSidebarOpen.set(false)}
		/>
	);
};
