import { Grid, useTheme } from "@material-ui/core";

const AddTraining = () => {
	const theme = useTheme();

	return <Grid container spacing={2} sx={{ paddingY: theme.spacing(2) }}></Grid>;
};

export default AddTraining;
