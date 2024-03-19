import axios, { AxiosError } from 'axios';

import { AxiosErrorResponse } from './types';

export const handleAxiosError = (error: AxiosError | unknown): AxiosErrorResponse | unknown => {
  if (axios.isAxiosError(error)) {
    return {
      data: error?.response?.data,
      status: error?.response?.status,
    };
  }

  return error;
};
