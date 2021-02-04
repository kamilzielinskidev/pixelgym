import { FC } from "react";
import { ArrowBack } from "./icons";

type Props = {
	isOpen: boolean;
	direction: "left" | "right";
	close: () => void;
};

export const Sidebar: FC<Props> = ({ children, isOpen, close, direction }) => {
	const rightDirectionClass = isOpen ? "translate-x-0" : "translate-x-full";
	const leftDirectionClass = isOpen ? "translate-x-0" : "-translate-x-full";
	const directionClass = direction === "left" ? leftDirectionClass : rightDirectionClass;

	return (
		<nav
			className={`bg-background-primary top-0 left-0 bottom-0 right-0 fixed transform transition-all z-20 ${directionClass}`}
		>
			<div className="flex justify-end p-2">
				<button className="h-10 px-4 focus:outline-none">
					<ArrowBack className="w-6 fill-current text-primary" onClick={close} />
				</button>
			</div>
			{children}
		</nav>
	);
};
