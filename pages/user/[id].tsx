import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { Pie, PieChart, ResponsiveContainer } from "recharts";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { MOCK_TYPE_OF_TRAININGS } from "../../mocks/MOCK_TYPES_OT_TRAININGS";
import { imageLoader } from "../../utils";

const User = () => {
	const router = useRouter();
	const theme = useTheme();
	const { id } = router.query;

	return (
		<div>
			<Head>
				<title>{id} | pixelgym</title>
				<meta name="Description" content="User page for pixelgym app." />
			</Head>
			<Container maxWidth="sm" sx={{ paddingTop: theme.spacing(10) }}>
				<Grid container alignItems="center" direction="column">
					<Avatar sx={{ height: theme.spacing(12), width: theme.spacing(12), marginBottom: theme.spacing(2) }}>
						<Image loader={imageLoader} layout="fixed" src={"a"} alt={`${id} user avatar`} width={96} height={96} />
					</Avatar>
					<Typography variant="h3" component="span" sx={{ marginBottom: theme.spacing(4) }}>
						{id}
					</Typography>
					<Grid container justifyContent="center" sx={{ marginBottom: theme.spacing(2) }}>
						<Grid xs={4} item container direction="column" alignItems="center">
							<Typography variant="caption">Trainings</Typography>
							<Typography variant="body1">789</Typography>
						</Grid>
						<Grid xs={4} item container direction="column" alignItems="center">
							<Typography variant="caption">Groups</Typography>
							<Typography variant="body1">789</Typography>
						</Grid>
					</Grid>
					<ResponsiveContainer height={250} width="100%">
						<PieChart>
							<Pie
								isAnimationActive={false}
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
				</Grid>
			</Container>
		</div>
	);
};

export default User;
