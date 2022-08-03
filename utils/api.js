import axios from 'axios';
import https from 'https';

const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? process.env.api.url.real : process.env.api.url.dev,
    headers: {
        'Content-Type': 'application/json',
        Authorization: '',
    },
    withCredentials: true,
    timeout: 10000,
    httpsAgent: new https.Agent({ rejectUnauthorized: false }),
});

// axios.defaults.baseURL = (process.env.NODE_ENV === 'production') ? process.env.api.url.real : process.env.api.url.dev;
// axios.defaults.headers = {
//     "Content-Type": "application/json",
//     "Authorization": "",
// };
// axios.defaults.timeout = 10000;
// axios.defaults.withCredentials = true;
// axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false });

axios.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default instance;
