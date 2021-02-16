import Head from "next/head";
import { useRouter } from "next/router";
import { FC, useState } from "react";

import { Button, Container, Grid, Link, TextField, Typography, useTheme } from "@material-ui/core";

import { GoogleIcon } from "../components/icons";

const SignIn: FC = () => {
	const theme = useTheme();
	const router = useRouter();
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");

	return (
		<>
			<Head>
				<title>Sign in | pixelgym</title>
				<meta name="Description" content="Login page for pixelgym app." />
			</Head>
			<Container maxWidth="sm" sx={{ paddingTop: theme.spacing(10) }}>
				<Grid container>
					<Grid item xs={12} sx={{ marginBottom: theme.spacing(2) }}>
						<Typography variant="h5">Sign in</Typography>
					</Grid>
					<Grid item xs={12} sx={{ marginBottom: theme.spacing(2) }}>
						<TextField
							fullWidth
							placeholder="Email"
							type="email"
							variant="outlined"
							onChange={({ target: { value } }) => setLogin(value)}
						/>
					</Grid>
					<Grid item xs={12} sx={{ marginBottom: theme.spacing(2) }}>
						<TextField
							fullWidth
							type="password"
							placeholder="Password"
							variant="outlined"
							onChange={({ target: { value } }) => setPassword(value)}
						/>
					</Grid>
					<Grid item container justifyContent="flex-end" xs={12} sx={{ marginBottom: theme.spacing(2) }}>
						<Link onClick={() => router.push("/forgot-password")}>Forgot password?</Link>
					</Grid>
					<Grid item container justifyContent="space-between" xs={12} sx={{ marginBottom: theme.spacing(4) }}>
						<Button aria-label="Register" variant="outlined" onClick={() => router.push("/sign-up")}>
							sign up
						</Button>
						<Button aria-label="Login" variant="contained">
							login
						</Button>
					</Grid>
					<Grid item xs={12} sx={{ marginBottom: theme.spacing(2) }}>
						<Typography variant="h6">Sign in with:</Typography>
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

export default SignIn;
