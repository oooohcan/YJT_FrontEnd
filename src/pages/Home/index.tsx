import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel, history } from '@umijs/max';
import { Button } from 'antd';

import styles from './index.less';
import Guide from './Guide';
import Problem from './Problem';
import ProblemList from './ProblemList';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
      </div>
      <Button
        style={{ position: 'absolute', right: 10, top: 10 }}
        onClick={() => {
          history.push('/user/login');
        }}
      >
        点我登录
      </Button>
      <br />
      <br />

      <ProblemList />
    </PageContainer>
  );
};

export default HomePage;
