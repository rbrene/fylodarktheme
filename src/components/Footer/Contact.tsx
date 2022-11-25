import React from 'react';
import { ContactRow } from '../../styled-components/layouts/flex/rows';
import { FooterFlex } from '../../styled-components/layouts/flex/index';
import {
    FooterLogoWrapper,
    FooterDetails,
    FooterIcon,
    FooterLocation,
    FooterPhone,
    FooterEmail,
    FooterList,
    FooterListItem,
    Social
} from '../../styled-components/global/footer';
import { FooterLogo } from '../../styled-components/components/Images';
import { FooterGrid } from '../../styled-components/layouts/grids/index';
import { FooterColumn } from '../../styled-components/layouts/grids/columns';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MdLocationPin, MdEmail } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';
import logo from '../../assets/svg/logo.svg';


const Contact = () => {
    return (
        <ContactRow>
            <FooterFlex>
                <FooterLogoWrapper>
                    <FooterLogo src={logo} alt='footer-logo' />
                </FooterLogoWrapper>
                <FooterGrid>
                    <FooterColumn>
                        <FooterDetails>
                            <FooterIcon><MdLocationPin /></FooterIcon>
                            <FooterLocation>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </FooterLocation>
                        </FooterDetails>
                    </FooterColumn>
                    <FooterColumn>
                        <FooterDetails>
                            <FooterIcon> <FiPhoneCall /> </FooterIcon>
                            <FooterPhone> +1-543-123-4567 </FooterPhone>
                        </FooterDetails>

                        <FooterDetails>
                            <FooterIcon> <MdEmail /> </FooterIcon>
                            <FooterEmail> example@fylo.com </FooterEmail>
                        </FooterDetails>
                    </FooterColumn>
                    <FooterColumn>
                        <FooterList>
                            <FooterListItem>About Us</FooterListItem>
                            <FooterListItem>Jobs</FooterListItem>
                            <FooterListItem>Press</FooterListItem>
                            <FooterListItem>Blog</FooterListItem>
                        </FooterList>
                    </FooterColumn>
                    <FooterColumn>
                        <FooterList>
                            <FooterListItem>Contact Us</FooterListItem>
                            <FooterListItem>Terms</FooterListItem>
                            <FooterListItem>Privacy</FooterListItem>
                        </FooterList>
                    </FooterColumn>
                    <FooterColumn>
                        <Social><FaFacebookF/></Social>
                        <Social><FaTwitter/></Social>
                        <Social><FaInstagram/></Social>
                    </FooterColumn>
                </FooterGrid>
            </FooterFlex>
        </ContactRow>
    )
}

export default Contact;