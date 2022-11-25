import styled from 'styled-components';
import Container from '../containers/index';
import { rem, min } from '../../../helpers/units';


const Grid = styled(Container)`
    display: grid;
`;

export default Grid;

export const FeatureGrid = styled(Grid)`
    width: max-content;
    margin-inline: auto;
    grid-template-columns: 100%;
    grid-auto-rows: ${rem(199)};
    gap: ${rem(80)};
    align-content: center;

    ${min('tablet')} {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr)
    }
`;

export const ProductiveGrid = styled(Grid)`
    grid-template-columns: 100%;
    grid-template-rows: 1fr max-content;
    gap: ${rem(48)};
    align-items: center;

    ${min('tablet')} {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 100%; 
    }
`;

export const TestimonialGrid = styled(Grid)`
    grid-template-columns: 100%;
    grid-template-rows: 1fr max-content;
    padding: ${rem(16)};
    gap: ${rem(32)};
    align-items: center;

    ${min('tablet')} {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 100%; 
    }
`;

export const FooterGrid = styled(Grid)`
    height: auto;
    grid-template-columns: 100%;
    grid-auto-rows: max-content;
    gap: ${rem(40)};
    
    ${min('tablet')} {
        height: ${rem(220)};
        grid-template-columns: 2fr repeat(4, 1fr);
        grid-template-rows: 100%;
        gap: ${rem(32)};
    }
`;

