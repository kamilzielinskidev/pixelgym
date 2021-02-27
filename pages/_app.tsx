import { AppProps } from "next/dist/next-server/lib/router/router";
import { useRouter } from "next/router";
import { useEffect } from "react";
import createCache from "@emotion/cache";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import GroupsSidebar from "../components/GroupsSidebar";
import Topbar from "../components/Topbar";
import { PAGES_WITH_ACTION_LAYOUT, theme } from "../constants";
import { UserProvider } from "@auth0/nextjs-auth0";

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
			<UserProvider>
				<CssBaseline />
				{PAGES_WITH_ACTION_LAYOUT.includes(router.pathname) && (
					<>
						<GroupsSidebar />
						<Topbar />
					</>
				)}
				<Component {...pageProps} />
			</UserProvider>
		</ThemeProvider>
	);
}

export default MyApp;
