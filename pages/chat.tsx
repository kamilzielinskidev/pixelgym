import Head from "next/head";
import Image from "next/image";
import { FC, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import { MOCK_CHAT } from "../mocks/MOCK_CHAT";
import { imageLoader } from "../utils";

const Chat: FC = () => {
	const theme = useTheme();
	const [message, setMessage] = useState("");

	return (
		<>
			<Head>
				<title>Chat | pixelgym</title>
				<meta name="Description" content="Chat page for pixelgym app." />
			</Head>
			<Container maxWidth="sm">
				<Grid container marginTop={theme.spacing(8)} marginBottom={theme.spacing(8)}>
					{MOCK_CHAT.map(({ content, date, user, userImg, id }) => (
						<Grid key={id} item xs={12} sx={{ marginBottom: theme.spacing(2) }}>
							<Card variant="outlined" sx={{ padding: theme.spacing(1) }}>
								<Grid container wrap="nowrap">
									<Grid item sx={{ marginRight: theme.spacing(2) }}>
										<Avatar>
											<Image
												loader={imageLoader}
												layout="fixed"
												src={userImg}
												alt={`${user} user avatar`}
												width={40}
												height={40}
											/>
										</Avatar>
									</Grid>
									<Grid item container>
										<Grid item container justifyContent="space-between">
											<Typography variant="caption">{user}</Typography>
											<Typography variant="caption">{date.toLocaleTimeString()}</Typography>
										</Grid>
										<Grid item>
											<Typography variant="body2">{content}</Typography>
										</Grid>
									</Grid>
								</Grid>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
			<Grid
				container
				position="fixed"
				width={`100%`}
				bottom={0}
				padding={theme.spacing(2)}
				alignItems="center"
				bgcolor={theme.palette.background.paper}
			>
				<TextField
					label="Message"
					size="small"
					style={{ flex: "1 0 auto", marginRight: theme.spacing(2) }}
					placeholder="Type a message..."
					variant="outlined"
					onChange={({ target: { value } }) => setMessage(value)}
				/>
				<Button sx={{ flex: "0 0 auto", height: "40px" }} aria-label="Send Message" variant="contained">
					send
				</Button>
			</Grid>
		</>
	);
};

export default Chat;
