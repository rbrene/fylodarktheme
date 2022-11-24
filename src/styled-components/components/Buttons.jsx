import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { rem, min } from '../../helpers/units';


const Button = styled(animated.button)`
    position: relative;
    font-family: 'raleway';
    font-variation-settings: 'wght' 700;
    padding-block: ${rem(16)};
    padding-inline: clamp(${rem(80)}, 2vw, ${rem(96)});
    border: none;
    border-radius: ${rem(70)};
    background: linear-gradient(to bottom right, var(--cyan) 0%, var(--blue) 100%);
    color: #fff;
    z-index: inherit;
    cursor: default;

    ${min('desktop')} {
        cursor: pointer;
    }
`;

export default Button;

export const HomeButton = styled(Button)`
    margin-block: ${rem(32)};
`;

