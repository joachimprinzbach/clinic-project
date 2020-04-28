<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6">
        <Card>
          <base-input
            label="ชื่อสัตว์เลี้ยง"
            type="text"
            placeholder="กรุณากรอกชื่อสัตว์เลี้ยง"
            v-model="name"
          ></base-input>
          <label>ประเภทสัตว์เลี้ยง</label>
          <br />
          <el-select
            class="select-danger w-100"
            placeholder="กรุณาเลือกชนิดสัตว์เลี้ยง"
            v-model="type"
          >
            <el-option
              v-for="option in typeLists"
              class="select-danger"
              :value="option._id"
              :label="option.name"
              :key="option.label"
            ></el-option>
          </el-select>
          <base-input
            label="ลำดับ"
            type="number"
            placeholder="กรุณาใส่ลำดับ"
            v-model="sort"
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
  mounted() {
    this.getTypeLists();
  },
  data() {
    return {
      images: {
        regular: null
      },
      typeLists: [],
      name: "",
      type: "",
      sort: ""
    };
  },
  methods: {
    onImageChange(file) {
      this.images.regular = file;
    },
    getTypeLists() {
      axios.get(process.env.VUE_APP_MAIN_API + "/api/type").then(response => {
        this.typeLists = response.data.data;
      });
    },
    create() {
      axios
        .post(process.env.VUE_APP_MAIN_API + "/api/category", {
          name: this.name,
          type: this.type,
          sort: this.sort
        })
        .then(response => {
          console.log(response.data);
        });
    }
  }
};
</script>
