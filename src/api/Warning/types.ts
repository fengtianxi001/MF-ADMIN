export type WarningPageType = {
  id: string;
  number: string;
  device: string;
  level: 1 | 2 | 3 | 4;
  code: string;
  content: string;
  createTime: string;
  status: 0 | 1;
};
