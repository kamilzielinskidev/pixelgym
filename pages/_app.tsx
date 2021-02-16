import { AppProps } from "next/dist/next-server/lib/router/router";
import { useEffect } from "react";

import createCache from "@emotion/cache";
import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";

import { GroupsSidebar, Topbar } from "../components";
import { PAGES_WITH_ACTION_LAYOUT, theme } from "../constants";
import { useRouter } from "next/router";

export const cache = createCache({ key: "css", prepend: true });

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentElement!.removeChild(jssStyles);
		}
	}, []);

	const router = useRouter();

	return (
		<ThemeProvider theme={createMuiTheme(theme)}>
			<CssBaseline />
			{PAGES_WITH_ACTION_LAYOUT.includes(router.pathname) && (
				<>
					<GroupsSidebar />
					<Topbar />
				</>
			)}
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
