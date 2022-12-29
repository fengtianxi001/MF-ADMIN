export type {
  LocationStaffListType,
  LocationFenceListType,
  LocationCarListType,
} from "./types";

export const locationStaffList = () => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          {
            name: "张三",
            title: "主任医师",
            department: "肛肠科",
            status: 1,
            coordinates: [26.3699, 119.837],
          },
          {
            name: "李四",
            title: "副主任医师",
            department: "生殖内科",
            status: 1,
            coordinates: [26.3562, 119.8057],
          },
          {
            name: "王五",
            title: "副主任医师",
            department: "泌尿科",
            status: 0,
            coordinates: [26.3477, 119.8366],
          },
          {
            name: "赵六",
            title: "副主任医师",
            department: "泌尿科",
            status: 0,
            coordinates: [26.3451, 119.8258],
          },
          {
            name: "孙七",
            title: "副主任医师",
            department: "泌尿科",
            status: 0,
            coordinates: [26.3485, 119.8541],
          },
          {
            name: "周八",
            title: "副主任医师",
            department: "泌尿科",
            status: 0,
            coordinates: [26.3599, 119.8325],
          },
        ]),
      1000
    );
  });
};

export const locationCarList = () => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          {
            name: "京A-00001",
            department: "肛肠科",
            status: 1,
            coordinates: [26.3614, 119.7891],
          },
          {
            name: "京A-00002",
            department: "生殖内科",
            status: 1,
            coordinates: [26.3856, 119.8109],
          },
          {
            name: "京A-00003",
            department: "泌尿科",
            status: 0,
            coordinates: [26.3688, 119.8217],
          },
          {
            name: "京A-00004",
            department: "泌尿科",
            status: 0,
            coordinates: [26.3499, 119.8135],
          },
          {
            name: "京A-00005",
            department: "泌尿科",
            status: 0,
            coordinates: [26.3465, 119.8406],
          },
          {
            name: "京A-00007",
            department: "泌尿科",
            status: 0,
            coordinates: [26.3754, 119.8504],
          },
        ]),
      1000
    );
  });
};

export const locationFenceList = () => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          {
            name: "围栏一",
            mode: 1,
            status: 1,
            buffer: 5,
            color: "#2852f5",
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
          },
          {
            name: "围栏二",
            mode: 1,
            status: 1,
            buffer: 10,
            color: "#e59d37",
            geojson: {
              type: "Feature",
              properties: {
                style: {
                  color: "#e59d37",
                  lineCap: "round",
                  weight: 2,
                  lineJoin: "round",
                },
              },
              geometry: {
                type: "Polygon",
                coordinates: [
                  [
                    [119.808741, 26.354805],
                    [119.808741, 26.372801],
                    [119.832602, 26.372801],
                    [119.832602, 26.354805],
                    [119.808741, 26.354805],
                  ],
                ],
              },
            },
          },
        ]),
      1000
    );
  });
};
