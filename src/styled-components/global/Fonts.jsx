import { createGlobalStyle } from 'styled-components';

// Raleway Font
import raleway from '../../assets/fonts/raleway/Raleway-VariableFont_wght.ttf';

// Open Sans Font
import openSans from '../../assets/fonts/open_sans/OpenSans-VariableFont_wdth,wght.ttf';


const Fonts = createGlobalStyle`
@font-face {
    font-family: 'raleway';
    src: url(${raleway}) format('truetype');
}

@font-face {
    font-family: 'open-sans';
    src: url(${openSans}) format('truetype');
}
`;

export default Fonts;