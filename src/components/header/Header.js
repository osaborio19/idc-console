import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { BiUser } from "react-icons/bi";
import { BsQuestionCircle } from "react-icons/bs";


const Header = (props) => {

  const userData = props.userData

  const userName = userData.name ? userData.name : null

  return (
    <>
      <Navbar
        className="navbar navbar-expand-sm navbar-dark bg-primary second-navbar"
        expand="sm"
        sticky="top">
        <Navbar.Brand href="/" className='m-1'>
          IDC Console
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>

        <Navbar.Collapse className="justify-content-end user-image">
          <BsQuestionCircle className="icon-question" />
          <div className="space"></div>

          <DropdownButton
            className="dropdown dropdown-menu-right m-2"
            size="sm"
            title={
              <BiUser />
            }
          >
            <Dropdown.Item>{userName}</Dropdown.Item>
            <Dropdown.Item as="button" onClick={props.logoutHandler}>
              Sign-out
            </Dropdown.Item>
          </DropdownButton>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
