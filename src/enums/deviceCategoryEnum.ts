import { convertBadgeEnum2Normal, convertBadgeEnum2Options } from './utils'

// export const deviceCategoryBadgeEnum = {
//   0: {
//     text: '待审核',
//     status: 'normal',
//   },
//   1: {
//     text: '审核中',
//     status: 'processing',
//   },
//   2: {
//     text: '审核通过',
//     status: 'success',
//   },
//   3: {
//     text: '审核不通过',
//     status: 'danger',
//   },
//   4: {
//     text: '已撤回',
//     status: 'warning',
//   },
//   5: {
//     text: '已完成',
//     status: 'success',
//   },
//   6: {
//     text: '逾期',
//     status: 'warning',
//   },
// }

export const DeviceCategoryEnum = {
  0: '打印设备',
  1: '复印设备',
  2: '扫描设备',
  3: '传真设备',
  4: '计算机设备',
  5: '投影设备',
  6: '通信设备',
  7: '办公家具',
}

export const DeviceCategoryOptionsEnum = [
  {
    label: '打印设备',
    value: 0,
  },
  {
    label: '复印设备',
    value: 1,
  },
  {
    label: '扫描设备',
    value: 2,
  },
  {
    label: '传真设备',
    value: 3,
  },
  {
    label: '计算机设备',
    value: 4,
  },
  {
    label: '投影设备',
    value: 5,
  },
  {
    label: '通信设备',
    value: 6,
  },
  {
    label: '办公家具',
    value: 7,
  },
]
