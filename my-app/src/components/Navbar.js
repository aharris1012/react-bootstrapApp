import React from 'react'
import {Nav, Navbar} from "react-bootstrap"
import styled from "styled-components"

export const Navigation =() =>
    (
       
            <Styles>
                <Navbar expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">Hello There</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
                    

                </Navbar>

            </Styles>
            
        
    )









const Styles =styled.div
`
.nav-bar{
    background-color: pink;

}
.nav-bar, .navbar-nav .nav-link{
    color: white;

    &:hover{
        color: purple;
    }
};
`