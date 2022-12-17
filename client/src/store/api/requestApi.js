import axios from 'axios';

const api = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_URL_API
})

api.interceptors.request.use((config) => {
  return config
}, async (error) => {
  const originalRequest = error.config;
  if (error.response.status === 401 && error.config && !error.config._isRetry) {
    originalRequest._isRetry = true;
    try {
      const { data } = await axios.get(process.env.REACT_APP_URL_API + '/user/refresh', { withCredentials: true });
      localStorage.setItem('token', data.accessToken);
      return axios.request(originalRequest)
    } catch (error) {
      console.log('не авторизован')
    }
  }
  throw error;
})

export async function fetchData({
  url,
  method = 'GET',
  data,
  baseURL = process.env.REACT_APP_URL_API
}) {
  if (!url) return;

  const headers = {};

  headers['Content-Type'] = 'application/json';

  return await api({
    baseURL,
    method,
    url,
    data,
    headers,
    withCredentials: true,
  });
}
