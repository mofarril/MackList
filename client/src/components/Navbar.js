import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <h1><a className="navbar-brand" href="/">Macklist</a></h1>
        <a href="/login" className="btn btn-outline-success">LogIn / SignUp</a>
      </nav>
    </div>

  );
}

export default Navbar;