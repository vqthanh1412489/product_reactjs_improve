import actionTypes from '../../store/ActionTypes';

var initialState = [];

const productReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_PRODUCT:
            state = action.payload;
            return [...state];
        default: return [...state];
    }
}

export default productReducer;