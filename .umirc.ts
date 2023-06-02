import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '一卷通',
  },
  npmClient: 'pnpm',
  routes: [
    {
      path: '/',
      redirect: '/user/login',
    },
    {
      path: '/user',
      layout: false,
      routes: [
        { name: '登录', path: '/user/login', component: './User/Login' },
        { name: '注册', path: '/user/register', component: './User/Register' },
        { component: './404' },
      ],
    },
    {
      name: '刷题',
      icon: 'smile',
      path: '/home',
      component: './Home',
      access: 'canUser',
    },
    {
      name: '组卷',
      icon: 'crown',
      path: '/table',
      component: './Table',
      access: 'canUser',
    },
    {
      path: '/detail',
      component: './Detail',
      access: 'canUser',
    },
    {
      path: '/paper',
      component: './Paper',
      access: 'canUser',
    },
    {
      path: '/admin',
      name: '管理页',
      icon: 'crown',
      access: 'canAdmin',
      routes: [
        {
          name: '用户管理页',
          path: '/admin/user-manage',
          component: './Admin/UserManage',
        },
        { component: './404' },
      ],
    },
    { component: './404' },
  ],
});
