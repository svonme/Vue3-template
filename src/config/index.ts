/**
 * @file 配置信息
 * @author svon.me@gmail.com
 */

// 项目名称
export const AppName = import.meta.env.VITE_APP_NAME;

// 接口基础路径
export const API_BASE = import.meta.env.VITE_API_BASE;

export enum API {
  success = 200, // 接口成功状态码
  dataName = "data", // 接口数据对应的属性名称
  codeName = "scode", // 状态码属性名称
  statusName = "status", // 状态枚举属性名称
}