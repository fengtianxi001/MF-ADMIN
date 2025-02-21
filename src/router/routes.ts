import { RouterView } from 'vue-router'

export const routes = [
  {
    path: '/devices/index',
    name: 'devices-index',
    meta: { title: '我的设备', icon: 'fa-solid fa-grid-2' },
    component: () => import('@/views/devices/index.vue'),
  },
  {
    path: '/register/index',
    name: 'register-index',
    meta: { title: '设备登记', icon: 'fa-solid fa-plus' },
    component: () => import('@/views/register/index.vue'),
  },
  {
    path: '/apply',
    name: 'apply',
    meta: { title: '设备申领', icon: 'fa-solid fa-clipboard-check' },
    children: [
      {
        path: '/apply/mine',
        name: 'apply-mine',
        meta: { title: '我的申领' },
        component: () => import('@/views/apply/mine/index.vue'),
      },
      {
        path: '/apply/record',
        name: 'apply-record',
        meta: { title: '申领记录' },
        component: () => import('@/views/apply/record/index.vue'),
      },
      {
        path: '/apply/receive',
        name: 'apply-receive',
        meta: { title: '申领领用' },
        component: () => import('@/views/apply/receive/index.vue'),
      },
    ],
  },
  {
    path: '/replacement',
    name: 'replacement',
    meta: { title: '设备更换', icon: 'fa-solid fa-exchange' },
    children: [
      {
        path: '/replacement/mine',
        name: 'replacement-mine',
        meta: { title: '我的更换' },
        component: () => import('@/views/replacement/mine/index.vue'),
      },
      {
        path: '/replacement/record',
        name: 'replacement-record',
        meta: { title: '更换记录' },
        component: () => import('@/views/replacement/record/index.vue'),
      },
      {
        path: '/replacement/receive',
        name: 'replacement-receive',
        meta: { title: '更换领用' },
        component: () => import('@/views/replacement/receive/index.vue'),
      },
    ],
  },
  {
    path: '/change',
    name: 'change',
    meta: { title: '设备变更', icon: 'fa-solid fa-sync' },
    children: [
      {
        path: '/change/mine',
        name: 'change-mine',
        meta: { title: '我的变更' },
        component: () => import('@/views/change/mine/index.vue'),
      },
      {
        path: '/change/record',
        name: 'change-record',
        meta: { title: '变更记录' },
        component: () => import('@/views/change/record/index.vue'),
      },
      {
        path: '/change/receive',
        name: 'change-receive',
        meta: { title: '设备领取' },
        component: () => import('@/views/change/receive/index.vue'),
      },
    ],
  },
  {
    path: '/retirement',
    name: 'retirement',
    meta: { title: '设备清退', icon: 'fa-solid fa-trash' },
    children: [
      {
        path: '/retirement/mine',
        name: 'retirement-mine',
        meta: { title: '我的清退' },
        component: () => import('@/views/retirement/mine/index.vue'),
      },
      {
        path: '/retirement/record',
        name: 'retirement-record',
        meta: { title: '清退记录' },
        component: () => import('@/views/retirement/record/index.vue'),
      },
    ],
  },
  {
    path: '/scrap',
    name: 'scrap',
    meta: { title: '设备报废', icon: 'fa-solid fa-ban' },
    children: [
      {
        path: '/scrap/mine',
        name: 'scrap-mine',
        meta: { title: '我的报废' },
        component: () => import('@/views/scrap/mine/index.vue'),
      },
      {
        path: '/scrap/record',
        name: 'scrap-record',
        meta: { title: '报废记录' },
        component: () => import('@/views/scrap/record/index.vue'),
      },
    ],
  },
  {
    path: '/approval',
    name: 'approval',
    meta: { title: '设备审批', icon: 'fa-solid fa-check-circle' },
    children: [
      {
        path: '/approval/pending',
        name: 'approval-pending',
        meta: { title: '待审批' },
        component: () => import('@/views/approval/pending/index.vue'),
      },
      {
        path: '/approval/approved',
        name: 'approval-approved',
        meta: { title: '已审批' },
        component: () => import('@/views/approval/approved/index.vue'),
      },
    ],
  },
  {
    path: '/ledger',
    name: 'ledger',
    meta: { title: '设备台账', icon: 'fa-solid fa-book' },
    component: () => import('@/views/ledger/index.vue'),
  },
  {
    path: '/inventory',
    name: 'inventory',
    meta: { title: '设备盘查', icon: 'fa-solid fa-search' },
    children: [
      {
        path: '/inventory/check',
        name: 'inventory-check',
        meta: { title: '设备盘点' },
        component: () => import('@/views/inventory/check/index.vue'),
      },
      {
        path: '/inventory/search',
        name: 'inventory-search',
        meta: { title: '设备查找' },
        component: () => import('@/views/inventory/search/index.vue'),
      },
    ],
  },
  {
    path: '/system',
    name: 'system',
    meta: { title: '系统管理', icon: 'fa-solid fa-cogs' },
    children: [
      {
        path: '/system/barcode',
        name: 'system-barcode',
        meta: { title: '条码管理' },
        component: () => import('@/views/system/barcode/index.vue'),
      },
      {
        path: '/system/device-types',
        name: 'system-device-types',
        meta: { title: '设备类别' },
        component: () => import('@/views/system/deviceTypes/index.vue'),
      },
      {
        path: '/system/numbering-rules',
        name: 'system-numbering-rules',
        meta: { title: '编号规则' },
        component: () => import('@/views/system/numberingRules/index.vue'),
      },
      {
        path: '/system/approval',
        name: 'system-approval',
        meta: { title: '审批设置' },
        component: () => import('@/views/system/approval/index.vue'),
      },
      {
        path: '/system/workflow',
        name: 'system-workflow',
        meta: { title: '流程审批设置' },
        component: () => import('@/views/system/workflow/index.vue'),
      },
      {
        path: '/system/menu',
        name: 'system-menu',
        meta: { title: '菜单管理' },
        component: () => import('@/views/system/menu/index.vue'),
      },
      {
        path: '/system/role',
        name: 'system-role',
        meta: { title: '角色管理' },
        component: () => import('@/views/system/role/index.vue'),
      },
      {
        path: '/system/security',
        name: 'system-security',
        meta: { title: '密级管理' },
        component: () => import('@/views/system/security/index.vue'),
      },
    ],
  },
]

export default routes
