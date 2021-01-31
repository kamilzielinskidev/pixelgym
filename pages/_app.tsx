import "tailwindcss/tailwind.css";
import "../styles/globals.css";

import { AppProps } from "next/dist/next-server/lib/router/router";
import { useState } from "react";

import { SideBar } from "../components";
import { Menu, User } from "../components/icons";
import { Tabs } from "../components/Tabs";
import { TopBar } from "../components/TopBar";

function MyApp({ Component, pageProps }: AppProps) {
	const [isGroupsSideBarOpen, changeIsGroupsSidebarOpen] = useState(false);
	const [isUserSideBarOpen, changeIsUserSideBarOpen] = useState(false);

	return (
		<div className="h-screen flex justify-center">
			<div className="flex flex-col w-full max-w-xl h-full">
				<SideBar direction="left" isOpen={isGroupsSideBarOpen} close={() => changeIsGroupsSidebarOpen(false)} />
				<SideBar direction="right" isOpen={isUserSideBarOpen} close={() => changeIsUserSideBarOpen(false)} />
				<TopBar>
					<a className="h-full px-4 outline-none flex cursor-pointer">
						<Menu className="w-6 fill-current text-primary" onClick={() => changeIsGroupsSidebarOpen(true)} />
					</a>
					<a className="h-full px-4 outline-none flex cursor-pointer">
						<User className="w-6 fill-current text-primary" onClick={() => changeIsUserSideBarOpen(true)} />
					</a>
				</TopBar>
				<Tabs />
				<Component {...pageProps} />
			</div>
		</div>
	);
}

export default MyApp;
