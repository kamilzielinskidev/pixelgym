import Image from "next/image";
import { FC } from "react";

import { Post } from "../models";
import { imageLoader } from "../utils";
import { Heart, Comment } from "./icons";

type Props = Post;

export const FeedPost: FC<Props> = ({ user, userImg, date, content, imageUrl }) => (
	<div className="bg-background-secondary rounded-md">
		<div className="p-4">
			<div className="flex mb-4">
				<div className="mr-4">
					<Image
						className="rounded-full"
						layout="fixed"
						loader={imageLoader}
						src={userImg}
						alt={`${user} avatar`}
						width={60}
						height={60}
					/>
				</div>
				<div className="flex flex-col">
					<div className="text-primary font-bold">{user}</div>
					<div>{date.toLocaleDateString()}</div>
				</div>
			</div>
			{content && <div>{content}</div>}
		</div>
		<div>
			{imageUrl && (
				<Image
					className="object-cover"
					layout="responsive"
					loader={imageLoader}
					src={imageUrl}
					alt={`${user} photo`}
					width={600}
					height={480}
				/>
			)}
		</div>
		<div className="flex p-4">
			<Heart className="w-6 mr-4" />
			<Comment className="w-6" />
		</div>
	</div>
);
