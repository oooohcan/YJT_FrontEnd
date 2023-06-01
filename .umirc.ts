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
  routes: [
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
      path: '/admin',
      name: '管理页',
      icon: 'crown',
      access: 'canAdmin',
      component: './Admin',
      routes: [
        {
          path: '/admin/user-manage',
          name: '二级管理页',
          icon: 'smile',
          component: './Admin/UserManage',
        },
        { component: './404' },
      ],
    },
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '刷题',
      path: '/home',
      icon: 'smile',
      component: './Home',
    },
    {
      name: '组卷',
      path: '/table',
      icon: 'crown',
      component: './Table',
    },
    {
      path: '/detail',
      component: './Detail',
    },
    {
      path: '/paper',
      component: './Paper',
    },
  ],
  npmClient: 'pnpm',
});
