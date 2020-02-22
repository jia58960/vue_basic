<template>
  <div>
    <div>
      选择 区域码：
      <select name="areaCode" :value="phoneInfo.areaCode" @change="handleChangeArea">
        <option value="+086">+086</option>
        <option value="+083">+083</option>
      </select>
    </div>
    <div>
      输入手机号：
      <input type="text" :value="phoneInfo.phone" @input="handleChangePhone" />
      <p v-show="showMessage" style="color:red">{{ message }}</p>
    </div>
    <div>
      <label for>输入邮编：</label>
      <input type="text" :value="zipCode" @input="handleChangeZipcode" />
    </div>
  </div>
</template>
<script>
export default {
  name: "PersonalInfo",
  props: {
    phoneInfo: Object,
    zipCode: String,
    validate: Function,
    message: String
  },
  model: {
    prop: "phoneInfo",
    event: "change"
  },
  watch: {
    "phoneInfo.phone": function(phone) {
      console.log(this.validate(phone));
      this.showMessage = !this.validate(phone);
    }
  },
  data() {
    return {
      showMessage: false
    };
  },
  methods: {
    handleChangeArea(e) {
      this.$emit("change", {
        ...this.phoneInfo,
        areaCode: e.target.value
      });
    },
    handleChangePhone(e) {
      this.$emit("change", {
        ...this.phoneInfo,
        phone: e.target.value
      });
    },
    handleChangeZipcode(e) {
      this.$emit("update:zipCode", e.target.value);
    }
  }
};
</script>