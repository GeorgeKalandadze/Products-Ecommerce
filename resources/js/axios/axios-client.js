import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${window.location.protocol}//${window.location.host}/api`,

})

axiosClient.defaults.withCredentials = true;

// axios.get('/sanctum/csrf-cookie').then((res) => {
//     axiosClient.defaults.headers.common['Authorization'] = `Bearer ${res.config.headers['X-XSRF-TOKEN']}`
// });

// axiosClient.interceptors.request.use((config) => {
//     config.headers.Authorization = `Bearer `;
//     return config;
// });


// axiosClient.interceptors.response.use((response) => {
//     return response
// }, (error) => {
//     const {response} = error;
//     if (response.status === 401) {
//         localStorage.removeItem('ACCESS_TOKEN')
//     } else if (response.status === 404) {
//     }
//
//     throw error;
// })

export default axiosClient
