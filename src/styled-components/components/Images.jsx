import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { rem, min } from '../../helpers/units';


const Image = styled(animated.img)`
    position: relative;
    max-width: ${({$maxWidth}) => $maxWidth ? $maxWidth : '100%'};
    height: ${({$height}) => $height ? $height : 'auto'};
    object-fit: ${({$cover}) => $cover ? 'cover' : 'contain'};
    z-index: ${({$zIndex}) => $zIndex ? $zIndex : 'inherit'};
`;

export default Image;

export const BackgroundImage = styled(animated.img)`
    position: absolute;
    bottom: 0;
    max-width: 100%;
    height: auto;
    object-fit: contain;
    z-index: -1;
`;

export const Logo = styled(animated.img)`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: inherit;
    cursor: default;

    ${min('desktop')} {
        cursor: pointer;
    }
`;

export const HomeImage = styled(animated.img)`
    position: relative;
    max-width: 100%;
    height: auto;
    object-fit: contain;
    z-index: inherit;
`;

export const ProductiveImage = styled(animated.img)`
    position: relative;
    max-width: 100%;
    height: 100%;
    object-fit: contain;
    z-index: inherit;
`;

export const ProfileImage = styled(animated.img)`
    position: relative;
    width: ${rem(24)};
    height: ${rem(24)};
    border-radius: 50%;
    z-index: inherit;
`;

export const Qoutes = styled(animated.img)`
    position: absolute;
    top: ${rem(-16)};
    left: ${rem(16)};
    width: auto;
    height: auto;
    z-index: -1;
`;

export const FooterLogo = styled(animated.img)`
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: contain;
    z-index: inherit;
    cursor: default;

    ${min('desktop')} {
        cursor: pointer;
    }
`;

export const FooterIcon = styled(animated.img)`
    position: relative;
    width: ${rem(13)};
    height: auto;
    object-fit: contain;
    z-index: inherit;
`;
