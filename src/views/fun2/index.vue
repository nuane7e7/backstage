<template>
  <div>
    <comJsx is="卧槽..." />
       <transition enter-active-class="fadeInUp animated faster"
      leave-active-class="fadeOutDown animated faster"
    >
        11111
    </transition>
  </div>
</template>

<script>
import comJsx from "cpt/comJsx/index.jsx";
export default {
  name:"total",
  components:{comJsx},
  setup() {

    return {
      // options,
      // value
    }
  }
}
</script>

<style>

</style>