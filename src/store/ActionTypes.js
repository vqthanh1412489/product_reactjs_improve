import _ from 'lodash';

const actionTypes = {
    
    FETCH_PRODUCT: 'FETCH_PRODUCT',
    ADD_PRODUCT: 'ADD_PRODUCT',
    DELETE_PRODUCT: 'DELETE_PRODUCT',
    UPDATE_PRODUCT: 'UPDATE_PRODUCT',
    TOGGLE_STATUS: 'TOGGLE_STATUS',

    SET_ISSUCESS: 'SET_ISSUCESS',
    SET_PRODUCT_EDITING: 'SET_PRODUCT_EDITING',
}

export default _.assign({}, actionTypes);