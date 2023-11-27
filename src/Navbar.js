import { BrowserRouter as Router, Link } from "react-router-dom";
import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  MiddleContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  Logo,
  NavbarLink,
  Button,
} from "./Navbar.style";
import LogoImg from "./images/dumbell1.png";
import { logOut, handleClick, authStateCurrent } from './authentication';


function Navbar() {
//   const [extendNavbar, setExtendNavbar] = useState(false);

  const signANDregisterButton = "Sign In"

  return (

    <NavbarContainer>
      <NavbarInnerContainer>
        <LeftContainer>
            <Logo src={ LogoImg }></Logo>
        </LeftContainer>
        <MiddleContainer>
            <NavbarLinkContainer>
                {/* <Router> */}
                    <NavbarLink to="/"> Home</NavbarLink>
                    <NavbarLink to="/dashboard"> Dashboard</NavbarLink>
                    <NavbarLink onClick={logOut}> Log Out</NavbarLink>
                {/* </Router> */}
            </NavbarLinkContainer>
        </MiddleContainer>
        <RightContainer>
          {/* <Router> */}
            <Link to='/register'>
              <Button>{signANDregisterButton}</Button>
            </Link>
          {/* </Router> */}
        </RightContainer>
      </NavbarInnerContainer>
    </NavbarContainer>
  );
}

export default Navbar;
