<template>
  <div :class="[isCollapse ? 'close' : 'open', 'layout-wrap']">
    <Header>
      <template #left>
        <svg-icon iconName="menu" @click="handleClick"></svg-icon>
      </template>
      <template #right>
        <div @click="quitLog">
          333
        </div>
      </template>
    </Header>
    <Nav></Nav>
      <Tag ></Tag>
    <Main></Main>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed, provide } from "vue";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Tag from "./components/Tag";
export default {
  name: "layout",
  components: { Header, Nav, Main,Tag },
  setup() {
    const router = useRouter();
    const store = useStore();
    const handleClick = () => {
      store.commit("app/SET_ISCOLLAPSE");
    };
    const quitLog = () => {
      store.commit("login/SET_TOKEN");
      window.sessionStorage.removeItem("tags")
      router.replace("/login");
    };
    const log = () => {};
    const handleButtonClick = () => {};
    const handleMenuClick = () => {};
    const isCollapse = computed(() => store.getters["app/isCollapse"]);
    provide("isCollapse", isCollapse.value);
    return {
      isCollapse,
      handleClick,
      quitLog,
      log,
      handleButtonClick,
      handleMenuClick
    };
  }
};
</script>

<style lang="scss" scoped>
.layout-wrap {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  
}
</style>
