/**
 * @file 封装数据请求
 * @author svon.me@gmail.com
 */

import AxiosHttp from "axios";
import { asyncCheck } from "./response";
import safeGet from "@fengqiaogang/safe-get";
import { useAsyncState, UseAsyncStateOptions } from "@vueuse/core";
import { API_BASE } from "src/config";
import Authorization from "./authorization";

import type { PageResult } from "src/types/api";
import type { Axios, AxiosRequestConfig, AxiosResponse, AxiosRequestHeaders } from "axios";


export * from "./decorate";

class Basis {
  constructor() {
    this.CallbackError = this.CallbackError.bind(this);
    this.responseCallback = this.responseCallback.bind(this);
    this.requestCallback = this.requestCallback.bind(this);
  }
  async CallbackError(error: any) {
    const code = safeGet<number>(error, "code");
    if (code === 0) {
      return error;
    }
    return Promise.reject(error);
  }
  // 响应前拦截
  async requestCallback(req: AxiosRequestConfig) {
    const auth = Authorization(req);
    if (auth) {
      req.headers = {
        ...req.headers,
        ...auth
      }
    }
    // 继续执行请求逻辑
    return req;
  }

  async responseCallback(res: AxiosResponse) {
    const status = parseInt(res.status as any, 10);
    if (status >= 200 && status < 300) {
      return asyncCheck(res);
    } else {
      return Promise.reject(res);
    }
  }

  protected getAxios(): Axios {
    const config: AxiosRequestConfig = {
      baseURL: API_BASE,
      timeout: 1000 * 5, // 超时时间
      withCredentials: false,
      maxRedirects: 3, // 支持三次重定向
    };
    const axios = AxiosHttp.create(config);
    // 响应时拦截
    axios.interceptors.request.use(this.requestCallback, this.CallbackError);
    axios.interceptors.response.use(this.responseCallback, this.CallbackError);
    return axios;
  }
}

export class Http extends Basis{
  protected get<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>) {
    const axios = this.getAxios();
    return axios.get<T, R, D>(url, config);
  }
  protected delete<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>) {
    const axios = this.getAxios();
    return axios.delete<T, R, D>(url, config);
  }

  protected getUri(config?: AxiosRequestConfig): string {
    const axios = this.getAxios();
    return axios.getUri(config);
  }

  protected head<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>) {
    const axios = this.getAxios();
    return axios.head<T, R, D>(url, config);
  }

  protected options<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>) {
    const axios = this.getAxios();
    return axios.options<T, R, D>(url, config);
  }

  protected patch<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>) {
    const axios = this.getAxios();
    return axios.patch<T, R, D>(url, data, config);
  }

  protected post<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>) {
    const axios = this.getAxios();
    return axios.post<T, R, D>(url, data || ({} as D), config);
  }

  protected put<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>) {
    const axios = this.getAxios();
    return axios.put<T, R, D>(url, data, config);
  }

  protected request<T = any, R = AxiosResponse<T>, D = any>(config: AxiosRequestConfig<D>) {
    const axios = this.getAxios();
    return axios.request<T, R, D>(config);
  }
}

export class useState {
  // 获取单个数据
  static data<T = any, Shallow extends boolean = true>(
    api: Promise<T> | ((...args: any[]) => Promise<T>), 
    initialState?: T, 
    options?: UseAsyncStateOptions<Shallow>
  ) {
    // @ts-ignore
    return useAsyncState<T>(api, initialState || {}, options);
  }
  static dataExecute<T = any, Shallow extends boolean = true>(
    api: (...args: any[]) => Promise<T>, 
    initialState?: T, 
    options: UseAsyncStateOptions<Shallow> = {
      immediate: false,
      resetOnExecute: false
    }
  ) {
    // @ts-ignore
    return useAsyncState<T>(api, initialState || {}, options);
  }
  // 获取列表数据
  static list<T = any, Shallow extends boolean = true>(
    api: Promise<PageResult<T>> | ((...args: any[]) => Promise<PageResult<T>>), 
    initialState?: PageResult<T>, 
    options?: UseAsyncStateOptions<Shallow>
  ) {
    const value = initialState || {
      total: 0,
      results: []
    };
    // @ts-ignore
    return useAsyncState<PageResult<T>>(api, value, options);
  }
  // 获取列表数据
  static listExecute<T = any, Shallow extends boolean = true>(
    api: ((...args: any[]) => Promise<PageResult<T>>), 
    initialState?: PageResult<T>, 
    options: UseAsyncStateOptions<Shallow> = {
      immediate: false,
      resetOnExecute: false
    }
  ) {
    const value = initialState || {
      total: 0,
      results: []
    };
    // @ts-ignore
    return useAsyncState<PageResult<T>>(api, value, options);
  }
}