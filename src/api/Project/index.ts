import picture from "@/assets/images/demo.webp";

export const getProjectList = () => {
  const data = new Array(10).fill(0).map((item, index) => ({
    id: index + 1,
    code: "#" + index,
    name: "项目" + index,
    address: "福建省福州市鼓楼区",
    picture: picture,
    type: "土木工程",
    organization: "某机构",
    principal: {
      id: index,
      name: "张三",
      title: "总经理",
    },
    department: "某部门",
    createTime: "2022/01/01 00:00:00",
    status: 1,
    geojson: {
      type: "Feature",
      properties: {
        style: {
          color: "#2852f5",
          lineCap: "round",
          weight: 2,
          lineJoin: "round",
        },
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [119.805307, 26.328422],
            [119.805307, 26.346499],
            [119.827538, 26.346499],
            [119.827538, 26.328422],
            [119.805307, 26.328422],
          ],
        ],
      },
    },
  }));
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        data,
        current: 1,
        size: 5,
        total: 20,
      });
    }, 1000)
  );
};

export const getProjectDetail = (id: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        code: "#" + 1,
        name: "项目" + 1,
        address: "福建省福州市鼓楼区",
        picture: picture,
        type: "土木工程",
        organization: "某机构",
        principal: {
          id: 1,
          name: "张三",
          title: "总经理",
        },
        department: "某部门",
        createTime: "2022/01/01 00:00:00",
        status: 1,
        geojson: {
          type: "Feature",
          properties: {
            style: {
              color: "#2852f5",
              lineCap: "round",
              weight: 2,
              lineJoin: "round",
            },
          },
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [119.805307, 26.328422],
                [119.805307, 26.346499],
                [119.827538, 26.346499],
                [119.827538, 26.328422],
                [119.805307, 26.328422],
              ],
            ],
          },
        },
      });
    }, 1000);
  });
};

export const deleteProject = (id: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
};

export const updateProject = (data: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
};

export const addProject = (data: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
};

export const getProjectPrincipalList = () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        data: [
          {
            id: 1,
            type: "单位责任人",
            principalName: "张三",
            principalId: 1,
            department: "北京市海淀区中关村科技园",
            contact: "123456789",
            email: "fengtianxi001@example.com",
            title: "总经理",
            address: "北京市海淀区中关村科技园",
          },
          {
            id: 2,
            type: "部门责任人",
            principalName: "李四",
            principalId: 2,
            department: "北京市海淀区中关村科技园",
            contact: "123456789",
            email: "fengtianxi001@example.com",
            title: "总经理",
            address: "北京市海淀区中关村科技园",
          },
          {
            id: 3,
            type: "行政责任人",
            principalName: "王五",
            principalId: 3,
            department: "北京市海淀区中关村科技园",
            contact: "123456789",
            email: "fengtianxi001@example.com",
            title: "总经理",
            address: "北京市海淀区中关村科技园",
          },
          {
            id: 4,
            type: "技术责任人",
            principalName: "李六",
            principalId: 4,
            department: "北京市海淀区中关村科技园",
            contact: "123456789",
            email: "fengtianxi001@example.com",
            title: "总经理",
            address: "北京市海淀区中关村科技园",
          },
          {
            id: 5,
            type: "巡查责任人",
            principalName: "赵七",
            principalId: 5,
            department: "北京市海淀区中关村科技园",
            contact: "123456789",
            email: "fengtianxi001@example.com",
            title: "总经理",
            address: "北京市海淀区中关村科技园",
          },
          {
            id: 6,
            type: "研发责任人",
            principalName: "钱八",
            principalId: 6,
            department: "北京市海淀区中关村科技园",
            contact: "123456789",
            email: "fengtianxi001@example.com",
            title: "总经理",
            address: "北京市海淀区中关村科技园",
          },
        ],
        current: 1,
        size: 5,
        total: 20,
      });
    }, 1000)
  );
};

export const saveProjectPrincipal = (data: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
};

export const getProjectFeature = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        level: 1,
        size: 1,
        industry: 1,
        type: 1,
        status: 1,
        area: 1000,
        startDate: "2022/01/01",
        endDate: "2022/01/01",
        department: 1,
        structure: 1,
        price: 1000,
        baseType: 1,
        baseHeight: 100,
        monitorType: 0,
        certification: 0,
        maintOutlay: 1000,
        seismicGrade: 10,
      });
    }, 1000);
  });
};
