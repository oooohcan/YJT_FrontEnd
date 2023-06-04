import request from '@/plugins/globalRequest';

/** 新建试卷接口 post /api/paper/addPaper */
export async function addPaper(
  body: API.AddProblemParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponse<API.ProblemParams>>('/api/paper/addPaper', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
