import React, { Fragment } from "react";

interface Props {
  dark?: boolean;
}

export const Theme: React.FC<Props> = ({ children, dark }) => (
  <Fragment>
    <style>--primary: {dark ? "#F9FAFB" : "#111827"}</style>
    {children}
  </Fragment>
);
