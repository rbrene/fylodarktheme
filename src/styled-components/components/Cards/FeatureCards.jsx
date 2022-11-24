import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { FlexColumn } from '../../layouts/flex';
import { rem, min } from '../../../helpers/units';


export const FeatureCard = styled(animated.div)`
    position: relative;
    width: ${rem(320)};
    height: ${rem(200)};
    z-index: inherit;

    ${min('mobile')} {
        width: ${rem(350)};
        height: ${rem(214)};
    }
`;

export const Layout = styled(FlexColumn)`
    align-items: center;
`; 

export const Icon = styled(animated.img)`
    position: relative;
    margin-bottom: ${rem(24)};
    width: ${rem(80)};
    height: ${rem(80)};
    object-fit: contain;
    z-index: inherit;

    ${min('mobile')} {
        margin-bottom: ${rem(16)};
    }
`;

export const Heading = styled(animated.header)`
    position: relative;
    margin-bottom: ${rem(8)};
    font-size: clamp(${rem(18)}, 2vw, ${rem(20)});
    font-variation-settings: 'wght' 700;
    z-index: inherit;
`;

export const Description = styled(animated.article)`
    position: relative;
    font-size: ${rem(14)};
    text-align: center;
    line-height: 21px;
    z-index: inherit;
`;