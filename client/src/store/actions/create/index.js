import axios from 'axios';

export const createClient = (form) => {
    return async (dispatch, getState) => {
        try {
            await axios.post('/create/client/', { form });
        }
        catch (error) {
            throw error;
        };
    };
};