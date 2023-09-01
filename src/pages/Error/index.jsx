import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <main>
      <p>La page que vous demandez n'existe pas.</p>
      <Link to={"/"}>Retourner sur le Dashboard</Link>
    </main>
  );
}

export default Error;
