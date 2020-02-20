import axios from 'axios';
import firebase from 'firebase/app';

import app from '../../../Provider/Auth/config';

export const adminAuth = (form, history) => {
    return async () => {
        try {
            // Auth presistence
            await app.auth().setPersistence(
                firebase.auth.Auth.Persistence.SESSION
            );

            // Sign in with credentials
            let auth = await app.auth().signInWithEmailAndPassword(
                form.username, form.password
            );

            // Verify in server
            let response = await axios.get('/auth/', {
                headers: {
                    'authorization': `Bearer ${auth.user._lat}`,
                }
            });

            // If server authenticated redirect page
            if (response.data.auth) history.push('/dashboard');
        }
        catch (error) { throw error };
    };
};