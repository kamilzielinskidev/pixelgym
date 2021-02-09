import { AppProps } from "next/dist/next-server/lib/router/router";

import { Container, createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";

import { GroupsSidebar, Topbar } from "../components";
import { theme } from "../constants";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={createMuiTheme(theme)}>
			<CssBaseline />
			<GroupsSidebar />
			<Topbar />
			<Container maxWidth="sm">
				<Component {...pageProps} />
			</Container>
		</ThemeProvider>
	);
}

export default MyApp;
