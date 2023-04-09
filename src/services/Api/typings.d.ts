declare namespace API {
  /** 注册登录相关 */
  type RegisterParams = {
    userAccount?: string;
    userPassword?: string;
    checkPassword?: string;
    inviteCode?: string;
    type?: string;
  };

  type LoginParams = {
    userAccount?: string;
    userPassword?: string;
    autoLogin?: boolean;
    type?: string;
  };

  type RegisterResult = number;

  type LoginResult = {
    status?: string;
    type?: string;
    currentAuthority?: string;
  };

  /** 当前脱敏用户 */
  type CurrentUser = {
    id: number;
    username: string;
    userAccount: string;
    avatarurl?: string;
    gender: number;
    phone: string;
    email: string;
    userStatus: number;
    userRole: number;
    inviteCode: string;
    createTime: Date;
  };

  /** 用于对接后端的通用返回类 */
  type BaseResponse<T> = {
    code: number;
    data: T;
    message: string;
    description: string;
  };

  /** 错误返回类 */
  type ErrorRespone = {
    errorCode: String;
    errorMessage?: string;
    success?: boolean;
  };
}
