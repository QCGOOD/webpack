import fetch from './config';
import qs from 'qs';

export default {
  get(url, params) {
    return fetch.get(url, params);
  },
  post(url, params) {
    return fetch.post(url, qs.stringify(params));
  },
  json(url, params) {
    return fetch.post(url, params);
  },
};
