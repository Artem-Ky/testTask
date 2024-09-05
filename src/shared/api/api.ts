import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

export const $api = axios.create({
    baseURL: 'https://test.v5.pryaniky.com' || __API__,
    headers: {
        'x-auth':
            localStorage.getItem(USER_LOCALSTORAGE_KEY)
            || sessionStorage.getItem(USER_LOCALSTORAGE_KEY)
            || '',
    },
});

$api.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.Authorization = localStorage.getItem(USER_LOCALSTORAGE_KEY)
            || sessionStorage.getItem(USER_LOCALSTORAGE_KEY)
            || '';
    }
    return config;
});
