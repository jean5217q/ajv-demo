import React, { useState } from 'react';
import styled from 'styled-components';
// import { validateForUser, validateForUserItem } from 'modal/user';
// import {
//   normalizeAllErrors,
//   normalizeSingleError,
//   // normalizeErrors,
// } from 'modal/validator';
// import axios from 'axios';

import SignUp from './scene/SignUp';
import EditProfile from './scene/EditProfile';

const NavButton = styled.div`
  position: relative;
  margin: 0 1rem;
  padding: 1rem 0;
  color: white;
  cursor: pointer;
  &::before {
    content: "";
    display: block;
    position: absolute;
    z-index: 2;
    top: 40px;
    left: 0;
    width: 0;
    height: 1px;
    transition: 0.1s ease-in;
    background-color: white;
  }
  &:hover {
    &::before {
      width: 100%;
    }
  }
`;

const NavBar = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: black;
`;

const Conatiner = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  margin-top: 100px;
  margin-right: auto;
  margin-left: auto;
  padding: 30px 50px;
  border: solid 1px #ddd;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.01);
`;

const baseUrl = 'http://localhost:2222';

const Appcomponent = () => {
  const [showSignUp, setShowSignUp] = useState(true);

  const handleNavClick = () => setShowSignUp(!showSignUp);
  return (
    <>
      <NavBar>
        <NavButton onClick={handleNavClick}>Sign Up</NavButton>
        <NavButton onClick={handleNavClick}>Edit Profile</NavButton>
      </NavBar>
      <Conatiner>
        {showSignUp ? (
          <SignUp baseUrl={baseUrl} />
        ) : (
          <EditProfile baseUrl={baseUrl} />
        )}
      </Conatiner>
    </>
  );
};

export default Appcomponent;
