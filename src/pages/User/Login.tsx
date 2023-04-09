import { LockOutlined, MobileOutlined, UserOutlined } from '@ant-design/icons';
import {
  LoginForm,
  ProFormCaptcha,
  ProFormText,
  ProConfigProvider,
} from '@ant-design/pro-components';
import { Alert, message, Tabs } from 'antd';
import { history, Link, useModel } from 'umi';
import { useState } from 'react';
import { SYSTEM_LOG } from '@/constants';

import { login } from '@/services/Api/UserController';

type LoginType = 'phone' | 'account';

const LoginMessage: React.FC<{ content: string }> = ({ content }) => (
  <Alert style={{ marginBottom: 24 }} message={content} type="error" showIcon />
);

const Login: React.FC = () => {
  const [userLoginState, setUserLoginState] = useState<API.LoginResult>({});
  const [loginType, setLoginType] = useState<LoginType>('account');
  const { initialState, setInitialState } = useModel('@@initialState');
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

  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();
    if (userInfo) {
      await setInitialState((s) => ({ ...s, currentUser: userInfo }));
    }
  };

  const handleSubmit = async (values: API.LoginParams) => {
    try {
      //登录
      const user = await login({ ...values, loginType });
      console.log(user);

      if (user) {
        const defaultLoginSuccessMessage = '登录成功!';
        message.success(defaultLoginSuccessMessage);
        await fetchUserInfo();
        /** 此方法会跳转到 redirect 参数所在的位置 */
        // if (!history) return;
        // const { query } = history.location;
        // const { redirect } = query as {
        //   redirect: string;
        // };
        // history.push(redirect || '/');
        await setInitialState(user);
        console.log(initialState);

        history.push('/admin');
        return;
      }
      setUserLoginState(user);
      console.log(userLoginState);
      console.log(3);
    } catch (error) {
      const defaultLoginFailureMessage = '登录失败，请重试!';
      message.error(defaultLoginFailureMessage);
    }
  };

  return (
    <ProConfigProvider hashed={false}>
      <div style={{ backgroundColor: 'white' }}>
        <LoginForm
          logo={<img src={SYSTEM_LOG} alt="logo" />}
          title="一卷通"
          subTitle="大学生面试题组卷刷题平台"
          onFinish={async (values) => {
            await handleSubmit(values as API.LoginParams);
          }}
        >
          <Tabs
            centered
            activeKey={loginType}
            onChange={(activeKey) => setLoginType(activeKey as LoginType)}
            items={items}
          ></Tabs>
          {userLoginState === 'error' && loginType === 'account' && (
            <LoginMessage content={'错误的账号和密码'} />
          )}
          {loginType === 'account' && (
            <>
              <ProFormText
                name="userAccount"
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
                name="userPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={'prefixIcon'} />,
                }}
                placeholder={'密码: 12345678'}
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
                name="userMobile"
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
                name="userCaptcha"
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
