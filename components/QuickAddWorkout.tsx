import { useRouter } from "next/router";
import { FC, useState } from "react";

import { Slide, SpeedDial, SpeedDialAction, SpeedDialIcon, useScrollTrigger, useTheme } from "@material-ui/core";
import { DirectionsRun, Edit, FitnessCenter, Pool } from "@material-ui/icons";

export const QuickAddWorkout: FC = () => {
	const theme = useTheme();
	const trigger = useScrollTrigger();
	const router = useRouter();
	const [open, setOpen] = useState(false);

	const actions = [
		{ icon: <DirectionsRun />, name: "running" },
		{ icon: <FitnessCenter />, name: "weightlifting" },
		{ icon: <Pool />, name: "swimming" },
	];

	return (
		<Slide appear={false} direction="up" in={!trigger}>
			<SpeedDial
				style={{
					position: "fixed",
					bottom: theme.spacing(2),
					right: theme.spacing(2),
				}}
				ariaLabel="SpeedDial openIcon example"
				icon={<SpeedDialIcon onClick={() => open && router.push("/add-training")} openIcon={<Edit />} />}
				onClose={() => setOpen(false)}
				onOpen={() => setOpen(true)}
			>
				{actions.map(({ name, icon }) => (
					<SpeedDialAction key={name} tooltipOpen icon={icon} tooltipTitle={name} />
				))}
			</SpeedDial>
		</Slide>
	);
};
