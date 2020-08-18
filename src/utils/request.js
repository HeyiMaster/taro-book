import Taro from '@tarojs/taro';
import { config } from '../../config';

const { baseUrl, noConsole } = config;

const request_data = {
  // platform: 'wap',
  // rent_mode: 2,
};

export default (options = { method: 'GET', data: {} }) => {
  if (!noConsole) {
    console.log(
      `${new Date().toLocaleString()}【 M=${options.url} 】P=${JSON.stringify(options.data)}`,
    );
  }
  const { url = '' } = options;
  // 如果不是 H5，则需将 api 前缀去除
  const ultiUrl = process.env.TARO_ENV === 'h5' ? url : url.replace(/^(\/?api\/)/gi, '/');
  return Taro.request({
    url: baseUrl + ultiUrl,
    data: {
      ...request_data,
      ...options.data,
    },
    header: {
      'Content-Type': 'application/json',
    },
    method: options.method.toUpperCase(),
  }).then(res => {
    const { statusCode, data } = res;
    if (statusCode >= 200 && statusCode < 300) {
      if (!noConsole) {
        console.log(`${new Date().toLocaleString()}【 M=${options.url} 】【接口响应：】`, res.data);
      }
      if (!data.success) {
        Taro.showToast({
          title: `${res.data.error.message}~` || res.data.error.code,
          icon: 'none',
          mask: true,
        });
      }
      return data;
    } else {
      throw new Error(`网络请求错误，状态码${statusCode}`);
    }
  });
};
