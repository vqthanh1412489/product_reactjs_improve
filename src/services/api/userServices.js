import { commonRequest } from './apiCaller';

const getAllProducs = () => {
    return new Promise((resolve, reject) => {
        commonRequest(`products`, 'GET')
        .then(res => {
            resolve(res);
        })
        .catch(err => {
            reject(err);
        })
    })
}

export {
    getAllProducs,
}