import Mock from '../../core';
import type { BreakdownPageType } from '@/api/Breakdown/types';
Mock.get(/\/breakdown\/page/, breakdownPage);

function breakdownPage() {
  const data: BreakdownPageType[] = new Array(10).fill(0).map((item, index) => {
    return {
      id: index + '',
      theme: '报告主题' + index,
      order: '工单1',
      sender: {
        id: '1',
        name: '张三',
        title: '工程师',
      },
      node: '节点1',
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
