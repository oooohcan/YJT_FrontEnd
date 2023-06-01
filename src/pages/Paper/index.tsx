import React, { useEffect } from 'react';
import { Card } from 'antd';
import { PageContainer } from '@ant-design/pro-components';
import PaperCard from './PaperCard';
import { useLocation, useSearchParams, useModel } from '@umijs/max';
import { nanoid } from 'nanoid';
const PaperPage: React.FC = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { problems, loading } = useModel('problemModel');
  const ids = searchParams?.get('ids')?.split(',');
  //   useEffect(() => {
  //     console.log(ids);
  //   }, []);
  return (
    <PageContainer title="试卷">
      {/* <div>此处有试卷信息</div> */}
      {ids?.map((v) => {
        return <PaperCard problem={problems[v - 1]} key={nanoid()}></PaperCard>;
      })}
    </PageContainer>
  );
};
export default PaperPage;
