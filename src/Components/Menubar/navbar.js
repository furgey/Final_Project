import React from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import {Route, NavLink, HashRouter} from "react-router-dom";
import Logo from "./logo.png";

import './style.css';

function NavbarT() {
    return (
            <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#/"><img src={Logo} alt="Origin Logo" className="img"/><b className="larger">Origin</b></Navbar.Brand>
                        <Nav>
                        <Nav.Link href="#games" ><p className="bigger">Games</p></Nav.Link>
                        <Nav.Link href="#support"><p className="bigger">Support</p></Nav.Link>
                        <Nav.Link href="#contact"><p className="bigger">Contact</p></Nav.Link>
                        </Nav>
            <Form inline class className="right">
            <FormControl type="text" placeholder="Search"/>
            </Form>
            <Form inline className="rightpadding1">
            <Button variant="outline-info">Search</Button>
            </Form>
            <Form inline className="size">
                <Button className="btn">Login </Button>
                <p></p> <p>s </p>
                <Button >Sign Up</Button>
            </Form>
            </Navbar>
    );
}

export default NavbarT;