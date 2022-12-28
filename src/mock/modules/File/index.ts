import Mock from '../../core';
import type { FilePageType } from '@/api/File';
Mock.get(/\/file\/page/, filePage);

function filePage() {
  const data: FilePageType[] = new Array(10).fill(0).map((item, index) => {
    return {
      id: index + '',
      name: '文件' + index,
      type: 'pdf',
      author: {
        id: index + '',
        name: '作者' + index,
        title: '职位' + index,
      },
      size: '10M',
      mark: '备注' + index,
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
