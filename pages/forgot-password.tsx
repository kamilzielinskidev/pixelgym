import Head from "next/head";
import { FC, useState } from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core/styles/";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const SignIn: FC = () => {
	const theme = useTheme();
	const [login, setLogin] = useState("");

	return (
		<>
			<Head>
				<title>Forgot password | pixelgym</title>
				<meta name="Description" content="Recover password page for pixelgym app." />
			</Head>
			<Container maxWidth="sm" sx={{ paddingTop: theme.spacing(10) }}>
				<Grid container>
					<Grid item xs={12} sx={{ marginBottom: theme.spacing(2) }}>
						<Typography variant="h5">Recover password</Typography>
					</Grid>
					<Grid item xs={12} sx={{ marginBottom: theme.spacing(2) }}>
						<TextField
							label="Email"
							fullWidth
							placeholder="Email"
							type="email"
							variant="outlined"
							onChange={({ target: { value } }) => setLogin(value)}
						/>
					</Grid>
					<Grid item container justifyContent="flex-end" xs={12} sx={{ marginBottom: theme.spacing(4) }}>
						<Button aria-label="Login" variant="contained">
							recover
						</Button>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default SignIn;
