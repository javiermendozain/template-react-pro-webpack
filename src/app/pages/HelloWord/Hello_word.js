import React from "react";
import { Link } from "react-router-dom";

const HelloWord = () => {
  return (
    <div>
      Hello Word
      <br />
      <Link className="Navbar__brand" to="/">
        Go to Home
      </Link>
    </div>
  );
};
export default HelloWord;
