import React, { useState } from "react";
import { useHistory,Link,NavLink } from "react-router-dom";
import {   Menu, Container, Button,Icon } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import FavoriteAd from "./FavoriteAd";
import { useSelector } from "react-redux";


export default function Navi() {
  const favoriteItems = useSelector(state => state.favori)
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
            <FavoriteAd/>
              {isAuthenticated?<SignedIn signOut={handdleSignOut} />
              :<SignedOut signIn={handdleSignIn}/>}  
              <Menu.Item>
                <Button as={NavLink} to="/jobadvad" color="green"><Icon color="white" name="address card"/> İlan Ekle</Button>
              </Menu.Item>
              
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}

