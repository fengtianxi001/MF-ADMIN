import {
  type Component,
  type ComputedOptions,
  createVNode,
  type MethodOptions,
  render,
} from "vue";

export class Utils {
  //将数字转化为px
  static numberToPx(num: number) {
    return `${num}px`;
  }
  //通过className获取dom[]
  static getElementsByClassName(className: string) {
    const result = document.getElementsByClassName(className);
    return Array.from(result);
  }
  //渲染vue组件
  static renderComponent(
    component: Component<any, any, any, ComputedOptions, MethodOptions>,
    props: any
  ) {
    const container = document.createElement("div");
    const instance = createVNode(component, props);
    render(instance, container);
    return instance;
  }
}
