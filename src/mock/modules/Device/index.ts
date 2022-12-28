import Mock from '../../core';
import type { DevicePageType } from '@/api/Device/types';
Mock.get(/\/device\/page/, warningPage);

function warningPage() {
  const data: DevicePageType[] = new Array(5).fill(0).map((item, index) => {
    return {
      id: index + '',
      name: '设备' + index,
      code: '#D000' + index,
      charger: {
        id: '1',
        name: '张三',
        title: '工程师',
      },
      status: 0,
    };
  });
  return {
    data,
    current: 1,
    size: 5,
    total: 20,
  };
}
