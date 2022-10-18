<template>
  <div id="wrapper">
    <div class="page-address-list" data-log="地址列表">
      <div class="address-choose">
        <ul class="ui-list">
          <li
            class="ui-list-item"
            v-for="item in addresses"
            :key="item.id"
            @click="set_default(item.id)"
          >
            <p class="ui_fz30">
              <span class="consignee">{{ item.name }}</span
              ><span>{{ item.tel }}</span>
            </p>
            <p>{{ item.province }} {{ item.city }} {{ item.area }}</p>
            <p>{{ item.detail }}</p>
          </li>
        </ul>
      </div>
      <div class="add">
        <a href="new_address.html" class="ui-button ui-button-active"
          ><span>新建地址</span></a
        >
      </div>
      <div class="popup-risk-check"></div>
    </div>
  </div>
</template>
<script>
import { AddressesList, EditAddress } from "@/api/location";
export default {
  data() {
    return { addresses: [] };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      const res = await AddressesList();
      this.addresses = res.data.addresses;
    },
    async set_default(id) {
      const res = await EditAddress(id);
      if (res.code !== 20000) {
        alert(res.message);
      }
      alert("修改成功");
      this.$router.push({ name: "CheckoutView" });
    },
  },
};
</script>
