import { LockOutlined, MobileOutlined, UserOutlined } from '@ant-design/icons';
import {
  LoginForm,
  ProFormCaptcha,
  ProFormText,
  ProConfigProvider,
} from '@ant-design/pro-components';
import { message, Tabs } from 'antd';
import { history, Link, useModel } from 'umi';
import { useState } from 'react';
import { SYSTEM_LOG } from '@/constants';

type LoginType = 'phone' | 'account';

const Login: React.FC = () => {
  const [loginType, setLoginType] = useState<LoginType>('account');
  const items = [
    {
      label: '账户密码',
      key: 'account',
    },
    {
      label: '手机验证',
      key: 'phone',
    },
  ];
  return (
    <ProConfigProvider hashed={false}>
      <div style={{ backgroundColor: 'white' }}>
        <LoginForm
          logo={<img src={SYSTEM_LOG} alt="logo" />}
          title="一卷通"
          subTitle="大学生面试题组卷刷题平台"
        >
          <Tabs
            centered
            activeKey={loginType}
            onChange={(activeKey) => setLoginType(activeKey as LoginType)}
            items={items}
          ></Tabs>
          {loginType === 'account' && (
            <>
              <ProFormText
                name="username"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={'prefixIcon'} />,
                }}
                placeholder={'账户: admin'}
                rules={[
                  {
                    required: true,
                    message: '请输入账户!',
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={'prefixIcon'} />,
                }}
                placeholder={'密码: 123456'}
                rules={[
                  {
                    required: true,
                    message: '请输入密码！',
                  },
                ]}
              />
            </>
          )}
          {loginType === 'phone' && (
            <>
              <ProFormText
                fieldProps={{
                  size: 'large',
                  prefix: <MobileOutlined className={'prefixIcon'} />,
                }}
                name="mobile"
                placeholder={'手机号'}
                rules={[
                  {
                    required: true,
                    message: '请输入手机号！',
                  },
                  {
                    pattern: /^1\d{10}$/,
                    message: '手机号格式错误！',
                  },
                ]}
              />
              <ProFormCaptcha
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={'prefixIcon'} />,
                }}
                captchaProps={{
                  size: 'large',
                }}
                placeholder={'请输入验证码'}
                captchaTextRender={(timing, count) => {
                  if (timing) {
                    return `${count} ${'获取验证码'}`;
                  }
                  return '获取验证码';
                }}
                name="captcha"
                rules={[
                  {
                    required: true,
                    message: '请输入验证码！',
                  },
                ]}
                onGetCaptcha={async () => {
                  message.success('这个功能没写好~~');
                }}
              />
            </>
          )}
          <div
            style={{
              marginBlockEnd: 24,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Link to={'/user/register'}>创建账户</Link>
            <a className="textcolor">忘记密码</a>
          </div>
        </LoginForm>
      </div>
    </ProConfigProvider>
  );
};
export default Login;
