export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: '登录',
        path: '/user/login',
        component: './user/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: '欢迎',
    icon: 'smile',
    component: './Welcome',
  },
  {
    icon: 'AreaChartOutlined',
    name: '数据分析',
    path: '/dashboardanalysis',
    component: './DashboardAnalysis',
  },
  {
    icon: 'DashboardOutlined',
    name: '仪表盘',
    path: '/dashboardmonitor',
    component: './DashboardMonitor',
  },
  {
    name: '个人设置',
    icon: 'SettingOutlined',
    path: '/accountsettings',
    component: './AccountSettings',
  },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: '二级管理页',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },

  {
    path: '/',
    redirect: '/dashboardmonitor',
  },

  {
    name: '新增数据集云盘库',
    icon: 'CloudUploadOutlined',
    path: '/formstepform',
    component: './FormStepForm',
  },
  {
    name: '查询数据集云盘库',
    icon: 'CloudServerOutlined',
    path: '/list',
    component: './TableList',
  },
  {
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/interfere',
    name: '模型预测',
    icon: 'CarOutlined',
    routes: [
      {
        icon: 'VideoCameraOutlined',
        name: '单桢预测',
        path: '/index.html',
      },
      {
        icon: 'çVideoCameraAddOutlined',
        name: '连续桢预测',
        path: 'https://webviz.io/app/?demo=&seek-to=1490150279.575225317',
      },
    ],
  },

  //   { icon: 'smile', name: '首页', path: '/protal', component: './Home' },
  {
    component: './404',
  },
  {
    component: './500',
  },
];
