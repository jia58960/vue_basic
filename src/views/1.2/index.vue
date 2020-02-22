<template>
  <div>
    <h1>{{ msg }}</h1>
    <personal-info
      v-model="phoneInfo"
      :validate="validatePhone"
      message="手机号为空或不合法"
      :zipCode.sync="zipCode"
    ></personal-info>

    <personal-info
      v-model="phoneInfo"
      :validate="validatePhone"
      message="手机号为空或不合法"
      @change="val => (phoneInfo = val)"
      :zipCode="zipCode"
      @update:zipCode="val => (zipCode = val)"
    ></personal-info>

    <h3>手机信息: {{ phoneInfo }}</h3>
    <h4>邮编: {{ zipCode }}</h4>
  </div>
</template>
<script>
import PersonalInfo from "./PersonalInfo";
export default {
  name: "Singloen",
  components: {
    PersonalInfo
  },
  data() {
    return {
      msg: "Just do it!",
      phoneInfo: {
        phone: "",
        areaCode: 123
      },
      zipCode: "123"
    };
  },
  methods: {
    validatePhone(phone = "") {
      return phone && /^1[0-9]{10}$/.test(phone);
    }
  }
};
</script>