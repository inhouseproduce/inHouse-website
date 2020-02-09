import firebase from 'firebase/app';
import app from '../../../Provider/AuthProvider/config';

export const adminAuth = (form, history) => {
    return async (dispatch, getState) => {
        try {
            await app.auth().setPersistence(
                firebase.auth.Auth.Persistence.SESSION
            );
            await app.auth().signInWithEmailAndPassword(
                form.username, form.password
            );
            history.push('/dashboard');
        }
        catch (error) {
            throw error;
        };
    };
};