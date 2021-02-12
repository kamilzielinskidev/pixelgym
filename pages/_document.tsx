import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";
import React from "react";

import createEmotionServer from "@emotion/server/create-instance";
import { ServerStyleSheets } from "@material-ui/core";

import { cache } from "./_app";

const { extractCritical } = createEmotionServer(cache);

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
				</Head>
				<body style={{ backgroundColor: "#241b2f" }}>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

MyDocument.getInitialProps = async (ctx) => {
	const sheets = new ServerStyleSheets();
	const originalRenderPage = ctx.renderPage;

	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
		});

	const initialProps = await Document.getInitialProps(ctx);
	const styles = extractCritical(initialProps.html);

	return {
		...initialProps,
		styles: [
			...React.Children.toArray(initialProps.styles),
			sheets.getStyleElement(),
			<style
				key="emotion-style-tag"
				data-emotion={`css ${styles.ids.join(" ")}`}
				// eslint-disable-next-line react/no-danger
				dangerouslySetInnerHTML={{ __html: styles.css }}
			/>,
		],
	};
};

export default MyDocument;
