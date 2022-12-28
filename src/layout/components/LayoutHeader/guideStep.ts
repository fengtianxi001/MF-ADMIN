const guideStep = [
  {
    element: ".header-operate",
    popover: {
      title: "系统操作",
      description: "从左到右依次为:主题切换、全屏、截面引导和用户信息",
      position: "bottom-right",
    },
  },
  {
    element: ".header-brand",
    popover: {
      title: "系统信息",
      description: "系统logo和系统名称,点击可以回到首页",
      position: "bottom-left",
    },
  },
  {
    element: ".arco-menu",
    popover: {
      title: "系统菜单",
      description: "系统菜单, 点击相应菜单可以跳转到对应的功能模块",
      position: "right",
    },
  },
  {
    element: ".arco-menu-collapse-button",
    popover: {
      title: "系统菜单操作",
      description: "点击按钮可以收缩或展开菜单",
      position: "top",
    },
  },
  {
    element: ".layout-main-tabs",
    popover: {
      title: "系统标签栏",
      description:
        "这里保存了用户打开过的页面信息,直接点击可以切换页面,右击展开更多操作",
      position: "bottom",
    },
  },
];

export default guideStep;
