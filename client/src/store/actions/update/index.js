import axios from 'axios';
import headerAuth from '../../../utility/headerAuth';

export const updateSettings = (config, id) => {
    return async () => {
        try {
            let request = await axios.post(`/update/config/${id}/`, { config }, await headerAuth());

        }
        catch (error) {
            throw error;
        };
    };
};

export const updateImages = id => {
    return async (dispatch, getState) => {
        let test = await axios.get(`/update/images/${id}/`, await headerAuth());
        console.log('got images', test)
    };
};