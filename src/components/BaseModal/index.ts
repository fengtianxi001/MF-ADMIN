import {
  createVNode,
  render,
  type Component,
  type ComputedOptions,
  type MethodOptions,
} from "vue";

function Modal(
  component: Component<any, any, any, ComputedOptions, MethodOptions>,
  props: any = {}
) {
  return new Promise((resolve, reject) => {
    const container = document.createElement("span");
    const instance = createVNode(component, { ...props, resolve, reject });
    render(instance, container);
    document.body.appendChild(instance.el as HTMLElement);
  });
}

export default Modal;
