import React from 'react';
import { Card, Tag } from 'antd';
const PaperCard: React.FC = (props) => {
  const problem = props?.problem;

  return (
    <Card
      title={problem?.title}
      style={{ width: '100%', marginTop: '10px' }}
      extra={<Tag color="blue">题目编号：{problem?.id}</Tag>}
      hoverable={true}
    >
      <p>{problem?.content}</p>
    </Card>
  );
};
export default PaperCard;
