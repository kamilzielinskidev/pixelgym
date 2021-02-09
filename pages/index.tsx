import { Grid, useTheme } from "@material-ui/core";

import { FeedCard } from "../components/FeedCard";
import { MOCK_POSTS } from "../mocks/MOCK_POSTS";

const Home = () => {
	const theme = useTheme();

	return (
		<Grid container spacing={2} sx={{ paddingY: theme.spacing(2) }}>
			{MOCK_POSTS.map((post) => (
				<Grid key={post.id} item xs={12}>
					<FeedCard {...post} />
				</Grid>
			))}
		</Grid>
	);
};

export default Home;
