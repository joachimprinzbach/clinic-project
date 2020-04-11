<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6">
        <Card>
          <base-input label="ชื่อ-นามสกุล" type="text" placeholder="กรุณากรอกชื่อ-นามสกุล"></base-input>
          <base-input label="เบอร์โทร" type="text" placeholder="กรุณากรอกเบอร์โทร"></base-input>
          <base-input label="อีเมลล์" type="email" placeholder="กรุณากรอกอีเมลล์"></base-input>
          <base-input label="พาสเวิร์ด" type="password" placeholder="กรุณากรอกพาสเวิร์ด"></base-input>
          <base-input label="ยืนยันพาสเวิร์ด" type="password" placeholder="กรุณายืนยันพาสเวิร์ด"></base-input>
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