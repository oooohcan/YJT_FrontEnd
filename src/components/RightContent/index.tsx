import React from 'react';
import { Avatar, Menu, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from './index.less';
import { useModel, history } from '@umijs/max';

const RightContent: React.FC = () => {
  const menu = (
    <Menu>
      <Menu.Item
        key="登录"
        onClick={() => {
          history.push('/user/login');
        }}
      >
        登录
      </Menu.Item>
      <Menu.Item key="后台">后台</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="退出登录">退出登录</Menu.Item>
    </Menu>
  );
  return (
    <div>
      <span>
        <Dropdown overlay={menu}>
          <span className={[styles.action, styles.account]}>
            <Avatar
              size="small"
              className={styles.avatar}
              icon={<UserOutlined />}
              alt="avatar"
            />
            <span className={[styles.name, styles.anticon]}>名字</span>
          </span>
        </Dropdown>
      </span>
    </div>
  );
};
export default RightContent;
