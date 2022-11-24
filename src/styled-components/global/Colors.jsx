import { createGlobalStyle } from 'styled-components';


const Colors = createGlobalStyle`
:root {
    // Primary
    --darkBlueMain: hsl(218, 28%, 13%);
    --darkBlueIntroEmailSignUp: hsl(217, 28%, 15%);
    --darkBlueFooter: hsl(216, 53%, 9%);
    --darkBlueTestimonial: hsl(219, 30%, 18%);

    // Accent
    --cyan: hsl(176, 68%, 64%);
    --blue: hsl(198, 60%, 50%);
    --lightRedError: hsl(0, 100%, 63%);

}
`;

export default Colors;