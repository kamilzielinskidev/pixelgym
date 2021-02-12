import Head from "next/head";
import Image from "next/image";
import { FC, useState } from "react";

import { Avatar, Button, Card, CardContent, Grid, TextField, Typography, useTheme } from "@material-ui/core";

import { MOCK_CHAT } from "../mocks/MOCK_CHAT";
import { imageLoader } from "../utils";

const Chat: FC = () => {
	const theme = useTheme();
	const [message, setMessage] = useState("");

	return (
		<div>
			<Head>
				<title>Chat | pixelgym</title>
				<meta name="Description" content="Chat page for pixelgym app." />
			</Head>
			<Grid
				container
				spacing={2}
				sx={{ marginTop: theme.spacing(4), height: `calc(100vh - ${theme.spacing(13)})`, overflowY: "auto" }}
			>
				{MOCK_CHAT.map(({ content, date, user, userImg, id }) => (
					<Grid key={id} item xs={12}>
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
			<Grid container spacing={2}>
				<Grid item xs={9} sm={10}>
					<TextField
						fullWidth
						placeholder="Type a message..."
						variant="outlined"
						onChange={({ target: { value } }) => setMessage(value)}
					/>
				</Grid>
				<Grid item container alignItems="center" xs={3} sm={2}>
					<Button aria-label="Sened Message" variant="contained">
						send
					</Button>
				</Grid>
			</Grid>
		</div>
	);
};

export default Chat;
