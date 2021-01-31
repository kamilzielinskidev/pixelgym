import { FC } from "react";
import { ArrowBack } from "./icons";

type Props = {
	isOpen: boolean;
	direction: "left" | "right";
	close: () => void;
};

export const SideBar: FC<Props> = ({ children, isOpen, close, direction }) => {
	const rightDirectionClass = isOpen ? "translate-x-0" : "translate-x-full";
	const leftDirectionClass = isOpen ? "translate-x-0" : "-translate-x-full";
	const directionClass = direction === "left" ? leftDirectionClass : rightDirectionClass;

	return (
		<nav
			className={`bg-background-secondary top-0 left-0 bottom-0 right-0 fixed transform transition-all z-20 ${directionClass}`}
		>
			<div className="h-12 flex justify-end">
				<a className="h-full px-4 outline-none flex cursor-pointer">
					<ArrowBack className="w-6 fill-current text-primary" onClick={close} />
				</a>
			</div>
			{children}
		</nav>
	);
};
