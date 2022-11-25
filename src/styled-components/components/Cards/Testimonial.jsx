import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { rem, em, min } from '../../../helpers/units';


export const TestimonialCard = styled(animated.div)`
    position: relative;
    max-width: ${rem(402)};
    margin-inline: auto;
    width: 100%;
    height: 100%;
    padding: ${rem(24)};
    background-color: var(--darkBlueTestimonial);
    border-radius: ${rem(4)};
    z-index: inherit;

    ${min('mobile')} {
        padding: ${rem(24)} ${rem(20)};
    }
`;

export const Text = styled(animated.div)`
    position: relative;
    margin-bottom: ${rem(17)};
    font-size: clamp(${rem(10)}, 2vw, ${rem(14)});
    line-height: 18px;
    z-index: inherit;

    ${min('mobile')} {
        line-height: 21px;
    }
`;

export const Profile = styled(animated.footer)`
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    gap: ${rem(8)};
    z-index: inherit;
`;

export const ProfileDetails = styled(animated.div)`
    position: relative;
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    z-index: inherit;
`;

export const Name = styled(animated.span)`
    position: relative;
    width: 100%;
    height: max-content;
    font-size: ${rem(10)};
    font-family: 'open-sans';
    font-variation-settings: 'wght' 700;
    letter-spacing: ${em(0.5)};
    z-index: inherit;
`;

export const Occupation = styled(animated.span)`
    position: relative;
    width: 100%;
    height: auto;
    font-size: ${rem(10)};
    font-family: 'open-sans';
    font-variation-settings: 'wght' 400;
    opacity: 0.5;
    z-index: inherit;
`;