import axios from "axios";

const Axios = axios.create({
  baseURL:process.env.VUE_APP_API,
  timeout: 10000
});
let token = window.localStorage.getItem("token");

Axios.interceptors.request.use(
  config => {
    if (token) {
      config.headers.common["Authorization"] = "Bearer " + token;
    }
    if (config.method === "post") {
      config.headers["Content-Type"] = "multipart/form-data;charset=UTF-8";
      const formData = new FormData();
      for (const [key, value] of Object.entries(config.data)) {
        formData.append(key, value);
      }
      config.data = formData;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
Axios.interceptors.response.use(
  (res, { data }) => {
    console.log(data);
    return res;
  },
  error => {
    return Promise.reject(error);
  }
);
export default Axios;
