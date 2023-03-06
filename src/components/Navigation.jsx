import React from "react";

function Navigation(props) {
  return (
    <nav className="navbar">
      <div className="menu button" onClick={props.toggleNotes}>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </div>
      <h1 className={"logo-center header-title"}>Lotion</h1>
      <h2 className={"logo-center header-sub"}>Like notion, but worse.</h2>
    </nav>
  );
}
export default Navigation;
