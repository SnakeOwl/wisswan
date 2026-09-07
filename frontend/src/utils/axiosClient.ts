"use server"

import axios from "axios";
import getCookie from "./getCookie";

// nextj не кеширует данные, пришедшие с axiosClient.
// для кешированя использовать fetchClient
const axiosClient = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/api`
});


axiosClient.interceptors.request.use(async (config) => {
    const token = await getCookie("access_token");

    if (token != null) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});


axiosClient.interceptors.response.use((response) => {
    return response;
}, (error) => {
    try {
        const { response } = error;
    } catch (e) {
        console.error(e);
    }

    throw error;
});

export default axiosClient;