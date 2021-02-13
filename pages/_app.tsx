import { AppProps } from "next/dist/next-server/lib/router/router";
import { useEffect } from "react";

import createCache from "@emotion/cache";
import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";

import { GroupsSidebar, Topbar } from "../components";
import { theme } from "../constants";

export const cache = createCache({ key: "css", prepend: true });

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentElement!.removeChild(jssStyles);
		}
	}, []);

	return (
		<ThemeProvider theme={createMuiTheme(theme)}>
			<CssBaseline />
			<GroupsSidebar />
			<Topbar />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
