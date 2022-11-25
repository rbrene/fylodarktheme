import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { rem, em, min } from '../../helpers/units';


export const H1 = styled(animated.h1)`
    position: relative;
    max-width: ${rem(320)};
    margin-top: ${rem(32)};
    margin-inline: auto;
    font-size: clamp(${rem(24)}, 2vw, ${rem(40)});
    font-family: 'raleway';
    text-align: center;
    line-height: 36px;
    z-index: inherit;

    ${min('mobile')} {
        max-width: 100%;
        font-size: ${rem(40)};
        line-height: 60px;
    }

`;

export const H2 = styled(animated.h2)`
    position: relative;
    max-width: 100%;
    margin-bottom: ${rem(18)};
    font-size: clamp(${rem(18)}, 3vw, ${rem(40)});
    font-family: 'raleway';
    font-variation-settings: 'wght' 700;
    line-height: ${em(24)};
    z-index: inherit;

    ${min('mobile')} {
        line-height: ${em(18)};
        max-width: 70%;
    }
`;

export const H3 = styled(animated.h3)`
    position: relative;
    font-size: clamp(${rem(18)}, 3vw, ${rem(32)});
    font-family: 'raleway';
    font-variation-settings: 'wght' 700;
    text-align: center;
    z-index: inherit;
`;

export const P = styled(animated.p)`
    position: relative;
    max-width: 100%;
    margin-top: ${rem(16)};
    margin-inline: auto;
    font-size: ${rem(14)};
    font-family: inherit;
    line-height: 21px;
    text-align: center;
    z-index: inherit;

    ${min('mobile')} {
        font-size: ${rem(20)};
        max-width: 100%;
        margin-top: ${rem(48)};
        line-height: 30px;
    }
`;


export const P1 = styled(animated.p)`
    position: relative;
    max-width: 100%;
    margin-block: ${em(16)};
    font-size: clamp(${rem(14)}, 2vw, ${rem(16)});
    font-family: inherit;
    line-height: 24px;
    z-index: inherit;

    ${min('mobile')} {
        max-width: 80%;
        line-height: 21px;
    }
`;

export const P3 = styled(animated.p)`
    position: relative;
    max-width: ${rem(673)};
    margin-block: ${rem(16)} ${rem(32)};
    margin-inline: auto;
    font-size: ${rem(14)};
    font-family: 'raleway';
    font-variation-settings: 'wght' 400;
    text-align: center;
    line-height: 21px;
    z-index: inherit;

    ${min('tablet')} {
        margin-block: ${rem(29)} ${rem(38)};
    }

`;