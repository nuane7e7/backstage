<template>
  <div class="nav-warp">
    <div class="nav-title">
      <h1 v-show="!collapsed">xxxx 系统</h1>
    </div>
    <el-menu :uniqueOpened="true" :default-active="activeMenu" :default-openeds="[navArr[0].name]" class="el-menu-vertical-demo" router background-color="#001529" text-color="#fff" active-text-color="##409eff"
      :collapse="collapsed">
      <el-submenu v-for="items in navArr" :key="items.name" :index="items.name">
        <template #title>
          <i class="el-icon-location"></i>
          <span>{{items.title}}</span>
        </template>
        <el-menu-item v-for="item in items.child" :key="item.name" :index="item.name">{{item.title}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, reactive, toRefs } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "layoutnav",
  setup() {
    const store = useStore();
    const route = useRoute();
    const collapsed = computed(() => store.getters["app/isCollapse"]);
   const  activeMenu =computed(()=> {
            const { path } = route;
          // let  newPath = path.substring(1,path.length);
            return path;
        })
    const titleClick = e => {
      console.log(e);
      // console.log(router.push({ name: e.key }));
    };
    const data = reactive({
      navArr: [
        {
          iconName: "minus",
          title: "主页",
          name: "/",
          child: [
            {
              name: "/home",
              title: "主控台"
            }
          ]
        },
        {
          iconName: "plus",
          title: "大类1",
          name: "p1",
          child: [
            {
              name: "/totaltable",
              title: "功能1"
            },
            {
              name: "/fun1",
              title: "功能2"
            }
          ]
        },
        {
          iconName: "plus",
          title: "大类2",
          name: "p2",
          child: [
            {
              name: "/fun2",
              title: "功能3"
            }
          ]
        }
      ]
    });
    return {
      collapsed,
      titleClick,
      activeMenu,
      ...toRefs(data)
    };
  }
};
</script>

<style lang="scss" >
.nav-warp {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: #001529;
  transition: background $anTime, width $anTime cubic-bezier(0.2, 0, 0, 1) 0s;
  .nav-title {
    line-height: 60px;
    height: 60px;
    h1 {
      color: #fff;
      text-align: center;
    }
  }
  .el-menu {
    border-right: 0;
    .el-menu-item.is-active {
      background-color: #409eff !important;
      color: #fff;
    }
  }
}
.open .nav-warp {
  width: $openNav;
}
.close .nav-warp {
  width: $colseNav;
}
</style>
