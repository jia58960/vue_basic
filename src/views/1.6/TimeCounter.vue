<template>
  <div>
    <b>时钟</b>
    <button @click="start =! start ">{{ start ? '暂停' : '开始'}}</button>
    <p>{{ currentTime | formatTime }}</p>
  </div>
</template>

<script>
export default {
  name: "TimeCounter",
  porps: {
    status: Boolean
  },
  data() {
    return {
      tid: null,
      start: false,
      currentTime: Date.now()
    };
  },
  watch: {
    start() {
      this.startClock();
    }
  },
  beforeCreate() {
    console.log("时钟组件beforeCreate");
  },
  created() {
    console.log("时钟组件created");
  },
  beforeMount() {
    console.log("时钟组件beforeMount");
  },
  mounted() {
    console.log("时钟组件mounted");
  },
  beforeUpdate() {
    console.log("时钟组件beforeUpdate");
  },
  updated() {
    console.log("时钟组件updated");
  },
  beforeDestroy() {
    clearInterval(this.tid);
    console.log("时钟组件beforeDestroy");
  },
  destroyed() {
    console.log("时钟组件destroyed");
  },
  methods: {
    startClock() {
      clearInterval(this.tid);
      if (this.start) {
        this.tid = setInterval(() => {
          this.currentTime = Date.now();
        }, 1000);
      }
    }
  },
  filters: {
    formatTime(time) {
      return new Date(time).toGMTString();
    }
  }
};
</script>

<style>
</style>