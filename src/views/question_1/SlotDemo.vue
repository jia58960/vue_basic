<template>
  <div>
    <slot name="title"></slot>
    <slot name="item" :props="name2"></slot>
    <slot name="title" :props="name"></slot>
  </div>
</template>

<script>
export default {
  name: "SlotDemo",
  data: () => {
    return {
      name: "abc",
      name2: "abcd"
    };
  }
};
</script>

<style>
</style>