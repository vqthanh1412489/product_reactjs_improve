import { APP_DOMAIN } from '../config';

import axios from "axios";
import _ from 'lodash';

export function commonRequest(endpoint, method = "GET", body = null, header = null) {
    return requestApi(endpoint, method, body, false, header);
}

function requestApi(
    endpoint,
    method = 'GET',
    data = null,
    auth = false,
    header = null
) {
    let options = {
        method,
        header: {
            "Content-Type": "application/json"
        }
    }

    if (data !== null) {
        if (method === 'GET') {
            endpoint +=
                (endpoint.indexOf("?") === -1 ? "?" : "&") +
                Object.keys(data)
                    .map(k => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
                    .join("&");
        } else {
            options.data = _.assign({}, data);
        }
    }

    if (header !== null) {
        for (let key in header) {
            if (header.hasOwnProperty(key)) {
                options.headers[key] = header[key];
            }
        }
    }

    return axios({
        url: `${APP_DOMAIN}/${endpoint}`,
        options
    })
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        })
}