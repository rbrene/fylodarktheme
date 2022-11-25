import React from 'react';
import { LinkProps } from '../types/types';
import { Link as A, Text, Icon, Underline } from '../styled-components/components/links';
import { ReactComponent as Arrow } from '../assets/svg/icon-arrow.svg';
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
            <Text>{text} <Icon style={svgSpring} > <Arrow /> </Icon> </Text>
            <Underline/>
        </A>
    )
}

export default Link;