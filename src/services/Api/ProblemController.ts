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

/** 获取问题接口 post /api/problem/searchProblem */
export async function searchProblem(
  body: API.GetProblem,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponse<API.ProblemParams>>(
    '/api/problem/getProblem',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 分页获取问题接口 post /api/problem/pageProblem */
export async function pageProblem(
  body: API.pageProblem,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponse<API.RegisterResult>>(
    '/api/problem/pageProblem',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}
