import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavDropdown, Collapse, NavLink, NavItem, Jumbotron, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Button, Label } from 'reactstrap';
import '../App.css';

class Header extends Component {

    render() {
        return (
            <div >
                <Navbar dark expand="md" className="Navbar">
                    <div className="container">
                        <NavbarBrand>Quarantine with us</NavbarBrand>
                        

                    </div>
                </Navbar>
            </div>
        )
    }
}
export default Header;