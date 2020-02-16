import axios from 'axios';

export const createClient = (form) => {
    return async (dispatch, getState) => {
        try {
            let request = await axios.post('/create/client/', { form });
            console.log('request', request)
        }
        catch (error) {
            throw error;
        };
    };
};