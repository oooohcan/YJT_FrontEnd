import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {
  LoginForm,
  ProFormText,
  ProConfigProvider,
} from '@ant-design/pro-components';
import { history, Link, useModel } from 'umi';
import { SYSTEM_LOG } from '@/constants/index';

const Register: React.FC = () => {
  return (
    <ProConfigProvider hashed={false}>
      <div style={{ bacgroundColor: 'white' }}>
        <LoginForm
          logo={<img src={SYSTEM_LOG} alt="logo" />}
          title="一卷通"
          subTitle="大学生面试题组卷刷题平台"
          submitter={{
            searchConfig: {
              submitText: '注册',
            },
          }}
        >
          <ProFormText
            name="username"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined className={'predixIcon'} />,
            }}
            placeholder={'请输入账户'}
            rules={[
              { required: true, message: '请输入账户' },
              {
                min: 6,
                max: 10,
                message: '长度要适中哦',
              },
            ]}
          ></ProFormText>
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined className={'prefixIcon'} />,
            }}
            placeholder={'请输入密码'}
            rules={[
              {
                required: true,
                message: '请输入密码！',
              },
              {
                min: 8,
                type: 'string',
                message: '密码长度不能小于8！',
              },
            ]}
          ></ProFormText.Password>
          <ProFormText.Password
            name="checkPassword"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined className="prefixIcon" />,
            }}
            placeholder={'请确认密码'}
            rules={[
              {
                required: true,
                message: '确认密码是必填项！',
              },
              {
                min: 8,
                type: 'string',
                message: '密码长度不能小于8！',
              },
            ]}
          />
          <ProFormText
            name="inviteCode"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined className="prefixIcon" />,
            }}
            placeholder={'请输入邀请码'}
            rules={[
              {
                required: true,
                message: '邀请码是必填项！',
              },
            ]}
          />
          <div
            style={{
              marginBlockEnd: 24,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Link to={'/user/login'}>已有账户</Link>
            <a>邀请码</a>
          </div>
        </LoginForm>
      </div>
    </ProConfigProvider>
  );
};

export default Register;
