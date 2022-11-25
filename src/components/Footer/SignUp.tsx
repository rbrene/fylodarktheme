import React from 'react';
import { Form, FormField, Input } from '../../styled-components/components/Forms';
import { H3, P3 } from '../../styled-components/global/Typography';
import { SubmitButton } from '../../styled-components/components/Buttons';


const SignUp = () => {
    return (
        <Form>
            <H3>Get early access today</H3>
            <P3>
                it only takes a minute to sign up and our free starter tier is extremly generous. If you have any questions, our support team would be happy to help you.
            </P3>
            <FormField>
                <Input type='email' name='email' id='email' placeholder='email@example.com' />
                <SubmitButton type='submit'>Get Started for Free</SubmitButton>
            </FormField>
        </Form>
    )
}

export default SignUp;