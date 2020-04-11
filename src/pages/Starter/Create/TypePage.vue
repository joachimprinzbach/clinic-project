<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6">
        <Card>
          <base-input label="ชื่อสัตว์เลี้ยง" type="text" placeholder="กรุณากรอกชื่อสัตว์เลี้ยง"></base-input>
          <base-input label="ลำดับ" type="number" placeholder="กรุณาใส่ลำดับ"></base-input>
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