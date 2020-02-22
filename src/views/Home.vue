<template>
  <div id="nav">
    <h3>vuex代码</h3>
    {{ count }}
    <button @click="$store.commit('increment')">count++</button>
    <!-- <button @click="$store.dispatch('incrementAction')">count++</button> -->
    <!-- {{ $store.getters.incrementDouble }} -->
    <template v-for="{ key, name } in list">
      <div :key="key" style="padding: 10px 0">
        <router-link :to="`/${key}`">{{ name }}章节</router-link>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  data() {
    return {
      list: [
        {
          key: "1.2",
          name: "单项数据流和它们的语法糖"
        },
        {
          key: "1.5",
          name: "computed与watch"
        },
        {
          key: "1.6",
          name: "观察vue的生命周期"
        },
        {
          key: "1.6_a",
          name: "设计一个秒杀组件"
        },
        {
          key: "question_1",
          name: "习题解答上"
        }
      ]
    };
  }
};
</script>

<style scoped>
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
