<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6">
        <card>
          <h3>โลโก้</h3>
          <image-upload class="w-100" @change="onImageChange" select-text="Select Image" />
        </card>
      </div>
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-12">
            <card>
              <h3>ชื่อระบบ</h3>
              <base-input type="text" placeholder="กรุณากรอกชื่อระบบ" />
            </card>
          </div>
          <div class="col-md-6">
            <card>
              <h3>Dark Mode</h3>
              <base-switch @click="ChangeDarkmode()" v-model="switches"></base-switch>
            </card>
          </div>
          <div class="col-md-6">
            <card>
              <h3>สีระบบ</h3>
              <el-select
                class="select-danger w-100"
                placeholder="เลือกธีมหลัก"
                v-model="selects.simple"
              >
                <el-option
                  v-for="option in selects.languages"
                  class="select-danger"
                  :value="option.value"
                  :label="option.label"
                  :key="option.label"
                ></el-option>
              </el-select>
            </card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Select, Option } from "element-ui";
import { Card, BaseSwitch, ImageUpload } from "src/components";
export default {
  components: {
    Card,
    BaseSwitch,
    ImageUpload,
    [Select.name]: Select,
    [Option.name]: Option
  },
  data() {
    return {
      switches: true,
      selects: {
        simple: "",
        languages: [
          { value: "green", label: "เขียว" },
          { value: "blue", label: "นำ้เงิน" },
          { value: "red", label: "แดง" }
        ]
      }
    };
  },
  methods: {
    ChangeDarkmode() {
      this.switches = !this.switches;
    }
  }
};
</script>
