import axios from 'axios';
import router from '../../router';
import store from '../../store';
import { removeUser } from '../auth';

const BASE_URL = process.env.VUE_APP_BASE_URL || 'https://api.finlink.co.tz/api/v1';

export const mock = (returnError = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(returnError)
        reject();
      else
        resolve({success: true});
    }, 2000)
  })
};

export const get = async (url, token = 'null') => {
  return await request('get', url, token);
};

export const patch = async (url, data, token = 'null') => {
  return await request('patch', url, token, data);
};

export const post = async (url, data, token = 'null') => {
  return await request('post', url, token, data);
};

export const request = async (type, endpoint, token, data) => {
  try {
    const response = await axios({
      method: type,
      url: BASE_URL + endpoint,
      headers: {
        "Content-Type": "application/json",
        'Authorization': token
      },
      data
    });

    return response.data;
  } catch ({config, request, response}) {
    if(response && response.status && response.status === 401){
      await removeUser();
      store.dispatch('setAuthUser', null);
      router.replace('/login');
    }
  }
};
