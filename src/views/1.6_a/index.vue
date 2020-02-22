<template>
  <div>
    <Spike :start-time="startTime" :end-time="endTime"></Spike>
  </div>
</template>

<script>
import moment from "moment";
import Spike from "./Spike";
export default {
  components: {
    Spike
  },
  data() {
    return {
      startTime: moment("2020-02-22 09:23:00"),
      endTime: moment("2020-02-22 09:25:00")
    };
  }
};
</script>

<style>
</style>