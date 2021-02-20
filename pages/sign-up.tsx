import Head from "next/head";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import GoogleIcon from "../components/icons/Google";

const SignUp: FC = () => {
	const theme = useTheme();
	const router = useRouter();
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");

	return (
		<>
			<Head>
				<title>Sign up | pixelgym</title>
				<meta name="Description" content="Register page for pixelgym app." />
			</Head>
			<Container maxWidth="sm" sx={{ paddingTop: theme.spacing(10) }}>
				<Grid container>
					<Grid item xs={12} sx={{ marginBottom: theme.spacing(2) }}>
						<Typography variant="h5">Sign up</Typography>
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
					<Grid item xs={12} sx={{ marginBottom: theme.spacing(2) }}>
						<TextField
							label="Password"
							fullWidth
							type="password"
							placeholder="Password"
							variant="outlined"
							onChange={({ target: { value } }) => setPassword(value)}
						/>
					</Grid>
					<Grid item container justifyContent="flex-end" xs={12} sx={{ marginBottom: theme.spacing(4) }}>
						<Button aria-label="Login" variant="outlined" onClick={() => router.push("/sign-in")}>
							sign in
						</Button>
						<Button aria-label="Register" variant="contained" sx={{ marginLeft: theme.spacing(2) }}>
							register
						</Button>
					</Grid>
					<Grid item xs={12} sx={{ marginBottom: theme.spacing(2) }}>
						<Typography variant="h6">Sign up with:</Typography>
					</Grid>
					<Grid item xs={12}>
						<Button variant="outlined" aria-label="Google login">
							<GoogleIcon />
						</Button>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default SignUp;
