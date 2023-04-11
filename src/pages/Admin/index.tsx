import { Access, useAccess } from '@umijs/max';
import React from 'react';

const Admin: React.FC = (props) => {
  const { children } = props;
  const access = useAccess();
  return (
    <div>
      <Access accessible={access.canAdmin}>
        admin页面，还要好好写{children}
      </Access>
    </div>
  );
};

export default Admin;
