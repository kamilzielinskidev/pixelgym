import { addDays, format } from "date-fns";

export const MOCK_AMOUNT_OF_TRAININGS = new Array(10).fill(null).map((v, i) => ({
	x: addDays(new Date(), i),
	y: Math.floor(Math.random() * 100),
}));
