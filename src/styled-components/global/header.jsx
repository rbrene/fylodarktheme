import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { rem, min } from '../../helpers/units';


export const Header = styled(animated.header)`
    position: absolute;
    top: ${rem(24)};
    width: 100%;
    height: auto;
    padding-inline: clamp(${rem(20)}, 6vw, ${rem(80)});
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
`;

export const LogoWrapper = styled(animated.div)`
    position: relative;
    width: ${rem(80)};
    z-index: inherit;
    ${min('mobile')} {
        width: ${rem(176)};
    }
`;