// import axios from "axios";
// axios.defaults.baseURL = 'http://localhost:4000'
// axios.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem("token");
//         const auth = token ? `Bearer ${token}` : "";
//         config.headers.common["Authorization"] = auth;
//         return config;
//     },
//     (error) => Promise.reject(error)
// )
//
// export default axios;

import axios from "axios";
const httpClient = axios.create({
    baseURL: "http://localhost:4000",
    // baseURL: process.env.APP_API_BASE_URL,
});
// axios.defaults.baseURL = 'http://localhost:4000'
httpClient.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    return config;
});

export default httpClient;