<template>
  <div class="page-address-list" data-log="地址列表">
    <div class="address-manage">
      <div class="ui-card">
        <ul
          class="ui-card-item ui-list"
          v-for="item in addresses"
          :key="item.id"
        >
          <li class="ui-list-item identity">
            <a href="javascript:;" @click="deleteAddress(item.id)">删除</a>
            <span class="consignee">{{ item.name }}</span>
            <span>{{ item.tel }}</span>
          </li>
          <router-link :to="{ name: 'addressShow', params: { id: item.id } }">
            <li class="ui-list-item edit">
              <p>{{ item.province }} {{ item.city }} {{ item.area }}</p>
              <p>{{ item.detail }}</p>
            </li></router-link
          >
        </ul>
      </div>
    </div>

    <div class="add">
      <router-link
        :to="{ name: 'addressNew' }"
        class="ui-button ui-button-active"
      >
        <span>新建地址</span>
      </router-link>
    </div>
    <div class="popup-risk-check"></div>
  </div>
</template>
<script>
import { AddressesList, DeleteAddresses } from "@/api/location";
export default {
  // components: {
  //   AddressFrom,
  // },
  data() {
    return {
      addresses: [],
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      const res = await AddressesList();
      this.addresses = res.data.addresses;
    },
    async deleteAddress(id) {
      const res = await DeleteAddresses(id);
      if (res.code !== 20000) {
        alert(res.message);
      }
      alert("删除成功");
      this.init();
    },
  },
};
</script>
<style scoped lang="scss">
.ui-card-item {
  padding-bottom: 50px;
}
</style>
