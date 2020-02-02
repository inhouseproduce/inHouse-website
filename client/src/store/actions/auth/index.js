import axios from 'axios';

export const auth = form => {
    return async (dispatch, getState) => {
        try {
            let request = await axios.post('/auth/', { form });
            console.log('request', request)
        } 
        catch (error) {
            throw error;
        };
    };
};