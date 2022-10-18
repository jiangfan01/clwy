<template>
  <div class="bottom-submit ui-box">
    <div class="price">
      <span>共{{ total.num }}件 金额：</span><br /><strong>{{
        total.price
      }}</strong
      ><span>元</span>
    </div>
    <div class="btn">
      <router-link :to="{ name: 'home' }" class="ui-button ui-button-disable"
        ><span>继续购物</span></router-link
      >
    </div>
    <div class="btn">
      <router-link :to="{ name: 'CheckoutView' }" class="ui-button">
        <span>去结算</span>
      </router-link>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: mapState({
    total: (state) => state.carts.total,
  }),
};
</script>
