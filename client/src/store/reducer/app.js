import * as actionTypes from '../actions';

const initialState = {

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CLIENTS':
            console.log('checking reducer', action)
            return {
                ...state,
                
            };

        default:
            return state;
    }
};

export default reducer;