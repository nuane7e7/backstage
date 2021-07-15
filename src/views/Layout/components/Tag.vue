<template>
  <div class="tag">
    <div class="tag-list">
      <el-tag size="medium" class="tag-item" :effect="active === item.path ? 'dark':'plain'" v-for="item,i in tagList" :key="i" @click="$router.push(item.path)" :closable="i!==0" @close="log(i)">{{item.title}}</el-tag>
    </div>
    <div class="btn-menu">
      <el-dropdown @command="handleCommand">
        <el-button type="primary" size="mini">
          下拉菜单
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="a">关闭所有</el-dropdown-item>
            <el-dropdown-item command="b">关闭其他</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import { computed, watch } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
export default {
  name: "tag",
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const tagList = computed(() => store.getters["tagview/openTab"]);
    const active = computed(() => store.getters["tagview/activeIndex"]);
    const colseAll = () => {
       store.dispatch("tagview/close_all");
      if (route.path !== tagList.value[0].path) {
        router.push(tagList.value[0].path);
      }
    };
    const colseOther =() => {
      store.dispatch("tagview/close_other_tags",{title: route.meta.name, path: route.path });
    }
    const handleCommand = command => {
      switch (command) {
        case "a":
          colseAll();
          break;
        case "b":
          colseOther();
          break;
        default:
          break;
      }
    };
    const log = i => {
      if(tagList.value[i].path === active.value) {
        router.push(tagList.value[i-1].path);
      } 
      store.dispatch("tagview/delect_tags", i);
    };
    watch(
      () => route.path,
      val => {
        if (route.meta.keepAlive) {
          store.commit("tagview/SET_ACTIVE", val);
          store.dispatch("tagview/add_tags", { title: route.meta.name, path: val });
        }
      }
    );
    return {
      tagList,
      log,
      active,
      handleCommand
    };
  }
};
</script>
<style  lang="scss" scoped >
.tag {
  position: absolute;
  top: 150px;
  right: 0;
  background: #ccc;
  height: 40px;
  margin: 2px 0;
  padding-left: 5px;
  display: flex;
  justify-content: space-between;
  z-index: 10;
  .tag-list {
    display: flex;
    align-items: center;
  }
  .tag-item {
    margin-right: 5px;
    cursor: pointer;
  }
  .btn-menu {
    height: 40px;
    background-color: #fff;
    padding: 0 5px;
    line-height: 40px;
  }
}
.layout-wrap.open .tag {
  left: $openNav;
}
.layout-wrap.close .tag {
  left: $colseNav;
}
</style>