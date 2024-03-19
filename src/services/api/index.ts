import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const api = axios.create({ baseURL: API_BASE_URL });

export const setAxiosBearerToken = (token: string) => {
  api.defaults.headers.common['Authorization'] = token;
};
