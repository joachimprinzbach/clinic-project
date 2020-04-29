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
          <base-button @click="edit()" class="w-100 mt-4">แก้ไข</base-button>
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
  mounted() {
    this.getTypeInfo();
  },
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
    edit() {
      axios
        .put(
          process.env.VUE_APP_MAIN_API + "/api/type/" + this.$route.params.id,
          {
            name: this.name,
            sort: this.sort
          }
        )
        .then(response => {
          this.$router.push("/setting");
        });
    },
    getTypeInfo() {
      axios
        .get(
          process.env.VUE_APP_MAIN_API + "/api/type/" + this.$route.params.id
        )
        .then(response => {
          this.name = response.data.data.name;
          this.sort = response.data.data.sort;
        });
    }
  }
};
</script>
