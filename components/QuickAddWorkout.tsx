import { useRouter } from "next/router";
import { FC, useState } from "react";
import Slide from "@material-ui/core/Slide";
import SpeedDial from "@material-ui/core/SpeedDial";
import SpeedDialAction from "@material-ui/core/SpeedDialAction";
import SpeedDialIcon from "@material-ui/core/SpeedDialIcon";
import { useTheme } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import DirectionsRun from "@material-ui/icons/DirectionsRun";
import FitnessCenter from "@material-ui/icons/FitnessCenter";
import Pool from "@material-ui/icons/Pool";
import Edit from "@material-ui/icons/Edit";

const QuickAddWorkout: FC = () => {
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
				ariaLabel="SpeedDial Add Workout"
				icon={<SpeedDialIcon onClick={() => open && router.push("/add-training")} openIcon={<Edit />} />}
				onClose={() => setOpen(false)}
				onOpen={() => setOpen(true)}
			>
				{actions.map(({ name, icon }) => (
					<SpeedDialAction
						aria-label={`Quick Add Workout ${name}`}
						key={name}
						tooltipOpen
						icon={icon}
						tooltipTitle={name}
					/>
				))}
			</SpeedDial>
		</Slide>
	);
};
export default QuickAddWorkout;
