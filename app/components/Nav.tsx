"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import styles from "../styles/layout.module.css";
import Image from "next/image";

export const Navc = () => {
  const pathname = usePathname();

  return (
    <Navbar expand="lg" className={styles.nav}>
      <Image
                src="/code-brackets.svg"
                className={styles.logo}
                alt="logo"
                width={100}
                height={100}
                style={{ maxWidth: '3em', maxHeight: '3em' }}
              />
      <Container>
        <Navbar.Toggle className= "ms-auto" aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse className="ms-auto" id="basic-navbar-nav">
          <Nav className="ms-auto">
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
