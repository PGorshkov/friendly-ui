import { defineComponent, h } from "vue";
var style = "";
var FuButton = defineComponent({
  name: "FuButton",
  props: {
    type: {
      type: String,
      default: "primary",
      required: true
    },
    size: {
      type: String,
      default: "md",
      required: true
    },
    disabled: {
      type: Boolean
    }
  },
  setup(props) {
    return () => h("button", {
      class: [
        "FuButton",
        props.type,
        props.size
      ],
      disabled: props.disabled
    }, "asdasda");
  }
});
var components = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  FuButton
});
var main = "";
const MAGIC_NUM = 100;
var MyConstants = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  MAGIC_NUM
});
function add(a, b) {
  return a + b;
}
var MyUtil = {
  add
};
function install(app) {
  for (const key in components) {
    app.component(key, components[key]);
  }
}
var index = { install };
export { FuButton, MyConstants, MyUtil, index as default };
