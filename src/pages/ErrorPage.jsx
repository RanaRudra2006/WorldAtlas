import React from "react";
import { NavLink, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  //   console.log(error.data);
  return (
    <div>
      <h1>Error Page</h1>
      <h1>{error.data}</h1>
      <NavLink to="/">
        <button>Go Home</button>
      </NavLink>
    </div>
  );
};

export default ErrorPage;
