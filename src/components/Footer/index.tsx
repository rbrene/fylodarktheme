import React from 'react';
import { Footer as Wrapper } from '../../styled-components/global/footer';
import SignUp from './SignUp';
import Contact from './Contact';


const Footer = () => {
    return (
        <Wrapper>
            <SignUp />
            <Contact />
        </Wrapper>
    )
}

export default Footer;