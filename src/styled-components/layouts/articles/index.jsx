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

export const FeaturesArticle = styled(Article)`
    width: max-content;
    height: 100%;
    margin-inline: auto;
    padding-block: ${rem(120)};

    ${min('mobile')} {
        width: 100%;
    }
    
    ${min('tablet')} {
        padding-block: ${rem(64)};
    }
`;

export const ProductiveArticle = styled(Article)`
    padding: ${rem(16)};
    width: 100%;
    height: max-content;

    ${min('mobile')} {
        padding: ${rem(32)};
    }
`;