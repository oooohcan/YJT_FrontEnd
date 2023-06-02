import RightContent from './components/RightContent';

export async function getInitialState() {
  return { init: 'success' };
}

export const layout = () => {
  return {
    layout: 'top',
    logo: './logo.png',
    rightRender: () => <RightContent />,
  };
};
