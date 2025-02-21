import { convertBadgeEnum2Normal, convertBadgeEnum2Options } from './utils'
export const SecretHierarchyBadgeEnum = {
  0: {
    text: '公开',
    status: 'success',
  },
  1: {
    text: '内部',
    status: 'processing',
  },
  2: {
    text: '机密',
    status: 'warning',
  },
  3: {
    text: '绝密',
    status: 'danger',
  },
}

export const SecretHierarchyEnum = convertBadgeEnum2Normal(
  SecretHierarchyBadgeEnum
)

export const SecretHierarchyOptionsEnum = convertBadgeEnum2Options(
  SecretHierarchyBadgeEnum
)
