import request from '@/plugins/globalRequest';

/** 获取问题接口 get /api/problem/getProblem */
export async function getProblem(options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.ProblemParams>>(
    '/api/problem/getProblem',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}
