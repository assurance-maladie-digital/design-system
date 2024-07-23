import type { AxiosResponse } from 'axios';
import axios from 'axios';

// eslint-disable-next-line node/prefer-global/process
const baseURL = process.env.API_URL || 'defaultAPIURL';

const instance = axios.create({
  withCredentials: false,
  baseURL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

export { instance as axios, type AxiosResponse };
