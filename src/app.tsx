// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate

import RightContent from './components/RightContent';

export async function getInitialState(): Promise<{ name: string }> {
  return { name: 'zxy' };
}

export const layout = () => {
  return {
    layout: 'top',
    logo: './logo.png',
    rightRender: () => <RightContent />,
  };
};