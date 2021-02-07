import { AppProps } from "next/dist/next-server/lib/router/router";

import { Box, createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";

import { GroupsSidebar, Topbar } from "../components";
import { theme } from "../constants";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={createMuiTheme(theme)}>
			<CssBaseline />
			<Box sx={{ display: "flex" }}>
				<GroupsSidebar />
				<Box sx={{ overflowX: "hidden" }}>
					<Topbar />
					<Box>
						<Component {...pageProps} />
					</Box>
				</Box>
			</Box>
		</ThemeProvider>
	);
}

export default MyApp;
