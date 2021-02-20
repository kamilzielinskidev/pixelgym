import { FC } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Comment from "@material-ui/icons/Comment";
import DirectionsRun from "@material-ui/icons/DirectionsRun";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import FitnessCenter from "@material-ui/icons/FitnessCenter";
import Pool from "@material-ui/icons/Pool";

import { Post } from "../models";

import type { SvgIconComponent } from "@material-ui/icons/";

type Props = Post;

const iconMap = {
	"running": DirectionsRun,
	"weightlifting": FitnessCenter,
	"swimming": Pool,
};

const FeedCard: FC<Props> = ({ user, type, date, content }) => {
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
					<FavoriteBorder /> <span hidden>like</span>
				</IconButton>
				<IconButton aria-label="Commend Feed">
					<Comment /> <span hidden>comment</span>
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default FeedCard;
