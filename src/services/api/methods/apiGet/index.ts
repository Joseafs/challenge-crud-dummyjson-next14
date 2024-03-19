import { AxiosRequestConfig } from 'axios';

import { api } from '~/services/api';
import { handleAxiosError } from '~/services/api/error';

export const apiGet = async <Response>(url: string, config?: AxiosRequestConfig) => {
  try {
    const { data } = await api.get<Response>(url, config);
    return data;
  } catch (e) {
    throw handleAxiosError(e);
  }
};
