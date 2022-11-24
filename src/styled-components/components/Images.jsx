import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { min } from '../../helpers/units';


const Image = styled(animated.img)`
    position: relative;
    max-width: ${({$maxWidth}) => $maxWidth ? $maxWidth : '100%'};
    height: ${({$height}) => $height ? $height : 'auto'};
    object-fit: ${({$cover}) => $cover ? 'cover' : 'contain'};
    z-index: ${({$zIndex}) => $zIndex ? $zIndex : 'inherit'};
`;

export default Image;

export const Logo = styled(animated.img)`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: inherit;
`;

export const HomeImage = styled(animated.img)`
    position: relative;
    max-width: 100%;
    height: auto;
    object-fit: contain;
    z-index: inherit;
`;
