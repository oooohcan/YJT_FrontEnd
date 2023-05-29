import { Card, Col, Row, Space, Tag, message } from 'antd';
import React, { useEffect } from 'react';
import styles from './index.less';
import Meta from 'antd/es/card/Meta';
import { history } from '@umijs/max';
import { TAGS } from '@/constants';

const Problem: React.FC<Props> = (props) => {
  const { Meta } = Card;
  const problem = props.problem;

  return (
    <Col span={8}>
      <Card
        size="small"
        title={problem.title}
        extra={<Tag color="blue">{TAGS[problem.label]}</Tag>}
        style={{ width: 350, height: 180 }}
        hoverable={true}
        onClick={() => {
          history.push({ pathname: '/detail', search: `id=${problem.id}` });
        }}
      >
        <Meta description={problem.author} />
        <p>{problem.content}</p>
      </Card>
    </Col>
  );
};

export default Problem;
