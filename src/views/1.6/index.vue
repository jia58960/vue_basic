<template>
  <div>
    <h2>打开console控制台，观察vue生命周期变化</h2>
    <button @click="show = !show">{{ show ? '销毁' : '创建'}}时钟</button>
    <time-counter v-if="show"></time-counter>
  </div>
</template>
<script>
import TimeCounter from "./TimeCounter";
export default {
  name: "LifeCycle",
  components: {
    TimeCounter
  },
  data() {
    return {
      show: true
    };
  }
};
</script>