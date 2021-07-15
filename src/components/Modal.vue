<template>
  <teleport to="#modal">
    <div id="center">
      <h2>{{ result }}</h2>
      <img class="image" :src="imgurl && imgurl !== '' ? imgurl : ''" alt="" />
    </div>
  </teleport>
</template>
<script>
import { ref } from "vue";
export default {
  async setup() {
    const imgurl = ref("");
    setTimeout(() => {
      imgurl.value =
        "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg";
    }, 2000);

    const result = ref("哈哈哈");
    return {
      result,
      imgurl
    };
  }
};
</script>
<style lang="scss" scoped>
#center {
  // z-index: 10;
  width: 200px;
  height: 200px;
  border: 2px solid #000;
  background-color: #eee;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .image {
    width: 100%;
  }
}
</style>
