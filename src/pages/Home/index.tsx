import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel, history } from '@umijs/max';

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
      <br />
      <br />
      <ProblemList />
    </PageContainer>
  );
};

export default HomePage;
