import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { rem, em, min } from '../../helpers/units';


export const Form = styled(animated.form)`
    position: relative;
    max-width: ${rem(302)};
    margin-inline: auto;
    padding: ${rem(40)} ${rem(21)};
    background-color: var(--darkBlueIntroEmailSignUp);
    border-radius: ${rem(4)};
    translate: 0% 20%;
    filter: drop-shadow(5px 5px 8px rgba(0 0 0 / 0.25));
    z-index: 10;

    ${min('tablet')} {
        min-width: ${rem(720)};
        translate: 0% 50%;
    }
`;

export const FormField = styled(animated.fieldset)`
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: ${rem(32)};
    border: none;
    z-index: inherit;

    ${min('tablet')} {
        flex-direction: ${({$column}) => $column ? 'column' : 'row'};
    }
`;

export const InputField = styled(animated.fieldset)`
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: ${rem(8)};
    border: none;
    z-index: inherit;

    ${min('tablet')} {
        flex-direction: ${({$column}) => $column ? 'column' : 'row'};
    }
`;

export const Input = styled(animated.input)`
    position: relative;
    padding: ${em(24)} ${em(48)};
    font-family: 'raleway';
    font-size: clamp(${rem(10)}, 2vw, ${rem(12)});
    font-variation-settings: 'wght' 400;
    background-color: #fff;
    outline: none;
    border: none;
    border-radius: ${rem(70)};
    z-index: inherit;

    ${min('tablet')} {
        width: 100%;
    }
`;

export const Error = styled(animated.small)`
    position: absolute;
    top: calc(100% + ${rem(8)});
    left: ${rem(16)};
    font-size: clamp(${rem(8)}, 2vw, ${rem(10)});
    font-family: 'open-sans';
    font-variation-settings: 'wght' 400;
    color: var(--lightRedError);
    z-index: inherit;
`;