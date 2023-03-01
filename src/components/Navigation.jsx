import React from "react";
import MenuLogo from "./MenuLogo";

function Navigation() {
  return (
    <nav>
      <MenuLogo />
      <h1 className="logo-center">Lotion</h1>
      <h2 className="logo-center">Like notion, but worse.</h2>
    </nav>
  );
}
export default Navigation;
