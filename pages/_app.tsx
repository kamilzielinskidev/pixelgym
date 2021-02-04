import "tailwindcss/tailwind.css";
import "../styles/globals.css";

import { AppProps } from "next/dist/next-server/lib/router/router";
import { useState } from "@hookstate/core";

import { GroupsSidebar, Tabs, Topbar, UserSidebar } from "../components";
import { Menu, User } from "../components/icons";
import { ui } from "../state";

function MyApp({ Component, pageProps }: AppProps) {
	const uiState = useState(ui);

	return (
		<div className="h-screen flex justify-center">
			<div className="flex flex-col w-full max-w-xl h-full">
				<GroupsSidebar />
				<UserSidebar />
				<Topbar>
					<button className="h-10 px-4 focus:outline-none">
						<Menu className="w-6 fill-current text-primary" onClick={() => uiState.isGroupsSidebarOpen.set(true)} />
					</button>
					<button className="h-10 px-4 focus:outline-none">
						<User className="w-6 fill-current text-primary" onClick={() => uiState.isUserSidebarOpen.set(true)} />
					</button>
				</Topbar>
				<Tabs />
				<Component {...pageProps} />
			</div>
		</div>
	);
}

export default MyApp;
