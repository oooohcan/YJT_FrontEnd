import React, { useEffect, useState } from 'react';
import { getProblem } from '@/services/Api/ProblemController';
import Problem from '@/components/Problem';
import styles from './index.less';

import { useModel } from '@umijs/max';
import { nanoid } from 'nanoid';
import { Row } from 'antd';

const ProblemList: React.FC = () => {
  const [problemList, setProblemList] = useState();
  useEffect(() => {
    async function getProblrmList() {
      setProblemList(await getProblem());
    }
    getProblrmList();
    // console.log(problemList);
  }, []);
  return (
    <Row gutter={[16, 16]}>
      {problemList &&
        problemList.map((problem) => {
          return <Problem problem={problem} key={nanoid()}></Problem>;
        })}
    </Row>
  );
};
export default ProblemList;
