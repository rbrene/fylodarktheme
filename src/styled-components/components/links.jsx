import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { rem } from '../../helpers/units';


export const Link = styled(animated.a)`
    position: relative;
    width: max-content;
    text-decoration: none;
    display: inline-flex;
    flex-direction: column;
    gap: ${rem(8)};
    color: var(--cyan);

    &:visited,
    &:active {
        text-decoration: none;
        color: var(--cyan);
    }
`;

export const Text = styled(animated.span)`
    position: relative;
    width: max-content;
    height: max-content;
    display: inherit;
    gap: ${rem(8)};
    z-index: inherit;
`;

export const Icon = styled(animated.span)`
    position: relative;
    width: max-content;
    height: auto;
    display: inherit;
    align-items: center;
    z-index: inherit;
`;

export const Underline = styled(animated.div)`
    position: relative;
    width: 100%;
    height: ${rem(1)};
    background-color: currentColor;
    z-index: inherit;
`;