/**
 * @file http 装饰器
 * @author svon.me@gmail.com
 * @description 根据某些场景做一些处理
 */

import _ from "lodash-es";
import type { AxiosRequestConfig } from "axios";

/**
* @file get 请求
* @param url 请求地址
* @param expire 缓存时间
* @param config Axios 配置
*/
export const get = function (url: string) {
  return function (target: any, methodName: string, descriptor: PropertyDescriptor) {
    const app = descriptor.value;
    descriptor.value = async function (...args: any[]) {
      const self: any = this;
      const [
        params = {}, 
        callback, 
        config = {}
      ]: [
        object, 
        (value?: any) => any, 
        AxiosRequestConfig
      ] = await Promise.resolve(app.apply(self, args));
      let result = await self.get(url, { ...config, params });
      if (callback && _.isFunction(callback)) {
        return callback.bind(self)(result);
      }
      return result;
    };
  };
};
/**
* @file post 请求
* @param url 请求地址
* @param expire 缓存时间
* @param config Axios 配置
*/
export const post = function (url: string, expire = 0) {
  return function (target: any, methodName: string, descriptor: PropertyDescriptor) {
    const app = descriptor.value;
    descriptor.value = async function (...args: any[]) {
      const self: any = this;
      const [
        data = {}, 
        callback,
        config = {}
      ]: [
        object, 
        (value?: any) => void,
        AxiosRequestConfig
      ] = await Promise.resolve(app.apply(self, args));
      const result = await self.post(url, data, config);
      if (callback && _.isFunction(callback)) {
        return callback.bind(self)(result);
      }
      return result;
    };
  };
};