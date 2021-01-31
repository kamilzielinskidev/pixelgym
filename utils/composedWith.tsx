import { ComponentType } from "react";

export const composedWith = (...containers: ComponentType[]) => (Component: ComponentType) =>
	containers.reduceRight((acc, Container) => <Container>{acc}</Container>, <Component />);
