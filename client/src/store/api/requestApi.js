import axios from 'axios';

axios.withCredentials = true;
axios.interceptors.request.use((config) => {
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
  method,
  data,
  params,
  auth = true,
  baseURL = process.env.REACT_APP_URL_API
}) {
  if (!url) return;

  const headers = {};

  headers['Content-Type'] = 'application/json';

  if (auth && localStorage.getItem('token')) {
    headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
  }


  return await axios({
    baseURL,
    method,
    url,
    data,
    headers,
    params
  });
}
