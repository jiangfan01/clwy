<template>
  <div class="b7">
    <div class="b70">
      <router-link :to="{ name: 'home' }">
        <div class="icon-home"></div>
      </router-link>
    </div>
    <div class="b72" @click="init">
      <!--<a href="javascript:;" class="off">暂时缺货</a>-->
      <a>立即购买</a>
    </div>

    <div class="b73">
      <router-link :to="{ name: 'CarView' }">
        <div class="icon-gouwuche"></div>
      </router-link>
    </div>
  </div>
</template>
<script>
import { CarAdd } from "@/api/car";
export default {
  data() {
    return {
      cart: {
        productId: this.$route.params.productId,
        num: 1,
      },
    };
  },
  methods: {
    async init() {
      const res = await CarAdd(this.cart);
      if (res.code !== 20000) {
        alert(res.message);
      }
      this.$router.push({ name: "CarView" });
    },
  },
};
</script>
<style scoped lang="scss">
.b7 {
  position: fixed;
  bottom: 0;
  z-index: 6;
}
</style>
