<template>
  <div class="container-fluid">
    <card>
      <div class="row">
        <div class="col-md-12">
          <router-link to="/pet/create">
            <base-button type="success">สร้าง</base-button>
          </router-link>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <el-table
            :data="
              tableData.filter(
                (data) =>
                  !search ||
                  data.name.toLowerCase().includes(search.toLowerCase())
              )
            "
          >
            <el-table-column min-width="50" type="index"></el-table-column>
            <el-table-column min-width="250" prop="name" label="ชื่อสัตว์เลี้ยง" sortable></el-table-column>
            <el-table-column min-width="200" prop="type" label="ชนิด" sortable></el-table-column>
            <el-table-column min-width="200" prop="owner" label="เจ้าของ" sortable></el-table-column>
            <el-table-column min-width="200" header-align="right" label="จัดการ">
              <template slot="header" slot-scope="scope">
                <el-input v-model="search" size="mini" placeholder="ค้นหา" />
              </template>
              <div slot-scope="{ row }" class="text-right">
                <el-tooltip content="รายละเอียด" :open-delay="300" placement="top">
                  <base-button type="info" size="sm" icon>
                    <i class="tim-icons icon-single-02"></i>
                  </base-button>
                </el-tooltip>

                <el-tooltip content="แก้ไข" :open-delay="300" placement="top">
                  <base-button type="success" size="sm" icon>
                    <i class="tim-icons icon-settings"></i>
                  </base-button>
                </el-tooltip>

                <el-tooltip content="ลบ" :open-delay="300" placement="top">
                  <base-button type="danger" size="sm" icon>
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
</template>

<script>
import { Table, TableColumn } from "element-ui";
import { BaseButton } from "src/components";
export default {
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    BaseButton
  },
  data() {
    return {
      search: "",
      tableData: [
        {
          id: 1,
          name: "Brownie",
          type: "แมว",
          owner: "ปิยะกานตร์ นิมมากุลวิรัตน์",
        },
        {
          id: 2,
          name: "Brownie",
          type: "แมว",
          owner: "ปิยะกานตร์ นิมมากุลวิรัตน์",
        },
        {
          id: 3,
          name: "Brownie",
          type: "แมว",
          owner: "ปิยะกานตร์ นิมมากุลวิรัตน์",
        },
        {
          id: 4,
          name: "Brownie",
          type: "แมว",
          owner: "ปิยะกานตร์ นิมมากุลวิรัตน์",
        },
      ]
    };
  }
};
</script>
