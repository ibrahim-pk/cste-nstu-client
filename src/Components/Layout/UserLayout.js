import React from "react";
import Footer from "../Footer/Footer";
import NavBarRedisgn from "../Navbar/NavBarRedisgn";

export default function UserLayout({ children }) {
  return (
    <div>
      <NavBarRedisgn></NavBarRedisgn>
      {children}
      <Footer />
    </div>
  );
}
