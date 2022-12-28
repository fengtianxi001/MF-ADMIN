import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";
import { getToken } from "@/utils/auth";
import { Message } from "@arco-design/web-vue";

export interface HttpResponse<T = unknown> {
  data: T;
  error: string;
  success: boolean;
}

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10 * 1000,
  withCredentials: true,
});

//请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = getToken();
    if (token) {
      config.headers = config.headers ? config.headers : {};
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

//响应拦截器
service.interceptors.response.use(
  //@ts-ignore
  (response: AxiosResponse<HttpResponse>) => {
    //文件下载
    if (response.config.responseType === "blob") return response;
    const result = response.data;
    if (result.success) {
      return result.data;
    } else {
      Message.error(result.error);
      return Promise.reject(result);
    }
  },
  (error: any) => {
    Message.error("后台服务好像出现了点小问题");
    return Promise.reject(error);
  }
);

export default service;
