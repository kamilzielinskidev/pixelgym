import React, { Fragment } from "react";

import { Add, Chart, House, Search, User } from "../components/icons";

export const BottomNavigation: React.FC = ({ children }) => (
  <Fragment>
    {children}
    <div className="fixed bottom-0 max-w-xl w-full">
      <div className="flex justify-around">
        <a className="flex">
          [ <House /> ]
        </a>
        <a className="flex">
          [ <Chart /> ]
        </a>
        <a className="flex">
          [ <Add /> ]
        </a>
        <a className="flex">
          [ <Search /> ]
        </a>
        <a className="flex">
          [ <User /> ]
        </a>
      </div>
    </div>
  </Fragment>
);
