import axios from "axios";
const httpClient = axios.create({
    baseURL: "http://localhost:4000",
    // baseURL: "https://cs5610-meal-web-app.herokuapp.com",
    // baseURL: process.env.APP_API_BASE_URL,
});
httpClient.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    return config;
});
export default httpClient;