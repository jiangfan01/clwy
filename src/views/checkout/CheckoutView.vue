<template>
  <div class="wrap">
    <div class="page-order-checkout">
      <div class="page-order-checkout-wrap">
        <Location :location="address" v-if="addresses.length === 0" />
        <Not v-else />
        <div class="ui_line"></div>
        <Pay />
        <div class="ui_line"></div>
        <List :carts="carts" />
        <div class="ui_line"></div>
        <Price :price="total" />
        <Checkout :checkout="total" @handelClick="handleClick" />
      </div>
    </div>
  </div>
</template>
<script>
import Checkout from "@/components/checkout/CheckoutComponents";
import LocationComponents from "@/components/checkout/LocationComponents";
import PayComponents from "@/components/checkout/PayComponents";
import ListComponents from "@/components/checkout/ListComponents";
import PriceComponents from "@/components/checkout/PriceComponents";
import NotComponents from "@/components/checkout/NotComponents";
import { CarList } from "@/api/car";
import { AddressesList } from "@/api/location";
import { checkout } from "@/api/checkout";
import { orders } from "@/api/order";

export default {
  components: {
    Checkout: Checkout,
    Location: LocationComponents,
    Pay: PayComponents,
    List: ListComponents,
    Price: PriceComponents,
    Not: NotComponents,
  },
  data() {
    return {
      addresses: [],
      address: {},
      carts: [],
      total: {},
    };
  },
  created() {
    this.init();
    this.location();
  },
  methods: {
    async init() {
      const res = await CarList();
      if (res.data.carts.length === 0) {
        alert("您还没有添加商品到购物车！");
        this.$router.push({ name: "CarView" });
      }
      this.carts = res.data.carts;
      this.total = res.data.total;
    },
    async location() {
      const res = await checkout();
      this.address = res.data.address;
    },
    async locationList() {
      const res = await AddressesList();
      this.addresses = res.data.addresses;
    },
    async handleClick() {
      if (!this.carts) {
        alert("请先将商品添加到购物车");
        return;
      }
      if (!this.address) {
        alert("请先添加收货地址");
        return;
      }
      const res = await orders({ addressId: this.address.id });
      const order = res.data.order;
      this.$router.push({
        name: "payList",
        params: { payId: order.id },
      });
    },
  },
};
</script>
