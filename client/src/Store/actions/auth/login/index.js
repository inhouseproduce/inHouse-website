import request from 'axios';
import cookie from 'cookie';

export const loginAuth = (form, history) => {
    return async dispatch => {
        // Post request to authenticate and get back a token
        let auth = await request.post('/authentication/', { form });

        // If credentials match
        if (auth.data.auth) {
            // Set the token to cookie 
            let token = auth.data.token;
            let setCookie = cookie.serialize('token', token);

            // Redirect login page
            history.push('/dashboard');
        };
    };
};