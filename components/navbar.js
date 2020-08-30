import React, { useState } from "react";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Collapse,
} from "reactstrap";
import Link from "next/link";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link href="/" passHref>
          <NavbarBrand>Home</NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link href="/about" passHref>
                <NavLink>About</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/projects" passHref>
                <NavLink>Projects</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/blog" passHref>
                <NavLink>Capsaicin Hurts</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/resume" passHref>
                <NavLink>Résumé</NavLink>
              </Link>
            </NavItem>
          </Nav>
          <NavbarText>Developer</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
