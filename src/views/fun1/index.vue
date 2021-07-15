<template>
  <div v-demo="{ color: 'white', text: 'hello!' }">
    <el-select v-model="selected" filterable remote reserve-keyword placeholder="请输入关键词" size="mini" :remote-method="remoteMethod" v-loadmore="loadMore">
      <el-option v-for="option in options" :label="option.label" :value="option.value" :key="option.value"></el-option>
    </el-select>
  </div>
</template>

<script>
import { /**ref,*/ reactive, toRefs } from "vue";
export default {
  name: "total",
  setup() {
    const data = reactive({
      selected: "",
       form: {
          page: 1,
          per_page: 20,
          noMore: false,
          like_word: ''
        },
      options: [],
      list: [
        { label: "1", value: 1 },
        { label: "2", value: 2 },
        { label: "3", value: 3 },
        { label: "4", value: 4 },
        { label: "5", value: 5 },
        { label: "6", value: 6 },
        { label: "7", value: 7 },
        { label: "8", value: 8 },
        { label: "9", value: 9 },
        { label: "10", value: 10 }
      ],
      remoteMethod: query => {
        data.form.like_word = query;
          data.form.noMore = false
          data.options = []
          data.form.page = 1;
          data.getList()
      },
      getList:()=> {
             console.log('111');
          if (data.form.noMore) return;
           if (data.form.like_word !== "") {
          setTimeout(() => {
             let list= data.list.filter(item => {
              return item.label.indexOf(data.form.like_word) > -1 && item.value> (data.form.page-1)*data.form.per_page;
            });
            data.options.push(...list)
            let length =data.list.length
            let arr = []
            for (let i = 1; i < data.form.per_page+1; i++){
              arr.push({ label: `${length+i}`, value: length+i })
            }
            data.list= [...data.list,...arr] 
          }, 0);
          console.log(data.list)
        } else {
          data.form.noMore = true;
          data.options = [];
        }

      },
      loadMore:() => {
            data.form.page++
            data.getList()
      }
    });
    return {
      ...toRefs(data)
    };
  }
};
</script>

<style>
</style>