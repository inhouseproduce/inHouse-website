import axios from 'axios';

export const controlPi = data => {
    return async (dispatch, getState) => {
        try {
            let request = await axios.post('/control/pi/', data);
        }
        catch (error) {
            throw error;
        };
    };
};