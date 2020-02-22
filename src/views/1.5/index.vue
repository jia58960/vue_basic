<template>
  <div>
    <a-tabs>
      <h3>
        计算属性
        <Computed />
      </h3>
      <h3>
        侦听器
        <Watch />
      </h3>
      <h3>
        计算属性 vs 侦听器
        <Computed1 />
        <br />
        <Watch1 />
      </h3>
      <h3>
        防抖版
        <WatchPro />
      </h3>
    </a-tabs>
  </div>
</template>
<script>
import Computed from "./Computed";
import Computed1 from "./Computed1";
import Watch from "./Watch";
import Watch1 from "./Watch1";
import WatchPro from "./Watch1_pro";
export default {
  components: {
    Computed,
    Computed1,
    Watch,
    Watch1,
    WatchPro
  }
};
</script>
