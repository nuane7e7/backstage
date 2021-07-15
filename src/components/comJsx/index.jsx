import { defineComponent, ref, computed, onMounted, onBeforeUnmount } from "vue";
// import { useRoute } from "vue-router";

export default defineComponent({
  props: {
    is: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const count = ref(0);
    const timed = ref(`0000年00月00日00时00分00秒`);
    const timing = ref(null);
    const loading = ref(false);
    const is = computed(() => `Jsx-${props.is}`);
    const inc = () => {
      loading.value =true
      setTimeout(() => {
        loading.value =false
        count.value++;
      },500 );
     
    };
    const getTime = () => {
      let date = new Date(),
       y = date.getFullYear(),
       mon = date.getMonth() + 1,
       d = date.getDate(),
       h = date.getHours(),
       min = date.getMinutes(),
      s = date.getSeconds();
      timed.value = `${y}年${timeFormat(mon)}月${timeFormat(d)}日${timeFormat(h)}时${timeFormat(min)}分${timeFormat(s)}秒`
    };
    onMounted(() => timedTask());
    const timedTask = () => {
      timing.value = setInterval(() => {
        getTime()
      }, 1000);
    }
    const clearIn = () => {
      console.log(`定时器清除了`)
      clearInterval(timing.value)
      timing.value = null
    }
    onBeforeUnmount(() => {
      clearIn()
    })
    const timeFormat = (num) => {
      return num > 10 ? num : `0${num}`
    }
    return () => (
      <div>
        <p>{timed.value}</p>
        <el-button onClick={() => inc()} type="primary" loading={loading.value}>{count.value + is.value}</el-button>
      </div>

    );
  },
});