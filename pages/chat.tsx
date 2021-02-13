import Head from "next/head";
import Image from "next/image";
import { FC, useState } from "react";

import { Avatar, Button, Card, CardContent, Container, Grid, TextField, Typography, useTheme } from "@material-ui/core";

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
							<Card variant="outlined">
								<CardContent>
									<Grid container>
										<Grid container item xs={12}>
											<Grid item xs={2}>
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
											<Grid item container direction="column" xs={10}>
												<Typography variant="caption">{user}</Typography>
												<Typography variant="caption">{date.toLocaleTimeString()}</Typography>
											</Grid>
										</Grid>
										<Grid item xs={12}>
											<Typography variant="body2">{content}</Typography>
										</Grid>
									</Grid>
								</CardContent>
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
