import React, { useState } from 'react';
import { Form, FormField, InputField, Input, Error } from '../../styled-components/components/Forms';
import { H3, P3 } from '../../styled-components/global/Typography';
import { SubmitButton } from '../../components/Button';
import validateEmail from '../../helpers/validateEmail';

// TODO: validate form input and submit
// TODO: animate submit button

const SignUp = () => {
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
        setError(validateEmail(email))
    };

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setEmail('');
    }

    return (
        <Form onSubmit={submitForm}>
            <H3>Get early access today</H3>
            <P3>
                it only takes a minute to sign up and our free starter tier is extremly generous. If you have any questions, our support team would be happy to help you.
            </P3>
            <FormField>
                <InputField $column>
                    <Input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='email@example.com'
                        value={email}
                        onChange={handleChange}
                    />
                    <Error> {error} </Error>
                </InputField>
                <SubmitButton type='submit'>Get Started for Free</SubmitButton>
            </FormField>
        </Form>
    )
}

export default SignUp;