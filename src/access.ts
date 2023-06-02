export interface AccessType {
  canAdmin: boolean; //是否为管理员
  canUser: boolean; //是否已登录
  isBan: boolean; //是否被封号
}

export default function access(initialState: {
  currentUser?: API.CurrentUser | undefined;
}): AccessType {
  const { currentUser } = initialState || {};
  return {
    canAdmin: currentUser?.userRole === 1,
    canUser: currentUser,
    isBan: false,
  };
}
