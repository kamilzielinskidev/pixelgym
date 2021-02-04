import { FC } from "react";

export const Topbar: FC = ({ children }) => (
	<div className="bg-background-secondary w-full flex justify-between p-2">{children}</div>
);
