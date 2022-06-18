/* eslint no-use-before-define: 0 */
import type { Request, Response } from 'express';

const city = require('./geographic/city.json');
const province = require('./geographic/province.json');

function getProvince(_: Request, res: Response) {
  return res.json({
    data: province,
  });
}

function getCity(req: Request, res: Response) {
  return res.json({
    data: city[req.params.province],
  });
}

function getCurrentUse(req: Request, res: Response) {
  return res.json({
    data: {
      name: 'Aldno',
      avatar: 'F71727CCECAC31AC401188AC684B2DA8.png',
      userid: '00000001',
      email: 'i9980307@vip.qq.com',
      signature: '这个人很帅,没有留下签名',
      title: '全栈专家',
      group:
        '头戴三叉束发紫金冠，体挂西川红棉百花袍，身披兽面吞头连环铠，腰系勒甲玲珑狮蛮带；弓箭随身，手持画戟，坐下嘶风赤兔马！',
      tags: [
        {
          key: '0',
          label: '很有想法的',
        },
        {
          key: '1',
          label: '专注设计',
        },
      ],
      notifyCount: 12,
      unreadCount: 11,
      country: 'China',
      geographic: {
        province: {
          label: '浙江省',
          key: '330000',
        },
        city: {
          label: '杭州市',
          key: '330100',
        },
      },
      address: '西湖区工专路 77 号',
      phone: '0752-268888888',
    },
  });
}
// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  // 支持值为 Object 和 Array
  'GET  /api/accountSettingCurrentUser': getCurrentUse,
  'GET  /api/geographic/province': getProvince,
  'GET  /api/geographic/city/:province': getCity,
};
