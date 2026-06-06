import React from "react";
import "./App.css";

import AppLayout from "./componants/AppLayout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Aboute from "./pages/Aboute";
import Country from "./pages/Country";
import Contect from "./pages/Contect";
import ErrorPage from "./pages/ErrorPage";
import CountryDetails from "./componants/Ui/CountryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aboute",
        element: <Aboute />,
      },
      {
        path: "/country",
        element: <Country />,
      },
      {
        path: "/country/:id",
        element: <CountryDetails />,
      },
      {
        path: "contect",
        element: <Contect />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <>
        <RouterProvider router={router}></RouterProvider>
      </>
    </div>
  );
};

export default App;
