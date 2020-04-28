<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6">
        <Card>
          <base-input
            v-model="name"
            label="ชื่อสัตว์เลี้ยง"
            type="text"
            placeholder="กรุณากรอกชื่อสัตว์เลี้ยง"
          ></base-input>
          <base-input
            v-model="sort"
            label="ลำดับ"
            type="number"
            placeholder="กรุณาใส่ลำดับ"
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
import { Card, BaseButton } from "src/components";
export default {
  components: {
    Card,
    [Select.name]: Select,
    [Option.name]: Option
  },
  data() {
    return {
      name: "",
      sort: ""
    };
  },
  methods: {
    create() {
      axios
        .post(process.env.VUE_APP_MAIN_API + "/api/type", {
          name: this.name,
          sort: this.sort
        })
        .then(response => {
          console.log(response.data);
        });
    }
  }
};
</script>
