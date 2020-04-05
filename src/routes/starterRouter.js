import Vue from "vue";
import Router from "vue-router";
import DashboardLayout from "./../pages/Starter/SampleLayout.vue";
import Starter from "./../pages/Starter/SamplePage.vue";
import Diagnose from "./../pages/Starter/DiagnosePage.vue";
import Cure from "./../pages/Starter/CurePage.vue";
import Patient from "./../pages/Starter/PatientPage.vue";
import Booking from "./../pages/Starter/BookingPage.vue";
import Category from "./../pages/Starter/CategoryPage.vue";
import User from "./../pages/Starter/UserPage.vue";
import Setting from "./../pages/Starter/SettingPage.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/dashboard",
      component: DashboardLayout,
      children: [
        {
          path: "dashboard",
          name: "แดชบอร์ด",
          components: { default: Starter },
        },
        {
          path: "diagnose",
          name: "เริ่มการรักษา",
          components: { default: Diagnose },
        },
        {
          path: "cure",
          name: "การรักษาทั้งหมด",
          components: { default: Cure },
        },
        {
          path: "patient",
          name: "คนไข้",
          components: { default: Patient },
        },
        {
          path: "booking",
          name: "การนัดหมาย",
          components: { default: Booking },
        },
        {
          path: "category",
          name: "หมวดหมู่",
          components: { default: Category },
        },
        {
          path: "user",
          name: "ผู้ใช้งาน",
          components: { default: User },
        },
        {
          path: "setting",
          name: "ตั้งค่าระบบ",
          components: { default: Setting },
        },
      ],
    },
  ],
  linkActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
