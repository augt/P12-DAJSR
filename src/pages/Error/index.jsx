import React from "react";
import { Link } from "react-router-dom";
import ErrorCSS from "./Error.module.css";

function Error() {
  return (
    <main className={ErrorCSS.error_container}>
      <p>La page que vous demandez n'existe pas.</p>
      <Link to={"/12"}>Retourner sur le Dashboard</Link>
    </main>
  );
}

export default Error;
