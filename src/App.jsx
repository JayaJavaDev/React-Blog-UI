import React from "react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Template from "./components/Template";
import All from "./components/All";
import FullStack from "./components/Fullstack";
import DataScience from "./components/Datascience";
import CyberSecurity from "./components/Cybersecurity";
import AI from "./components/AI";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      {
        index: true,
        element: <All />,
      },
      {
        path: "fullstackdev",
        element: <FullStack />,
      },
      {
        path: "datascience",
        element: <DataScience />,
      },
      {
        path: "cybersecurity",
        element: <CyberSecurity />,
      },
      {
        path: "ai",
        element: <AI />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;