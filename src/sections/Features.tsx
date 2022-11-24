import React from 'react';
import { FeaturesSection } from '../styled-components/components/Sections';
import { FeaturesArticle, ProductiveArticle } from '../styled-components/layouts/articles/index';
import { FeatureGrid, ProductiveGrid } from '../styled-components/layouts/grids/index';
import { Column } from '../styled-components/layouts/grids/columns';
import { ProductiveImage } from '../styled-components/components/Images';
import { H2, P1 } from '../styled-components/global/Typography';
import Feature from '../components/Feature';
import { FeaturesData } from '../helpers/data';
import productiveImage from '../assets/images/illustration-stay-productive.png';


const Features = () => {
    return (
        <FeaturesSection id='features'>
            <FeaturesArticle>
                <FeatureGrid>
                    {
                        FeaturesData.map(data => <Feature data={data} key={data.id} />)
                    }
                </FeatureGrid>
            </FeaturesArticle>
            <ProductiveArticle>
                <ProductiveGrid>
                    <Column>
                        <ProductiveImage src={productiveImage} alt='stay-productive' />
                    </Column>
                    <Column>
                        <H2>Stay productive, wherever you are</H2>
                        <P1>
                            Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.
                        </P1>
                        <P1>
                            Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
                        </P1>
                    </Column>
                </ProductiveGrid>
            </ProductiveArticle>
        </FeaturesSection>
    )
}

export default Features;