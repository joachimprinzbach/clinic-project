<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6">
        <Card>
          <base-input
            v-model="fullname"
            label="ชื่อ-นามสกุล"
            type="text"
            placeholder="กรุณากรอกชื่อ-นามสกุล"
          ></base-input>
          <base-input
            v-model="tel"
            label="เบอร์โทร"
            type="tel"
            placeholder="กรุณากรอกเบอร์โทร"
          ></base-input>
          <base-input
            v-model="email"
            label="อีเมลล์"
            type="email"
            placeholder="กรุณากรอกอีเมลล์"
          ></base-input>
          <base-input
            v-model="password"
            label="พาสเวิร์ด"
            type="password"
            placeholder="กรุณากรอกพาสเวิร์ด"
          ></base-input>
          <base-input
            v-model="password_again"
            label="ยืนยันพาสเวิร์ด"
            type="password"
            placeholder="กรุณายืนยันพาสเวิร์ด"
          ></base-input>
          <base-button @click="create()" class="w-100 mt-4">สร้าง</base-button>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Select, Option } from "element-ui";
import { Card, BaseButton, ImageUpload } from "src/components";
export default {
  components: {
    Card,
    ImageUpload,
    [Select.name]: Select,
    [Option.name]: Option
  },
  data() {
    return {
      fullname: "",
      tel: "",
      email: "",
      password: ""
    };
  },
  methods: {
    create() {
      axios
        .post(process.env.VUE_APP_MAIN_API + "/api/user", {
          fullname: this.fullname,
          tel: this.tel,
          email: this.email,
          password: this.password,
          password_again: this.password_again
        })
        .then(response => {
          console.log(response.data);
        });
    }
  }
};
</script>
