import React, { useEffect } from 'react';
import styles from './index.less';
import { Tag } from 'antd';
import { useSearchParams, useModel } from '@umijs/max';
import { TAGS } from '@/constants';

const Detail: React.FC = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { problems, loading } = useModel('problemModel');
  const id = searchParams.get('id');
  const problem = problems[id - 1];
  useEffect(() => {
    console.log(searchParams.get('id'));
    console.log(problem);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.information}>
        <div>
          作者：<Tag color="cyan">{problem.author}</Tag>
        </div>
        <div>
          编号：<Tag color="magenta">{id}</Tag>
        </div>
        <div>
          标签：<Tag color="blue">{TAGS[problem.label]}</Tag>
        </div>
        <div
          style={{
            fontWeight: '600',
            color: 'rgb(150, 150, 150)',
          }}
        >
          {problem.createTime.slice(0, 10) +
            ' ' +
            problem.createTime.slice(11, 19)}
        </div>
      </div>
      <hr />
      <div className={styles.title}>{problem.title}</div>
      <div className={styles.content}>{problem.content}</div>
      <div className={styles.answer}>{problem.answer}</div>
    </div>
  );
};

export default Detail;
