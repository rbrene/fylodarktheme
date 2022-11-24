import React, { useState, useRef } from 'react';
import { NavItemProps } from '../../types/types';
import { ListItem } from '../../styled-components/components/Nav';
import { useSpring } from '@react-spring/web';


const Item = ({ text }: NavItemProps) => {
    const ref = useRef();
    const [hover, setHover] = useState<boolean>(false);

    const mouseEnter = (e: React.MouseEvent<HTMLLIElement>) => setHover(true);

    const mouseLeave = (e: React.MouseEvent<HTMLLIElement>) => setHover(false);

    const spring = useSpring({
        to: {
            fontWeight: hover ? 700 : 400,
            textDecoration: hover ? 'underline' : 'none'
        }
    })
    
    return (
        <ListItem
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            style={spring}
            children={text}
            ref={ref}
        />
    )
}

export default Item;