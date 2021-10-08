import axios from 'axios';

const $API_HOST = process.env.APP_BASE_URL;

export const $AuthHeader = {
  Accept: 'application/json',
  authorization: '',
 
};

export const AxiosHost = axios.create({
  baseURL: $API_HOST,
  headers: $AuthHeader,
});