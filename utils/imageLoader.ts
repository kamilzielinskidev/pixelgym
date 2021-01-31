export const imageLoader = ({ src, width, quality }) =>
	`https://images.unsplash.com/${src}&w=${width}&q=${quality || 50}`;
