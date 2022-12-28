import MockJs from "mockjs";
MockJs.setup({
  timeout: "600-1000",
});

const success = (data: unknown) => {
  return {
    data,
    success: true,
    errorCode: "",
    errorMessage: "",
  };
};
const Mock = {
  get: (url: RegExp | string, callback: (query: any) => any) => {
    MockJs.mock(url, "get", (params: any) => {
      const query = params.url
        .split("?")[1]
        ?.split("&")
        .reduce((acc: any, cur: string) => {
          const [key, value] = cur.split("=");
          acc[key] = value;
          return acc;
        }, {} as any);

      return success(callback(query));
    });
  },
  post: (url: RegExp | string, callback: (query: any) => any) => {
    MockJs.mock(url, "post", (params: any) => {
      const body = JSON.parse(params.body || "{}");
      return success(callback(body));
    });
  },
};

export default Mock;
