import React from 'react';
import { FeaturesSection } from '../styled-components/components/Sections';
import { FeaturesArticle } from '../styled-components/layouts/articles/index';
import { FeatureGrid } from '../styled-components/layouts/grids/index';
import Feature from '../components/Feature';
import { FeaturesData } from '../helpers/data';


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
        </FeaturesSection>
    )
}

export default Features;