import axios from 'axios';
import headerAuth from '../../../utility/headerAuth';

export const getUnitImages = action => {
    return async (dispatch, getState) => {
        try {
            //let request = await axios.post('/images/', action);
        }
        catch (error) {
            throw error;
        };
    };
};

export const getClientList = client => {
    return async (dispatch, getState) => {
        try {
            let request = await axios.get('/get/clientlist/', await headerAuth());
            let data = request.data.success;

            if (data) {
                dispatch({ type: 'CLIENTS', clientList: data });
            };
        }
        catch (error) {
            throw error;
        };
    };
};

export const getClientProfile = client => {
    return async (dispatch, getState) => {
        try {
            let request = await axios.get(`/client/profile/${client}/`, await headerAuth());
            let data = request.data.success;

            if (data) {
                dispatch({ type: 'CLIENTS', clientProfile: data.client });
            };
        }
        catch (error) {
            throw error;
        };
    };
};