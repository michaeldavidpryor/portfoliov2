import React from "react";
import { Nav, NavLink } from "reactstrap";

import Link from "next/link";

const NavBar = (props) => {
  return (
    <div>
      <Nav>
        <Link href="/" passHref>
          <NavLink>Home</NavLink>
        </Link>
        <Link href="/contact" passHref>
          <NavLink>Contact</NavLink>
        </Link>
        <Link href="/projects" passHref>
          <NavLink>Projects</NavLink>
        </Link>
      </Nav>
    </div>
  );
};

export default NavBar;
