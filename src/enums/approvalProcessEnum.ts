import { convertBadgeEnum2Normal, convertBadgeEnum2Options } from './utils'
export const ApprovalProcessBadgeEnum = {
  0: {
    text: '待审核',
    status: 'normal',
  },
  1: {
    text: '审核中',
    status: 'processing',
  },
  2: {
    text: '审核通过',
    status: 'success',
  },
  3: {
    text: '审核不通过',
    status: 'danger',
  },
  4: {
    text: '已撤回',
    status: 'warning',
  },
  5: {
    text: '已完成',
    status: 'success',
  },
  6: {
    text: '逾期',
    status: 'warning',
  },
}

export const ApprovalProcessEnum = convertBadgeEnum2Normal(
  ApprovalProcessBadgeEnum
)

export const ApprovalProcessOptionsEnum = convertBadgeEnum2Options(
  ApprovalProcessBadgeEnum
)
