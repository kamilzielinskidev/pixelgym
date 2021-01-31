import { FC } from "react";

export const Tabs: FC = () => (
	<div className="h-12 bg-background-primary w-full flex justify-between">
		<ul className="flex items-center px-4">
			<li className="mr-4">
				<a className="text-primary font-bold cursor-pointer">Feed</a>
			</li>
			<li className="mr-4">
				<a className="hover:underline cursor-pointer">Statistics</a>
			</li>
			<li className="mr-4">
				<a className="hover:underline cursor-pointer">Chat</a>
			</li>
		</ul>
	</div>
);
