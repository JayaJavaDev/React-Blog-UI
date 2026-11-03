import React from "react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import FullStack from "./components/Fullstack.jsx";
import DataScience from "./components/Datascience.jsx";
import CyberSecurity from "./components/Cybersecurity.jsx";
import AI from "./components/Ai.jsx";

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