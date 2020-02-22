<template>
  <div>
    <p>习题1：</p>
    <Proxy :info="info" @change="handleProxyChange"></Proxy>

    <p>习题2：</p>
    <Event :name="name" @change="handleEventChange"></Event>

    <p>习题3：</p>
    <h3>2.6新语法</h3>
    <slot-demo>
      <p>
        <b>普通插槽</b>
      </p>
      <template v-slot:title>
        <p>title slot</p>
      </template>
      <template v-slot:title>
        <p>new title slot</p>
      </template>
      <p>
        <b>作用域插槽</b>
      </p>
      <template v-slot:item="props">
        <p>item slot-scope {{ props}}</p>
      </template>
      <template v-slot:item="props">
        <p>new item slot-scope {{ props}}</p>
      </template>
    </slot-demo>
    <br />
    <h3>老语法</h3>
    <slot-demo>
      <p>
        <b>普通插槽</b>
      </p>
      <p slot="title">title slot2</p>
      <p slot="title">new title slot2</p>

      <p slot="title" slot-scope="props">item slot-scope {{ props }}</p>
      <p slot="title" slot-scope="props">new title slot-scope {{ props }}</p>
    </slot-demo>
  </div>
</template>

<script>
import Event from "./Event";
import Proxy from "./Proxy.vue";
import SlotDemo from "./SlotDemo";
export default {
  components: {
    Event,
    SlotDemo,
    Proxy
  },
  data: () => {
    return {
      name: "",
      type: "success",
      info: {}
    };
  },
  mounted() {
    window.info1 = this.info;
  },
  methods: {
    handleProxyChange(val) {
      window.isUpdatingChildComponent = true;
      this.info.name = val;
      // this.info = { name: val};
    },
    handleEventChange(val, callback) {
      this.name = val;
      callback && callback("hello1111");
      return "hello";
    }
  }
};
</script>

<style>
</style>