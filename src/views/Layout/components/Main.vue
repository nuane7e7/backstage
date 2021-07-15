<template>
  <div class="main-warp">
    <router-view v-if="route.meta.keepAlive" v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <router-view v-if="!route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  name: "layoutmain",
  setup() {
    //  const router = useRouter();
    const route = useRoute();

    return {
      route
    };
  }
};
</script>

<style lang="scss" scoped>
.main-warp {
  position: absolute;
  top: 190px;
  right: 0;
  bottom: 0;
  background-color: #fff;
  overflow: auto;
  padding: 10px 0 0 10px;
  transition: left $anTime;
}
.open .main-warp {
  left: $openNav;
}
.close .main-warp {
  left: $colseNav;
}
</style>
