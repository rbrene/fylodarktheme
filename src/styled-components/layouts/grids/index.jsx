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