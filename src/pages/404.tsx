import { Button, Result } from 'antd';
import React from 'react';
import { history } from 'umi';

const NoFoundPage: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle="啊哦，访问的页面不存在呢φ(゜▽゜*)♪"
    extra={
      <Button type="primary" onClick={() => history.push('/')}>
        回到首页
      </Button>
    }
  />
);

export default NoFoundPage;
