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
