import { Card, Col, Row, Space, message } from 'antd';
import React, { useEffect } from 'react';
import styles from './index.less';
import Meta from 'antd/es/card/Meta';

const Problem: React.FC<Props> = (props) => {
  const { Meta } = Card;
  const problem = props.problem;
  useEffect(() => {
    console.log(problem);
  }, []);
  return (
    <Col span={8}>
      <Card
        size="small"
        title={problem.title}
        extra={<a href="#">详情</a>}
        style={{ width: 300, height: 180 }}
        hoverable={true}
      >
        <Meta description={problem.author} />
        <p>{problem.content}</p>
      </Card>
    </Col>
  );
};

export default Problem;
