import axios from 'axios';
import headerAuth from '../../../utility/headerAuth';

export const createClient = (form) => {
    return async (dispatch, getState) => {
        try {
            let request = await axios.post('/create/client/', { form }, await headerAuth());
            console.log('request', request)
        }
        catch (error) {
            throw error;
        };
    };
};