<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6">
        <Card>
          <base-input
            label="ชื่อ-นามสกุล"
            type="text"
            placeholder="กรุณากรอกชื่อสัตว์เลี้ยง"
          ></base-input>

          <base-input
            label="เบอร์"
            type="text"
            placeholder="กรุณากรอกชื่อสัตว์เลี้ยง"
          ></base-input>

          <base-input
            label="อีเมลล์"
            type="email"
            placeholder="กรุณากรอกชื่อสัตว์เลี้ยง"
          ></base-input>

          <base-input
            label="ไลน์"
            type="Line"
            placeholder="กรุณากรอกชื่อสัตว์เลี้ยง"
          ></base-input>
          <div class="text-center mt-3">
            <label>รูปภาพลูกค้า</label>
            <br />
            <image-upload @change="onImageChange" select-text="Select Image" />
          </div>
          <base-button @click="addPet()" class="w-100 mt-4"
            >เพิ่มสัตว์เลี้ยง</base-button
          >
        </Card>
      </div>
      <div class="col-md-6" v-for="show in petForm">
        <Card class="mt-3">
          <div class="form-group">
            <base-input
              label="ชื่อสัตว์เลี้ยง"
              type="text"
              placeholder="ชื่อสัตว์เลี้ยง"
            ></base-input>
          </div>
          <div class="form-group">
            <label>วันเกิด</label>
            <base-input>
              <el-date-picker
                v-model="datePicker"
                type="date"
                placeholder="วันเกิด"
              >
              </el-date-picker>
            </base-input>
          </div>

          <div class="form-group">
            <label>ชนิด</label>
            <el-select
              class="select-danger"
              placeholder="ชนิด"
              v-model="selects.simple"
            >
              <el-option
                v-for="option in selects.Pet"
                class="select-danger"
                :value="option.value"
                :label="option.label"
                :key="option.label"
              >
              </el-option>
            </el-select>
          </div>
          <div class="form-group">
            <base-input
              label="พันธุ์"
              type="text"
              placeholder="พันธุ์"
            ></base-input>
          </div>

          <div class="form-group">
            <label>เพศ</label>
            <br />
            <base-radio inline name="radio0" class="mb-3" v-model="radio.sex1">
              ตัวผู้
            </base-radio>

            <base-radio inline name="radio1" class="mb-3" v-model="radio.sex1">
              ตัวเมีย
            </base-radio>
          </div>

          <div class="form-group">
            <label>ทำหมัน</label>
            <base-radio
              inline
              name="radio0"
              class="mb-3"
              v-model="radio.radio1"
            >
              ใช่
            </base-radio>

            <base-radio
              inline
              name="radio1"
              class="mb-3"
              v-model="radio.radio1"
            >
              ไม่ใช่
            </base-radio>
          </div>
        </Card>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <base-button class="w-100 mt-4">สร้าง</base-button>
      </div>
    </div>
  </div>
</template>

<script>
import { DatePicker, Select, Option } from "element-ui";
import { Card, BaseButton, BaseRadio, ImageUpload } from "src/components";
export default {
  components: {
    Card,
    BaseRadio,
    ImageUpload,
    [Select.name]: Select,
    [Option.name]: Option,
    [DatePicker.name]: DatePicker
  },
  data() {
    return {
      petForm: 0,
      datePicker: "",
      radio: {
        radio1: "radio1",
        radio2: "radio3",
        sex1: "male",
        sex2: "female"
      },
      images: {
        regular: null
      },
      selects: {
        simple: "",
        Pet: [
          { value: "Brownie", label: "สุนัข" },
          { value: "Snow", label: "แมว" },
          { value: "Coffee", label: "นก" }
        ]
      }
    };
  },
  methods: {
    onImageChange(file) {
      this.images.regular = file;
    },
    addPet() {
      this.petForm++;
    }
  }
};
</script>
