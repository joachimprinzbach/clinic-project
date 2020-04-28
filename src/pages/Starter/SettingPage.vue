<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6">
        <card>
          <h3>โลโก้</h3>
          <image-upload
            class="w-100"
            @change="onImageChange"
            select-text="Select Image"
          />
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
              <base-switch
                @click="ChangeDarkmode()"
                v-model="switches"
              ></base-switch>
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
    <div class="row">
      <div class="col-md-12">
        <card>
          <div class="row">
            <div class="col-md-12">
              <router-link to="/category/create"
                ><base-button type="success">สร้าง</base-button></router-link
              >
            </div>
            <div class="col-md-12">
              <el-table
                :data="
                  categoryLists.filter(
                    data =>
                      !search ||
                      data.name.toLowerCase().includes(search.toLowerCase())
                  )
                "
              >
                <el-table-column min-width="50" type="index"></el-table-column>
                <el-table-column
                  min-width="250"
                  prop="name"
                  label="ชื่อหมวดหมู่"
                  sortable
                >
                </el-table-column>
                <el-table-column
                  min-width="200"
                  prop="sort"
                  label="ลำดับ"
                  sortable
                >
                </el-table-column>
                <el-table-column
                  min-width="200"
                  header-align="right"
                  label="จัดการ"
                >
                  <template slot="header" slot-scope="scope">
                    <el-input
                      v-model="search"
                      size="mini"
                      placeholder="ค้นหา"
                    />
                  </template>
                  <div slot-scope="{ row }" class="text-right">
                    <el-tooltip
                      content="รายละเอียด"
                      :open-delay="300"
                      placement="top"
                    >
                      <base-button type="info" size="sm" icon>
                        <i class="tim-icons icon-single-02"></i>
                      </base-button>
                    </el-tooltip>

                    <el-tooltip
                      content="แก้ไข"
                      :open-delay="300"
                      placement="top"
                    >
                      <base-button type="success" size="sm" icon>
                        <i class="tim-icons icon-settings"></i>
                      </base-button>
                    </el-tooltip>

                    <el-tooltip content="ลบ" :open-delay="300" placement="top">
                      <base-button
                        @click="deleteCategory(row._id)"
                        type="danger"
                        size="sm"
                        icon
                      >
                        <i class="tim-icons icon-simple-remove"></i>
                      </base-button>
                    </el-tooltip>
                  </div>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </card>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <card>
          <div class="row">
            <div class="col-md-12">
              <router-link to="/type/create">
                <base-button type="success">สร้าง</base-button>
              </router-link>
            </div>
            <div class="col-md-12">
              <el-table
                :data="
                  typeLists.filter(
                    data =>
                      !search ||
                      data.name.toLowerCase().includes(search.toLowerCase())
                  )
                "
              >
                <el-table-column min-width="50" type="index"></el-table-column>
                <el-table-column
                  min-width="250"
                  prop="name"
                  label="ชื่อประเภทสัตว์เลี้ยง"
                  sortable
                ></el-table-column>
                <el-table-column
                  min-width="200"
                  prop="sort"
                  label="ลำดับ"
                  sortable
                ></el-table-column>
                <el-table-column
                  min-width="200"
                  header-align="right"
                  label="จัดการ"
                >
                  <template slot="header" slot-scope="scope">
                    <el-input
                      v-model="search"
                      size="mini"
                      placeholder="ค้นหา"
                    />
                  </template>
                  <div slot-scope="{ row }" class="text-right">
                    <el-tooltip
                      content="รายละเอียด"
                      :open-delay="300"
                      placement="top"
                    >
                      <base-button type="info" size="sm" icon>
                        <i class="tim-icons icon-single-02"></i>
                      </base-button>
                    </el-tooltip>

                    <el-tooltip
                      content="แก้ไข"
                      :open-delay="300"
                      placement="top"
                    >
                      <base-button type="success" size="sm" icon>
                        <i class="tim-icons icon-settings"></i>
                      </base-button>
                    </el-tooltip>

                    <el-tooltip content="ลบ" :open-delay="300" placement="top">
                      <base-button
                        @click="deleteType(row._id)"
                        type="danger"
                        size="sm"
                        icon
                      >
                        <i class="tim-icons icon-simple-remove"></i>
                      </base-button>
                    </el-tooltip>
                  </div>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </card>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <card>
          <div class="row">
            <div class="col-md-12">
              <router-link to="/user/create"
                ><base-button type="success">สร้าง</base-button></router-link
              >
            </div>
            <div class="col-md-12">
              <el-table
                :data="
                  userLists.filter(
                    data =>
                      !search ||
                      data.name.toLowerCase().includes(search.toLowerCase())
                  )
                "
              >
                <el-table-column min-width="50" type="index"></el-table-column>
                <el-table-column
                  min-width="250"
                  prop="fullname"
                  label="ชื่อ-นามสกุล"
                  sortable
                >
                </el-table-column>
                <el-table-column
                  min-width="200"
                  prop="email"
                  label="อีเมลล์"
                  sortable
                >
                </el-table-column>
                <el-table-column
                  min-width="200"
                  prop="tel"
                  label="เบอร์โทร"
                  sortable
                >
                </el-table-column>
                <el-table-column
                  min-width="200"
                  header-align="right"
                  label="จัดการ"
                >
                  <template slot="header" slot-scope="scope">
                    <el-input
                      v-model="search"
                      size="mini"
                      placeholder="ค้นหา"
                    />
                  </template>
                  <div slot-scope="{ row }" class="text-right">
                    <el-tooltip
                      content="รายละเอียด"
                      :open-delay="300"
                      placement="top"
                    >
                      <base-button type="info" size="sm" icon>
                        <i class="tim-icons icon-single-02"></i>
                      </base-button>
                    </el-tooltip>

                    <el-tooltip
                      content="แก้ไข"
                      :open-delay="300"
                      placement="top"
                    >
                      <base-button type="success" size="sm" icon>
                        <i class="tim-icons icon-settings"></i>
                      </base-button>
                    </el-tooltip>

                    <el-tooltip content="ลบ" :open-delay="300" placement="top">
                      <base-button
                        @click="deleteUser(row._id)"
                        type="danger"
                        size="sm"
                        icon
                      >
                        <i class="tim-icons icon-simple-remove"></i>
                      </base-button>
                    </el-tooltip>
                  </div>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Select, Option, Table, TableColumn } from "element-ui";
import { Card, BaseSwitch, ImageUpload, BaseButton } from "src/components";
export default {
  components: {
    Card,
    BaseSwitch,
    ImageUpload,
    [Select.name]: Select,
    [Option.name]: Option,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    BaseButton
  },
  mounted() {
    this.getTypeLists();
    this.getCategoryLists();
    this.getUserLists();
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
      },
      search: "",
      typeLists: [],
      categoryLists: [],
      userLists: [],
      tableData: [
        {
          id: 1,
          name: "ป่วยธรรมดา",
          sort: 1
        },
        {
          id: 2,
          name: "ป่วยพิเศษ",
          sort: 2
        },
        {
          id: 3,
          name: "เป็นไข้",
          sort: 3
        },
        {
          id: 4,
          name: "ขาหัก",
          sort: 4
        },
        {
          id: 5,
          name: "ปอดบวม",
          sort: 5
        }
      ]
    };
  },
  methods: {
    ChangeDarkmode() {
      this.switches = !this.switches;
    },
    getTypeLists() {
      axios.get(process.env.VUE_APP_MAIN_API + "/api/type").then(response => {
        this.typeLists = response.data.data;
      });
    },
    getCategoryLists() {
      axios
        .get(process.env.VUE_APP_MAIN_API + "/api/category")
        .then(response => {
          console.log(response.data);
          this.categoryLists = response.data.data;
        });
    },
    getUserLists() {
      axios.get(process.env.VUE_APP_MAIN_API + "/api/user").then(response => {
        console.log(response.data);
        this.userLists = response.data.data;
      });
    },
    deleteCategory(id) {
      axios
        .delete(process.env.VUE_APP_MAIN_API + "/api/category/" + id)
        .then(response => {
          this.getCategoryLists();
        });
    },
    deleteType(id) {
      axios
        .delete(process.env.VUE_APP_MAIN_API + "/api/type/" + id)
        .then(response => {
          this.getTypeLists();
        });
    },
    deleteUser(id) {
      axios
        .delete(process.env.VUE_APP_MAIN_API + "/api/user/" + id)
        .then(response => {
          this.getUserLists();
        });
    }
  }
};
</script>
