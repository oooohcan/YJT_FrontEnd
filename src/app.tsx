import RightContent from './components/RightContent';
// umimax运行时配置
// 初始化全局状态
export async function getInitialState() {
  return { init: 'success' };
}
// 运行时布局配置
export const layout = () => {
  return {
    layout: 'top',
    logo: './logo.png',
    rightRender: () => <RightContent />,
  };
};
