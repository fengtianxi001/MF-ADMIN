export interface LocationCarListType {
  name: string;
  department: string;
  status: 0 | 1;
  coordinates: [number, number];
}

export interface LocationStaffListType {
  name: string;
  title: string;
  department: string;
  status: 0 | 1;
  coordinates: [number, number];
}

export interface LocationFenceListType {
  name: string;
  mode: number;
  status: number;
  buffer: number;
  color: string;
  geojson: {
    type: string;
    properties: {
      style: {
        color: string;
        lineCap: string;
        weight: number;
        lineJoin: string;
      };
    };
    geometry: {
      type: string;
      coordinates: Array<any>;
    };
  };
}
