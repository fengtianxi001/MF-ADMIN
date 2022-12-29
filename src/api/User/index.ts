export const getUserList = () => {
  return new Promise((resolve) => {
    resolve([
      {
        id: 1,
        name: "张三",
        department: "北京市海淀区中关村科技园",
        contact: "123456789",
        email: "",
        title: "总经理",
      },
      {
        id: 2,
        name: "李四",
        department: "北京市海淀区中关村科技园",
        contact: "123456789",
        email: "",
        title: "总经理",
      },
      {
        id: 3,
        name: "王五",

        department: "北京市海淀区中关村科技园",
        contact: "123456789",
        email: "",
        title: "总经理",
      },
      {
        id: 4,
        name: "李六",
        department: "北京市海淀区中关村科技园",
        contact: "123456789",
        email: "",
        title: "总经理",
      },
      {
        id: 5,
        name: "赵七",
        department: "北京市海淀区中关村科技园",
        contact: "123456789",
        email: "",
        title: "总经理",
      },
    ]);
  });
};
