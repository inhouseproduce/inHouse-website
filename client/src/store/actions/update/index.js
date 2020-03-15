import axios from 'axios';
import headerAuth from '../../../utility/headerAuth';

export const updateSettings = data => {
    return async (dispatch, getState) => {
        console.log('updating form', data)
        // try {
        //     let request = await axios.post('/update/', data);

        // } 
        // catch (error) {
        //     throw error;
        // };
    };
};

export const updateImages = id => {
    return async (dispatch, getState) => {
        let test = await axios.get(`/update/images/${id}`, await headerAuth());
        console.log('got images', test)
    };
};