import axios from 'axios';

export const controlPi = data => {
    return async (dispatch, getState) => {
        try {
            let request = await axios.post('/control/pi/', data);
            console.log('checking xxx--', request)
        }
        catch (error) {
            throw error;
        };
    };
};