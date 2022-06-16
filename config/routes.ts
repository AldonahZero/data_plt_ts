export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { name: '登录', path: '/user/login', component: './user/Login' },
      { component: './404' },
    ],
  },
  { path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome' },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      { path: '/admin/sub-page', name: '二级管理页', icon: 'smile', component: './Welcome' },
      { component: './404' },
    ],
  },
  { name: '查询表格', icon: 'table', path: '/list', component: './TableList' },
  { path: '/dashboard', redirect: '/welcome' },
  { icon: 'smile', name: '数据分析', path: '/dashboardanalysis', component: './DashboardAnalysis' },
  { icon: 'smile', name: '仪表盘', path: '/dashboardmonitor', component: './DashboardMonitor' },
  //   { icon: 'smile', layout: false, path: '/home', component: './Home' },
  { component: './404' },
];
