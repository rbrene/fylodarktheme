export default function validateEmail(email: string) {
    let errors: string = '';

    if (!email) {
        errors = 'Error. You email address is required.'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors = 'Error. Please check your email.'
    }

    return errors;
}