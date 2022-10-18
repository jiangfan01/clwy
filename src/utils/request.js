import axios from "axios";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
});

// request拦截器
service.interceptors.request.use(
  (config) => {
    // do something 在发送请求前
    const token = localStorage.token;

    if (token) {
      // 让每个请求携带token
      // ['X-Token']为自定义key
      // 请根据实际情况自行修改
      config.headers["token"] = token;
    }
    return config;
  },
  (error) => {
    // do something 当请求错误
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// respone拦截器
service.interceptors.response.use(
  /**
   * 如果你想获取 http 信息，例如 headers 或 status
   * 请 return  response => response
   */

  /**
   * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
   * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
   */
  (response) => {
    const res = response.data;

    if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      // 清除token
      localStorage.removeItem("token");

      alert(res.message);

      // 跳转到登录页
      location.href = "/signin";

      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  (error) => {
    console.log("err" + error); // for debug
    return Promise.reject(error);
  }
);

export default service;
