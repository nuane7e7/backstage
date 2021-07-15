<template>
  <div :id="editorId"></div>
</template>
<script>
import { computed, reactive, onMounted } from "vue";
import createE from "./config";
export default {
  props: {
    idName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const data = reactive({
      editor: ""
    });

    const editorId = computed(() => `editor-${props.idName}`);
    const createEd = () => {
      data.editor = createE(`#${editorId.value}`);
      data.editor.create();
    };
    //将内容写入编辑器
    const setHtml = txt => {
      data.editor.txt.html(txt);
    };
    //父组件获取内容
    const getHtml = () => {
      return data.editor.txt.html();
    };
    onMounted(() => createEd());
    return {
      editorId,
      setHtml,
      getHtml
    };
  }
};
</script>
