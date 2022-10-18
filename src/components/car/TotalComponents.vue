<template>
  <div class="bottom-submit ui-box">
    <div class="price">
      <span>共{{ total.num }}件 金额：</span><br /><strong>{{
        total.price
      }}</strong
      ><span>元</span>
    </div>
    <div class="btn">
      <a class="ui-button ui-button-disable" href="/1/#/product/category"
        ><span>继续购物</span></a
      >
    </div>
    <div class="btn">
      <a class="ui-button" href="/1/#/order/checkout?address_type=common"
        ><span>去结算</span></a
      >
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
