<template>
  <div class="login-mian">
    <div class="site">
      <div class="login">
        <el-form ref="form" label-width="70px" label-position="center">
          <el-form-item class="login-item" label="账号：">
            <el-input v-model="log.uname"  placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item class="login-item" label="密码：">
            <el-input v-model="log.pwd" type="password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item class="login-item">
            <el-button type="primary" class="login-btn" :loading="loading" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>

</template>

<script>
import { reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "login",
  setup() {
    const store = useStore();
    const router = useRouter();
    const data = reactive({
      log: {
        uname: "admin",
        pwd: "123456",
      },
      loading:false,
      login: () => {
        data.loading = true
        if (data.log.uname === "admin" && data.log.pwd === "123456") {
          let token = "asdsadadasdasdasdas";
          store.commit("login/SET_TOKEN", token);
          router.replace({ name: "home" });
        } else {
          alert("111");
        }
        data.loading = false
      }
    });
    return {
      ...toRefs(data)
    };
  }
};
</script>

<style lang="scss" >
.login-mian {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: cornflowerblue;
  .site {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    transform: translate(-50%, -50%);
    background: rgba($color: #3333, $alpha: 0.7);
    border-radius: 10px;
    .login {
      padding: 20px;
      margin: 0 auto;
      .login-item {
        padding: 20px 0;
        .el-form-item__label {
          color: #fff  !important;
        }
        .login-btn{
          width: 230px;
        }
      }
      .el-form-item{
            margin-bottom: 0;
      }
    }
  }
}
</style>