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
    FooterList
} from '../../styled-components/global/footer';
import { FooterLogo } from '../../styled-components/components/Images';
import { FooterGrid } from '../../styled-components/layouts/grids/index';
import { FooterColumn } from '../../styled-components/layouts/grids/columns';
import { FooterLink } from '../../components/Link';
import { SocialLink } from '../../components/Link';
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
                            <FooterLink text='About Us' />
                            <FooterLink text='Jobs' />
                            <FooterLink text='Press' />
                            <FooterLink text='Blog' />
                        </FooterList>
                    </FooterColumn>
                    <FooterColumn>
                        <FooterList>
                            <FooterLink text='Contact Us' />
                            <FooterLink text='Terms' />
                            <FooterLink text='Privacy' />
                        </FooterList>
                    </FooterColumn>
                    <FooterColumn>
                        <SocialLink icon='facebook' />
                        <SocialLink icon='twitter' />
                        <SocialLink icon='instagram' />
                    </FooterColumn>
                </FooterGrid>
            </FooterFlex>
        </ContactRow>
    )
}

export default Contact;