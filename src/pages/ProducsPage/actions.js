import { getAllProducs } from '../../services/api/userServices';
import actionTypes from '../../store/ActionTypes';
 
export const actFetchProductsRequest = () => {
    return dispatch => {
        return getAllProducs()
            .then(res => {
                if (res) {
                    dispatch(actFetchProducts(res.data));
                } else {
                    alert(res.data.err);
                }
            })
            .catch(err => console.log(err));
    };
}

export const actFetchProducts = (products) => {
    return {
        type: actionTypes.FETCH_PRODUCT,
        payload: products
    }
}