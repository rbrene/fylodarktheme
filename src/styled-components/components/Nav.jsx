import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { rem, min } from '../../helpers/units';


export const Nav = styled(animated.nav)`
    position: relative;
    width: max-content;
    height: auto;
    z-index: inherit;
`;

export const List = styled(animated.ul)`
    position: relative;
    list-style: none;
    display: flex;
    gap: ${rem(24)};
    z-index: inherit;

    ${min('mobile')} {
        gap: ${rem(52)};
    }
`;

export const ListItem = styled(animated.li)`
    position: relative;
    font-size: clamp(${rem(12)}, 2vw, ${rem(16)});
    text-transform: capitalize;
    z-index: inherit;
    cursor: default;

    ${min('desktop')} {
        cursor: pointer;
    }
`;