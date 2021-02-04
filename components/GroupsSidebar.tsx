import { FC } from "react";
import { useState } from "@hookstate/core";

import { ui } from "../state";
import { Sidebar } from "./Sidebar";
import { MOCK_GROUPS } from "../mocks/MOCK_GROUPS";
import { Group } from "../models";
import Image from "next/image";

import { imageLoader } from "../utils";
import { User } from "./icons";

const GroupComponent: FC<Group> = ({ id, imageUrl, isFollowed, name, followers }) => (
	<a
		href="#"
		className="flex bg-background-secondary focus:bg-background-tertiary border-b border-background-tertiary p-4 cursor-pointer"
	>
		<div className="mr-4">
			<Image
				className="rounded-full"
				layout="fixed"
				loader={imageLoader}
				src={imageUrl}
				alt={`${name} group`}
				width={60}
				height={60}
			/>
		</div>
		<div>
			<div className="flex flex-col">
				<div className="text-white font-bold mb-2">{name}</div>
				<div className="flex items-center mb-2">
					<User className="w-4 mr-2" />
					{followers}
				</div>
				{!isFollowed ? (
					<button className="focus:outline-none uppercase border-white border w-20">join</button>
				) : (
					<button className="focus:outline-none uppercase border-white border w-20">leave</button>
				)}
			</div>
		</div>
	</a>
);

export const GroupsSidebar: FC = () => {
	const uiState = useState(ui);
	return (
		<Sidebar
			direction="left"
			isOpen={uiState.isGroupsSidebarOpen.get()}
			close={() => uiState.isGroupsSidebarOpen.set(false)}
		>
			<div>
				<div className="p-4">
					<input
						type="text"
						className="bg-background-secondary focus:bg-background-tertiary mb-4 rounded-full text-text w-full px-4 py-2 outline-none"
					/>
				</div>
				<ul>
					{MOCK_GROUPS.map((group) => (
						<li key={group.id}>
							<GroupComponent {...group} />
						</li>
					))}
				</ul>
			</div>
		</Sidebar>
	);
};
