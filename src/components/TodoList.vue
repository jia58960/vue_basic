<template>
  <li class="color">
    <input type="checkbox" v-model="checked"> 
    <slot :checked="checked"></slot>
  </li>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    item: String
  },
  data(){
    return {
      checked: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.color {
  color:red;
  list-style:decimal;
}
</style>
