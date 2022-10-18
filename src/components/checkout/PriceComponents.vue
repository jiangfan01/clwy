<template>
  <div class="b5">
    <div class="b51">
      <p>
        <strong>商品价格：</strong><span>{{ price.price }}元</span>
      </p>
    </div>
    <div class="b53">
      <p><strong>配送费用：</strong><span>0元</span></p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["price"],
};
</script>
