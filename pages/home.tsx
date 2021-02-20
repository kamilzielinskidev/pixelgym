import Head from "next/head";
import { useRouter } from "next/router";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import { useTheme } from "@material-ui/core/styles/";
import Typography from "@material-ui/core/Typography";
import Check from "@material-ui/icons/Check";
import FitnessCenter from "@material-ui/icons/FitnessCenter";
import PostAdd from "@material-ui/icons/PostAdd";
import TrendingUp from "@material-ui/icons/TrendingUp";

const Home = () => {
	const theme = useTheme();
	const router = useRouter();

	return (
		<div>
			<Head>
				<title>Home | pixelgym</title>
				<meta name="Description" content="Home page for pixelgym app." />
			</Head>
			<Container maxWidth="sm">
				<Grid container direction="column">
					<Grid container item justifyContent="flex-end" sx={{ marginTop: theme.spacing(2) }}>
						<Button aria-label="Register" variant="outlined" onClick={() => router.push("sign-up")}>
							register
						</Button>
						<Button
							aria-label="Login"
							variant="contained"
							sx={{ marginLeft: theme.spacing(2) }}
							onClick={() => router.push("sign-in")}
						>
							login
						</Button>
					</Grid>
					<Grid item sx={{ marginTop: theme.spacing(12) }}>
						<Typography variant="h2" component="span">
							welcome to <span style={{ color: theme.palette.primary.main }}>gymhub</span> social network
						</Typography>
						<Typography variant="body1">
							We built <span style={{ color: theme.palette.primary.main }}>gymhub</span> app to help you keep in shape
							and socialize with people just like <span style={{ color: theme.palette.primary.main }}>you</span>.
						</Typography>
					</Grid>
					<Grid item sx={{ marginTop: theme.spacing(12) }}>
						<Typography variant="h4" component="span">
							how it works
						</Typography>
						<List>
							<ListItem>
								<ListItemAvatar>
									<FitnessCenter />
								</ListItemAvatar>
								<ListItemText primary="you create a social networks groups with your friends" />
							</ListItem>

							<ListItem>
								<ListItemAvatar>
									<PostAdd />
								</ListItemAvatar>
								<ListItemText primary="every time you workout, you add post about the training you did and how did you feel about it to every group you are in" />
							</ListItem>
							<ListItem>
								<ListItemAvatar>
									<Check />
								</ListItemAvatar>
								<ListItemText primary="with your friends you tries to achieve the groups common goals" />
							</ListItem>
							<ListItem>
								<ListItemAvatar>
									<TrendingUp />
								</ListItemAvatar>
								<ListItemText primary="you can check the progress of your trainings and motivate each other" />
							</ListItem>
						</List>
					</Grid>
					<Grid item sx={{ marginTop: theme.spacing(12), marginBottom: theme.spacing(12) }}>
						<Typography variant="h6" component="span">
							create an account and join the <span style={{ color: theme.palette.primary.main }}>community</span>{" "}
						</Typography>
						<Grid container justifyContent="flex-start" sx={{ marginTop: theme.spacing(2) }}>
							<Button aria-label="Register" variant="outlined" onClick={() => router.push("sign-up")}>
								register
							</Button>
							<Button
								aria-label="Login"
								variant="contained"
								sx={{ marginLeft: theme.spacing(2) }}
								onClick={() => router.push("sign-in")}
							>
								login
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Home;
