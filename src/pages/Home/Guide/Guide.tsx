import { Layout, Row, Typography } from 'antd';
import React from 'react';
import styles from './Guide.less';

interface Props {
  name: string;
}

// 脚手架示例组件
const Guide: React.FC<Props> = (props) => {
  const { name } = props;
  return (
    <Layout>
      <Row>
        <Typography.Title level={3} className={styles.title}>
          欢迎使用 <strong>{name}</strong> ！
        </Typography.Title>
      </Row>
      <p style={{ textAlign: 'center' }}>
        这是一个为<b>大学生</b>提供IT相关<b>面试题</b>组卷和刷题功能的平台
      </p>
    </Layout>
  );
};

export default Guide;
