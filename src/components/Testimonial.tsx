import React from 'react';
import { TestimonialProps } from '../types/types';
import { TestimonialCard, Text, Profile, ProfileDetails, Name, Occupation } from '../styled-components/components/Cards/Testimonial';
import { ProfileImage } from '../styled-components/components/Images';


const Testimonial = ({data}: TestimonialProps) => {
    return (
        <TestimonialCard>
            <Text>{data.text}</Text>
            <Profile>
                <ProfileImage src={data.image} alt='testimonial' />
                <ProfileDetails>
                    <Name>{data.name}</Name>
                    <Occupation>{data.occupation}</Occupation>
                </ProfileDetails>
            </Profile>
        </TestimonialCard>
    )
}

export default Testimonial;