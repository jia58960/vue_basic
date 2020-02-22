<template>
  <div>
    <button :disabled="disabled" @click="handleClick">
      {{
      done?'已参加活动':'立即购买'}}
    </button>
    <p>{{ tip }}</p>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "Spike",
  props: {
    startTime: {
      required: true,
      validator: function(value) {
        // moment 类型
        return moment.isMoment(value);
      }
    },
    endTime: {
      required: true,
      validator: function(value) {
        // moment 类型
        return moment.isMoment(value);
      }
    }
  },
  data: () => {
    return {
      start: false,
      end: false,
      tip: "",
      timeGap: 0
    };
  },
  computed: {
    disabled() {
      return !(this.start && !this.end && !this.done);
    }
  },
  async created() {
    const serverTime = await this.getServerTime();
    this.timeGap = Date.now() - serverTime;
    this.updateState();
    this.timeInterval = setInterval(() => {
      this.updateState();
    }, 100);
  },
  beforeDestroy() {
    clearInterval(this.timeInterval);
  },
  updated() {
    if (this.end || this.done) {
      clearInterval(this.timeInterval);
    }
  },
  methods: {
    // 假设服务器时间比本地慢一分钟
    getServerTime() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(new Date(Date.now() - 60 * 1000).getTime());
        }, 200);
      });
    },
    updateState() {
      const now = moment(new Date(Date.now() - this.timeGap));
      const diffStart = this.startTime.diff(now);
      const diffEnd = this.endTime.diff(now);
      if (diffStart <= 0) {
        this.start = true;
        this.tip = "秒杀已开始";
      } else {
        this.tip = `距离秒杀开始还剩${Math.ceil(diffStart / 1000)}`;
      }
      if (diffEnd <= 0) {
        this.end = true;
        this.tip = "秒杀已结束";
      }
    },
    handleClick() {
      alert("提交成功");
      this.done = true;
    }
  }
};
</script>
