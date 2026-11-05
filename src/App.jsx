import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Template from "./components/Template.jsx";
import All from "./components/All.jsx";
import FullStack from "./components/Fullstack.jsx";
import DataScience from "./components/Datascience.jsx";
import CyberSecurity from "./components/Cybersecurity.jsx";
import AI from "./components/Ai.jsx";
import BlogDetails from "./components/BlogDetails.jsx";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      { index: true, element: <All /> },
      { path: "fullstackdev", element: <FullStack /> },
      { path: "datascience", element: <DataScience /> },
      { path: "cybersecurity", element: <CyberSecurity /> },
      { path: "ai", element: <AI /> },
      { path: "blog/:id", element: <BlogDetails /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
