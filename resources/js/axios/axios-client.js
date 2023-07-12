import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${window.location.protocol}//${window.location.host}/api`
})

axios.defaults.withCredentials = true;

axios.get('/sanctum/csrf-cookie').then(response => {
    console.log(response.config.headers['X-XSRF-TOKEN'],"rato mometkna tvini")
    axiosClient.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer ${response.config.headers['X-XSRF-TOKEN']}`;
        return config;
    });

});

axiosClient.interceptors.response.use((response) => {
    return response
}, (error) => {
    const {response} = error;
    if (response.status === 401) {
        localStorage.removeItem('ACCESS_TOKEN')
    } else if (response.status === 404) {
    }

    throw error;
})

export default axiosClient
