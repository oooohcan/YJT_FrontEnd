import { Card, Col, Row, Space } from 'antd';
import React from 'react';
import styles from './index.less';
import Meta from 'antd/es/card/Meta';

const Problem: React.FC<Props> = (props) => {
  const { Meta } = Card;
  return (
    <Space direction="vertical" size={16}>
      <Card
        size="small"
        title="题目"
        extra={<a href="#">详情</a>}
        style={{ width: 300 }}
      >
        <Meta description={'作者'} />
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
      </Card>
    </Space>
  );
};

export default Problem;
