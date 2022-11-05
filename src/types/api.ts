/**
 * 接口统一返回结果
 */
 export interface ApiResult<Data> {
  // 状态码
  code: number;
  // 状态信息
  message?: string;
  // 返回数据
  data?: Data;
}

/**
 * 分页查询统一结果
 */
export interface PageResult<Data> {
  // 返回数据
  results: Data[];
  // 总数量
  total: number;
}