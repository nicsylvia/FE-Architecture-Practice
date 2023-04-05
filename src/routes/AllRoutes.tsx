import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { HomeLayouts } from "../components";
import { About, Home } from "../pages";
import { ErrorBoundary, NotFound } from "../utils";

export const element = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },

      {
        path: "/about",
        element: <About />,
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
