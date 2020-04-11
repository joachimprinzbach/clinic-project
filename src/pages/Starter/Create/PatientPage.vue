<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6">
        <Card>
          <base-input label="ชื่อ-นามสกุล" type="text" placeholder="กรุณากรอกชื่อสัตว์เลี้ยง"></base-input>

          <base-input label="เบอร์" type="text" placeholder="กรุณากรอกชื่อสัตว์เลี้ยง"></base-input>

          <base-input label="อีเมลล์" type="email" placeholder="กรุณากรอกชื่อสัตว์เลี้ยง"></base-input>

          <base-input label="ไลน์" type="Line" placeholder="กรุณากรอกชื่อสัตว์เลี้ยง"></base-input>

          <label>สัตว์เลี้ยง</label>
          <br />
          <el-select
            class="select-danger w-100"
            placeholder="กรุณาเลือกสัตว์เลี้ยง"
            v-model="selects.simple"
            multiple
          >
            <el-option
              v-for="option in selects.Pet"
              class="select-danger"
              :value="option.value"
              :label="option.label"
              :key="option.label"
            ></el-option>
          </el-select>
          <div class="text-center mt-3">
            <label>รูปภาพลูกค้า</label>
            <br />
            <image-upload @change="onImageChange" select-text="Select Image" />
          </div>
          <base-button class="w-100 mt-4">สร้าง</base-button>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
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
      images: {
        regular: null
      },
      selects: {
        simple: "",
        Pet: [
          { value: "Brownie", label: "Brownie" },
          { value: "Snow", label: "Snow" },
          { value: "Coffee", label: "Coffee" }
        ]
      }
    };
  },
  methods: {
    onImageChange(file) {
      this.images.regular = file;
    }
  }
};
</script>