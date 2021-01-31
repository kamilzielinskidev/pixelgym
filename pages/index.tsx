import Head from "next/head";
import { FC } from "react";
import { FeedPost } from "../components/FeedPost";
import { MOCK_POSTS } from "../mocks/MOCK_POSTS";

const Feed: FC = () => (
	<>
		<Head>
			<title>pixelgym | feed</title>
			<meta name="description" content="Pixelgym app feed page." />
		</Head>
		<div className="p-4">
			<ul>
				{MOCK_POSTS.map((post) => (
					<li key={post.id} className="mb-4">
						<FeedPost {...post} />
					</li>
				))}
			</ul>
		</div>
	</>
);

export default Feed;
