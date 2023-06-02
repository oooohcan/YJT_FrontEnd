import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { Button, Tag, FloatButton } from 'antd';
import { useSearchParams, useModel } from '@umijs/max';
import { TAGS } from '@/constants';
import { getProblem, pageProblem } from '@/services/Api/ProblemController';
import GPT from '@/components/GPT';

const Detail: React.FC = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { problems, loading } = useModel('problemModel');
  const id = searchParams.get('id');
  const problem = problems[id - 1];
  const [show, setShow] = useState(true);
  let textDisplay = {
    color: show ? null : 'black',
    transitionProperty: 'all',
    transitionDuration: '0.8s',
    fontSize: 'large',
    marginTop: '20px',
  };
  // useEffect(() => {
  //   console.log(searchParams.get('id'));
  //   console.log(problem);
  // }, []);

  return (
    <div className={styles.container}>
      <GPT />
      <div className={styles.information}>
        <div>
          作者：<Tag color="cyan">{problem?.author}</Tag>
        </div>
        <div>
          编号：<Tag color="magenta">{id}</Tag>
        </div>
        <div>
          标签：<Tag color="blue">{TAGS[problem?.label]}</Tag>
        </div>
        <div
          style={{
            fontWeight: '600',
            color: 'rgb(150, 150, 150)',
          }}
        >
          {problem?.createTime.slice(0, 10) +
            ' ' +
            problem?.createTime.slice(11, 19)}
        </div>
      </div>
      <hr />
      <div className={styles.title}>{problem?.title}</div>
      <div className={styles.content}>{problem?.content}</div>
      <div className={styles.answer}>
        <Button
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? '查看' : '隐藏'}答案
        </Button>
        <div style={textDisplay}>{problem?.answer}</div>
      </div>
    </div>
  );
};

export default Detail;
