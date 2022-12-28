export type FilePageType = {
  id: string;
  name: string;
  type: string;
  author: {
    id: string;
    name: string;
    title: string;
  };
  size: string;
  mark: string;
  createTime: string;
};
