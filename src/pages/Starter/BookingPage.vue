<template>
  <div class="container-fluid">
    <card>
      <div class="row">
        <div class="col-md-12">
          <h3>เลือกช่วงเวลา</h3>
        </div>
        <div class="col-md-3">
          <base-input>
            <el-date-picker
              v-model="startDate"
              type="date"
              placeholder="วันที่เริ่ม"
            >
            </el-date-picker>
          </base-input>
        </div>
        <div class="col-md-3">
          <base-input>
            <el-date-picker
              v-model="endDate"
              type="date"
              placeholder="วันที่สิ้นสุด"
            >
            </el-date-picker>
          </base-input>
        </div>
        <div class="col-md-1">
          <base-button type="primary" block>ค้นหา</base-button>
        </div>
      </div>
    </card>
    <card>
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
            <el-table-column
              min-width="250"
              prop="name"
              label="ชื่อลูกค้า"
              sortable
            >
            </el-table-column>
            <el-table-column
              min-width="200"
              prop="category"
              label="ประเภท"
              sortable
            >
            </el-table-column>
            <el-table-column min-width="200" prop="time" label="เวลา" sortable>
            </el-table-column>
            <el-table-column
              min-width="200"
              header-align="right"
              label="จัดการ"
            >
              <template slot="header" slot-scope="scope">
                <el-input v-model="search" size="mini" placeholder="ค้นหา" />
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
import { DatePicker, Table, TableColumn } from "element-ui";
import { BaseButton } from "src/components";
export default {
  components: {
    [DatePicker.name]: DatePicker,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    BaseButton,
  },
  data() {
    return {
      startDate: "",
      endDate: "",
      search: "",
      tableData: [
        {
          id: 1,
          name: "ปิยะกานตร์ นิมมากุลวิรัตน์",
          category: "ป่วยทั่วไป",
          time: "17.00",
        },
        {
          id: 2,
          name: "ปิยะกานตร์ นิมมากุลวิรัตน์",
          category: "ป่วยทั่วไป",
          time: "17.00",
        },
        {
          id: 3,
          name: "ปิยะกานตร์ นิมมากุลวิรัตน์",
          category: "ป่วยทั่วไป",
          time: "17.00",
        },
        {
          id: 4,
          name: "ปิยะกานตร์ นิมมากุลวิรัตน์",
          category: "ป่วยทั่วไป",
          time: "17.00",
        },
        {
          id: 5,
          name: "ปิยะกานตร์ นิมมากุลวิรัตน์",
          category: "ป่วยทั่วไป",
          time: "17.00",
        },
      ],
    };
  },
};
</script>
