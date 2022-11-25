import styled from 'styled-components';
import Container from '../containers/index';
import { rem, min } from '../../../helpers/units';


const Flex = styled(Container)`
    display: flex;
`;

export default Flex;

export const FlexColumn = styled(Flex)`
    flex-direction: column;
`;

export const HeroLayout = styled(FlexColumn)`
    height: max-content;
    gap: ${rem(120)};
`;

export const FooterFlex = styled(FlexColumn)`
    max-width: ${rem(1080)};
    height: max-content;
    padding-inline: ${rem(32)};
    margin-inline: auto;
    gap: ${rem(16)};
    place-content: end;

    ${min('tablet')} {
        padding-inline: 0;
    }

`;