export type DevicePageType = {
  id: string;
  name: string;
  code: string;
  charger: {
    id: string;
    name: string;
    title: string;
  };
  status: 0 | 1;
};
