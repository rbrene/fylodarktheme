import React from 'react';
import { HomeSection } from '../styled-components/components/Sections';
import { HomeArticle } from '../styled-components/layouts/articles/index';
import { HomeImage, BackgroundImage } from '../styled-components/components/Images';
import illustrationIntro from '../assets/images/illustration-intro.png';
import { H1, P } from '../styled-components/global/Typography';
import { HomeCTA } from '../styled-components/layouts/containers/ctas';
import { HomeButton } from '../components/Button';
import curvyBackground from '../assets/svg/bg-curvy-desktop.svg';


const Home = () => {
    return (
        <HomeSection id='home'>
            <HomeArticle>
                <HomeImage src={illustrationIntro} alt='home-illustration' />
                <H1>All your files in one secure location accessible anywhere.</H1>
                <P>
                    Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.
                </P>
                <HomeCTA>
                    <HomeButton children='Get Started' />
                </HomeCTA>
            </HomeArticle>
            <BackgroundImage src={curvyBackground} alt='background' />
        </HomeSection>
    )
}

export default Home;