import { PageHeaderWrapper } from '@ant-design/pro-components';
import { Access, useAccess } from '@umijs/max';
import React from 'react';

const Admin: React.FC = (props) => {
  const { children } = props;
  const access = useAccess();
  return (
    <PageHeaderWrapper>
      <Access accessible={access.canAdmin}>{children}</Access>
    </PageHeaderWrapper>
  );
};

export default Admin;
