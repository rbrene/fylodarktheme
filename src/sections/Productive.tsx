import React from 'react';
import { ProductiveSection } from '../styled-components/components/Sections';
import { ProductiveArticle } from '../styled-components/layouts/articles/index';
import { ProductiveGrid, TestimonialGrid } from '../styled-components/layouts/grids/index';
import { Column } from '../styled-components/layouts/grids/columns';
import { ProductiveImage, Qoutes } from '../styled-components/components/Images';
import { H2, P1 } from '../styled-components/global/Typography';
import Link from '../components/Link';
import Testimonial from '../components/Testimonial';
import productiveImage from '../assets/images/illustration-stay-productive.png';
import quotesImage from '../assets/images/bg-quotes.png';
import { TestimonialData } from '../helpers/data';


const Productive = () => {
    return (
        <ProductiveSection id='productive'>
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
                        <Link to='#' text='See how Fylo works' />
                    </Column>
                </ProductiveGrid>
                <TestimonialGrid>
                    <Qoutes src={quotesImage} alt='qoutes' />
                    {
                        TestimonialData.map(data => <Testimonial data={data} key={data.id} />)
                    }
                </TestimonialGrid>
            </ProductiveArticle>
        </ProductiveSection>
    )
}

export default Productive;