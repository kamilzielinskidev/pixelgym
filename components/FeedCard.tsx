import { FC } from "react";

import { Card, CardActions, CardContent, Grid, IconButton, Typography } from "@material-ui/core";
import { Comment, DirectionsRun, FavoriteBorder, FitnessCenter, Pool, SvgIconComponent } from "@material-ui/icons";

import { Post } from "../models";

type Props = Post;

const iconMap = {
	"running": DirectionsRun,
	"weightlifting": FitnessCenter,
	"swimming": Pool,
};

export const FeedCard: FC<Props> = ({ user, type, date, content }) => {
	const Icon: SvgIconComponent = iconMap[type];
	return (
		<Card variant="outlined">
			<CardContent>
				<Grid container>
					<Grid item xs={9}>
						<Typography variant="subtitle1" color="textSecondary">
							{user}
						</Typography>
						<Typography variant="h5">{type}</Typography>
						<Typography variant="subtitle2" color="textSecondary">
							{date.toLocaleString()}
						</Typography>
					</Grid>
					<Grid item xs={3} container justifyContent="center" alignItems="center">
						<Grid item>
							<Icon sx={{ fontSize: "3rem" }} />
						</Grid>
					</Grid>
				</Grid>
				<Typography variant="body1">{content}</Typography>
			</CardContent>
			<CardActions>
				<IconButton aria-label="Like Feed">
					<FavoriteBorder />
				</IconButton>
				<IconButton aria-label="Commend Feed">
					<Comment />
				</IconButton>
			</CardActions>
		</Card>
	);
};
