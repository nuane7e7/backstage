<template>
  <div class="header-warp">
    <slot name="left"></slot>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default { name: "layoutheader", setup() {} };
</script>

<style lang="scss" scoped>
.header-warp {
  position: absolute;
  top: 0;
  height: 150px;
  right: 0;
  background: slategray;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  transition: left $anTime;
}
.open .header-warp {
  left: $openNav;
}
.close .header-warp {
  left: $colseNav;
}
</style>
