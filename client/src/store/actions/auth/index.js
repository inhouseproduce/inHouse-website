import axios from 'axios';

export const adminAuth = (form, history) => {
    return async (dispatch, getState) => {
        try {
            let request = await axios.post('/auth/', { form });
            let data = request.data;

            if(data){
                localStorage.setItem('inhouse', data.auth.token);  
                history.push('/dashboard');     
            }
        }
        catch (error) {
            throw error;
        };
    };
}; 