<template>
  <div>
    {{ fullName }}
    <div>
      firstName:
      <input v-model="firstName" />
    </div>
    <div>
      lastName:
      <input v-model="lastName" />
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      firstName: "Foo",
      lastName: "Bar",
      fullName: "Foo Bar",
      tid: 0
    };
  },
  watch: {
    firstName: function(val) {
      console.log("让你动");
      clearTimeout(this.tid);
      this.tid = setTimeout(() => {
        this.fullName = val + " " + this.lastName;
      }, 500);
    },
    lastName: function(val) {
      this.fullName = this.firstName + " " + val;
    }
  }
};
</script>
