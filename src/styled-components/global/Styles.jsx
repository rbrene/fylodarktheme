import { createGlobalStyle } from 'styled-components';
import { rem } from '../../helpers/units';


const Styles = createGlobalStyle`
html {
    position: relative;
    width: 100vw;
    height: 100vh;
    font-size: 100%;
    box-sizing: border-box;
    z-index: 0;
}
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}
*{
    scroll-behavior: smooth;
    box-sizing: border-box;
    &::-webkit-scrollbar {
        width: ${rem(0)};
    }
    &::-webkit-scrollbar-track {
        background-color: rgba(223, 223, 223, 0);
    }
    &::-webkit-scrollbar-button {
        display: none;
    }
    &::-webkit-scrollbar-thumb {
        display: block;
        border-radius: ${rem(50)};
        background: linear-gradient(to bottom, var(--cyan) 0%, var(--blue) 100%);
    }
}
body,
#root {
    position: relative;
    width: 100%;
    height: 100%;
    font-size: ${rem(16)};
    font-family: 'open-sans';
    background: var(--darkBlueIntroEmailSignUp);
    color: #fff;
    z-index: inherit;
    user-select: none;
    overflow-x: hidden
}
`;

export default Styles;