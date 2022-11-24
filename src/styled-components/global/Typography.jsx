import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { rem, min } from '../../helpers/units';


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
    font-family: 'raleway';
    z-index: inherit;
`;

export const H3 = styled(animated.h3)`
    position: relative;
    font-family: 'raleway';
    z-index: inherit;
`;

export const H4 = styled(animated.h4)`
    position: relative;
    font-family: 'raleway';
    z-index: inherit;
`;

export const H5 = styled(animated.h5)`
    position: relative;
    font-family: 'raleway';
    z-index: inherit;
`;

export const H6 = styled(animated.h6)`
    position: relative;
    font-family: 'raleway';
    z-index: inherit;
`;

export const Small = styled(animated.small)`
    position: relative;
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

