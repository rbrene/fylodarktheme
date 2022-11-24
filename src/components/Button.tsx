import React, { useState } from 'react';
import { HomeButton as HomeButtonWrapper } from '../styled-components/components/Buttons';
import { useSpring } from '@react-spring/web';


export const HomeButton = () => {
    const [hover, setHover] = useState<boolean>(false);

    const mouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => setHover(true);

    const mouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => setHover(false);

    console.log(hover)

    const spring = useSpring({
        to: {
            background: hover ? 'linear-gradient(to bottom right, hsl(176, 68%, 64%) 100%, hsl(198, 60%, 50%) 100%)' : 'linear-gradient(to bottom right, hsl(176, 68%, 64%) 0%, hsl(198, 60%, 50%) 100%)'
        }
    })
    
    return (
        <HomeButtonWrapper
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            style={spring}
            children='Get Started'
        />
    )
}