import { AxiosRequestConfig } from 'axios';

import { api } from '~/services/api';
import { handleAxiosError } from '~/services/api/error';

export const apiPost = async <Response, Body>(url: string, body: Body, config?: AxiosRequestConfig) => {
  try {
    const { data } = await api.post<Response>(url, body, config);
    return data;
  } catch (e) {
    throw handleAxiosError(e);
  }
};
