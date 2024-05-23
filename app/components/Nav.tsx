"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import styles from "../styles/layout.module.css";

export const Navc = () => {
  const pathname = usePathname();

  return (
    <Navbar expand="lg" className={styles.nav}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link
              className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
              href="/"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={`${styles.link} ${
                pathname === "/verify" ? styles.active : ""
              }`}
              href="/verify"
            >
              Verify
            </Nav.Link>
            <Nav.Link
              className={`${styles.link} ${
                pathname === "/quotes" ? styles.active : ""
              }`}
              href="/quotes"
            >
              Quotes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};