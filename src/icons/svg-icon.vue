<template>
  <svg :class="classname" aria-hidden="true">
    <use :xlink:href="iconname" />
  </svg>
</template>

<script>
import { computed } from "vue";
export default {
  name: "svg-icon",
  props: {
    iconName: {
      type: String,
      default: "info",
      required: true
    },
    className: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    const iconname = computed(() => `#icon-${props.iconName}`);
    const classname = computed(() => {
      if (props.className) {
        return `svg-icon ${props.className}`;
      } else {
        return `svg-icon`;
      }
    });
    return {
      iconname,
      classname
    };
  }
};
</script>
<style lang="scss" scoped>
.svg-icon {
  width: 40px;
  height: 40px;
  fill: currentColor;
  font-size: 17px;
  margin-bottom: 5px;
  color: skyblue;
  &.rotate {
    transform: rotate(180deg);
  }
}
</style>
