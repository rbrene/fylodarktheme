import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { rem, min } from '../../../helpers/units';


export const EmailRow = styled(animated.div)`
    position: relative;
    width: 100%;
    height: 40%;
    z-index: 2;
`;

export const ContactRow = styled(animated.div)`
    position: relative;
    width: 100%;
    height: ${rem(720)};
    padding-block: ${rem(32)};
    display: flex;
    align-items: flex-end;
    background-color: var(--darkBlueFooter);

    ${min('tablet')} {
        height: ${rem(539)};
        align-items: flex-end;
    }

`;
