<template>
  <div class="container-fluid" style="top:30%; position: absolute;">
    <div class="col-md-6 ml-auto mr-auto">
      <form @submit.prevent="login">
        <card>
          <h1>เข้าสู่ระบบ</h1>
          <base-input label="อีเมลล์" type="email" placeholder="กรุณากรอกอีเมลล์"></base-input>
          <base-input label="พาสเวิร์ด" type="password" placeholder="กรุณากรอกพาสเวิร์ด"></base-input>
          <router-link to="/">
            <base-button type="primary w-100">ลงชื่อเข้าใช้</base-button>
          </router-link>
        </card>
      </form>
    </div>
  </div>
</template>
<script>
import { BaseButton } from "src/components";
export default {
  components: {
    BaseButton
  },
  data() {
    return {
      model: {
        email: "",
        password: "",
        subscribe: true
      }
    };
  },
  methods: {
    getError(fieldName) {
      return this.errors.first(fieldName);
    },
    async login() {
      let isValidForm = await this.$validator.validateAll();
      if (isValidForm) {
        // TIP use this.model to send it to api and perform login call
      }
    }
  }
};
</script>
<style>
.navbar-nav .nav-item p {
  line-height: inherit;
  margin-left: 5px;
}
</style>
