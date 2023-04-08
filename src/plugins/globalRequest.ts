import { extend } from 'umi-request';
import message from 'antd/es/message';
import { history } from 'umi';
import { stringify } from 'querystring';

const request = extend({ credentials: 'include' });
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
request.interceptors.respone.use(async (response, options): Promise<any> => {
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
