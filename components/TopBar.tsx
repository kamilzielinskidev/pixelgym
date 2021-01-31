import { FC } from "react";

export const TopBar: FC = ({ children }) => (
	<div className="h-12 bg-background-secondary w-full flex justify-between">{children}</div>
);
