<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6">
        <Card>
          <base-input label="ชื่อสัตว์เลี้ยง" type="email" placeholder="กรุณากรอกชื่อสัตว์เลี้ยง"></base-input>
          <label>ประเภทสัตว์เลี้ยง</label>
          <br />
          <el-select
            class="select-danger w-100"
            placeholder="กรุณาเลือกชนิดสัตว์เลี้ยง"
            v-model="selects.simple"
          >
            <el-option
              v-for="option in selects.type"
              class="select-danger"
              :value="option.value"
              :label="option.label"
              :key="option.label"
            ></el-option>
          </el-select>
          <base-input label="ลำดับ" type="email" placeholder="กรุณาใส่ลำดับ"></base-input>
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
        type: [
          { value: "Bahasa Indonesia", label: "แมว" },
          { value: "Bahasa Melayu", label: "สุนัข" },
          { value: "Català", label: "นก" }
        ],
        owner: [
          { value: "Jimmy", label: "จิมมี่" },
          { value: "Jame", label: "เจม" },
          { value: "Pete", label: "พีท" }
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