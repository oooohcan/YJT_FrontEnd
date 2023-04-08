import request from '@/plugins/globalRequest';

/** 注册接口 POST /api/user/register */
export async function register(body:API.RegisterParams,options?:{[key:string]:any}){
    return request<API.BaseResponse<API.RegisterResult>>('/api/user/register',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        data:body,
        ...(options || {}),
    });
}




/** 获取当前的用户 GET /api/user/current */
export async function currentUser(options?: { [key: strng]: any }) {
  return request<API.BaseResponse<API.CurrentUser>>('/api/user/current'){
    method:'GET',
    ...(options || {}),
  };
}
