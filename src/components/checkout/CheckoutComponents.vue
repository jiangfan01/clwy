<template>
  <div class="wrap">
    <div class="page-order-checkout">
      <div class="page-order-checkout-wrap">
        <div class="b7">
          <div class="b71">
            <span>共{{ checkout.num }}件 合计: </span
            ><strong>{{ checkout.price }}元</strong>
          </div>
          <div class="b72">
            <a
              href="javascript:"
              class="ui-button"
              @click="$emit('handelClick')"
            >
              <span>去付款</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["checkout"],
};
</script>
