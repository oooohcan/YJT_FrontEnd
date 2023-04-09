import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel, history } from '@umijs/max';
import styles from './index.less';
import { Button } from 'antd';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
      </div>
      <Button
        onClick={() => {
          history.push('/user/login');
        }}
      >
        点我登录
      </Button>
    </PageContainer>
  );
};

export default HomePage;
