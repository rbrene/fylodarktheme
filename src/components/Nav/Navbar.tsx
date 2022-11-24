import React from 'react';
import { Nav, List } from '../../styled-components/components/Nav';
import Item from './ListItem';


const Navbar = () => {
    return (
        <Nav>
            <List>
                <Item text='features' />
                <Item text='team' />
                <Item text='sign in' />
            </List>
        </Nav>
    )
}

export default Navbar;