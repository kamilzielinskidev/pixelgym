import Head from "next/head";
import { FC } from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/dist/frontend";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core/styles";

import FeedCard from "../components/FeedCard";
import QuickAddWorkout from "../components/QuickAddWorkout";
import { MOCK_POSTS } from "../mocks/MOCK_POSTS";

const Feed: FC = () => {
	const theme = useTheme();

	return (
		<div>
			<Head>
				<title>Feed | pixelgym</title>
				<meta name="Description" content="Feed page for pixelgym app." />
			</Head>
			<Container maxWidth="sm">
				<Grid container spacing={2} sx={{ marginTop: theme.spacing(4), paddingY: theme.spacing(2) }}>
					{MOCK_POSTS.map((post) => (
						<Grid key={post.id} item xs={12}>
							<FeedCard {...post} />
						</Grid>
					))}
				</Grid>
			</Container>
			<QuickAddWorkout />
		</div>
	);
};

export default withPageAuthRequired(Feed);
