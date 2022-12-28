export interface BreakdownPageType {
  id: string;
  theme: string;
  order: string;
  sender: {
    id: string;
    name: string;
    title: string;
  };
  node: string;
  createTime: string;
}
