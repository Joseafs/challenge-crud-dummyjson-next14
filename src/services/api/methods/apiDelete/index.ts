import { AxiosRequestConfig } from 'axios';

import { api } from '~/services/api';
import { handleAxiosError } from '~/services/api/error';

export const apiDelete = async <Response>(url: string, config?: AxiosRequestConfig) => {
  try {
    const { data } = await api.delete<Response>(url, config);
    return data;
  } catch (e) {
    throw handleAxiosError(e);
  }
};
