import React from "react";
import { NavLink, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  //   console.log(error.data);
  return (
    <>
      <div>
        <h1>Error Page</h1>
        <h1>{error.data}</h1>
        <NavLink to="/">
          <button>Go Home</button>
        </NavLink>
      </div>

      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h1 style={{ fontSize: "6rem", margin: 0 }}>404</h1>

        <h2>Oops! Page Not Found</h2>

        <p>The page you are looking for doesn't exist or has been moved.</p>

        <NavLink
          to="/"
          style={{
            marginTop: "20px",
            padding: "12px 24px",
            background: "#2563eb",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "8px",
          }}
        >
          Back to Home
        </NavLink>
      </div>
    </>
  );
};

export default ErrorPage;
