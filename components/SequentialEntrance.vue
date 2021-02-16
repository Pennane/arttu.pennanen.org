<script lang="ts">
import { VNode, VNodeData } from "vue/types";
import Vue from "vue";

interface OnceProps {
  storeTarget: string;
}

type SequentialProps = OnceProps | any;

export default Vue.extend({
  functional: true,
  render(
    createElement,
    {
      props,
      data,
      children,
      parent
    }: {
      props: SequentialProps;
      data: VNodeData;
      children: VNode[];
      parent: Vue;
    }
  ) {
    const animate = async (children: VNode[]): Promise<void> => {
      children.forEach((child, index) => {
        if (!child.data) return;
        child.data.staticStyle = {
          opacity: 0,
          animationFillMode: "forwards",
          animationDelay: index * 40 + "ms"
        };
        child.data.staticClass += " sequential";
      });
    };

    if (props.storeTarget) {
      const store = parent.$store;
      let animationRan = store.state.animations[props.storeTarget];
      if (!animationRan) {
        animate(children).then(() => {
          setTimeout(() => {
            store.commit("animations/" + props.storeTarget);
          }, 1000);
        });
      }
    } else {
      animate(children);
    }

    return createElement("span", children);
  }
});
</script>
