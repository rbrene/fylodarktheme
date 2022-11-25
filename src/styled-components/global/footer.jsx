import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { rem, min } from '../../helpers/units';


export const Footer = styled(animated.footer)`
    position: relative;
    width: 100%;
    height: max-content;
    background-color: var(--darkBlueMain);
    z-index: inherit;
`;

export const FooterLogoWrapper = styled(animated.div)`
    width: ${rem(112)};
    height: ${rem(32)};
    z-index: inherit;
`;

export const FooterIcon = styled(animated.div)`
    position: relative;
    width: ${rem(12.38)};
    height: ${rem(18)};
    z-index: inherit;

    svg {
        fill: #fff;
    }
`;

export const FooterDetails = styled(animated.div)`
    position: relative;
    display: flex;
    gap: ${rem(16)};
    z-index: inherit;
`;

export const FooterLocation = styled(animated.div)`
    position: relative;
    max-width: ${rem(339)};
    width: auto;
    height: 100%;
    font-size: ${rem(14)};
    display: flex;
    gap: ${rem(16)};
    z-index: inherit;
`;

export const FooterPhone = styled(animated.div)`
    position: relative;
    font-size: clamp(${rem(12)}, 2vw, ${rem(14)});
    display: flex;
    align-items: center;
    gap: ${rem(16)};
    z-index: inherit;
`;

export const FooterEmail = styled(animated.div)`
    position: relative;
    font-size: clamp(${rem(12)}, 2vw, ${rem(14)});
    display: flex;
    align-items: center;
    gap: ${rem(16)};
    z-index: inherit;
`;

export const FooterList = styled(animated.ul)`
    position: relative;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: ${rem(8)};
    z-index: inherit;
`;

export const FooterListItem = styled(animated.li)`
    position: relative;
    font-size: clamp(${rem(12)}, 2vw, ${rem(14)});
    z-index: inherit;
    cursor: default;

    ${min('desktop')} {
        cursor: pointer;
    }

`;

export const Social = styled(animated.span)`
    position: relative;
    height: max-content;
    padding: ${rem(8)};
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #fff;
    border-radius: 50%;
    z-index: inherit;
    cursor: default;

    svg {
        position: relative;
        width: ${rem(12)};
        height: auto;
    }

    ${min('desktop')} {
        cursor: pointer;
    }

`;