import Head from "next/head";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/dist/frontend";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { useTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import DirectionsRun from "@material-ui/icons/DirectionsRun";
import FitnessCenter from "@material-ui/icons/FitnessCenter";
import Pool from "@material-ui/icons/Pool";

const AddTraining: FC = () => {
	const theme = useTheme();
	const [content, setContent] = useState("");
	const [type, setType] = useState("running");
	const router = useRouter();

	return (
		<div>
			<Head>
				<title>Add training | pixelgym</title>
				<meta name="Description" content="Add training page for pixelgym app." />
			</Head>
			<Container maxWidth="sm" sx={{ paddingTop: theme.spacing(4) }}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<TextField
							label="Description"
							variant="outlined"
							multiline
							fullWidth={true}
							placeholder="Share your story here..."
							rows={4}
							onChange={({ target: { value } }) => setContent(value)}
						/>
					</Grid>
					<Grid item xs={12}>
						<IconButton
							aria-label="Running Training Type"
							onClick={() => setType("running")}
							color={type === "running" ? "primary" : "default"}
						>
							<DirectionsRun sx={{ fontSize: "3rem" }} />
						</IconButton>
						<IconButton
							aria-label="Weightlifting Training Type"
							onClick={() => setType("weightlifting")}
							color={type === "weightlifting" ? "primary" : "default"}
						>
							<FitnessCenter sx={{ fontSize: "3rem" }} />
						</IconButton>
						<IconButton
							aria-label="Swimming Training Type"
							onClick={() => setType("swimming")}
							color={type === "swimming" ? "primary" : "default"}
						>
							<Pool sx={{ fontSize: "3rem" }} />
						</IconButton>
					</Grid>
					<Grid container item justifyContent="flex-end" xs={12} spacing={2}>
						<Grid item>
							<Button aria-label="Go Back" variant="outlined" onClick={() => router.push("/")}>
								back
							</Button>
						</Grid>
						<Grid item>
							<Button aria-label="Post Training" variant="contained">
								post
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default withPageAuthRequired(AddTraining);
