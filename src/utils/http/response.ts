/**
 * @file API 响应结果校验
 * @author svon.me@gmail.com
 */

import { API } from "src/config/index";
import safeGet from "@fengqiaogang/safe-get";
import { isObject, isString, toInteger } from "lodash-es";


const getResult = function<T, D>(response: D): T {
  const data = safeGet<T>(response as object, API.dataName);
  if (response && data) {
    if (isString(data)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        // todo
      }
    }
    return data;
  }
  return response as any;
};

// 判断状态码
export const check = function <T, D>(response: D): T {
  const result = getResult<T, D>(response);
  if (result && isObject(result)) {
    const status = safeGet<boolean>(result, API.statusName);
    const scode = safeGet<string>(result, API.codeName);
    if (status && toInteger(scode) === API.success) {
      return safeGet<T>(result, API.dataName);
    }
    // 如果状态码存在
    if (/^\d+$/.test(scode)) {
      // 向外抛出异常
      throw result;
    }
  }
  return result;
};

export const asyncCheck = async function <T, D>(result: D): Promise<T> {
  const data = await Promise.resolve(result);
  return check(data);
};