import firebase from 'firebase';
import app from './config';

export const adminAuth = (form, history) => {
    return async (dispatch, getState) => {
        console.log('form', form )
        try {
            await app.auth().setPersistence(
                firebase.auth.Auth.Persistence.SESSION
            );
            let test = await app.auth().signInWithEmailAndPassword(
                form.username, form.password
            );
            console.log('imp chekcing', test )
        }
        catch (error) {
            throw error;
        }
    }; 
};
 