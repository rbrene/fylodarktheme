import styled from 'styled-components';
import Container from '../containers/index';
import { rem } from '../../../helpers/units';


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