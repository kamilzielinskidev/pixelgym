import { format } from "date-fns";
import Head from "next/head";
import { FC } from "react";
import { Line, LineChart, Pie, PieChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

import { Card, CardContent, Container, Grid, Typography, useTheme } from "@material-ui/core";

import { MOCK_AMOUNT_OF_TRAININGS } from "../mocks/MOCK_AMOUNT_OF_TRAININGS";
import { MOCK_TYPE_OF_TRAININGS } from "../mocks/MOCK_TYPES_OT_TRAININGS";

const Statistics: FC = () => {
	const theme = useTheme();

	return (
		<div>
			<Head>
				<title>Statistics | pixelgym</title>
				<meta name="Description" content="Chat page for pixelgym app." />
			</Head>
			<Container maxWidth="sm">
				<Grid sx={{ marginTop: theme.spacing(8), marginBottom: theme.spacing(2) }}>
					<Card variant="outlined" sx={{ width: "100%" }}>
						<CardContent sx={{ paddingRight: 0 }}>
							<Typography variant="h5">Amount</Typography>
							<ResponsiveContainer height={250} width="100%">
								<LineChart data={MOCK_AMOUNT_OF_TRAININGS}>
									<XAxis
										dataKey="x"
										stroke={theme.palette.primary.main}
										tickFormatter={(timeStr) => format(timeStr, "MMM d")}
										angle={22.5}
									/>
									<YAxis stroke={theme.palette.primary.main} orientation="right" />
									<Line
										type="natural"
										dataKey="y"
										stroke={theme.palette.primary.main}
										strokeWidth={2}
										fill={theme.palette.primary.main}
									/>
								</LineChart>
							</ResponsiveContainer>
						</CardContent>
					</Card>
				</Grid>
				<Grid>
					<Card variant="outlined" sx={{ width: "100%" }}>
						<CardContent sx={{ paddingRight: 0 }}>
							<Typography variant="h5">Types</Typography>
							<ResponsiveContainer height={250} width="100%">
								<PieChart>
									<Pie
										cx="50%"
										cy="50%"
										innerRadius={40}
										outerRadius={60}
										paddingAngle={5}
										data={MOCK_TYPE_OF_TRAININGS}
										dataKey="amount"
										label={({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
											const RADIAN = Math.PI / 180;
											const radius = 25 + innerRadius + (outerRadius - innerRadius);
											const x = cx + radius * Math.cos(-midAngle * RADIAN);
											const y = cy + radius * Math.sin(-midAngle * RADIAN);
											return (
												<text
													x={x}
													y={y}
													fill={theme.palette.primary.main}
													textAnchor={x > cx ? "start" : "end"}
													dominantBaseline="central"
												>
													{MOCK_TYPE_OF_TRAININGS[index].type} ({value})
												</text>
											);
										}}
										fill={theme.palette.primary.main}
										stroke={theme.palette.primary.main}
									/>
								</PieChart>
							</ResponsiveContainer>
						</CardContent>
					</Card>
				</Grid>
			</Container>
		</div>
	);
};

export default Statistics;
