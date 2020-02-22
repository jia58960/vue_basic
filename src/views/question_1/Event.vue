<template>
  <div>
    name: {{ name || "--"}}
    <br />
    <input type="text" :value="name" @change="handleChange" />
    <br />
    <br />
    <div @click="handleDivClick">
      <button @click="handleClick">重置成功</button>
      <button @click.stop="handleClick">重置失败</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventDemo",
  props: {
    name: String
  },
  methods: {
    handleChange(e) {
      const res = this.$emit("change", e.target.value, val => {
        console.log(val);
      });
      console.log(res, res === this); // $emit返回的是this
    },
    handleDivClick() {
      this.$emit("change", "");
    },
    // 验证事件冒泡
    handleClick() {
      // 都会失败
      // e.stopPropagation();
    }
  }
};
</script>

<style>
</style>