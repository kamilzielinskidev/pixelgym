import Head from "next/head";
import Image from "next/image";
import React, { FC } from "react";

import { Chat, Heart } from "../components/icons";
import { BottomNavigation, MaxWidth } from "../containers";
import { composedWith, imageLoader } from "../utils";

const FeedComponent: FC = () => (
  <div>
    <Head>
      <title>pixelgym | feed</title>
      <meta name="description" content="Pixelgym app feed page." />
    </Head>
    <div className="feed p-4">
      <div className="post">
        <div className="h-60 w-full relative">
          <Image
            className="object-cover"
            alt=""
            loader={imageLoader}
            layout="fill"
            src="photo-1571019613454-1cb2f99b2d8b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop"
          ></Image>
        </div>
        <div className="border-double p-4 border-4 border-black">
          <p className="font-mono">
            Lorem ipsum dolor sit amet, in omnesque fabellas qui. Ius in eius
            feugait euripidis, ea usu virtute debitis. Tamquam scribentur per
            et, ex pro dicta solet fuisset. Ea quas posse atomorum usu, no usu
            quidam detracto.
          </p>
          <div className="flex">
            <button className="flex">
              [ <Heart /> ]
            </button>
            <a className="flex">
              [ <Chat /> ]
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FeedPage = () => composedWith(MaxWidth, BottomNavigation)(FeedComponent);

export default FeedPage;
