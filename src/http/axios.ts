import Axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

const axios: AxiosInstance = Axios.create({
    baseURL: '',
    timeout: 1000 * 30,
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    }
})

axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        return config
    },
    (error: AxiosError) => {
        return Promise.reject(error)
    }
)

axios.interceptors.response.use(
    (response: AxiosResponse) => {
        return response
    },
    (error: AxiosError) => {
        return Promise.reject(error)
    }
)

export default axios