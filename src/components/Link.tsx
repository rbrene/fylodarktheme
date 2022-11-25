import React from 'react';
import { LinkProps, FooterLinkProps, SocialLinkProps } from '../types/types';
import { Link as A, Text, Icon, Underline } from '../styled-components/components/links';
import { FooterListItem, Social } from '../styled-components/global/footer';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useSpring } from '@react-spring/web';


const Link = ({ to, text }: LinkProps) => {
    const [hover, setHover] = React.useState<boolean>(false);

    const mouseEnter = (e: MouseEvent) => setHover(true);

    const mouseLeave = (e: MouseEvent) => setHover(false);

    const spring = useSpring({
        to: {
            color: hover ? 'hsl(0, 0%, 100%)' : 'hsl(176, 68%, 64%)'
        }
    })

    const svgSpring = useSpring({
        to: {
            color: hover ? 'hsl(0, 0%, 100%)' : 'hsl(176, 68%, 64%)'
        }
    })
    
    return (
        <A
            href={to}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            style={spring}
        >
            <Text>{text} <Icon style={svgSpring} > <BsFillArrowRightCircleFill /> </Icon> </Text>
            <Underline/>
        </A>
    )
}

export default Link;

export const FooterLink = ({ text }: FooterLinkProps) => {
    const [hover, setHover] = React.useState<boolean>(false);

    const mouseEnter = (e: MouseEvent) => setHover(true);

    const mouseLeave = (e: MouseEvent) => setHover(false);

    const spring = useSpring({
        to: {
            fontWeight: hover ? 700 : 400,
        }
    })

    return (
        <FooterListItem
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            style={spring}
        >
            {text}
        </FooterListItem>
    )
}

export const SocialLink = ({ icon }: SocialLinkProps) => {
    const [hover, setHover] = React.useState<boolean>(false);

    const mouseEnter = (e: MouseEvent) => setHover(true);

    const mouseLeave = (e: MouseEvent) => setHover(false);

    const spring = useSpring({
        to: {
            borderColor: hover ? 'hsl(176, 68%, 64%)' : 'hsl(0, 0%, 100%)',
            color: hover ? 'hsl(176, 68%, 64%)' : 'hsl(0, 0%, 100%)'
        }
    })

    switch (icon) {
        case 'facebook': 
            return (
                <Social
                    onMouseEnter={mouseEnter}
                    onMouseLeave={mouseLeave}
                    style={spring}
                >
                    <FaFacebookF />
                </Social>
            )
        case 'twitter':
            return (
                <Social
                    onMouseEnter={mouseEnter}
                    onMouseLeave={mouseLeave}
                    style={spring}
                >
                    <FaTwitter />
                </Social>
            )
        case 'instagram':
            return (
                <Social
                    onMouseEnter={mouseEnter}
                    onMouseLeave={mouseLeave}
                    style={spring}
                >
                    <FaInstagram/>
                </Social>
            )
        default:
            throw console.error('no icon type specified')
    }

    // return (
    //     <Social
    //         onMouseEnter={mouseEnter}
    //         onMouseLeave={mouseLeave}
    //         style={spring}
    //     >
    //         {icon}
    //     </Social>
    // )
}
