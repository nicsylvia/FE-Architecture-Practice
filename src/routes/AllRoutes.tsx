import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { HomeLayouts } from "../components";

export const element = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts />,
    children: [
      {
        index: true,
      },
    ],
  },
]);
