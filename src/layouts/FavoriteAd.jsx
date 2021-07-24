import React from 'react'
import { Dropdown } from "semantic-ui-react";
import { useSelector } from 'react-redux';
import {  NavLink } from 'react-router-dom';
export default function FavoriteAd() {
    const {favoriItems} = useSelector(state => state.favori)
    return (
        <div>
            <div>
            <Dropdown item text="Favori İlanlar">
              <Dropdown.Menu>
                {
                  favoriItems.map((favoriteItem)=>(
                    <Dropdown.Item key={favoriteItem.jobAdd.id}>
                      {favoriteItem.jobAdd.jobTitle}
                      
                    </Dropdown.Item>
                  ))
                }
                <Dropdown.Divider/>
                <Dropdown.Item as={NavLink} to="/favori">Favori İlanlara Git</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </div>
        </div>
    )
}
