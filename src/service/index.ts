import Request from './request';
import type { AxiosResponse } from 'axios';

import type { RequestConfig } from './request/types';
import cache from '@/utils/cache';

export interface HttpResponse<T> {
  statusCode: number;
  desc: string;
  result: T;
}

// 重写返回类型
interface HttpRequestConfig<T, R> extends RequestConfig<HttpResponse<R>> {
  data?: T;
}

const request = new Request({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 1000 * 60 * 5,
  interceptors: {
    // 请求拦截器
    requestInterceptors: (config) => {
      //可以配置token
      const license = cache.session.get('license');
      if (license) {
        config.headers['license'] = license;
      } else {
        cache.session.set('license', 'abd77a37e3e9f9e6c86d5496e49882c0');
        cache.session.set('token', '1701539934978052224');
      }
      return config;
    },
    // 响应拦截器
    responseInterceptors: (result: AxiosResponse) => {
      return result;
    }
  }
});

/**
 * @description: 函数的描述
 * @generic D 请求参数
 * @generic T 响应结构
 * @param {HttpRequestConfig} config 不管是GET还是POST请求都使用data
 * @returns {Promise}
 */
const HttpRequest = <D = any, T = any>(config: HttpRequestConfig<D, T>) => {
  const { method = 'GET' } = config;
  if (method === 'get' || method === 'GET') {
    config.params = config.data;
  }
  return request.request<HttpResponse<T>>(config);
};
// // 取消请求
// export const cancelRequest = (url: string | string[]) => {
//   return request.cancelRequest(url)
// }
// // 取消全部请求
// export const cancelAllRequest = () => {
//   return request.cancelAllRequest()
// }

export default HttpRequest;
