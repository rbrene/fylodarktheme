import styled from 'styled-components';
import Container from '../containers/index';
import { min } from '../../../helpers/units';


export const Column = styled(Container)`
    &:nth-child(2) {
        height: max-content;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;

        ${min('tablet')} {
            height: 100%;
        }
    }
`;