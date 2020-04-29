import Vue from "vue";
import Router from "vue-router";
import LoginPage from "./../pages/Starter/LoginPage.vue";
import DashboardLayout from "./../pages/Starter/SampleLayout.vue";
import Starter from "./../pages/Starter/SamplePage.vue";
import Diagnose from "./../pages/Starter/DiagnosePage.vue";
import Pet from "./../pages/Starter/PetPage.vue";
import PetCreate from "./../pages/Starter/Create/PetPage.vue";
import Cure from "./../pages/Starter/CurePage.vue";
import PatientCreate from "./../pages/Starter/Create/PatientPage.vue";
import Patient from "./../pages/Starter/PatientPage.vue";
import Booking from "./../pages/Starter/BookingPage.vue";
import Type from "./../pages/Starter/TypePage.vue";
import TypeCreate from "./../pages/Starter/Create/TypePage.vue";
import TypeEdit from "./../pages/Starter/Edit/TypePage.vue";
import Category from "./../pages/Starter/CategoryPage.vue";
import CategoryCreate from "./../pages/Starter/Create/CategoryPage.vue";
import CategoryEdit from "./../pages/Starter/Edit/CategoryPage.vue";
import User from "./../pages/Starter/UserPage.vue";
import UserCreate from "./../pages/Starter/Create/UserPage.vue";
import UserEdit from "./../pages/Starter/Edit/UserPage.vue";
import Setting from "./../pages/Starter/SettingPage.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginPage
    },
    {
      path: "/",
      name: "home",
      redirect: "/dashboard",
      component: DashboardLayout,
      children: [
        {
          path: "dashboard",
          name: "แดชบอร์ด",
          components: { default: Starter }
        },
        {
          path: "diagnose",
          name: "เริ่มการรักษา",
          components: { default: Diagnose }
        },
        {
          path: "cure",
          name: "การรักษาทั้งหมด",
          components: { default: Cure }
        },
        {
          path: "pet",
          name: "สัตว์เลี้ยง",
          components: { default: Pet }
        },
        {
          path: "pet/create",
          name: "สร้างสัตว์เลี้ยง",
          components: { default: PetCreate }
        },
        {
          path: "patient",
          name: "เจ้าของ",
          components: { default: Patient }
        },
        {
          path: "patient/create",
          name: "เจ้าของ",
          components: { default: PatientCreate }
        },
        {
          path: "booking",
          name: "การนัดหมาย",
          components: { default: Booking }
        },
        {
          path: "type",
          name: "ประเภท",
          components: { default: Type }
        },
        {
          path: "type/create",
          name: "สร้างประเภท",
          components: { default: TypeCreate }
        },
        {
          path: "type/:id/edit",
          name: "แก้ไขประเภท",
          components: { default: TypeEdit }
        },
        {
          path: "category",
          name: "หมวดหมู่",
          components: { default: Category }
        },
        {
          path: "category/create",
          name: "สร้างหมวดหมู่",
          components: { default: CategoryCreate }
        },
        {
          path: "category/:id/edit",
          name: "แก้ไขหมวดหมู่",
          components: { default: CategoryEdit }
        },
        {
          path: "user",
          name: "ผู้ใช้งาน",
          components: { default: User }
        },
        {
          path: "user/create",
          name: "สร้างผู้ใช้งาน",
          components: { default: UserCreate }
        },
        {
          path: "user/:id/edit",
          name: "แก้ไขผู้ใช้งาน",
          components: { default: UserEdit }
        },
        {
          path: "setting",
          name: "ตั้งค่าระบบ",
          components: { default: Setting }
        }
      ]
    }
  ],
  linkActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});
