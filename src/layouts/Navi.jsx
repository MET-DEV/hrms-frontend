import React, { useState } from "react";
import { useHistory,Link } from "react-router-dom";
import {  Dropdown, Menu, Container } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
export default function Navi() {
  const[isAuthenticated,setIsAuthenticated]=useState(true)
  const history=useHistory()
  function handdleSignOut(){
    setIsAuthenticated(false)
    history.push("/")
  }
  function handdleSignIn(){
    setIsAuthenticated(true)
  }
  return (
    <div>
      <Menu size="large">
      <Container>
          <Link to="/"><Menu.Item name="Ana Sayfa" /></Link>
          <Link to="/employees"><Menu.Item name="Kisiler" /></Link>

          <Menu.Menu position="right">
            <Dropdown item text="Language">
                <Dropdown.Menu>
                  <Dropdown.Item>English</Dropdown.Item>
                  <Dropdown.Item>Russian</Dropdown.Item>
                  <Dropdown.Item>Spanish</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {isAuthenticated?<SignedIn signOut={handdleSignOut} />
              :<SignedOut signIn={handdleSignIn}/>}  
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}

