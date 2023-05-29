import React, { useEffect, useState } from 'react';
import { getProblem } from '@/services/Api/ProblemController';
import Problem from '@/pages/Home/Problem';
import styles from './index.less';

import { useModel } from '@umijs/max';
import { nanoid } from 'nanoid';
import { Row } from 'antd';

const ProblemList: React.FC = () => {
  const { problems, loading } = useModel('problemModel');

  return (
    <Row gutter={[16, 32]}>
      {problems &&
        problems.map((problem) => {
          return <Problem problem={problem} key={nanoid()}></Problem>;
        })}
    </Row>
  );
};
export default ProblemList;
