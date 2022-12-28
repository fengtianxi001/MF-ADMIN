import Mock from '../../core';
import type { WarningPageType } from '@/api/Warning/types';
Mock.get(/\/warning\/page/, warningPage);

function warningPage() {
  const data: WarningPageType[] = new Array(10).fill(0).map((item, index) => {
    return {
      id: index + '',
      number: '2021-000' + index,
      device: '设备 ' + index,
      level: Math.ceil(Math.random() * 4) as 1 | 2 | 3 | 4,
      code: '#A00' + index,
      content: '故障 ' + index,
      status: Math.random() * 1 > 0.5 ? 0 : 1,
      createTime: '2021-01-01 00:00:00',
    };
  });
  return {
    data,
    current: 1,
    size: 5,
    total: 20,
  };
}
