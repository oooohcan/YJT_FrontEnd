import React from 'react';
import { Avatar, Menu, Dropdown, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from './index.less';
import { useModel, history, useAccess } from '@umijs/max';
import { nanoid } from 'nanoid';
import { outLogin } from '@/services/Api/UserController';

const RightContent: React.FC = () => {
  const { initialState, setInitialState } = useModel('@@initialState');
  const access = useAccess();
  const items = [
    {
      key: nanoid(),
      label: (
        <a
          onClick={() => {
            history.push('/user/login');
          }}
        >
          登录
        </a>
      ),
    },
    {
      key: nanoid(),
      label: (
        <a
          onClick={() => {
            if (access.canAdmin) history.push('/admin/user-manage');
            else message.info('您不是管理员哦~');
          }}
        >
          后台
        </a>
      ),
    },
    {
      key: nanoid(),
      label: (
        <a
          onClick={async () => {
            await outLogin();
            history.push('/user/login');
            setInitialState({ currentUser: null });
          }}
        >
          退出
        </a>
      ),
    },
  ];
  return (
    <div>
      <span>
        <Dropdown menu={{ items }}>
          <span className={[styles.action, styles.account]}>
            <Avatar
              size="small"
              className={styles.avatar}
              icon={<UserOutlined />}
              alt="avatar"
              src={initialState.currentUser?.avatarUrl}
            />
            <span className={[styles.name, styles.anticon]}>
              {initialState.currentUser?.username}
            </span>
          </span>
        </Dropdown>
      </span>
    </div>
  );
};
export default RightContent;
