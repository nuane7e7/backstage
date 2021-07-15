<template>
  <div class="home">
    <div class="home-wrap">
      <ul class="conter">
        <li class="item" v-for="item in titles" :key="item">
          <a href="javascipt;">{{ item }}</a>
        </li>
      </ul>
    </div>
    <div>
      <el-button type="primary" @click="addPerson(`jerry`)">我是{{ count }}</el-button>
    </div>
    <div v-for="(item, i) in nameArr" :key="i" class="test">
      {{ item }}
    </div>
    <div class="row">
      <svg-icon iconName="jiantou" className="jiantou" @click="add(1)"></svg-icon>
      <svg-icon iconName="jiantou" className="jiantou rotate" @click="add(-1)"></svg-icon>
      <svg-icon iconName="boy" @click="login"></svg-icon>
    </div>
    <el-button type="primary" @click="changeValue">获取富文本内容</el-button>
    <!-- <Suspense>
      <template #default>
        <Modal />
      </template>
      <template #fallback>
        <h2>Lodding........</h2>
      </template>
    </Suspense> -->
    <ul class="flex">
      <li class="item" v-for="item in titles" :key="item">
        <h2>{{ item }}</h2>
      </li>
    </ul>
    <div class="message">
      <div class="top">
        <div class="userinfoRow">
          <img src="https://static-dj-img.aohuajc.com/download/media/thumb50_50/2020-10-10-1602286343387723.jpg" className="avatar" />
          <span>昵称</span>
        </div>
        <div class="time">2021-4-13 08:44</div>
      </div>
      <div class="messageContent" :title="count">
        哈哈哈哈哈77777777777777777777777777777777777777777777777777
      </div>
      <div class="bottom" @mouseenter="enter($event)" @mouseleave="leave($event)">
        <el-button >2条评论</el-button>
        <div class="ycmenu"  v-show="show"> 1111</div>
      </div>

    </div>
    <!-- <Editor idName="home" ref="myRef" @handle="changeValue" /> -->
    <Echarts echartsName="start" />
    <Editor idName="home-1" ref="myRef" />
  </div>
</template>

<script>
import {
  /**ref,*/ reactive,
  toRefs,
  watch,
  inject
  // onBeforeMount,
  // onMounted,
  // onBeforeUpdate,
  // onUpdated,
  // onBeforeUnmount
  // onRenderTracked,
  // onRenderTriggered
} from "vue";
// import { Login } from "@/api/login.js";
// import Modal from "cpt/Modal";
import Editor from "cpt/editor";
import Echarts from "cpt/echarts";
export default {
  name: "Home",
  components: { /**Modal,*/ Editor, Echarts },
  setup() {
    console.log(`创建组件`);

    const data = reactive({
      count: 1,
      state: true,
      nameArr: [],
      myRef: null,
      show: false,
      coll: inject("isCollapse"),
      html: null,
      titles: ["HTML", "CSS", "JS", "REACR", "VUE", "JSON", "AXIOS"],
      addPerson: value => (data.nameArr = [...data.nameArr, value]),
      add: value => (data.count += value),
      // setRef: (el) => {
      //   data.myRef = el;
      // },
      changeValue: () => {
        data.html = data.myRef.getHtml();
        console.log(data.html);
      },
      enter: () => {
        data.show = true;
      },
      leave: () => {
        data.show = false;
      },
      login: () => {
        // window.localStorage.setItem("token", "7777777777");
        // console.log(Login({ name: "admin", password: "123456" }));
      }
    });
    watch([() => data.count, () => data.nameArr], (newValue, oldvalue) => {
      console.log(newValue, oldvalue);
      data.myRef.setHtml("<div>222</div>");
      document.title = newValue + "Vue3.0";
      console.log(data.coll);
    });
    const refData = toRefs(data);
    // const count = ref(1);
    // const add = value => (count.value += value);
    // const login = () => {
    //   window.localStorage.setItem("token", "7777777777");
    //   console.log(Login({ name: "admin", password: "123456" }));
    // };
    // onBeforeMount(() => console.log(`组件挂载之前`));
    // onMounted(() => console.log(`组件挂载到页面之后`));
    // onBeforeUpdate(() => console.log(`组件组件更新之前`));
    // onUpdated(() => console.log(`组件组件更新之后`));
    // onBeforeUnmount(() => console.log(`组件组件卸载之前`));
    // onRenderTracked(e => (console.log(e), console.log("状态跟踪")));
    // onRenderTriggered(e => (console.log(e), console.log("状态跟踪")));
    return {
      // count,
      // add,
      // login
      ...refData
    };
  }
};
</script>
<style lang="scss" scoped>
.home {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: orange;
  .test {
    color: $red-f0;
  }
  .row {
    width: 80px;
    height: 80px;
    align-items: center;
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
  }
  .home-wrap {
    width: 800px;
    .conter {
      height: 40px;
      width: 100%;
      background: #eee;
      display: flex;
      justify-content: space-around;
      flex-direction: row;
      flex-wrap: wrap;
      .item {
        list-style: none;
        width: 80px;
        height: 100%;
        align-items: center;
        display: flex;
        justify-content: center;
        a {
          margin: 0 auto;
          align-items: center;
        }
      }
      .item:hover {
        background-color: rgba($color: #000000, $alpha: 0.4);
      }
    }
  }
  .flex {
    width: calc(100% / 4);
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 0 15px;
    // row| row-reverse | column | column-reverse
    .item {
      list-style: none;
      width: 90px;
      height: 40px;
      padding: 5px;
      h2 {
        text-align: center;
      }
    }
  }
}
.message {
  font-size: 12px;
  padding: 0 10px;

  .top {
    display: flex;
    justify-content: space-between;
    .userinfoRow {
      line-height: 20px;
      span {
        height: 20px;
        text-align: center;
      }
    }
  }
  .avatar {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 5px;
    margin-bottom: 0;
  }
  .messageContent,
  .bottom {
    padding-left: 24px;
    margin: 5px;
    word-wrap: break-word;
    word-break: normal;
    .ycmenu {
      float: left;
      position: absolute;
      left: 0;
      width: 1000px;
      height: 300px;
      background-color: skyblue;
      z-index: 200;
    }
  }
}
</style>
