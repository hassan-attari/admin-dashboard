import axios from "axios";

const BASE_URL = "https://react-mini-projects-api.classbon.com";

const httpService = axios.create({
  baseURL: BASE_URL
})

const httpInterceptedService = axios.create({
  baseURL: BASE_URL
});

httpInterceptedService.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers = {
        authorization: `Bearer ${token}`
      };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// response interceptor intercepting 401 responses, refreshing token and retrying the request
httpInterceptedService.interceptors.response.use(
  (response) => response,
  async (error) => {
    debugger;
    const config = error.config;

    if (error.response.status === 401 && !config._retry) {
      // we use this flag to avoid retrying indefinitely if
      // getting a refresh token fails for any reason
      config._retry = true;
      localStorage.setItem("token", await refreshAccessToken());

      return axios(config);
    }

    return Promise.reject(error);
  }
);

export {httpService, httpInterceptedService};

