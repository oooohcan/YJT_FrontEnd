import { extend } from 'umi-request';
import message from 'antd/es/message';
import { history } from 'umi';
import { stringify } from 'querystring';

const request = extend({
  credentials: 'include',
  // 默认请求是否带上cookie
  //------------生产环境更换请求地址--------------
  // prefix: process.env.NODE_ENV === 'production' ? 'http://user-backend.code-nav.cn' : undefined
  // requestType: 'form',
  prefix: 'http://localhost:8080',
});
/**
 * 所有请求拦截器
 */
request.interceptors.request.use((url, options): any => {
  console.log(`do request = ${url}`);
  return {
    url,
    options: {
      ...options,
      headers: {},
    },
  };
});
/**
 * 所有响应拦截器
 */
request.interceptors.response.use(async (response, options): Promise<any> => {
  const res = await response.clone().json();
  if (res.code === 0) {
    return res.data;
  }
  if (res.code === 40100) {
    message.error('请先登录');
    history.replace({
      pathname: '/user/login',
      search: stringify({
        redirect: location.pathname,
      }),
    });
  } else {
    message.error(res.description);
  }
  return res.data;
});
export default request;
