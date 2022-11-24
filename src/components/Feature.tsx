import React from 'react';
import { FeatureCardProps } from '../types/types';
import { FeatureCard, Layout, Icon, Heading, Description } from '../styled-components/components/Cards/FeatureCards';


const Feature = ({data}: FeatureCardProps) => {
    return (
        <FeatureCard>
            <Layout>
                <Icon src={data.icon} alt={data.heading.toLowerCase()} />
                <Heading> {data.heading} </Heading>
                <Description> {data.description} </Description>
            </Layout>
        </FeatureCard>
    )
}

export default Feature;