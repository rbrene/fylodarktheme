import React from 'react';
import { Header as Wrapper, LogoWrapper } from '../styled-components/global/header';
import { Logo } from '../styled-components/components/Images';
import logoSrc from '../assets/svg/logo.svg';
import Navbar from './Nav/Navbar';


const Header = () => {
    return (
        <Wrapper>
            <LogoWrapper>
                <Logo src={logoSrc} alt='logo' />
            </LogoWrapper>
            <Navbar />
        </Wrapper>
    );
}

export default Header;