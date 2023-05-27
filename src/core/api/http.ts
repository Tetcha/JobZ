import axios, { AxiosError } from 'axios';
import _get from 'lodash.get';
import Cookies from 'universal-cookie';

import { constant } from '../constant';
import { lowerCaseField } from '../utils/object.helper';

const http = axios.create({
    baseURL: 'http://localhost:3000/api',
    withCredentials: true,
});
http.interceptors.request.use(function (req) {
    const cookies = new Cookies();
    const token = cookies.get(constant.TOKEN_COOKIE_KEY) || '';

    if (token && req.headers) req.headers[constant.TOKEN_HEADER_KEY] = `Bearer ${token}`;
    // if (token && req.headers) req.headers[constant.TOKEN_HEADER_KEY] = `${token}`;

    return req;
});
http.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error: AxiosError) {
        return Promise.reject(error.response);
    }
);

export { http };
