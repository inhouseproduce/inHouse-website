import axios from 'axios';

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
            let request = await axios.get('/get/clientlist/');
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