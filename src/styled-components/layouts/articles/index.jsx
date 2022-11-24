import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { rem, viewportDimensions, min } from '../../../helpers/units';


const Article = styled(animated.article)`
    position: relative;
    max-width: ${({ $maxWidth }) => $maxWidth ? $maxWidth : '100%'};
    height: ${({ $height }) => $height ? $height : 'auto'};
    z-index: inherit;
`;

export default Article;

export const HomeArticle = styled(Article)`
    max-width: ${rem(viewportDimensions.tablet)};
    height: max-content;
    margin-inline: auto;
    padding-inline: ${rem(16)};

    ${min('mobile')} {
        padding-inline: ${rem(32)};
    }
`;