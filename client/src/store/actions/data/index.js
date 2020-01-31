import axios from 'axios';

export const getImages = (action) => {
    return async (dispatch, getState) => {
        try {
            let request = await axios.post('/images/', action);

        } catch (error) {
            throw error;
        };
    };
};