import styled from 'styled-components';
import Container from '../containers/index';
import { rem, min, max } from '../../../helpers/units';


export const Column = styled(Container)`
    a {
        margin-block: ${rem(24)};
    }
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

export const FooterColumn = styled(Container)`
    display: flex;
    gap: ${rem(16)};

    &:nth-child(2) {
        flex-direction: column;
    }

    ${max('mobile')} {
        &:last-child {
            display: flex;
            justify-content: center;
        }
    }
`;